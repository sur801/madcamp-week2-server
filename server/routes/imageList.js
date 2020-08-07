var express = require("express");
var mongoose = require('mongoose');
// import image model
var Images = require('../models/imageUpload');

const router = express.Router();
const db = mongoose.connection;

router.get('/', (req, res)=> {
	console.log("get request");
	return res.send("hihihi");
});

router.get('/:email', (req, res)=> {
    console.log("get request");
    let item = req.params.email;
    console.log(item.toString);
	Images.find({my_email:item}, function(err, images){
		if(err) return res.status(500).send({ error : 'db fail' });
		return res.json(images);
	})
	
});

module.exports = router;
