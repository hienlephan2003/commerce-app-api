const Person = require('../models/Person.js');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

module.exports = {
  createNewPerson: (user) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newPerson = new Person({
          userName: user.userName,
          password:
            user.password != null
              ? CryptoJs.AES.encrypt(
                  user.password,
                  process.env.SECRET,
                ).toString()
              : '',
          idRole: user.idRole,
        });
        // console.log(newPerson);
        const savePerson = await newPerson.save();
        resolve(savePerson);
      } catch (err) {
        reject(err);
      }
    });
  },
};
