"use strict";
const {Schema, model} = require('mongoose');

const {ObjectId} = Schema.Types;

const orderSchema = Schema({
  products:[
    {
      prodId:{
        type:Object,
        ref:"Product", 
        required:true
      },
      count:{
        type:Number,
        default:1,
        required:true
      }
    }
  ],
  subtotal:{
    type:Number, 
    required:true
  },
  orderedAt:{
    type:Date,
    required:true,
    default:Date.now()
  },
  delivered:{
    fast:{
      type:Boolean,
      default:false
    },
    isDelivered:{
      type:Boolean,
      default:false
    },
    deliveredAt:{
      type:Date,
      default:Date.now()
    }
  },
  customer:{
    userId:{
      type:ObjectId,
      required:true,
      ref:'User'
    }
  }
});


module.exports = model('Order',orderSchema);
