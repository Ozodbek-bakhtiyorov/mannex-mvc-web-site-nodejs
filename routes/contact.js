"use strict";
const router = require('express').Router();

router.get('/', (req, res)=>{
  res.render('contact', {title:'Contact', isContacts:true});
});
module.exports = router;