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
// Define a MongoDB schema for the ReceiverInfomation collection
const ReceiverInfomationSchema = new mongoose.Schema(stryMutAct_9fa48("307") ? {} : (stryCov_9fa48("307"), {
  idCustomer: stryMutAct_9fa48("308") ? {} : (stryCov_9fa48("308"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("309") ? "" : (stryCov_9fa48("309"), 'Person'),
    required: stryMutAct_9fa48("310") ? false : (stryCov_9fa48("310"), true)
  }),
  name: stryMutAct_9fa48("311") ? {} : (stryCov_9fa48("311"), {
    type: String,
    require: stryMutAct_9fa48("312") ? false : (stryCov_9fa48("312"), true)
  }),
  address: stryMutAct_9fa48("313") ? {} : (stryCov_9fa48("313"), {
    type: String,
    require: stryMutAct_9fa48("314") ? false : (stryCov_9fa48("314"), true)
  }),
  phoneNumber: stryMutAct_9fa48("315") ? {} : (stryCov_9fa48("315"), {
    type: Number,
    required: stryMutAct_9fa48("316") ? false : (stryCov_9fa48("316"), true)
  }),
  Note: stryMutAct_9fa48("317") ? {} : (stryCov_9fa48("317"), {
    type: String,
    require: stryMutAct_9fa48("318") ? true : (stryCov_9fa48("318"), false)
  })
}));
const ReceiverInfomation = mongoose.model(stryMutAct_9fa48("319") ? "" : (stryCov_9fa48("319"), 'ReceiverInfomation'), ReceiverInfomationSchema);
module.exports = ReceiverInfomation;