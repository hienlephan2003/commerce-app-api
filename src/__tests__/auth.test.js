const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const app = createApp();
const Person = require('../models/Person.js');
const CryptoJs = require('crypto-js');

const userId = '6544fd3b6b2595b15c611e73';
const secrect = 'commerapp';
module.exports = userPayload = {
  _id: userId,
  email: 'jane.doe@example.com',
  name: 'Jane Doe',
  role: 1,
};
const authValidPayload = {
  userName: 'phanhien2003',
  password: 'hien2003',
  idRole: 1,
};
describe('auth', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('register route', () => {
    describe('given the username does not exist', () => {
      it('should return a 400', async () => {
        const authPayload = {
          password: '123',
          idRole: 1,
        };
        await supertest(app)
          .post(`/api/register/`)
          .send(authPayload)
          .expect(500);
      });
    });
    describe('given the password does not exist', () => {
      it('should return a 500', async () => {
        const authPayload = {
          userName: 'test',
          idRole: 1,
        };
        await supertest(app)
          .post(`/api/register/`)
          .send(authPayload)
          .expect(500);
      });
    });
    describe('given the valid register', () => {
      it('should return success and 200', async () => {
        const { statusCode } = await supertest(app)
          .post('/api/register')
          .send(authValidPayload);
        expect(statusCode).toBe(200);
      });
    });
  });
  describe('login route', () => {
    describe('given the username not exist', () => {
      it('should return a 401', async () => {
        const authPayload = {
          userName: 'test',
        };

        const { statusCode } = await supertest(app)
          .post('/api/login')
          .send(authPayload);

        expect(statusCode).toBe(401);
      });
    });

    describe('not given the password', () => {
      it('should return a 401', async () => {
        const authPayload = {
          userName: 'test',
        };
        const { statusCode } = await supertest(app)
          .post('/api/login')
          .send(authPayload);

        expect(statusCode).toBe(401);
      });
    });
    describe('given a valid login request', () => {
      it('should return a 200 and a access token', async () => {
        const newPerson = new Person({
          userName: authValidPayload.userName,
          password: CryptoJs.AES.encrypt(
            authValidPayload.password,
            process.env.SECRET,
          ).toString(),
          idRole: authValidPayload.idRole,
        });

        const { statusCode, body } = await supertest(app)
          .post('/api/login')
          .send(authValidPayload);
        expect(statusCode).toBe(200);
      });
    });
  });
});
