const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createNewOrder } = require('../services/order.service');
const { createNewProduct } = require('../services/product.service');
const mongoose = require('mongoose');
const app = createApp();

const orderId = new mongoose.Types.ObjectId().toString();
const {
  userPayload,
  token,
  adminToken,
  userId,
} = require('../testUtils/auth.testUtils');
const { orderPayload } = require('../testUtils/order.testUtils');
const { productPayload } = require('../testUtils/product.testUtils');
const { ORDER_STATUS } = require('../utils/enum');

describe('order', () => {
  let newOrder;
  let product;
  let newOrderPayload;
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    newOrderPayload = orderPayload;
    newOrderPayload.items = [];
    product = await createNewProduct(productPayload);
    newOrderPayload.items.push({ idProduct: product._id });
    newOrder = await createNewOrder(newOrderPayload, userId);
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('create order route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 403', async () => {
        const { statusCode } = await supertest(app)
          .post('/api/order')
          .send(newOrderPayload);

        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and create the order', async () => {
        const res = await supertest(app)
          .post('/api/order')
          .set('token', `Bear ${token}`)
          .send(newOrderPayload);
        //console.log(res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.customerId).toEqual(userId);
        expect(res.body.paymentType).toEqual(newOrderPayload.paymentType);
      });
    });
  });

  describe('get order route', () => {
    describe('given the order does not exist', () => {
      it('should return 500 status code', async () => {
        const orderId = 'order-123';
        await supertest(app)
          .get(`/api/order/${orderId}`)
          .set('token', `Bear ${token}`)
          .expect(500);
      });
    });
    describe('given the order does exist', () => {
      it('should return a 200 status and the order', async () => {
        // const order = await createNewOrder(orderPayload);

        const { body, statusCode } = await supertest(app)
          .get(`/api/order/${newOrder._id}`)
          .set('token', `Bear ${token}`);

        expect(statusCode).toBe(200);
      });
    });
  });
  describe('canceled order route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post(
          `/api/order/canceled/${orderId}`,
        );
        expect(statusCode).toBe(401);
      });
      describe('given the user is logged in', () => {
        it('should return a 200 and canceled the order', async () => {
          //console.log(newOrder);
          const updateRes = await supertest(app)
            .post(`/api/order/canceled/${newOrder._id}`)
            .set('token', `Bear ${token}`);
          console.log(updateRes.body);
          expect(updateRes.statusCode).toBe(200);

          expect(updateRes._body.status).toEqual(ORDER_STATUS.Canceled);
        });
      });
    });
  });
  describe('get order by user id', () => {
    it('should return a 200 and an array of orders ', async () => {
      const { body, statusCode } = await supertest(app)
        .get(`/api/order/`)
        .set('token', `Bearer ${token}`);

      expect(statusCode).toBe(200);
      expect(body).toEqual(expect.any(Array));
    });
  });

  describe('get all orders route', () => {
    it('should return a 200 and an array of orders ', async () => {
      const { body, statusCode } = await supertest(app)
        .get(`/api/order/all`)
        .set('token', `Bearer ${adminToken}`);

      expect(statusCode).toBe(200);
      expect(body).toEqual(expect.any(Array));
    });
  });
});
