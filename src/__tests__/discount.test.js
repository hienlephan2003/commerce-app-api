const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const discountService = require('../services/discount.service');
const mongoose = require('mongoose');
const app = createApp();

const discountId = new mongoose.Types.ObjectId().toString();
const {
  userPayload,
  updateProductPayload,
  token,
  adminToken,
} = require('../testUtils/auth.testUtils');
const {
  discountPayload,
  updateDiscountPayload,
} = require('../testUtils/discount.testUtils');

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
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post('/api/discount');
        expect(statusCode).toBe(401);
      });
    });
    describe('given the user is logged in', () => {
      describe('Discounts are found', () => {
        it('Should return 200 status code and the discounts', async () => {
          await discountService.createNewDiscount(discountPayload);
          const { body, statusCode } = await supertest(app)
            .get('/api/discount')
            .set('token', `Bear ${token}`);
          expect(statusCode).toBe(200);
          expect(body).toEqual(expect.any(Array));
        });
      });
      describe('Discounts are not found', () => {
        it('Should return a 401 status code', async () => {
          const { statusCode } = await supertest(app)
            .get('/api/discount')
            .set('token', `Bear ${token}`);
          expect(statusCode).toBe(500);
        });
      });
    });
  });
  describe('Get Discount By Id', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post(
          `/api/discount/${discountId}`,
        );
        expect(statusCode).toBe(401);
      });
    });
    describe('given the user is  logged in', () => {
      describe('Discount is found', () => {
        it('Should return 200 status code and the discount', async () => {
          const discount = await discountService.createNewDiscount(
            discountPayload,
          );
          const { statusCode } = await supertest(app)
            .get(`/api/discount/${discount._id}`)
            .set('token', `Bear ${token}`);
          expect(statusCode).toBe(200);
        });
      });
      describe('Discount is not found', () => {
        it('Should return 500 status code', async () => {
          const discountId = 'discount1';
          const { statusCode } = await supertest(app)
            .get(`/api/discount/${discountId}`)
            .set('token', `Bear ${token}`);
          expect(statusCode).toBe(500);
        });
      });
    });
  });
  describe('Create New Discount', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post('/api/discount');

        expect(statusCode).toBe(401);
      });
    });
    describe('given the user is logged in', () => {
      it('should return a 201 and create the discount', async () => {
        const res = await supertest(app)
          .post('/api/discount')
          .set('token', `Bear ${token}`)
          .send(discountPayload);
        //console.log(res.body);
        expect(res.statusCode).toBe(201);

        expect(res.body).toEqual({
          _id: expect.any(String),
          ...discountPayload,
          isExpire: expect.any(Date),
        });
      });
    });
  });
  describe('Update Discount By Id', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post(
          `/api/discount/${discountId}`,
        );
        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and update the discount', async () => {
        const newDiscount = await discountService.createNewDiscount(
          discountPayload,
        );
        //console.log(newProduct);
        const updateRes = await supertest(app)
          .post(`/api/product/${newDiscount._id}`)
          .set('token', `Bear ${token}`)
          .send({
            ...updateDiscountPayload,
          });
        //console.log(updateRes);
        expect(updateRes.statusCode).toBe(200);

        expect(updateRes._body).toEqual({
          ...updateDiscountPayload,
          idCustomer: expect.any(String),
          isExpire: expect.any(Date),
          code: expect.any(Date),
          value: expect.any(Number),
          exp_time: expect.any(Date),
        });
      });
    });
  });
  describe('Delete Discount', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).delete(
          `/api/discount/${discountId}`,
        );
        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and delete the product', async () => {
        const res = await supertest(app)
          .post('/api/discount')
          .set('token', `Bear ${token}`)
          .send(discountPayload);
        //console.log(res.body);
        expect(res.statusCode).toBe(201);

        const deleteRes = await supertest(app)
          .delete(`/api/discount/${res.body._id}`)
          .set('token', `Bear ${token}`);
        expect(deleteRes.statusCode).toBe(200);
      });
    });
  });
});
