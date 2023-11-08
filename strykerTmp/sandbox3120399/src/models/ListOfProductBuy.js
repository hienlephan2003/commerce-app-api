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
// Define a MongoDB schema for the ListOfProductBuy collection
const ListOfProductBuySchema = new mongoose.Schema(stryMutAct_9fa48("194") ? {} : (stryCov_9fa48("194"), {
  idCustomer: stryMutAct_9fa48("195") ? {} : (stryCov_9fa48("195"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("196") ? "" : (stryCov_9fa48("196"), 'Person'),
    required: stryMutAct_9fa48("197") ? false : (stryCov_9fa48("197"), true)
  }),
  idProduct: stryMutAct_9fa48("198") ? {} : (stryCov_9fa48("198"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("199") ? "" : (stryCov_9fa48("199"), 'Product'),
    required: stryMutAct_9fa48("200") ? false : (stryCov_9fa48("200"), true)
  }),
  idReceipt: stryMutAct_9fa48("201") ? {} : (stryCov_9fa48("201"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("202") ? "" : (stryCov_9fa48("202"), 'Receipt'),
    required: stryMutAct_9fa48("203") ? false : (stryCov_9fa48("203"), true)
  })
}), stryMutAct_9fa48("204") ? {} : (stryCov_9fa48("204"), {
  timestamps: stryMutAct_9fa48("205") ? false : (stryCov_9fa48("205"), true)
}));
const ListOfProductBuy = mongoose.model(stryMutAct_9fa48("206") ? "" : (stryCov_9fa48("206"), 'ListOfProductBuy'), ListOfProductBuySchema);
module.exports = ListOfProductBuy;