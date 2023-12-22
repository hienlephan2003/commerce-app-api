const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('../routes/auth.route');
const productRouter = require('../routes/product.route');
const categoryRouter = require('../routes/category.route');
const discountRouter = require('../routes/discount.route');
const orderRouter = require('../routes/order.route');
const deliveryRouter = require('../routes/delivery.route');
const paymentRouter = require('../routes/payment.route');
const userRouter = require('../routes/user.route');
const listOfProductBuyRouter = require('../routes/listOfProductsBuy.route');
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
  app.use('/api/user', userRouter);
  app.use('/api/order', orderRouter);
  app.use('/api/payment', paymentRouter);
  app.use('/api/delivery', deliveryRouter);
  app.use('/api/listOfProductBuy', listOfProductBuyRouter);

  return app;
};

module.exports = createApp;
