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
const ListOfProductBuy = require('../models/ListOfProductBuy');
module.exports = stryMutAct_9fa48("381") ? {} : (stryCov_9fa48("381"), {
  createNewListProductBuy: ListOfProductBuyInfo => {
    if (stryMutAct_9fa48("382")) {
      {}
    } else {
      stryCov_9fa48("382");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("383")) {
          {}
        } else {
          stryCov_9fa48("383");
          try {
            if (stryMutAct_9fa48("384")) {
              {}
            } else {
              stryCov_9fa48("384");
              const newListProductBuy = new ListOfProductBuy(ListOfProductBuyInfo);
              const saveListProductBuy = await newListProductBuy.save();
              const {
                __v,
                createdAt,
                updatedAt,
                ...newListProductInfo
              } = saveListProductBuy._doc;
              resolve(newListProductInfo);
            }
          } catch (error) {
            if (stryMutAct_9fa48("385")) {
              {}
            } else {
              stryCov_9fa48("385");
              reject(error);
            }
          }
        }
      });
    }
  },
  updateListProductBuy: (listOfProductId, ListOfProductBuyInfo) => {
    if (stryMutAct_9fa48("386")) {
      {}
    } else {
      stryCov_9fa48("386");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("387")) {
          {}
        } else {
          stryCov_9fa48("387");
          try {
            if (stryMutAct_9fa48("388")) {
              {}
            } else {
              stryCov_9fa48("388");
              const updatedListProductBuy = await ListOfProductBuy.findOneAndUpdate(listOfProductId, stryMutAct_9fa48("389") ? {} : (stryCov_9fa48("389"), {
                $set: ListOfProductBuyInfo
              }), stryMutAct_9fa48("390") ? {} : (stryCov_9fa48("390"), {
                new: stryMutAct_9fa48("391") ? false : (stryCov_9fa48("391"), true)
              }));
              const {
                __v,
                createdAt,
                updatedAt,
                ...others
              } = updatedListProductBuy._doc;
              resolve(others);
            }
          } catch (error) {
            if (stryMutAct_9fa48("392")) {
              {}
            } else {
              stryCov_9fa48("392");
              reject(error);
            }
          }
        }
      });
    }
  },
  deleteListProductBuy: listOfProductId => {
    if (stryMutAct_9fa48("393")) {
      {}
    } else {
      stryCov_9fa48("393");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("394")) {
          {}
        } else {
          stryCov_9fa48("394");
          try {
            if (stryMutAct_9fa48("395")) {
              {}
            } else {
              stryCov_9fa48("395");
              const deletedListProductBuy = await ListOfProductBuy.findByIdAndDelete(discountId);
              resolve(deletedListProductBuy);
            }
          } catch (error) {
            if (stryMutAct_9fa48("396")) {
              {}
            } else {
              stryCov_9fa48("396");
              reject(error);
            }
          }
        }
      });
    }
  },
  getListOfProductOfCustomer: idCustomer => {
    if (stryMutAct_9fa48("397")) {
      {}
    } else {
      stryCov_9fa48("397");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("398")) {
          {}
        } else {
          stryCov_9fa48("398");
          try {
            if (stryMutAct_9fa48("399")) {
              {}
            } else {
              stryCov_9fa48("399");
              const listOfProducts = await ListOfProductBuy.find(stryMutAct_9fa48("400") ? {} : (stryCov_9fa48("400"), {
                idCustomer
              }));
              resolve(listOfProducts);
            }
          } catch (error) {
            if (stryMutAct_9fa48("401")) {
              {}
            } else {
              stryCov_9fa48("401");
              reject(error);
            }
          }
        }
      });
    }
  }
});