// const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '23abc!';

// bcrypt.genSalt(17, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)  ;
//   });
// });

var hashedpassword = '$2a$17$NRcdoKaI8tWkMA1BaW8hWuVxm5a41Jhjf0Jo0PzZ9j0V/1uY9a1Oq';

bcrypt.compare(password, hashedpassword, (err, res) => {
  console.log(res);
});
// var data = {
//   id: 4
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);

//jwt.verify
// var message = 'I am user number 4';
//
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resulthash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed!!!');
// }
