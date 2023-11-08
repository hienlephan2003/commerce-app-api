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
  createNewProduct
} = require('../services/product.service');
const mongoose = require('mongoose');
const app = createApp();
const jwt = require('jsonwebtoken');
const userId = stryMutAct_9fa48("538") ? "" : (stryCov_9fa48("538"), '6544fd3b6b2595b15c611e73');
const productId = new mongoose.Types.ObjectId().toString();
const secrect = stryMutAct_9fa48("539") ? "" : (stryCov_9fa48("539"), 'commerapp');
module.exports = userPayload = stryMutAct_9fa48("540") ? {} : (stryCov_9fa48("540"), {
  _id: userId,
  email: stryMutAct_9fa48("541") ? "" : (stryCov_9fa48("541"), 'jane.doe@example.com'),
  name: stryMutAct_9fa48("542") ? "" : (stryCov_9fa48("542"), 'Jane Doe'),
  role: 1
});
stryMutAct_9fa48("543") ? `Stryker was here!` : (stryCov_9fa48("543"), ``);
module.exports = productPayload = stryMutAct_9fa48("544") ? {} : (stryCov_9fa48("544"), {
  name: stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), 'test'),
  nameOfManufacturer: stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), 'HP'),
  descriptionInformation: stryMutAct_9fa48("547") ? "" : (stryCov_9fa48("547"), 'Laptop mới 100%'),
  technicalInformation: stryMutAct_9fa48("548") ? "" : (stryCov_9fa48("548"), 'Ram 38G'),
  price: 38000000,
  status: 1,
  idCategory: stryMutAct_9fa48("549") ? "" : (stryCov_9fa48("549"), '654501183e937734f982c3a4'),
  thumbnailimage: stryMutAct_9fa48("550") ? "" : (stryCov_9fa48("550"), 'https://product.hstatic.net/200000722513/product/8u6l9pa_6f2f6ba3187e4ad599dc021d3f41b307.png')
});
const updateProductPayload = stryMutAct_9fa48("551") ? {} : (stryCov_9fa48("551"), {
  name: stryMutAct_9fa48("552") ? "" : (stryCov_9fa48("552"), 'test2'),
  nameOfManufacturer: stryMutAct_9fa48("553") ? "" : (stryCov_9fa48("553"), 'H2P'),
  descriptionInformation: stryMutAct_9fa48("554") ? "" : (stryCov_9fa48("554"), 'Laptop mới 1020%'),
  technicalInformation: stryMutAct_9fa48("555") ? "" : (stryCov_9fa48("555"), 'Ram 238G'),
  price: 380000200,
  status: 2,
  thumbnailimage: stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), 'https://product.hstat2ic.net/200000722513/product/8u6l9pa_6f2f6ba3187e4ad599dc021d3f41b307.png')
});
describe(stryMutAct_9fa48("557") ? "" : (stryCov_9fa48("557"), 'product'), () => {
  if (stryMutAct_9fa48("558")) {
    {}
  } else {
    stryCov_9fa48("558");
    beforeAll(async () => {
      if (stryMutAct_9fa48("559")) {
        {}
      } else {
        stryCov_9fa48("559");
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
      }
    });
    afterAll(async () => {
      if (stryMutAct_9fa48("560")) {
        {}
      } else {
        stryCov_9fa48("560");
        await mongoose.disconnect();
        await mongoose.connection.close();
      }
    });
    describe(stryMutAct_9fa48("561") ? "" : (stryCov_9fa48("561"), 'get product route'), () => {
      if (stryMutAct_9fa48("562")) {
        {}
      } else {
        stryCov_9fa48("562");
        describe(stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), 'given the product does not exist'), () => {
          if (stryMutAct_9fa48("564")) {
            {}
          } else {
            stryCov_9fa48("564");
            it(stryMutAct_9fa48("565") ? "" : (stryCov_9fa48("565"), 'should return a 500'), async () => {
              if (stryMutAct_9fa48("566")) {
                {}
              } else {
                stryCov_9fa48("566");
                const productId = stryMutAct_9fa48("567") ? "" : (stryCov_9fa48("567"), 'product-123');
                await supertest(app).get(stryMutAct_9fa48("568") ? `` : (stryCov_9fa48("568"), `/api/product/${productId}`)).expect(500);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("569") ? "" : (stryCov_9fa48("569"), 'given the product does exist'), () => {
          if (stryMutAct_9fa48("570")) {
            {}
          } else {
            stryCov_9fa48("570");
            it(stryMutAct_9fa48("571") ? "" : (stryCov_9fa48("571"), 'should return a 200 status and the product'), async () => {
              if (stryMutAct_9fa48("572")) {
                {}
              } else {
                stryCov_9fa48("572");
                const product = await createNewProduct(productPayload);
                const {
                  body,
                  statusCode
                } = await supertest(app).get(stryMutAct_9fa48("573") ? `` : (stryCov_9fa48("573"), `/api/product/${product._id}`));
                expect(statusCode).toBe(200);
              }
            });
          }
        });
      }
    });
    describe(stryMutAct_9fa48("574") ? "" : (stryCov_9fa48("574"), 'create product route'), () => {
      if (stryMutAct_9fa48("575")) {
        {}
      } else {
        stryCov_9fa48("575");
        describe(stryMutAct_9fa48("576") ? "" : (stryCov_9fa48("576"), 'given the user is not logged in'), () => {
          if (stryMutAct_9fa48("577")) {
            {}
          } else {
            stryCov_9fa48("577");
            it(stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), 'should return a 403'), async () => {
              if (stryMutAct_9fa48("579")) {
                {}
              } else {
                stryCov_9fa48("579");
                const {
                  statusCode
                } = await supertest(app).post(stryMutAct_9fa48("580") ? "" : (stryCov_9fa48("580"), '/api/product'));
                expect(statusCode).toBe(401);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("581") ? "" : (stryCov_9fa48("581"), 'given the user is logged in'), () => {
          if (stryMutAct_9fa48("582")) {
            {}
          } else {
            stryCov_9fa48("582");
            it(stryMutAct_9fa48("583") ? "" : (stryCov_9fa48("583"), 'should return a 200 and create the product'), async () => {
              if (stryMutAct_9fa48("584")) {
                {}
              } else {
                stryCov_9fa48("584");
                const token = jwt.sign(stryMutAct_9fa48("585") ? {} : (stryCov_9fa48("585"), {
                  id: userPayload._id,
                  role: userPayload.role
                }), secrect, stryMutAct_9fa48("586") ? {} : (stryCov_9fa48("586"), {
                  expiresIn: stryMutAct_9fa48("587") ? "" : (stryCov_9fa48("587"), '21d')
                }));
                const res = await supertest(app).post(stryMutAct_9fa48("588") ? "" : (stryCov_9fa48("588"), '/api/product')).set(stryMutAct_9fa48("589") ? "" : (stryCov_9fa48("589"), 'token'), stryMutAct_9fa48("590") ? `` : (stryCov_9fa48("590"), `Bear ${token}`)).send(productPayload);
                console.log(res.body);
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual(stryMutAct_9fa48("591") ? {} : (stryCov_9fa48("591"), {
                  _id: expect.any(String),
                  descriptionInformation: stryMutAct_9fa48("592") ? "" : (stryCov_9fa48("592"), 'Laptop mới 100%'),
                  idCategory: stryMutAct_9fa48("593") ? "" : (stryCov_9fa48("593"), '654501183e937734f982c3a4'),
                  name: stryMutAct_9fa48("594") ? "" : (stryCov_9fa48("594"), 'test'),
                  nameOfManufacturer: stryMutAct_9fa48("595") ? "" : (stryCov_9fa48("595"), 'HP'),
                  price: 38000000,
                  rates: expect.any(Array),
                  status: 1,
                  technicalInformation: stryMutAct_9fa48("596") ? "" : (stryCov_9fa48("596"), 'Ram 38G'),
                  thumbnailimage: stryMutAct_9fa48("597") ? "" : (stryCov_9fa48("597"), 'https://product.hstatic.net/200000722513/product/8u6l9pa_6f2f6ba3187e4ad599dc021d3f41b307.png')
                }));
              }
            });
          }
        });
      }
    });
    describe(stryMutAct_9fa48("598") ? "" : (stryCov_9fa48("598"), 'update product route'), () => {
      if (stryMutAct_9fa48("599")) {
        {}
      } else {
        stryCov_9fa48("599");
        describe(stryMutAct_9fa48("600") ? "" : (stryCov_9fa48("600"), 'given the user is not logged in'), () => {
          if (stryMutAct_9fa48("601")) {
            {}
          } else {
            stryCov_9fa48("601");
            it(stryMutAct_9fa48("602") ? "" : (stryCov_9fa48("602"), 'should return a 401'), async () => {
              if (stryMutAct_9fa48("603")) {
                {}
              } else {
                stryCov_9fa48("603");
                const {
                  statusCode
                } = await supertest(app).post(stryMutAct_9fa48("604") ? `` : (stryCov_9fa48("604"), `/api/product/${productId}`));
                expect(statusCode).toBe(401);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("605") ? "" : (stryCov_9fa48("605"), 'given the user is logged in'), () => {
          if (stryMutAct_9fa48("606")) {
            {}
          } else {
            stryCov_9fa48("606");
            it(stryMutAct_9fa48("607") ? "" : (stryCov_9fa48("607"), 'should return a 200 and update the product'), async () => {
              if (stryMutAct_9fa48("608")) {
                {}
              } else {
                stryCov_9fa48("608");
                const token = jwt.sign(stryMutAct_9fa48("609") ? {} : (stryCov_9fa48("609"), {
                  id: userPayload._id,
                  role: userPayload.role
                }), secrect, stryMutAct_9fa48("610") ? {} : (stryCov_9fa48("610"), {
                  expiresIn: stryMutAct_9fa48("611") ? "" : (stryCov_9fa48("611"), '21d')
                }));
                const newProduct = await createNewProduct(productPayload);
                console.log(newProduct);
                const updateRes = await supertest(app).post(stryMutAct_9fa48("612") ? `` : (stryCov_9fa48("612"), `/api/product/${newProduct._id}`)).set(stryMutAct_9fa48("613") ? "" : (stryCov_9fa48("613"), 'token'), stryMutAct_9fa48("614") ? `` : (stryCov_9fa48("614"), `Bear ${token}`)).send(stryMutAct_9fa48("615") ? {} : (stryCov_9fa48("615"), {
                  ...updateProductPayload
                }));
                console.log(updateRes);
                expect(updateRes.statusCode).toBe(200);
                expect(updateRes._body).toEqual(stryMutAct_9fa48("616") ? {} : (stryCov_9fa48("616"), {
                  ...updateProductPayload,
                  __v: expect.any(Number),
                  _id: expect.any(String),
                  idCategory: expect.any(String),
                  rates: expect.any(Array)
                }));
              }
            });
          }
        });
      }
    });
    describe(stryMutAct_9fa48("617") ? "" : (stryCov_9fa48("617"), 'delete product route'), () => {
      if (stryMutAct_9fa48("618")) {
        {}
      } else {
        stryCov_9fa48("618");
        describe(stryMutAct_9fa48("619") ? "" : (stryCov_9fa48("619"), 'given the user is not logged in'), () => {
          if (stryMutAct_9fa48("620")) {
            {}
          } else {
            stryCov_9fa48("620");
            it(stryMutAct_9fa48("621") ? "" : (stryCov_9fa48("621"), 'should return a 401'), async () => {
              if (stryMutAct_9fa48("622")) {
                {}
              } else {
                stryCov_9fa48("622");
                const {
                  statusCode
                } = await supertest(app).delete(stryMutAct_9fa48("623") ? `` : (stryCov_9fa48("623"), `/api/product/${productId}`));
                expect(statusCode).toBe(401);
              }
            });
          }
        });
        describe(stryMutAct_9fa48("624") ? "" : (stryCov_9fa48("624"), 'given the user is logged in'), () => {
          if (stryMutAct_9fa48("625")) {
            {}
          } else {
            stryCov_9fa48("625");
            it(stryMutAct_9fa48("626") ? "" : (stryCov_9fa48("626"), 'should return a 200 and delete the product'), async () => {
              if (stryMutAct_9fa48("627")) {
                {}
              } else {
                stryCov_9fa48("627");
                const token = jwt.sign(stryMutAct_9fa48("628") ? {} : (stryCov_9fa48("628"), {
                  id: userPayload._id,
                  role: userPayload.role
                }), secrect, stryMutAct_9fa48("629") ? {} : (stryCov_9fa48("629"), {
                  expiresIn: stryMutAct_9fa48("630") ? "" : (stryCov_9fa48("630"), '21d')
                }));
                const res = await supertest(app).post(stryMutAct_9fa48("631") ? "" : (stryCov_9fa48("631"), '/api/product')).set(stryMutAct_9fa48("632") ? "" : (stryCov_9fa48("632"), 'token'), stryMutAct_9fa48("633") ? `` : (stryCov_9fa48("633"), `Bear ${token}`)).send(productPayload);
                console.log(res.body);
                expect(res.statusCode).toBe(200);
                const deleteRes = await supertest(app).delete(stryMutAct_9fa48("634") ? `` : (stryCov_9fa48("634"), `/api/product/${res.body._id}`)).set(stryMutAct_9fa48("635") ? "" : (stryCov_9fa48("635"), 'token'), stryMutAct_9fa48("636") ? `` : (stryCov_9fa48("636"), `Bear ${token}`));
                expect(deleteRes.statusCode).toBe(200);
              }
            });
          }
        });
      }
    });
  }
});