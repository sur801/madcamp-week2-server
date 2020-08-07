var express = require('express');
var addressBook = require('./addressBook');
var imageUpload = require('./imageUpload');
var imageLoad = require('./imageLoad');
var imageList = require('./imageList');
var imageDelete = require('./imageDelete');
var userLogin = require('./userLogin');
var userSignup = require('./userSignup');
var imageUpdate = require('./imageUpdate');


const router = express.Router();
router.use('/addressbook', addressBook);
router.use('/upload', imageUpload);
router.use('/load', imageLoad);
router.use('/imagelist', imageList);
router.use('/imagedelete', imageDelete);
router.use('/login', userLogin);
router.use('/signup', userSignup);
router.use('/update', imageUpdate);

/*GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
