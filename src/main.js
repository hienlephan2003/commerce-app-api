const dotenv = require('dotenv');
const mongoose = require('mongoose');
const createApp = require('./utils/server');

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database is connected'))
  .catch((err) => {
    console.log(err);
  });
const app = createApp();
app.listen(process.env.PORT || 3000, () =>
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`),
);
