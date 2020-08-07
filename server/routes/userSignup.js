var express = require('express');
var UserInfo = require('../models/userInfo');
var mongoose = require('mongoose');
 
const router = express.Router();

router.post('/', (req, res)=>{
    if (req.body.my_email === "") {
        return res.status(400).json({
          error: "EMPTY USERNAME",
          code: 2
        });
      }
     
      if (req.body.my_pwd === "") {
        return res.status(400).json({
          error: "EMPTY CONTENTS",
          code: 2
        });
      }

      if (req.body.my_name === "") {
        return res.status(400).json({
          error: "EMPTY USERNAME",
          code: 2
        });
      }

      if (req.body.my_phone_num === "") {
        return res.status(400).json({
          error: "EMPTY USERNAME",
          code: 2
        });
      }
      let userInfo = new UserInfo({
        my_email: req.body.my_email,
        my_pwd: req.body.my_pwd,
        my_name: req.body.my_name,
        my_phone_num: req.body.my_phone_num
      });

      console.log(req.body);
     
      userInfo.save(err => {
        if (err) throw err;
        return res.json({ success: true });
      });
});

module.exports = router;
