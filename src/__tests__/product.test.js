const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createNewProduct } = require('../services/product.service');
const mongoose = require('mongoose');
const app = createApp();

const productId = new mongoose.Types.ObjectId().toString();
const {
  userPayload,
  updateProductPayload,
  token,
  adminToken,
} = require('../seeds/auth.seed');
const { productPayload } = require('../seeds/product.seed');
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
        await supertest(app).get(`/api/product/${productId}`).expect(500);
      });
    });
    describe('given the product does exist', () => {
      it('should return a 200 status and the product', async () => {
        const product = await createNewProduct(productPayload);

        const { body, statusCode } = await supertest(app).get(
          `/api/product/${product._id}`,
        );

        expect(statusCode).toBe(200);
      });
    });
  });
  describe('create product route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 403', async () => {
        const { statusCode } = await supertest(app).post('/api/product');

        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and create the product', async () => {
        const res = await supertest(app)
          .post('/api/product')
          .set('token', `Bear ${token}`)
          .send(productPayload);
        //console.log(res.body);
        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({
          _id: expect.any(String),
          rates: expect.any(Array),
          ...productPayload,
        });
      });
    });
  });
  describe('update product route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post(
          `/api/product/${productId}`,
        );
        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and update the product', async () => {
        const newProduct = await createNewProduct(productPayload);
        //console.log(newProduct);
        const updateRes = await supertest(app)
          .post(`/api/product/${newProduct._id}`)
          .set('token', `Bear ${token}`)
          .send({
            ...updateProductPayload,
          });
        //console.log(updateRes);
        expect(updateRes.statusCode).toBe(200);

        expect(updateRes._body).toEqual({
          ...updateProductPayload,
          // __v: expect.any(Number),
          _id: expect.any(String),
          idCategory: expect.any(String),
          rates: expect.any(Array),
        });
      });
    });
  });
  describe('delete product route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).delete(
          `/api/product/${productId}`,
        );
        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and delete the product', async () => {
        const res = await supertest(app)
          .post('/api/product')
          .set('token', `Bear ${token}`)
          .send(productPayload);
        //console.log(res.body);
        expect(res.statusCode).toBe(200);

        const deleteRes = await supertest(app)
          .delete(`/api/product/${res.body._id}`)
          .set('token', `Bear ${token}`);
        expect(deleteRes.statusCode).toBe(200);
      });
    });
  });
  describe('get all products route', () => {
    it('should return a 200 and an array of products ', async () => {
      await createNewProduct(productPayload);
      await createNewProduct(productPayload);

      const { body, statusCode } = await supertest(app).get(`/api/product/`);

      expect(statusCode).toBe(200);
      expect(body).toEqual(expect.any(Array));
    });
  });
});
