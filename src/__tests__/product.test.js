const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createNewProduct } = require('../services/product.service');
const mongoose = require('mongoose');
const app = createApp();
const jwt = require('jsonwebtoken');

const userId = '6544fd3b6b2595b15c611e73';
const productId = new mongoose.Types.ObjectId().toString();
const secrect = 'commerapp';
module.exports = userPayload = {
  _id: userId,
  email: 'jane.doe@example.com',
  name: 'Jane Doe',
  role: 1,
};
``;
module.exports = productPayload = {
  name: 'test',
  nameOfManufacturer: 'HP',
  descriptionInformation: 'Laptop mới 100%',
  technicalInformation: 'Ram 38G',
  price: 38000000,
  status: 1,
  idCategory: '654501183e937734f982c3a4',
  thumbnailimage:
    'https://product.hstatic.net/200000722513/product/8u6l9pa_6f2f6ba3187e4ad599dc021d3f41b307.png',
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
        const token = jwt.sign(
          {
            id: userPayload._id,
            role: userPayload.role,
          },
          secrect,
          { expiresIn: '21d' },
        );
        const res = await supertest(app)
          .post('/api/product')
          .set('token', `Bear ${token}`)
          .send(productPayload);
        //console.log(res.body);
        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({
          _id: expect.any(String),
          descriptionInformation: 'Laptop mới 100%',
          idCategory: '654501183e937734f982c3a4',
          name: 'test',
          nameOfManufacturer: 'HP',
          price: 38000000,
          rates: expect.any(Array),
          status: 1,
          technicalInformation: 'Ram 38G',
          thumbnailimage:
            'https://product.hstatic.net/200000722513/product/8u6l9pa_6f2f6ba3187e4ad599dc021d3f41b307.png',
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
        const token = jwt.sign(
          {
            id: userPayload._id,
            role: userPayload.role,
          },
          secrect,
          { expiresIn: '21d' },
        );
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
          __v: expect.any(Number),
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
        const token = jwt.sign(
          {
            id: userPayload._id,
            role: userPayload.role,
          },
          secrect,
          { expiresIn: '21d' },
        );
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
});
