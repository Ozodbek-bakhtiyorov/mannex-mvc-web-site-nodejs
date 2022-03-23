"use strict";
const { Schema, model } = require("mongoose");
const userSchema = Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  secondname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  muproducts: [
    {
      prodId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  cart: {
    products: [
      {
        count: {
          type: Number,
          required: true,
          default: 1,
        },
        prodId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
  },
});

userSchema.methods.addToCart = function (prod) {
  let items = [...this.cart.products];
  const index = items.findIndex((el) => {
    return el.prodId.toString() === prod._id.toString();
  });
  if (index >= 0) {
    items[index].count = items[index].count + 1;
  } else {
    items.push({
      prodId: prod._id,
      count: 1,
    });
  }
  this.cart = { products: items };
  return this.save();
};
userSchema.methods.removeFromCart = function (id) {
  console.log(id);
  let items = [...this.cart.products];
  const index = items.findIndex((el) => el._id.toString() === id.toString());
  items[index].count = items[index].count--;
  this.cart = { items };
  return this.save().catch((err) => console.log(err));
};


module.exports = model("User", userSchema);
