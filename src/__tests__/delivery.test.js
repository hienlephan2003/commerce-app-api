const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createNewDelivery } = require('../services/delivery.service');
const mongoose = require('mongoose');
const app = createApp();

const deliveryId = new mongoose.Types.ObjectId().toString();
const {
  userPayload,
  updateDeliveryPayload,
  token,
  adminToken,
} = require('../testUtils/auth.testUtils');
const {
  deliveryPayload,
  deliveryChangeStatus,
} = require('../testUtils/delivery.testUtils');
describe('delivery', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('create delivery route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post('/api/delivery');

        expect(statusCode).toBe(401);
      });
    });
    describe('given the user is not admin', () => {
      it('should return a 403', async () => {
        const { statusCode } = await supertest(app)
          .post('/api/delivery')
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(403);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and create the delivery', async () => {
        const res = await supertest(app)
          .post('/api/delivery')
          .set('token', `Bear ${adminToken}`)
          .send(deliveryPayload);
        //console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
    });
  });

  describe('get delivery route', () => {
    describe('given the delivery does not exist', () => {
      it('should return 500 status code', async () => {
        const deliveryId = 'delivery-123';
        await supertest(app).get(`/api/delivery/${deliveryId}`).expect(401);
      });
    });
    describe('given the delivery does exist', () => {
      it('should return a 200 status and the delivery', async () => {
        const delivery = await createNewDelivery(deliveryPayload);

        const { body, statusCode } = await supertest(app)
          .get(`/api/delivery/${delivery._id}`)
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(200);
      });
    });
  });
  describe('change delivery status route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).put(
          `/api/delivery/${deliveryId}`,
        );
        expect(statusCode).toBe(401);
      });
    });
    describe('given the user is not admin', () => {
      it('should return a 403', async () => {
        const deliveryId = 'delivery-123';

        const { statusCode } = await supertest(app)
          .put(`/api/delivery/${deliveryId}`)
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(403);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and update the delivery', async () => {
        const newDelivery = await createNewDelivery(deliveryPayload);
        //console.log(newDelivery);
        const updateRes = await supertest(app)
          .put(`/api/delivery/${newDelivery._id}`)
          .set('token', `Bear ${adminToken}`)
          .send({
            ...deliveryChangeStatus,
          });
        //console.log(updateRes);
        expect(updateRes.statusCode).toBe(200);

        expect(updateRes._body.status).toEqual(deliveryChangeStatus.status);
      });
    });
  });
});
