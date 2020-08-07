var mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const Images = new Schema({
  my_email : String,
  name : String,
  title : {type : String,default:"no title"},
  rate : {type:String, default : "no rated"},
  review : {type:String, default:"not review"},
  likes : {type:Number, default: 0},
  date: {
    created : {type:Date, default:Date.now},
    edited : {type:Date, default:Date.now}
  },
  is_edited : {type:Boolean, default:false}
})
 
module.exports = mongoose.model('image',Images);
