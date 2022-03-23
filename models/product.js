"use strict";
const {Schema,model} = require('mongoose');
const {ObjectId} = Schema.Types;

const productSchema = Schema({
  title:{
    type:String,
    required:true
  }, 
  price:{
    type:Number,
    required:true
  },
  category:{
    type:String, 
    required:true
  },
  details:{
    type:String, 
    required:true
  },
  img:{
    type:String, 
    required:true
  },
  // userId:{
  //   type:ObjectId,
  //   ref:'User',
  //   required:true
  // },
  instock:{
    status:{
      type:Boolean,
      required:true,
      default:true
    },
    count:{
      type:Number, 
      required:true,
      default:1
    }
  }
});

module.exports = model('Product', productSchema);
