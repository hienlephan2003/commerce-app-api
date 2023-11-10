const Person = require('../models/Person');
const ReceiverInfomation = require('../models/ReceiverInfomation');
const CryptoJs = require('crypto-js');

module.exports = {
  updatePerson: async (req, res) => {
    try {
      console.log(req.body);
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
      if (Object.keys(req.body).length === 0) {
        throw new Error('Nothing to update');
      }
      const UpdatePerson = await Person.findByIdAndUpdate(
        req.person.id,
        { ...req.body },
        { new: true },
      );
      const { password, __v, createdAt, ...others } = UpdatePerson._doc;

      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
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
    const allPerson = await Person.find();
    res.status(200).json(allPerson);
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
      const newdoc = await newReceiver.save();
      res.status(200).json(newdoc);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
