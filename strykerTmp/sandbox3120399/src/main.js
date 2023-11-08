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
const createApp = require('./utils/server');
mongoose.connect(stryMutAct_9fa48("117") ? "" : (stryCov_9fa48("117"), 'mongodb+srv://commercedb:commercedb@cluster0.llnc9p0.mongodb.net/')).then(stryMutAct_9fa48("118") ? () => undefined : (stryCov_9fa48("118"), () => console.log(stryMutAct_9fa48("119") ? "" : (stryCov_9fa48("119"), 'Database is connected')))).catch(err => {
  if (stryMutAct_9fa48("120")) {
    {}
  } else {
    stryCov_9fa48("120");
    console.log(err);
  }
});
const app = createApp();
app.listen(stryMutAct_9fa48("123") ? process.env.PORT && 3000 : stryMutAct_9fa48("122") ? false : stryMutAct_9fa48("121") ? true : (stryCov_9fa48("121", "122", "123"), process.env.PORT || 3000), stryMutAct_9fa48("124") ? () => undefined : (stryCov_9fa48("124"), () => console.log(stryMutAct_9fa48("125") ? `` : (stryCov_9fa48("125"), `Example app listening on port ${stryMutAct_9fa48("128") ? process.env.PORT && 3000 : stryMutAct_9fa48("127") ? false : stryMutAct_9fa48("126") ? true : (stryCov_9fa48("126", "127", "128"), process.env.PORT || 3000)}!`))));