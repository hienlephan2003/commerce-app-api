const mongoose = require('mongoose');
// Define a MongoDB schema for the ListOfProductBuy collection
const ListOfProductBuySchema = new mongoose.Schema(
  {
    idCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
      required: true,
    },
    idProduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    idReceipt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Receipt',
      required: true,
    },
  },
  { timestamps: true },
);

const ListOfProductBuy = mongoose.model(
  'ListOfProductBuy',
  ListOfProductBuySchema,
);

module.exports = ListOfProductBuy;
