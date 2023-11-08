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
const Category = require('../models/Category');
exports.createNewCategory = category => {
  if (stryMutAct_9fa48("333")) {
    {}
  } else {
    stryCov_9fa48("333");
    return new Promise(async (resolve, reject) => {
      if (stryMutAct_9fa48("334")) {
        {}
      } else {
        stryCov_9fa48("334");
        try {
          if (stryMutAct_9fa48("335")) {
            {}
          } else {
            stryCov_9fa48("335");
            if (stryMutAct_9fa48("338") ? category.type == undefined : stryMutAct_9fa48("337") ? false : stryMutAct_9fa48("336") ? true : (stryCov_9fa48("336", "337", "338"), category.type != undefined)) {
              if (stryMutAct_9fa48("339")) {
                {}
              } else {
                stryCov_9fa48("339");
                const newCategory = new Category(category);
                const saveCategory = await newCategory.save();
                const {
                  __v,
                  createdAt,
                  updatedAt,
                  ...newCategoryInfo
                } = saveCategory._doc;
                resolve(newCategoryInfo);
              }
            } else reject(stryMutAct_9fa48("340") ? "" : (stryCov_9fa48("340"), 'Missing parameter'));
          }
        } catch (e) {
          if (stryMutAct_9fa48("341")) {
            {}
          } else {
            stryCov_9fa48("341");
            reject(e);
          }
        }
      }
    });
  }
};
exports.updateCategory = (categoryId, category) => {
  if (stryMutAct_9fa48("342")) {
    {}
  } else {
    stryCov_9fa48("342");
    return new Promise(async (resolve, reject) => {
      if (stryMutAct_9fa48("343")) {
        {}
      } else {
        stryCov_9fa48("343");
        try {
          if (stryMutAct_9fa48("344")) {
            {}
          } else {
            stryCov_9fa48("344");
            const updateCategory = await Category.findByIdAndUpdate(categoryId, stryMutAct_9fa48("345") ? {} : (stryCov_9fa48("345"), {
              $set: category
            }), stryMutAct_9fa48("346") ? {} : (stryCov_9fa48("346"), {
              new: stryMutAct_9fa48("347") ? false : (stryCov_9fa48("347"), true)
            }));
            const {
              __v,
              createdAt,
              updatedAt,
              ...others
            } = updateCategory._doc;
            resolve(others);
          }
        } catch (e) {
          if (stryMutAct_9fa48("348")) {
            {}
          } else {
            stryCov_9fa48("348");
            reject(e);
          }
        }
      }
    });
  }
};
exports.getListCategory = () => {
  if (stryMutAct_9fa48("349")) {
    {}
  } else {
    stryCov_9fa48("349");
    return new Promise(async (resolve, reject) => {
      if (stryMutAct_9fa48("350")) {
        {}
      } else {
        stryCov_9fa48("350");
        try {
          if (stryMutAct_9fa48("351")) {
            {}
          } else {
            stryCov_9fa48("351");
            const allCategory = await (stryMutAct_9fa48("352") ? Category.find().limit(10).exec() : (stryCov_9fa48("352"), Category.find().limit(10).sort(stryMutAct_9fa48("353") ? {} : (stryCov_9fa48("353"), {
              startAt: 1
            })).exec()));
            resolve(allCategory);
          }
        } catch (e) {
          if (stryMutAct_9fa48("354")) {
            {}
          } else {
            stryCov_9fa48("354");
            reject(e);
          }
        }
      }
    });
  }
};