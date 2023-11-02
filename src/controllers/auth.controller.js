import Person from '../models/Person';
import { AES, enc } from 'crypto-js';
import { sign } from 'jsonwebtoken';
export async function createPerson(req, res) {
  const newPerson = new Person({
    username: req.body.username,
    password: AES.encrypt(req.body.password, process.env.SECRET).toString(),
    role: req.body.role,
  });

  try {
    const savePerson = await newPerson.save();

    res.status(201).json(savePerson);
  } catch (err) {
    res.status(500).json(err);
  }
}
export async function loginPerson(req, res) {
  try {
    const user = await Person.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json('Wrong Login Details');
      return;
    }

    const descryptedPass = AES.decrypt(user.password, process.env.SECRET);
    const depassword = descryptedPass.toString(enc.Utf8);

    depassword !== req.body.password && res.status(401).json('Wrong password');
    const { password, __v, createdAt, ...others } = user._doc;

    const userToken = sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.SECRET,
      { expiresIn: '21d' },
    );

    res.status(200).json({ ...others, userToken });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}
