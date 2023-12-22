const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createNewPayment } = require('../services/payment.service');
const mongoose = require('mongoose');
const app = createApp();

const paymentId = new mongoose.Types.ObjectId().toString();
const { paymentTransactionPayload } = require('../testUtils/payment.testUtils');
const { orderPayload } = require('../testUtils/order.testUtils');
const { productPayload } = require('../testUtils/product.testUtils');
const { ORDER_STATUS } = require('../utils/enum');
const { createNewOrder } = require('../services/order.service');
const { createNewProduct } = require('../services/product.service');
const {
  userPayload,
  token,
  adminToken,
  userId,
} = require('../testUtils/auth.testUtils');

describe('payment', () => {
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
  describe('create payment transaction', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post('/api/payment');

        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and create the payment', async () => {
        console.log(newOrder._id);
        const res = await supertest(app)
          .post('/api/payment')
          .set('token', `Bear ${token}`)
          .send({ orderId: newOrder._id });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toEqual('Success');
      });
      it('should return a 500', async () => {
        const res = await supertest(app)
          .post('/api/payment')
          .set('token', `Bear ${token}`)
          .send({});
        expect(res.statusCode).toBe(500);
        expect(res.body).not.toBeNaN();
      });
    });
  });

  // describe('get payment route', () => {
  //   describe('given the payment does not exist', () => {
  //     it('should return 500 status code', async () => {
  //       const paymentId = 'payment-123';
  //       await supertest(app).get(`/api/payment/${paymentId}`).expect(401);
  //     });
  //   });
  //   describe('given the payment does exist', () => {
  //     it('should return a 200 status and the payment', async () => {
  //       const payment = await createNewPayment(paymentPayload);

  //       const { body, statusCode } = await supertest(app)
  //         .get(`/api/payment/${payment._id}`)
  //         .set('token', `Bear ${token}`);
  //       expect(statusCode).toBe(200);
  //     });
  //   });
  // });
  // describe('change payment status route', () => {
  //   describe('given the user is not logged in', () => {
  //     it('should return a 401', async () => {
  //       const { statusCode } = await supertest(app).put(
  //         `/api/payment/${paymentId}`,
  //       );
  //       expect(statusCode).toBe(401);
  //     });
  //   });
  //   describe('given the user is not admin', () => {
  //     it('should return a 403', async () => {
  //       const paymentId = 'payment-123';

  //       const { statusCode } = await supertest(app)
  //         .put(`/api/payment/${paymentId}`)
  //         .set('token', `Bear ${token}`);
  //       expect(statusCode).toBe(403);
  //     });
  //   });

  //   describe('given the user is logged in', () => {
  //     it('should return a 200 and update the payment', async () => {
  //       const newPayment = await createNewPayment(paymentPayload);
  //       //console.log(newPayment);
  //       const updateRes = await supertest(app)
  //         .put(`/api/payment/${newPayment._id}`)
  //         .set('token', `Bear ${adminToken}`)
  //         .send({
  //           ...paymentChangeStatus,
  //         });
  //       //console.log(updateRes);
  //       expect(updateRes.statusCode).toBe(200);

  //       expect(updateRes._body.status).toEqual(paymentChangeStatus.status);
  //     });
  //   });
  // });
});
