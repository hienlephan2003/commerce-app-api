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
} = require('../testUtils/auth.testUtils');
const { productPayload } = require('../testUtils/product.testUtils');
describe('product', () => {
  let mongoServer;
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
    await mongoose.connection.close();
  });
  describe('get product route', () => {
    describe('given the product does not exist', () => {
      it('should return 404 status code', async () => {
        const productId = new mongoose.Types.ObjectId().toString();
        const { body, statusCode } = await supertest(app).get(
          `/api/product/${productId}`,
        );
        expect(statusCode).toBe(404);
        expect(body).toEqual('Product not found');
      });
    });
    describe('given the product does exist', () => {
      it('should return a 200 status and the product', async () => {
        const product = await createNewProduct(productPayload);

        const { body, statusCode } = await supertest(app).get(
          `/api/product/${product._id}`,
        );

        expect(statusCode).toBe(200);
        expect(body.name).toEqual(product.name);
      });
    });
  });
  describe('create product route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode, body } = await supertest(app).post('/api/product');

        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
      });
    });

    describe('given the user is logged in', () => {
      describe('invalid product id', () => {
        it('return 500 status code', async () => {
          let invalidProductPayload = { ...productPayload };
          delete invalidProductPayload.idCategory;
          const { statusCode, body } = await supertest(app)
            .post('/api/product')
            .set('token', `Bear ${token}`)
            .send(invalidProductPayload);
          expect(statusCode).toBe(500);
          expect(body).not.toBeNaN();
        });
      });

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
        const { statusCode, body } = await supertest(app).post(
          `/api/product/${productId}`,
        );
        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
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
      it('return 500 status code', async () => {
        let invalidProductPayload = { ...productPayload };
        delete invalidProductPayload.idCategory;
        const { statusCode, body } = await supertest(app)
          .post(`/api/product/${'123'}`)
          .set('token', `Bear ${token}`)
          .send({
            ...updateProductPayload,
          });
        expect(statusCode).toBe(500);
        expect(body).not.toBeNaN();
      });
    });
  });
  describe('delete product route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode, body } = await supertest(app).delete(
          `/api/product/${productId}`,
        );
        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
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
      it('return 500 status code', async () => {
        const { statusCode, body } = await supertest(app)
          .delete(`/api/product/123`)
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(500);
        expect(body).not.toBeNaN();
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
