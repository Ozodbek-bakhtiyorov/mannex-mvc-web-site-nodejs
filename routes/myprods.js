"use strict";
const router = require("express").Router();
const { Product } = require("../models");
router.get("/", (req, res) => {
  res.render("myprods", { title: "My Products", isMyPods: true });
});
router.get("/create", (req, res) => {
  res.render("addprod", { title: "Create new product" });
});

router.post("/create", async (req, res) => {
  const { title, price, count, details, category, img } = req.body;
  if(!title || !price || !count || !details || !category || !img){
    res.redirect('/myprods/create');
  }
  try {
    const product = new Product({
      title,
      price,
      details,
      category,
      img,
      instock: { count },
    });
    await product.save();
    res.redirect('/');

  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
