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

router.get('/:name', (req, res)=> {
    console.log("get request");
    let item = req.params.name;
    console.log(item.toString);
	Images.updateMany({name:item},{$inc:{likes:1}}, function(err, images){
		if(err) return res.status(500).send({ error : 'db fail' });
		return res.sendStatus(200);
	})
	
});

module.exports = router;
