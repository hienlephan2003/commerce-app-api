const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('../routes/auth.route');
const productRouter = require('../routes/product.route');
const categoryRouter = require('../routes/category.route');
const discountRouter = require('../routes/discount.route');
const dotenv = require('dotenv');

const createApp = () => {
  dotenv.config();
  const app = express();
  app.use(cors({ credentials: true, origin: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', authRouter);
  app.use('/api/product', productRouter);
  app.use('/api/category', categoryRouter);
  app.use('/api/discount', discountRouter);
  return app;
};

module.exports = createApp;
