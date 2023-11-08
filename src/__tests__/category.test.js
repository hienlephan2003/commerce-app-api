const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createNewCategory } = require('../services/category.service');
const mongoose = require('mongoose');
const app = createApp();
const {
  categoryPayload,
  updateCategoryPayload,
} = require('../testUtils/category.testUtils');
const { token, adminToken } = require('../testUtils/auth.testUtils');
describe('category', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('get category route', () => {
    describe('given the category does not exist', () => {
      it('should return a 500', async () => {
        const categoryId = 'category123';
        await supertest(app).get(`/api/category/${categoryId}`).expect(500);
      });
    });
    describe('given the category does exist', () => {
      it('should return a 200 status and the category', async () => {
        const category = await createNewCategory(categoryPayload);

        const { body, statusCode } = await supertest(app).get(
          `/api/category/${category._id}`,
        );

        expect(statusCode).toBe(200);
      });
    });
  });
  describe('create category route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 403', async () => {
        const { statusCode } = await supertest(app).post('/api/category');

        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and create the category', async () => {
        const res = await supertest(app)
          .post('/api/category')
          .set('token', `Bear ${adminToken}`)
          .send(categoryPayload);
        //console.log(res.body);
        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({
          _id: expect.any(String),
          type: 'Laptop',
        });
      });
    });
  });
  describe('update category route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 403', async () => {
        const newCategory = await createNewCategory(categoryPayload);
        const { statusCode } = await supertest(app)
          .put(`/api/category/${newCategory._id}`)
          .send(updateCategoryPayload);

        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 and update the category', async () => {
        const newCategory = await createNewCategory(categoryPayload);
        const { body, statusCode } = await supertest(app)
          .put(`/api/category/${newCategory._id}`)
          .set('token', `Bearer ${adminToken}`)
          .send(updateCategoryPayload);

        expect(statusCode).toBe(200);

        expect(body).toEqual({
          _id: expect.any(String),
          type: updateCategoryPayload.type,
          __v: expect.any(Number),
        });
      });
    });
  });

  describe('get all categories route', () => {
    it('should return a 200 and an array of categories ', async () => {
      await createNewCategory(categoryPayload);
      await createNewCategory(categoryPayload);

      const { body, statusCode } = await supertest(app).get(`/api/category/`);

      expect(statusCode).toBe(200);
      expect(body).toEqual(expect.any(Array));
    });
  });
});
