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
const PersonSchema = new mongoose.Schema(stryMutAct_9fa48("237") ? {} : (stryCov_9fa48("237"), {
  userName: stryMutAct_9fa48("238") ? {} : (stryCov_9fa48("238"), {
    type: String,
    required: stryMutAct_9fa48("239") ? false : (stryCov_9fa48("239"), true)
  }),
  password: stryMutAct_9fa48("240") ? {} : (stryCov_9fa48("240"), {
    type: String,
    required: stryMutAct_9fa48("241") ? false : (stryCov_9fa48("241"), true)
  }),
  name: stryMutAct_9fa48("242") ? {} : (stryCov_9fa48("242"), {
    type: String
  }),
  cmnd_passport: stryMutAct_9fa48("243") ? {} : (stryCov_9fa48("243"), {
    type: String
  }),
  phoneNumber: stryMutAct_9fa48("244") ? {} : (stryCov_9fa48("244"), {
    type: Number
  }),
  birthday: Date,
  address: String,
  email: String,
  avatar: String,
  idRole: Number,
  gender: String,
  idCart: Number
}));
const Person = mongoose.model(stryMutAct_9fa48("245") ? "" : (stryCov_9fa48("245"), 'Person'), PersonSchema);
module.exports = Person;