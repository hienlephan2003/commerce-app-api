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
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('../routes/auth.route');
const productRouter = require('../routes/product.route');
const categoryRouter = require('../routes/category.route');
const discountRouter = require('../routes/discount.route');
const dotenv = require('dotenv');
const createApp = () => {
  if (stryMutAct_9fa48("414")) {
    {}
  } else {
    stryCov_9fa48("414");
    dotenv.config();
    const app = express();
    app.use(cors(stryMutAct_9fa48("415") ? {} : (stryCov_9fa48("415"), {
      credentials: stryMutAct_9fa48("416") ? false : (stryCov_9fa48("416"), true),
      origin: stryMutAct_9fa48("417") ? false : (stryCov_9fa48("417"), true)
    })));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded(stryMutAct_9fa48("418") ? {} : (stryCov_9fa48("418"), {
      extended: stryMutAct_9fa48("419") ? false : (stryCov_9fa48("419"), true)
    })));
    app.use(stryMutAct_9fa48("420") ? "" : (stryCov_9fa48("420"), '/api'), authRouter);
    app.use(stryMutAct_9fa48("421") ? "" : (stryCov_9fa48("421"), '/api/product'), productRouter);
    app.use(stryMutAct_9fa48("422") ? "" : (stryCov_9fa48("422"), '/api/category'), categoryRouter);
    app.use(stryMutAct_9fa48("423") ? "" : (stryCov_9fa48("423"), '/api/discount'), discountRouter);
    return app;
  }
};
module.exports = createApp;