const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createNewCategory } = require('../services/category.service');
const mongoose = require('mongoose');
const app = createApp();
const jwt = require('jsonwebtoken');
const secrect = 'commerapp';

const userId = new mongoose.Types.ObjectId().toString();
module.exports = userPayload = {
  _id: userId,
  email: 'jane.doe@example.com',
  name: 'Jane Doe',
  role: 1,
};
``;
module.exports = categoryPayload = {
  type: 'Laptop',
};

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
        const token = jwt.sign(
          {
            id: userPayload._id,
            role: userPayload.role,
          },
          secrect,
          { expiresIn: '21d' },
        );
        const res = await supertest(app)
          .post('/api/category')
          .set('token', `Bear ${token}`)
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
});
