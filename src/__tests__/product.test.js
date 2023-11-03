const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const app = createApp();
describe('product', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('get product route', () => {
    describe('given the product does not exist', () => {
      it('should return a 500', async () => {
        const productId = 'product-123';
        await supertest(app).get(`/api/product/${productId}`).expect(404);
      });
    });
  });
});
