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
const Discount = require('../models/Discount');
module.exports = stryMutAct_9fa48("355") ? {} : (stryCov_9fa48("355"), {
  getAllDiscounts: () => {
    if (stryMutAct_9fa48("356")) {
      {}
    } else {
      stryCov_9fa48("356");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("357")) {
          {}
        } else {
          stryCov_9fa48("357");
          try {
            if (stryMutAct_9fa48("358")) {
              {}
            } else {
              stryCov_9fa48("358");
              const discounts = await (stryMutAct_9fa48("359") ? Discount.find().limit(10).exec() : (stryCov_9fa48("359"), Discount.find().limit(10).sort(stryMutAct_9fa48("360") ? {} : (stryCov_9fa48("360"), {
                startAt: 1
              })).exec()));
              resolve(discounts);
            }
          } catch (error) {
            if (stryMutAct_9fa48("361")) {
              {}
            } else {
              stryCov_9fa48("361");
              reject(error);
            }
          }
        }
      });
    }
  },
  getDiscountById: discountId => {
    if (stryMutAct_9fa48("362")) {
      {}
    } else {
      stryCov_9fa48("362");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("363")) {
          {}
        } else {
          stryCov_9fa48("363");
          try {
            if (stryMutAct_9fa48("364")) {
              {}
            } else {
              stryCov_9fa48("364");
              const discount = await Discount.findById(discountId);
              resolve(discount);
            }
          } catch (error) {
            if (stryMutAct_9fa48("365")) {
              {}
            } else {
              stryCov_9fa48("365");
              reject(error);
            }
          }
        }
      });
    }
  },
  createNewDiscount: discountInfo => {
    if (stryMutAct_9fa48("366")) {
      {}
    } else {
      stryCov_9fa48("366");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("367")) {
          {}
        } else {
          stryCov_9fa48("367");
          try {
            if (stryMutAct_9fa48("368")) {
              {}
            } else {
              stryCov_9fa48("368");
              const newDiscount = new Discount(discountInfo);
              const saveDiscount = await newDiscount.save();
              const {
                __v,
                createdAt,
                updatedAt,
                ...newDiscountInfo
              } = saveDiscount._doc;
              resolve(newDiscountInfo);
            }
          } catch (error) {
            if (stryMutAct_9fa48("369")) {
              {}
            } else {
              stryCov_9fa48("369");
              reject(error);
            }
          }
        }
      });
    }
  },
  updateDiscount: (discountId, newDiscountInfo) => {
    if (stryMutAct_9fa48("370")) {
      {}
    } else {
      stryCov_9fa48("370");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("371")) {
          {}
        } else {
          stryCov_9fa48("371");
          try {
            if (stryMutAct_9fa48("372")) {
              {}
            } else {
              stryCov_9fa48("372");
              const updatedDiscount = await Discount.findByIdAndUpdate(discountId, stryMutAct_9fa48("373") ? {} : (stryCov_9fa48("373"), {
                $set: newDiscountInfo
              }), stryMutAct_9fa48("374") ? {} : (stryCov_9fa48("374"), {
                new: stryMutAct_9fa48("375") ? false : (stryCov_9fa48("375"), true)
              }));
              const {
                __v,
                createdAt,
                updatedAt,
                ...others
              } = updatedDiscount._doc;
              resolve(others);
            }
          } catch (error) {
            if (stryMutAct_9fa48("376")) {
              {}
            } else {
              stryCov_9fa48("376");
              reject(error);
            }
          }
        }
      });
    }
  },
  deleteDiscount: discountId => {
    if (stryMutAct_9fa48("377")) {
      {}
    } else {
      stryCov_9fa48("377");
      return new Promise(async (resolve, reject) => {
        if (stryMutAct_9fa48("378")) {
          {}
        } else {
          stryCov_9fa48("378");
          try {
            if (stryMutAct_9fa48("379")) {
              {}
            } else {
              stryCov_9fa48("379");
              const deletedDiscount = await Discount.findByIdAndDelete(discountId);
              resolve(deletedDiscount);
            }
          } catch (error) {
            if (stryMutAct_9fa48("380")) {
              {}
            } else {
              stryCov_9fa48("380");
              reject(error);
            }
          }
        }
      });
    }
  }
});