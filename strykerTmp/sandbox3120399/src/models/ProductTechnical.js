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
// Define a MongoDB schema for the ProductTechnical collection
const ProductTechnicalSchema = new mongoose.Schema(stryMutAct_9fa48("272") ? {} : (stryCov_9fa48("272"), {
  idProduct: stryMutAct_9fa48("273") ? {} : (stryCov_9fa48("273"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("274") ? "" : (stryCov_9fa48("274"), 'Product'),
    required: stryMutAct_9fa48("275") ? false : (stryCov_9fa48("275"), true)
  }),
  nameOfAttribute: stryMutAct_9fa48("276") ? {} : (stryCov_9fa48("276"), {
    type: String,
    require: stryMutAct_9fa48("277") ? false : (stryCov_9fa48("277"), true)
  }),
  content: stryMutAct_9fa48("278") ? {} : (stryCov_9fa48("278"), {
    type: String,
    require: stryMutAct_9fa48("279") ? false : (stryCov_9fa48("279"), true)
  }),
  uses: stryMutAct_9fa48("280") ? {} : (stryCov_9fa48("280"), {
    type: String,
    require: stryMutAct_9fa48("281") ? false : (stryCov_9fa48("281"), true)
  }),
  material: stryMutAct_9fa48("282") ? {} : (stryCov_9fa48("282"), {
    type: String,
    require: stryMutAct_9fa48("283") ? false : (stryCov_9fa48("283"), true)
  }),
  exps: Number
}));
const ProductTechnical = mongoose.model(stryMutAct_9fa48("284") ? "" : (stryCov_9fa48("284"), 'ProductTechnical'), ProductTechnicalSchema);
module.exports = ProductTechnical;