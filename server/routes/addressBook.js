var express = require('express');
var AddressBook = require('../models/addressBook');
var mongoose = require('mongoose');
 
const router = express.Router();

router.post('/phone_all', (req, res)=>{
  AddressBook.find({"my_email": req.body.my_email}, function(err, boards){
     if(err)
          return res.status(500).send({error: 'database failure'});
     res.json(boards);
  })
});

router.get('/phone_one', (req, res)=>{
  AddressBook.find({"friend_name": req.query.name, "my_email": req.query.my_email},function(err, boards){
     if(err)
          return res.status(500).send({error: 'database failure'});
     res.json(boards);
  })
});

router.get('/delete/phone_one', (req, res)=>{
  AddressBook.remove({"my_email": req.query.my_email, "friend_name": req.query.name, "friend_phone": req.query.phone_num},function(err, boards){
    if(err)
        return res.status(500).send({error: 'database failure'});
    res.json(boards);
  })
});


router.get('/all', (req, res)=>{
  AddressBook.find(function(err, boards){
    if(err) 
	    return res.status(500).send({error: 'database failure'});
    res.json(boards);
  })
});

router.post('/', (req, res) => {
  console.log("하나 추가하는거다.... 잘 되냐?");

  if (req.body.my_email === "") {
    return res.status(400).json({
      error: "EMPTY MY EMAIL",
      code: 2
    });
  }

  if (req.body.friend_email === "") {
    return res.status(400).json({
      error: "EMPTY MY EMAIL",
      code: 2
    });
  }

  if (req.body.name === "") {
    return res.status(400).json({
      error: "EMPTY USERNAME",
      code: 2
    });
  }
 
  if (req.body.phone_num === "") {
    return res.status(400).json({
      error: "EMPTY CONTENTS",
      code: 2
    });
  }
 
  let address = new AddressBook({
    my_email: req.body.my_email,
    friend_name: req.body.name,
    friend_email: req.body.friend_email,
    friend_phone: req.body.phone_num
  });
 
  console.log("my_email : 뭘까 : " + req.body.my_email);
  address.save(err => {
    if (err) throw err;
    return res.json({ success: true });
  });
});
 
module.exports = router;
