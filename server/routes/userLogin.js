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


    console.log("asdasd",">>>>>>>>>>>"+req.body.my_email + req.body.my_pwd); 
    let email_return = req.body.my_email;
    

    UserInfo.findOne({"my_email": req.body.my_email, "my_pwd": req.body.my_pwd}, function(err, userInfo){
        if(err)
             return res.status(500).json({error: 'Internal Error'});
        if(userInfo == null){ // 존재하지 않는 이메일/PW임
            return res.status(404).json({error:'Wrong Email and Password'});
        }

        return res.status(200).json(email_return);
     });
});

module.exports = router;
