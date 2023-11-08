const Person = require('../models/Person.js');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
async function createPerson(req, res) {
  try {
    const newPerson = new Person({
      userName: req.body.userName,
      password:
        req.body.password != null
          ? CryptoJs.AES.encrypt(
              req.body.password,
              process.env.SECRET,
            ).toString()
          : '',
      idRole: req.body.idRole,
    });
    // console.log(newPerson);
    const savePerson = await newPerson.save();

    res.status(200).json('success');
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
}
async function loginPerson(req, res) {
  try {
    const user = await Person.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json('Wrong Login Details');
      return;
    }

    const descryptedPass = CryptoJs.AES.decrypt(
      user.password,
      process.env.SECRET,
    );
    const depassword = descryptedPass.toString(CryptoJs.enc.Utf8);
    if (depassword !== req.body.password) {
      res.status(401).json('Wrong password');
      return;
    }
    const { password, __v, createdAt, ...others } = user._doc;

    const userToken = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.SECRET,
      { expiresIn: '21d' },
    );

    res.status(200).json({ ...others, userToken });
  } catch (e) {
    // console.log(e);
    res.status(500).json(e);
  }
}
module.exports = { createPerson, loginPerson };
