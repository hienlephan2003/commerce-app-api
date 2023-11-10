const { default: mongoose } = require('mongoose');

const orderPayload = {
  items: [
    {
      idProduct: '65472d23b4212d669cd73b92',
    },
    {
      idProduct: '6549bf10ce23c7a10ca6ec9e',
    },
  ],
  discounts: [],
  paymentType: 'Online',
  receiverInfomation: new mongoose.Types.ObjectId().toString(),
};
updateOrderPayload = {};
module.exports = { orderPayload };
