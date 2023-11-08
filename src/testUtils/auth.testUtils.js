const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userId = new mongoose.Types.ObjectId().toString();
const userPayload = {
  _id: new mongoose.Types.ObjectId().toString(),
  email: 'jane.doe@example.com',
  name: 'Jane Doe',
  role: 1,
};
const updateProductPayload = {
  name: 'test2',
  nameOfManufacturer: 'H2P',
  descriptionInformation: 'Laptop mới 1020%',
  technicalInformation: 'Ram 238G',
  price: 380000200,
  status: 2,
  thumbnailimage:
    'https://product.hstat2ic.net/200000722513/product/8u6l9pa_6f2f6ba3187e4ad599dc021d3f41b307.png',
};
const token = jwt.sign(
  {
    id: userPayload._id,
    role: 1,
  },
  process.env.JWT_SEC,
  { expiresIn: '21d' },
);
const createToken = (userId, idRole) => {
  const token = jwt.sign(
    {
      id: userId,
      role: idRole,
    },
    process.env.JWT_SEC,
    { expiresIn: '21d' },
  );
  return token;
};
const authValidPayload = {
  userName: 'phanhien2003',
  password: 'hien2003',
  idRole: 1,
};

const adminToken = jwt.sign(
  {
    id: userPayload._id,
    role: 3,
  },
  process.env.JWT_SEC,
  { expiresIn: '21d' },
);
const staffToken = jwt.sign(
  {
    id: userPayload._id,
    role: 2,
  },
  process.env.JWT_SEC,
  { expiresIn: '21d' },
);

module.exports = {
  userId,
  userPayload,
  token,
  adminToken,
  staffToken,
  updateProductPayload,
  authValidPayload,
  createToken,
};
