const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const discountService = require('../services/discount.service');
const mongoose = require('mongoose');
const app = createApp();
const jwt = require('jsonwebtoken');

module.exports = discountPayload = {
  idCustomer: 'idCustomer1',
  code: new Date().getDate(),
  value: 10,
  exp_time: new Date().getDate() + 2,
  status: '',
};

describe('discount', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('Get All Discounts', () => {
    describe('Discounts are found', () => {
      it('Should return 200 status code and the discounts', async () => {
        await supertest(app).get('/api/discounts').expect(200);
      });
    });
    describe('Discounts are not found', () => {
      // it('Should return a 500 status code');
    });
  });
});
