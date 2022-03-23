"use strict";
const router = require("express").Router();
const { Product, User } = require("../models");
function mapCart (cart){
  return cart.items.map(item=>({
    ...item.prodId._doc,
    count:item.count
  }))
}

router.get("/", async(req, res) => {
  try {
    const user = await User.findById(req.session.userId).populate('cart.products.prodId');
    console.log(user.cart.products[0].prodId);
    const prods = user.cart.products;
    res.render("cart", { title: "Cart", isCart: true, prods});
  } catch (e) {
    console.log(e);
  }
});

router.post("/add", async (req, res) => {
  const prod = await Product.findById(req.body._id);
  const user = await User.findOne({ _id: req.session.userId });
  user.addToCart(prod);
  res.redirect("/cart");
});

router.delete('/delete', async(req, res)=>{
  console.log(req.params.id);
  await User.removeFromCart(req.params.id);
  const user = await User.findById(req.session.userId).populate("cart.products.prodId");
  const prods = mapCart(user.cart);
  console.log(user.cart)
  const cart = {prods};
  res.status(200).json(cart);
})

module.exports = router;
