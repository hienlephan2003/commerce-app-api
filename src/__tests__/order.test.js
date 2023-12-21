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
  createToken,
} = require('../testUtils/auth.testUtils');
const { orderPayload } = require('../testUtils/order.testUtils');
const { productPayload } = require('../testUtils/product.testUtils');
const { ORDER_STATUS } = require('../utils/enum');

describe('order', () => {
  let newOrder;
  let product;
  let newOrderPayload;
  let mongoServer;
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    newOrderPayload = orderPayload;
    newOrderPayload.items = [];
    product = await createNewProduct(productPayload);
    newOrderPayload.items.push({ idProduct: product._id });
    newOrder = await createNewOrder(newOrderPayload, userId);
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
    await mongoose.connection.close();
  });
  describe('create order route', () => {
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
      it('should return a 500', async () => {
        const res = await supertest(app)
          .post('/api/order')
          .set('token', `Bear ${token}`)
          .send({});
        expect(res.statusCode).toBe(500);
        expect(res.body).not.toBeNaN();
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
    describe('given the order does not exist', () => {
      it('should return 404 status code', async () => {
        const orderId = new mongoose.Types.ObjectId().toString();
        const { body, statusCode } = await supertest(app)
          .get(`/api/order/${orderId}`)
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(404);
        expect(body).toBe('order not found');
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
        const { statusCode, body } = await supertest(app).post(
          `/api/order/canceled/${orderId}`,
        );
        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
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
      describe('given the order does not exist', () => {
        it('should return 500 status code', async () => {
          const orderId = new mongoose.Types.ObjectId().toString();
          const { body, statusCode } = await supertest(app)
            .post(`/api/order/canceled/${orderId}`)
            .set('token', `Bear ${token}`);
          expect(statusCode).toBe(500);
          expect(body).not.toBeNaN();
        });
      });
    });
  });
  describe('get order by user id', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { body, statusCode } = await supertest(app).get(`/api/order/`);

        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
      });
    });
    describe('given the user have no order', () => {
      it('should return 404 status code', async () => {
        const userId = new mongoose.Types.ObjectId().toString();
        const invalidToken = createToken(userId, 1);
        const { body, statusCode } = await supertest(app)
          .get(`/api/order/`)
          .set('token', `Bearer ${invalidToken}`);
        expect(statusCode).toBe(404);
        expect(body).toBe('order not found');
      });
    });
    describe('invalid user id', () => {
      it('return 500 status code', async () => {
        const userId = new mongoose.Types.ObjectId().toString();
        const invalidToken = createToken('12', 1);
        const { body, statusCode } = await supertest(app)
          .get(`/api/order/`)
          .set('token', `Bearer ${invalidToken}`);
        expect(statusCode).toBe(500);
        expect(body).not.toBeNaN();
      });
    });
    it('should return a 200 and an array of orders ', async () => {
      const { body, statusCode } = await supertest(app)
        .get(`/api/order/`)
        .set('token', `Bearer ${token}`);
      expect(statusCode).toBe(200);
      expect(body).toEqual(expect.any(Array));
      body.forEach((order) => {
        expect(order.customerId).toEqual(userId);
      });
    });
  });

  describe('get all orders route', () => {
    describe('given the user is not admin', () => {
      it('should return a 403', async () => {
        const { body, statusCode } = await supertest(app)
          .get(`/api/order/all`)
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(403);
        expect(body).toEqual(
          'You are restricted from performing this operation',
        );
      });
    });

    describe('given the user is admin', () => {
      it('should return a 200 and an array of orders ', async () => {
        const { body, statusCode } = await supertest(app)
          .get(`/api/order/all`)
          .set('token', `Bearer ${adminToken}`);

        expect(statusCode).toBe(200);
        expect(body).toEqual(expect.any(Array));
      });
    });
  });
});
