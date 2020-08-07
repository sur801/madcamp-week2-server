var express = require("express");
var app = express();
var Images = require('../models/imageUpload');
var mongoose = require('mongoose');

const util = require("util")


const router = express.Router()
var multer, storage, path, crypto;
multer = require('multer')
path = require('path');
crypto = require('crypto');

var form = "<!DOCTYPE HTML><html><body>" +
"<form method='post' action='/upload' enctype='multipart/form-data'>" +
"<input type='file' name='upload'/>" +
"<input type='submit' /></form>" +
"</body></html>";

router.get('/', function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.end(form);
  console.log("이건가??");
});

// Include the node file module
var fs = require('fs');
storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      return crypto.pseudoRandomBytes(16, function(err, raw) {
        if (err) {
          return cb(err);
        }
        return cb(null, "" + (raw.toString('hex')) + (path.extname(file.originalname)));
      });
    }
  });
// Post files
router.post(
  "/",
  multer({
    storage: storage
  }).single('upload'), function(req, res) {

  //local file path
    console.log(req.body);
    console.log(req.body.path);
	  console.log(req.file.filename)
    res.redirect("/uploads/" + req.file.filename);
    console.log(req.file.filename);
	let image = new Images({
    my_email: req.body.email,
    name: req.file.filename,
    review : req.body.review,
    title : req.body.title,
    rate : req.body.rate
	});

	image.save();
	return res.status(200).end();

  });

module.exports = router;
