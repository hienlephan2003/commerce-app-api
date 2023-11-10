const Person = require('../models/Person');
const ReceiverInfomation = require('../models/ReceiverInfomation');
const CryptoJs = require('crypto-js');

module.exports = {
  updatePerson: async (req, res) => {
    try {
      if (req.body.password) {
        req.body.password = CryptoJs.AES.encrypt(
          req.body.password,
          process.env.SECRET,
        ).toString();
      }
      const userInfo = await Person.findById(req.person.id);
      if (req.body.cmnd_passport && userInfo.cmnd_passport) {
        delete req.body.cmnd_passport;
      }
      if (req.body.idRole) delete req.body.idRole;
      const UpdatePerson = await Person.findByIdAndUpdate(req.person.id, {
        $set: req.body,
      });
      const { password, __v, createdAt, ...others } = UpdatePerson._doc;

      res.status(200).json(others);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  },
  // banPerson: async (req, res) => {
  //   try {
  //     await Person.findByIdAndDelete(req.person.id);
  //     res.status(200).json('Account Successfully Deleted');
  //   } catch (er) {
  //     res.status(500).json(er);
  //   }
  // },
  getProfile: async (req, res) => {
    try {
      const person = await Person.findById(req.person.id);
      const { password, __v, createdAt, ...personData } = person._doc;
      res.status(200).json(personData);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  getAllPersons: async (req, res) => {
    try {
      const allPerson = await Person.find();
      res.status(200).json(allPerson);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  addReceiverInformation: async (req, res) => {
    try {
      const receiverPayload = {
        idCustomer: req.person.id,
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        notice: req.body.notice,
      };
      const newReceiver = new ReceiverInfomation(receiverPayload);
      res.status(200).json(newReceiver);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
