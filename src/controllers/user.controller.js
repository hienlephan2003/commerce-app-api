const Person = require('../models/Person');
const CryptoJs = require('crypto-js');

module.exports = {
  updatePerson: async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET,
      ).toString();
    }
    try {
      const UpdatePerson = await Person.findByIdAndUpdate(
        req.person.id,
        {
          $set: req.body,
        },
        { new: true },
      );
      const { password, __v, createdAt, ...others } = UpdatePerson._doc;

      res.status(200).json(others);
    } catch (err) {
      res.status(500).json({ err });
    }
  },
  deletePerson: async (req, res) => {
    try {
      await Person.findByIdAndDelete(req.person.id);
      res.status(200).json('Account Successfully Deleted');
    } catch (er) {
      res.status(500).json(er);
    }
  },
  getPerson: async (req, res) => {
    try {
      const person = await Person.findById(req.person.id);
      const { password, __v, createdAt, ...personData } = person._doc;
      res.status(200).json(personData);
    } catch (er) {
      res.status(500).json(er);
    }
  },
  getAllPerson: async (req, res) => {
    try {
      const allPerson = await Person.find();
      res.status(200).json(allPerson);
    } catch (er) {
      res.status(500).json(er);
    }
  },
};
