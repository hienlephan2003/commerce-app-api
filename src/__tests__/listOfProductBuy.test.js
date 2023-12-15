const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const {
  createNewListProductBuy,
} = require('../services/listOfProductBuy.service');
const { createNewProduct } = require('../services/product.service');
const mongoose = require('mongoose');
const app = createApp();

const orderId = new mongoose.Types.ObjectId().toString();
const {
  userPayload,
  token,
  adminToken,
  userId,
  createToken,
} = require('../testUtils/auth.testUtils');
const { productPayload } = require('../testUtils/product.testUtils');

describe('List Of Products Buy', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('Create new List Of Product Buy', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/api/order')
          .send(newOrderPayload);

        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
      });
    });
    describe('given the user is logged in', () => {
      beforeAll(() => {});
      it('should return a 200 and get all ', async () => {
        const res = await supertest(app)
          .post('/api/product')
          .set('token', `Bear ${token}`)
          .send(productPayload);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
          _id: expect.any(String),
          rates: expect.any(Array),
          ...productPayload,
        });
        const { statusCode, body } = await supertest(app)
          .post('/api/listOfProductBuy')
          .send({});
      });
    });
  });
});
