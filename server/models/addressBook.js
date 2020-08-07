var mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const Address_book = new Schema({
  my_email : String,
  friend_name : String,
  friend_email : {type:String, default:"default@email"},
  friend_phone : String
})
 
// 테이블 설정하는거 (Address_book: 스키마, 'address_book': 테이블 이름)
module.exports = mongoose.model('address_book',Address_book);

