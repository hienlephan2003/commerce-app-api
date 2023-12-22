const mongoose = require('mongoose');
const createApp = require('./utils/server');

mongoose
  .connect('mongodb+srv://commercedb:commercedb@cluster0.llnc9p0.mongodb.net/')
  .then(() => console.log('Database is connected'))
  .catch((err) => {
    console.log(err);
  });

const app = createApp();

app.listen(process.env.PORT || 64679, () =>
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`),
);
