const mongoose = require('mongoose');
// Define a MongoDB schema for the Discount collection
const DiscountSchema = new mongoose.Schema({
  idCustomer: { type: String, required: true },
  code: { type: Date, required: true },
  value: { type: Number, required: true },
  exp_time: { type: Date, required: true },
  status: { type: String, required: true },
  isExpire: {
    type: String,
    enum: ['Expired', 'Unexpired'],
  },
});
DiscountSchema.pre('save', function (next) {
  if (this.exp_time >= new Date()) {
    this.isExpire = 'Unexpired';
  } else {
    this.isExpire = 'Expired';
  }
  next();
});

const Discount = mongoose.model('Discount', DiscountSchema);

module.exports = Discount;
