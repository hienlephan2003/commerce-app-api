module.exports = {
  discountPayload: {
    idCustomer: 'idCustomer2',
    code: new Date().getDate(),
    value: 10,
    exp_time: new Date().getDate() + 2,
    status: 'Ready',
  },
  updateDiscountPayload: {
    status: 'Used',
  },
};
