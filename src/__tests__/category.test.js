const supertest = require('supertest');
const createApp = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createNewCategory } = require('../services/category.service');
const { createNewProduct } = require('../services/product.service');

const mongoose = require('mongoose');
const app = createApp();
const {
  categoryPayload,
  updateCategoryPayload,
} = require('../testUtils/category.testUtils');
const { productPayload } = require('../testUtils/product.testUtils');
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
    describe('given the category id not accept', () => {
      it('should return a 500', async () => {
        const categoryId = 'category123';
        const { body, statusCode } = await supertest(app).get(
          `/api/category/${categoryId}`,
        );
        expect(statusCode).toBe(500);
        expect(body).not.toBeNaN();
      });
    });
    describe('given the category does not exist', () => {
      it('should return 404 status code', async () => {
        const categoryId = new mongoose.Types.ObjectId().toString();
        const { body, statusCode } = await supertest(app).get(
          `/api/category/${categoryId}`,
        );
        expect(statusCode).toBe(404);
        expect(body).toBe('Category not found');
      });
    });
    describe('delete category route', () => {
      describe('given the user is not logged in', () => {
        it('should return a 401', async () => {
          const categoryId = new mongoose.Types.ObjectId().toString();
          const { statusCode, body } = await supertest(app).delete(
            `/api/category/${categoryId}`,
          );
          expect(statusCode).toBe(401);
          expect(body).toEqual('You are not authenticated');
        });
      });

      describe('given the user is logged in', () => {
        it('return 500 status code', async () => {
          const cateId = new mongoose.Types.ObjectId().toString();
          const { statusCode, body } = await supertest(app)
            .delete(`/api/category/${'123'}`)
            .set('token', `Bear ${adminToken}`);
          expect(statusCode).toBe(500);
          expect(body).not.toBeNaN();
        });

        it('should return a 200 and delete the category', async () => {
          const res = await createNewCategory(categoryPayload);
          productPayload.idCategory = res._id;
          const product = await createNewProduct(productPayload);

          //console.log(res.body);
          const deleteRes = await supertest(app)
            .delete(`/api/category/${res._id}`)
            .set('token', `Bear ${adminToken}`);
          expect(deleteRes.statusCode).toBe(200);
          expect(deleteRes.body).not.toBeNaN();
          const { body, statusCode } = await supertest(app).get(
            `/api/product/${product._id}`,
          );
          expect(statusCode).toBe(404);
        });
        it('not delete product from other categories', async () => {
          const res = await createNewCategory(categoryPayload);
          const product = await createNewProduct(productPayload);

          //console.log(res.body);
          const deleteRes = await supertest(app)
            .delete(`/api/category/${res._id}`)
            .set('token', `Bear ${adminToken}`);
          expect(deleteRes.statusCode).toBe(200);
          expect(deleteRes.body).not.toBeNaN();
          const { body, statusCode } = await supertest(app).get(
            `/api/product/${product._id}`,
          );
          expect(statusCode).toBe(200);
        });
      });
    });

    describe('given the category does exist', () => {
      it('should return a 200 status and the category', async () => {
        const category = await createNewCategory(categoryPayload);

        const { body, statusCode } = await supertest(app).get(
          `/api/category/${category._id}`,
        );

        expect(statusCode).toBe(200);
        expect(body.type).toEqual(category.type);
      });
    });
  });
  describe('create category route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode, body } = await supertest(app).post('/api/category');

        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
      });
    });
    describe('given the user is not admin', () => {
      it('should return a 403', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/api/category')
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(403);
        expect(body).toEqual(
          'You are restricted from performing this operation',
        );
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
      it('should return a 401', async () => {
        const newCategory = await createNewCategory(categoryPayload);
        const { statusCode, body } = await supertest(app)
          .put(`/api/category/${newCategory._id}`)
          .send(updateCategoryPayload);

        expect(statusCode).toBe(401);
        expect(body).toEqual('You are not authenticated');
      });
    });
    describe('given the user is not admin', () => {
      it('should return a 403', async () => {
        const categoryId = 'category123';

        const { statusCode, body } = await supertest(app)
          .put(`/api/category/${categoryId}`)
          .set('token', `Bear ${token}`);
        expect(statusCode).toBe(403);
        expect(body).toEqual(
          'You are restricted from performing this operation',
        );
      });
    });

    describe('given the user is logged in', () => {
      describe('invalid category id', () => {
        it('return 500 status code', async () => {
          const cateId = new mongoose.Types.ObjectId().toString();
          const { statusCode, body } = await supertest(app)
            .put(`/api/category/${cateId}`)
            .set('token', `Bearer ${adminToken}`)
            .send(updateCategoryPayload);
          expect(statusCode).toBe(500);
          expect(body).not.toBeNaN();
        });
      });

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
