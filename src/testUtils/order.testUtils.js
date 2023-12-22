const { default: mongoose } = require('mongoose');

const orderPayload = {
  items: [
    {
      idProduct: '65472d23b4212d669cd73b92',
      idCategory: '654501183e937734f982c3a4',
    },
    {
      idProduct: '6549bf10ce23c7a10ca6ec9e',
      idCategory: '654501183e937734f982c3a4',
    },
  ],
  discounts: [],
  paymentType: 'Online',
  receiverInfomation: new mongoose.Types.ObjectId().toString(),
};
updateOrderPayload = {};
module.exports = { orderPayload };
