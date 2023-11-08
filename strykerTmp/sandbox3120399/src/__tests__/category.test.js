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
const {
  createNewCategory
} = require('../services/category.service');
const mongoose = require('mongoose');
const app = createApp();
const jwt = require('jsonwebtoken');
const secrect = stryMutAct_9fa48("479") ? "" : (stryCov_9fa48("479"), 'commerapp');
const userId = new mongoose.Types.ObjectId().toString();
module.exports = userPayload = stryMutAct_9fa48("480") ? {} : (stryCov_9fa48("480"), {
  _id: userId,
  email: stryMutAct_9fa48("481") ? "" : (stryCov_9fa48("481"), 'jane.doe@example.com'),
  name: stryMutAct_9fa48("482") ? "" : (stryCov_9fa48("482"), 'Jane Doe'),
  role: 1
});
stryMutAct_9fa48("483") ? `Stryker was here!` : (stryCov_9fa48("483"), ``);
module.exports = categoryPayload = stryMutAct_9fa48("484") ? {} : (stryCov_9fa48("484"), {
  type: stryMutAct_9fa48("485") ? "" : (stryCov_9fa48("485"), 'Laptop')
});
describe(stryMutAct_9fa48("486") ? "" : (stryCov_9fa48("486"), 'category'), () => {
  if (stryMutAct_9fa48("487")) {
    {}
  } else {
    stryCov_9fa48("487");
    beforeAll(async () => {
      if (stryMutAct_9fa48("488")) {
        {}
      } else {
        stryCov_9fa48("488");
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
      }
    });
    afterAll(async () => {
      if (stryMutAct_9fa48("489")) {
        {}
      } else {
        stryCov_9fa48("489");
        await mongoose.disconnect();
        await mongoose.connection.close();
      }
    });
    describe(stryMutAct_9fa48("490") ? "" : (stryCov_9fa48("490"), 'get category route'), () => {
      if (stryMutAct_9fa48("491")) {
        {}
      } else {
        stryCov_9fa48("491");
        describe(stryMutAct_9fa48("492") ? "" : (stryCov_9fa48("492"), 'given the category does not exist'), () => {
          if (stryMutAct_9fa48("493")) {
            {}
          } else {
            stryCov_9fa48("493");
            it(stryMutAct_9fa48("494") ? "" : (stryCov_9fa48("494"), 'should return a 500'), async () => {
              if (stryMutAct_9fa48("495")) {
                {}
              } else {
                stryCov_9fa48("495");
                const categoryId = stryMutAct_9fa48("496") ? "" : (stryCov_9fa48("496"), 'category123');
                await supertest(app).get(stryMutAct_9fa48("497") ? `` : (stryCov_9fa48("497"), `/api/category/${categoryId}`)).expect(500);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("498") ? "" : (stryCov_9fa48("498"), 'given the category does exist'), () => {
          if (stryMutAct_9fa48("499")) {
            {}
          } else {
            stryCov_9fa48("499");
            it(stryMutAct_9fa48("500") ? "" : (stryCov_9fa48("500"), 'should return a 200 status and the category'), async () => {
              if (stryMutAct_9fa48("501")) {
                {}
              } else {
                stryCov_9fa48("501");
                const category = await createNewCategory(categoryPayload);
                const {
                  body,
                  statusCode
                } = await supertest(app).get(stryMutAct_9fa48("502") ? `` : (stryCov_9fa48("502"), `/api/category/${category._id}`));
                expect(statusCode).toBe(200);
              }
            });
          }
        });
      }
    });
    describe(stryMutAct_9fa48("503") ? "" : (stryCov_9fa48("503"), 'create category route'), () => {
      if (stryMutAct_9fa48("504")) {
        {}
      } else {
        stryCov_9fa48("504");
        describe(stryMutAct_9fa48("505") ? "" : (stryCov_9fa48("505"), 'given the user is not logged in'), () => {
          if (stryMutAct_9fa48("506")) {
            {}
          } else {
            stryCov_9fa48("506");
            it(stryMutAct_9fa48("507") ? "" : (stryCov_9fa48("507"), 'should return a 403'), async () => {
              if (stryMutAct_9fa48("508")) {
                {}
              } else {
                stryCov_9fa48("508");
                const {
                  statusCode
                } = await supertest(app).post(stryMutAct_9fa48("509") ? "" : (stryCov_9fa48("509"), '/api/category'));
                expect(statusCode).toBe(401);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("510") ? "" : (stryCov_9fa48("510"), 'given the user is logged in'), () => {
          if (stryMutAct_9fa48("511")) {
            {}
          } else {
            stryCov_9fa48("511");
            it(stryMutAct_9fa48("512") ? "" : (stryCov_9fa48("512"), 'should return a 200 and create the category'), async () => {
              if (stryMutAct_9fa48("513")) {
                {}
              } else {
                stryCov_9fa48("513");
                const token = jwt.sign(stryMutAct_9fa48("514") ? {} : (stryCov_9fa48("514"), {
                  id: userPayload._id,
                  role: userPayload.role
                }), secrect, stryMutAct_9fa48("515") ? {} : (stryCov_9fa48("515"), {
                  expiresIn: stryMutAct_9fa48("516") ? "" : (stryCov_9fa48("516"), '21d')
                }));
                const res = await supertest(app).post(stryMutAct_9fa48("517") ? "" : (stryCov_9fa48("517"), '/api/category')).set(stryMutAct_9fa48("518") ? "" : (stryCov_9fa48("518"), 'token'), stryMutAct_9fa48("519") ? `` : (stryCov_9fa48("519"), `Bear ${token}`)).send(categoryPayload);
                console.log(res.body);
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual(stryMutAct_9fa48("520") ? {} : (stryCov_9fa48("520"), {
                  _id: expect.any(String),
                  type: stryMutAct_9fa48("521") ? "" : (stryCov_9fa48("521"), 'Laptop')
                }));
              }
            });
          }
        });
      }
    });
  }
});