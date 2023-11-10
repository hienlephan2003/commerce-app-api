const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  cmnd_passport: { type: String },
  phoneNumber: { type: String },
  birthday: Date,
  address: String,
  email: String,
  avatar: String,
  idRole: Number,
  gender: String,
  idCart: Number,
  paymentCard: [
    {
      cardNumber: { type: String, required: true },
      expDate: { type: Date, required: true },
      ownName: { type: String, required: true },
    },
  ],
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
