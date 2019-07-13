const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User')

//@route GET api/users
//@desc Register new user
router.post('/', (req,res) => {
  res.send('register')
});


module.exports = router;