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
// Define a MongoDB schema for the PaymentInfomation collection
const paymentInfomationSchema = new mongoose.Schema(stryMutAct_9fa48("226") ? {} : (stryCov_9fa48("226"), {
  idCustomer: stryMutAct_9fa48("227") ? {} : (stryCov_9fa48("227"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("228") ? "" : (stryCov_9fa48("228"), 'Person'),
    required: stryMutAct_9fa48("229") ? false : (stryCov_9fa48("229"), true)
  }),
  cardNumber: stryMutAct_9fa48("230") ? {} : (stryCov_9fa48("230"), {
    type: String,
    required: stryMutAct_9fa48("231") ? false : (stryCov_9fa48("231"), true)
  }),
  expDate: stryMutAct_9fa48("232") ? {} : (stryCov_9fa48("232"), {
    type: Date,
    required: stryMutAct_9fa48("233") ? false : (stryCov_9fa48("233"), true)
  }),
  ownName: stryMutAct_9fa48("234") ? {} : (stryCov_9fa48("234"), {
    type: String,
    required: stryMutAct_9fa48("235") ? false : (stryCov_9fa48("235"), true)
  }),
  csv: String
}));
const PaymentInfomation = mongoose.model(stryMutAct_9fa48("236") ? "" : (stryCov_9fa48("236"), 'PaymentInfomation'), paymentInfomationSchema);
module.exports = PaymentInfomation;