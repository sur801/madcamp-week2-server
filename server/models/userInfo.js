var mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const User_info = new Schema({
  my_email :  {type:String, default:"no email"},
  my_pwd :  {type:String, default:"no pwd"},
  my_name :  {type:String, default:"no name"},
  my_phone_num : {type:String, default:"no my_phone_num"}
})
 
// 테이블 설정하는거 (Address_book: 스키마, 'address_book': 테이블 이름)
module.exports = mongoose.model('user',User_info);

