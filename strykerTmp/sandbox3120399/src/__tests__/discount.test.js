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
const supertest = require('supertest');
const createApp = require('../utils/server');
const {
  MongoMemoryServer
} = require('mongodb-memory-server');
const discountService = require('../services/discount.service');
const mongoose = require('mongoose');
const app = createApp();
const jwt = require('jsonwebtoken');
module.exports = discountPayload = stryMutAct_9fa48("522") ? {} : (stryCov_9fa48("522"), {
  idCustomer: stryMutAct_9fa48("523") ? "" : (stryCov_9fa48("523"), 'idCustomer1'),
  code: new Date().getDate(),
  value: 10,
  exp_time: stryMutAct_9fa48("524") ? new Date().getDate() - 2 : (stryCov_9fa48("524"), new Date().getDate() + 2),
  status: stryMutAct_9fa48("525") ? "Stryker was here!" : (stryCov_9fa48("525"), '')
});
describe(stryMutAct_9fa48("526") ? "" : (stryCov_9fa48("526"), 'discount'), () => {
  if (stryMutAct_9fa48("527")) {
    {}
  } else {
    stryCov_9fa48("527");
    beforeAll(async () => {
      if (stryMutAct_9fa48("528")) {
        {}
      } else {
        stryCov_9fa48("528");
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
      }
    });
    afterAll(async () => {
      if (stryMutAct_9fa48("529")) {
        {}
      } else {
        stryCov_9fa48("529");
        await mongoose.disconnect();
        await mongoose.connection.close();
      }
    });
    describe(stryMutAct_9fa48("530") ? "" : (stryCov_9fa48("530"), 'Get All Discounts'), () => {
      if (stryMutAct_9fa48("531")) {
        {}
      } else {
        stryCov_9fa48("531");
        describe(stryMutAct_9fa48("532") ? "" : (stryCov_9fa48("532"), 'Discounts are found'), () => {
          if (stryMutAct_9fa48("533")) {
            {}
          } else {
            stryCov_9fa48("533");
            it(stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), 'Should return 200 status code and the discounts'), async () => {
              if (stryMutAct_9fa48("535")) {
                {}
              } else {
                stryCov_9fa48("535");
                await supertest(app).get(stryMutAct_9fa48("536") ? "" : (stryCov_9fa48("536"), '/api/discounts')).expect(200);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("537") ? "" : (stryCov_9fa48("537"), 'Discounts are not found'), () => {
          // it('Should return a 500 status code');
        });
      }
    });
  }
});