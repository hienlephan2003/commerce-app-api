const jwt = require('jsonwebtoken');
const Person = require('../models/Person');
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SEC, async (err, person) => {
      if (err) res.status(403).json('Invalid token');
      req.person = person;
      console.log(person);
      next();
    });
  } else {
    return res.status(401).json('You are not authenticated');
  }
};

const verifyAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.person.role == 'ADMIN') {
      next();
    } else {
      res.status(403).json('You are restricted from performing this operation');
    }
  });
};

module.exports = { verifyToken, verifyAndAdmin };
