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
        const { statusCode, body } = await supertest(app).post('/api/delivery');

        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
      });
    });
    describe('given the user is not admin', () => {
      it('should return a 403', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/api/delivery')
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(403);
        expect(body).toEqual(
          'You are restricted from performing this operation',
        );
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
      it('should return a 500', async () => {
        const res = await supertest(app)
          .post('/api/delivery')
          .set('token', `Bear ${adminToken}`)
          .send({});
        expect(res.statusCode).toBe(500);
        expect(res.body).not.toBeNaN();
      });
    });
  });

  describe('get delivery route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const deliveryId = 'delivery-123';
        const { statusCode, body } = await supertest(app).get(
          `/api/delivery/${deliveryId}`,
        );
        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
      });
    });
    describe('given the delivery does not exist', () => {
      it('should return 404 status code', async () => {
        const deliveryId = new mongoose.Types.ObjectId().toString();
        const { body, statusCode } = await supertest(app)
          .get(`/api/delivery/${deliveryId}`)
          .set('token', `Bear ${token}`);

        expect(statusCode).toBe(404);
        expect(body).toEqual('Delivery not found');
      });
    });

    describe('given the delivery does exist', () => {
      it('should return a 500', async () => {
        const res = await supertest(app)
          .get(`/api/delivery/${'123'}`)
          .set('token', `Bear ${token}`);

        expect(res.statusCode).toBe(500);
        expect(res.body).not.toBeNaN();
      });

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
        const { statusCode, body } = await supertest(app).put(
          `/api/delivery/${deliveryId}`,
        );
        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
      });
    });
    describe('given the user is not admin', () => {
      it('should return a 403', async () => {
        const deliveryId = 'delivery-123';

        const { statusCode, body } = await supertest(app)
          .put(`/api/delivery/${deliveryId}`)
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(403);
        expect(body).toEqual(
          'You are restricted from performing this operation',
        );
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 500', async () => {
        const newDelivery = await createNewDelivery(deliveryPayload);
        const res = await supertest(app)
          .put(`/api/delivery/${newDelivery._id}`)
          .set('token', `Bear ${adminToken}`)
          .send({});
        console.log(res.body);
        expect(res.statusCode).toBe(500);
        expect(res.body).not.toBeNaN();
      });

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
