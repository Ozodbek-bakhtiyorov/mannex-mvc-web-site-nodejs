'use strict';
const authroutes = require('./auth');
const ordersroutes = require('./orders');
const myprodroutes = require('./myprods');
const profileroutes = require('./profile');
const cartroutes = require('./cart');
const contactroutes = require('./contact');

module.exports = {
  authroutes, 
  ordersroutes,
  myprodroutes,
  profileroutes, 
  cartroutes,
  contactroutes
};