const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
  userName: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String },
  cmnd_passport: { type: String },
  phoneNumber: { type: Number },
  birthday: Date,
  address: String,
  email: String,
  avatar: String,
  idRole: Number,
  gender: String,
  idCart: Number,
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
