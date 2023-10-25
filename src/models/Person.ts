import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
  userName: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  cmnd_passport: { type: String, require: true },
  phoneNumber: { type: Number, required: true },
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
