const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const app = createApp();
const Person = require('../models/Person.js');
const CryptoJs = require('crypto-js');
const { validEditUserPayload } = require('../testUtils/user.testUtils.js');
const {
  authValidPayload,
  createToken,
  adminToken,
} = require('../testUtils/auth.testUtils.js');
const { createNewPerson } = require('../services/auth.service.js');
describe('user', () => {
  let user;
  let token;
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    user = await createNewPerson(authValidPayload);
    token = createToken(user._id, user.idRole);
    console.log(token);
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('edit profile', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        await supertest(app)
          .post(`/api/user/`)
          .send(validEditUserPayload)
          .expect(401);
      });
    });
    describe('given the user is logged in', () => {
      it('should return success and 200', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/api/user')
          .set('token', `Bear ${token}`)
          .send(validEditUserPayload);
        expect(statusCode).toBe(200);
        // expect(body.password).notEqual()
      });
    });
  });
  describe('get profile', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        await supertest(app).get(`/api/user/`).expect(401);
      });
    });
    describe('given the user is logged in', () => {
      it('should return success and 200', async () => {
        const { statusCode, body } = await supertest(app)
          .get('/api/user')
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(200);
        // expect(body.password).notEqual()
      });
    });
  });
  describe('get all users', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        await supertest(app).get(`/api/user/all`).expect(401);
      });
    });
    describe('given the user is not an admin', () => {
      it('should return a 401', async () => {
        await supertest(app)
          .get(`/api/user/all`)
          .set('token', `Bearer ${token}`)
          .expect(403);
      });
    });

    describe('given the user is logged in', () => {
      it('should return success and 200', async () => {
        const { statusCode, body } = await supertest(app)
          .get('/api/user/all')
          .set('token', `Bear ${adminToken}`);
        expect(statusCode).toBe(200);
        expect(body).toEqual(expect.any(Array));
      });
    });
  });
});
