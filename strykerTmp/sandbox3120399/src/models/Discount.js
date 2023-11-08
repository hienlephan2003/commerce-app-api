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
// Define a MongoDB schema for the Discount collection
const DiscountSchema = new mongoose.Schema(stryMutAct_9fa48("168") ? {} : (stryCov_9fa48("168"), {
  idCustomer: stryMutAct_9fa48("169") ? {} : (stryCov_9fa48("169"), {
    type: String,
    required: stryMutAct_9fa48("170") ? false : (stryCov_9fa48("170"), true)
  }),
  code: stryMutAct_9fa48("171") ? {} : (stryCov_9fa48("171"), {
    type: Date,
    required: stryMutAct_9fa48("172") ? false : (stryCov_9fa48("172"), true)
  }),
  value: stryMutAct_9fa48("173") ? {} : (stryCov_9fa48("173"), {
    type: Number,
    required: stryMutAct_9fa48("174") ? false : (stryCov_9fa48("174"), true)
  }),
  exp_time: stryMutAct_9fa48("175") ? {} : (stryCov_9fa48("175"), {
    type: Date,
    required: stryMutAct_9fa48("176") ? false : (stryCov_9fa48("176"), true)
  }),
  status: stryMutAct_9fa48("177") ? {} : (stryCov_9fa48("177"), {
    type: String,
    required: stryMutAct_9fa48("178") ? false : (stryCov_9fa48("178"), true)
  }),
  isExpire: stryMutAct_9fa48("179") ? {} : (stryCov_9fa48("179"), {
    type: String,
    enum: stryMutAct_9fa48("180") ? [] : (stryCov_9fa48("180"), [stryMutAct_9fa48("181") ? "" : (stryCov_9fa48("181"), 'Expired'), stryMutAct_9fa48("182") ? "" : (stryCov_9fa48("182"), 'Unexpired')])
  })
}));
DiscountSchema.pre(stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), 'save'), function (next) {
  if (stryMutAct_9fa48("184")) {
    {}
  } else {
    stryCov_9fa48("184");
    if (stryMutAct_9fa48("188") ? this.exp_time < new Date() : stryMutAct_9fa48("187") ? this.exp_time > new Date() : stryMutAct_9fa48("186") ? false : stryMutAct_9fa48("185") ? true : (stryCov_9fa48("185", "186", "187", "188"), this.exp_time >= new Date())) {
      if (stryMutAct_9fa48("189")) {
        {}
      } else {
        stryCov_9fa48("189");
        this.isExpire = stryMutAct_9fa48("190") ? "" : (stryCov_9fa48("190"), 'Unexpired');
      }
    } else {
      if (stryMutAct_9fa48("191")) {
        {}
      } else {
        stryCov_9fa48("191");
        this.isExpire = stryMutAct_9fa48("192") ? "" : (stryCov_9fa48("192"), 'Expired');
      }
    }
    next();
  }
});
const Discount = mongoose.model(stryMutAct_9fa48("193") ? "" : (stryCov_9fa48("193"), 'Discount'), DiscountSchema);
module.exports = Discount;