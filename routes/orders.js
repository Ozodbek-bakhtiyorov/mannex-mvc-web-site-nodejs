"use strinct";
const router = require('express').Router();

router.get('/', (req,res)=>{
  res.render('orders', {title:'Orders', isOrders:true});
});
module.exports = router;