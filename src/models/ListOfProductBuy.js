const mongoose = require('mongoose');
// Define a MongoDB schema for the ListOfProductBuy collection
//cart --
const ListOfProductBuySchema = new mongoose.Schema(
  {
    idCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
      required: true,
    },
    products: [
      {
        idProduct: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: Number,
      },
    ],
  },
  { timestamps: true },
);

const ListOfProductBuy = mongoose.model(
  'ListOfProductBuy',
  ListOfProductBuySchema,
);

module.exports = ListOfProductBuy;
