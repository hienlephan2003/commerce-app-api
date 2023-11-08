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
const mongoose = require('mongoose');
const app = createApp();
const Person = require('../models/Person.js');
const CryptoJs = require('crypto-js');
const userId = stryMutAct_9fa48("424") ? "" : (stryCov_9fa48("424"), '6544fd3b6b2595b15c611e73');
const secrect = stryMutAct_9fa48("425") ? "" : (stryCov_9fa48("425"), 'commerapp');
module.exports = userPayload = stryMutAct_9fa48("426") ? {} : (stryCov_9fa48("426"), {
  _id: userId,
  email: stryMutAct_9fa48("427") ? "" : (stryCov_9fa48("427"), 'jane.doe@example.com'),
  name: stryMutAct_9fa48("428") ? "" : (stryCov_9fa48("428"), 'Jane Doe'),
  role: 1
});
const authValidPayload = stryMutAct_9fa48("429") ? {} : (stryCov_9fa48("429"), {
  userName: stryMutAct_9fa48("430") ? "" : (stryCov_9fa48("430"), 'phanhien2003'),
  password: stryMutAct_9fa48("431") ? "" : (stryCov_9fa48("431"), 'hien2003'),
  idRole: 1
});
describe(stryMutAct_9fa48("432") ? "" : (stryCov_9fa48("432"), 'auth'), () => {
  if (stryMutAct_9fa48("433")) {
    {}
  } else {
    stryCov_9fa48("433");
    beforeAll(async () => {
      if (stryMutAct_9fa48("434")) {
        {}
      } else {
        stryCov_9fa48("434");
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
      }
    });
    afterAll(async () => {
      if (stryMutAct_9fa48("435")) {
        {}
      } else {
        stryCov_9fa48("435");
        await mongoose.disconnect();
        await mongoose.connection.close();
      }
    });
    describe(stryMutAct_9fa48("436") ? "" : (stryCov_9fa48("436"), 'register route'), () => {
      if (stryMutAct_9fa48("437")) {
        {}
      } else {
        stryCov_9fa48("437");
        describe(stryMutAct_9fa48("438") ? "" : (stryCov_9fa48("438"), 'given the username does not exist'), () => {
          if (stryMutAct_9fa48("439")) {
            {}
          } else {
            stryCov_9fa48("439");
            it(stryMutAct_9fa48("440") ? "" : (stryCov_9fa48("440"), 'should return a 400'), async () => {
              if (stryMutAct_9fa48("441")) {
                {}
              } else {
                stryCov_9fa48("441");
                const authPayload = stryMutAct_9fa48("442") ? {} : (stryCov_9fa48("442"), {
                  password: stryMutAct_9fa48("443") ? "" : (stryCov_9fa48("443"), '123'),
                  idRole: 1
                });
                await supertest(app).post(stryMutAct_9fa48("444") ? `` : (stryCov_9fa48("444"), `/api/register/`)).send(authPayload).expect(500);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("445") ? "" : (stryCov_9fa48("445"), 'given the password does not exist'), () => {
          if (stryMutAct_9fa48("446")) {
            {}
          } else {
            stryCov_9fa48("446");
            it(stryMutAct_9fa48("447") ? "" : (stryCov_9fa48("447"), 'should return a 500'), async () => {
              if (stryMutAct_9fa48("448")) {
                {}
              } else {
                stryCov_9fa48("448");
                const authPayload = stryMutAct_9fa48("449") ? {} : (stryCov_9fa48("449"), {
                  userName: stryMutAct_9fa48("450") ? "" : (stryCov_9fa48("450"), 'test'),
                  idRole: 1
                });
                await supertest(app).post(stryMutAct_9fa48("451") ? `` : (stryCov_9fa48("451"), `/api/register/`)).send(authPayload).expect(500);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("452") ? "" : (stryCov_9fa48("452"), 'given the valid register'), () => {
          if (stryMutAct_9fa48("453")) {
            {}
          } else {
            stryCov_9fa48("453");
            it(stryMutAct_9fa48("454") ? "" : (stryCov_9fa48("454"), 'should return success and 200'), async () => {
              if (stryMutAct_9fa48("455")) {
                {}
              } else {
                stryCov_9fa48("455");
                const {
                  statusCode
                } = await supertest(app).post(stryMutAct_9fa48("456") ? "" : (stryCov_9fa48("456"), '/api/register')).send(authValidPayload);
                expect(statusCode).toBe(200);
              }
            });
          }
        });
      }
    });
    describe(stryMutAct_9fa48("457") ? "" : (stryCov_9fa48("457"), 'login route'), () => {
      if (stryMutAct_9fa48("458")) {
        {}
      } else {
        stryCov_9fa48("458");
        describe(stryMutAct_9fa48("459") ? "" : (stryCov_9fa48("459"), 'given the username not exist'), () => {
          if (stryMutAct_9fa48("460")) {
            {}
          } else {
            stryCov_9fa48("460");
            it(stryMutAct_9fa48("461") ? "" : (stryCov_9fa48("461"), 'should return a 401'), async () => {
              if (stryMutAct_9fa48("462")) {
                {}
              } else {
                stryCov_9fa48("462");
                const authPayload = stryMutAct_9fa48("463") ? {} : (stryCov_9fa48("463"), {
                  userName: stryMutAct_9fa48("464") ? "" : (stryCov_9fa48("464"), 'test')
                });
                const {
                  statusCode
                } = await supertest(app).post(stryMutAct_9fa48("465") ? "" : (stryCov_9fa48("465"), '/api/login')).send(authPayload);
                expect(statusCode).toBe(401);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("466") ? "" : (stryCov_9fa48("466"), 'not given the password'), () => {
          if (stryMutAct_9fa48("467")) {
            {}
          } else {
            stryCov_9fa48("467");
            it(stryMutAct_9fa48("468") ? "" : (stryCov_9fa48("468"), 'should return a 401'), async () => {
              if (stryMutAct_9fa48("469")) {
                {}
              } else {
                stryCov_9fa48("469");
                const authPayload = stryMutAct_9fa48("470") ? {} : (stryCov_9fa48("470"), {
                  userName: stryMutAct_9fa48("471") ? "" : (stryCov_9fa48("471"), 'test')
                });
                const {
                  statusCode
                } = await supertest(app).post(stryMutAct_9fa48("472") ? "" : (stryCov_9fa48("472"), '/api/login')).send(authPayload);
                expect(statusCode).toBe(401);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("473") ? "" : (stryCov_9fa48("473"), 'given a valid login request'), () => {
          if (stryMutAct_9fa48("474")) {
            {}
          } else {
            stryCov_9fa48("474");
            it(stryMutAct_9fa48("475") ? "" : (stryCov_9fa48("475"), 'should return a 200 and a access token'), async () => {
              if (stryMutAct_9fa48("476")) {
                {}
              } else {
                stryCov_9fa48("476");
                const newPerson = new Person(stryMutAct_9fa48("477") ? {} : (stryCov_9fa48("477"), {
                  userName: authValidPayload.userName,
                  password: CryptoJs.AES.encrypt(authValidPayload.password, process.env.SECRET).toString(),
                  idRole: authValidPayload.idRole
                }));
                const {
                  statusCode,
                  body
                } = await supertest(app).post(stryMutAct_9fa48("478") ? "" : (stryCov_9fa48("478"), '/api/login')).send(authValidPayload);
                expect(statusCode).toBe(200);
              }
            });
          }
        });
      }
    });
  }
});