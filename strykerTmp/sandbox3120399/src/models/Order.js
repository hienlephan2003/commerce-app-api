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
// Define a MongoDB schema for the Order collection
const OrderSchema = new mongoose.Schema(stryMutAct_9fa48("207") ? {} : (stryCov_9fa48("207"), {
  idCustomer: stryMutAct_9fa48("208") ? {} : (stryCov_9fa48("208"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("209") ? "" : (stryCov_9fa48("209"), 'Person'),
    required: stryMutAct_9fa48("210") ? false : (stryCov_9fa48("210"), true)
  }),
  idProduct: stryMutAct_9fa48("211") ? {} : (stryCov_9fa48("211"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("212") ? "" : (stryCov_9fa48("212"), 'Product'),
    required: stryMutAct_9fa48("213") ? false : (stryCov_9fa48("213"), true)
  }),
  quantity: stryMutAct_9fa48("214") ? {} : (stryCov_9fa48("214"), {
    type: Number,
    required: stryMutAct_9fa48("215") ? false : (stryCov_9fa48("215"), true)
  }),
  idReceipt: stryMutAct_9fa48("216") ? {} : (stryCov_9fa48("216"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("217") ? "" : (stryCov_9fa48("217"), 'Receipt'),
    required: stryMutAct_9fa48("218") ? false : (stryCov_9fa48("218"), true)
  }),
  date: stryMutAct_9fa48("219") ? {} : (stryCov_9fa48("219"), {
    type: Date,
    required: stryMutAct_9fa48("220") ? false : (stryCov_9fa48("220"), true)
  }),
  status: stryMutAct_9fa48("221") ? {} : (stryCov_9fa48("221"), {
    type: Number,
    required: stryMutAct_9fa48("222") ? false : (stryCov_9fa48("222"), true)
  })
}), stryMutAct_9fa48("223") ? {} : (stryCov_9fa48("223"), {
  timestamps: stryMutAct_9fa48("224") ? false : (stryCov_9fa48("224"), true)
}));
const Order = mongoose.model(stryMutAct_9fa48("225") ? "" : (stryCov_9fa48("225"), 'Order'), OrderSchema);
module.exports = Order;