"use strict";
const { Product, User } = require("../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const prods = await Product.find();
  res.render("home", { title: "Techshop.uz", isHome: true, prods });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login", isLogin: true });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.redirect("/login");
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.redirect("/register");
    } else {
      req.session.userId = user._id;
      req.session.isAuthenticated = true;
      req.session.save((err) => {
        if (err) throw err;
        res.redirect("/");  
      });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/register", (req, res) => {
  res.render("register", { title: "Register", isRegister: true });
});

router.post("/register", async (req, res) => {
  const { firstname, lastname, secondname, email, password } = req.body;
  if (!firstname || !lastname || !secondname || !email || !password) {
    return res.redirect("/register");
  }
  try {
    const user = new User({
      firstname,
      lastname,
      secondname,
      password,
      email,
    });
    await user.save();
    res.redirect("/login");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
