var express = require("express");
var mongoose = require('mongoose');
var path = require('path');

const router = express.Router()

router.get('/:name', (req, res)=> {
	let name = req.params.name;
	let pathname = (__dirname + "/../uploads/"+name);
	return 	res.sendFile(path.resolve(pathname));
});

module.exports = router;
