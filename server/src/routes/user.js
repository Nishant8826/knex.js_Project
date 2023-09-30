const express = require("express");
const router = express.Router();

const user = require('../controller/user.js')

router.post('/api/userSignup',user.userSignup)

module.exports = router;






  

  
  