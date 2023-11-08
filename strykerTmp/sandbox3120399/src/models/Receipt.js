function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
const mongoose = require('mongoose');
// Define a MongoDB schema for the Receipt collection
const ReceiptSchema = new mongoose.Schema(stryMutAct_9fa48("285") ? {} : (stryCov_9fa48("285"), {
  idCustomer: stryMutAct_9fa48("286") ? {} : (stryCov_9fa48("286"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("287") ? "" : (stryCov_9fa48("287"), 'Customer'),
    required: stryMutAct_9fa48("288") ? false : (stryCov_9fa48("288"), true)
  }),
  paymentInfo: stryMutAct_9fa48("289") ? {} : (stryCov_9fa48("289"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("290") ? "" : (stryCov_9fa48("290"), 'PaymentInfomation'),
    required: stryMutAct_9fa48("291") ? false : (stryCov_9fa48("291"), true)
  }),
  receiverInfo: stryMutAct_9fa48("292") ? {} : (stryCov_9fa48("292"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("293") ? "" : (stryCov_9fa48("293"), 'ReceiverInfomation'),
    required: stryMutAct_9fa48("294") ? false : (stryCov_9fa48("294"), true)
  }),
  typeOfDelivery: stryMutAct_9fa48("295") ? {} : (stryCov_9fa48("295"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("296") ? "" : (stryCov_9fa48("296"), 'Delivery'),
    required: stryMutAct_9fa48("297") ? false : (stryCov_9fa48("297"), true)
  }),
  totalCost: stryMutAct_9fa48("298") ? {} : (stryCov_9fa48("298"), {
    type: Number,
    required: stryMutAct_9fa48("299") ? false : (stryCov_9fa48("299"), true)
  }),
  date: stryMutAct_9fa48("300") ? {} : (stryCov_9fa48("300"), {
    type: Date,
    required: stryMutAct_9fa48("301") ? false : (stryCov_9fa48("301"), true)
  }),
  status: stryMutAct_9fa48("302") ? {} : (stryCov_9fa48("302"), {
    type: Number
  }),
  saleValue: Number,
  idDiscount: stryMutAct_9fa48("303") ? {} : (stryCov_9fa48("303"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("304") ? "" : (stryCov_9fa48("304"), 'Discount'),
    required: stryMutAct_9fa48("305") ? false : (stryCov_9fa48("305"), true)
  })
}));
const Receipt = mongoose.model(stryMutAct_9fa48("306") ? "" : (stryCov_9fa48("306"), 'Receipt'), ReceiptSchema);
module.exports = Receipt;