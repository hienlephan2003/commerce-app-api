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
const categoryService = require('../services/category.service.js');
const Category = require('../models/Category.js');
module.exports = stryMutAct_9fa48("28") ? {} : (stryCov_9fa48("28"), {
  createCategory: async (req, res) => {
    if (stryMutAct_9fa48("29")) {
      {}
    } else {
      stryCov_9fa48("29");
      try {
        if (stryMutAct_9fa48("30")) {
          {}
        } else {
          stryCov_9fa48("30");
          const category = req.body;
          const newCategory = await categoryService.createNewCategory(category);
          console.log(newCategory);
          res.status(200).json(newCategory);
        }
      } catch (e) {
        if (stryMutAct_9fa48("31")) {
          {}
        } else {
          stryCov_9fa48("31");
          console.log(e);
          res.status(500).json(e);
        }
      }
    }
  },
  updateCategory: async (req, res) => {
    if (stryMutAct_9fa48("32")) {
      {}
    } else {
      stryCov_9fa48("32");
      try {
        if (stryMutAct_9fa48("33")) {
          {}
        } else {
          stryCov_9fa48("33");
          const updateCategory = await categoryService.updateCategory(req.body);
          res.status(200).json(updateCategory);
        }
      } catch (err) {
        if (stryMutAct_9fa48("34")) {
          {}
        } else {
          stryCov_9fa48("34");
          res.status(500).json(err);
        }
      }
    }
  },
  deleteCategory: async (req, res) => {
    if (stryMutAct_9fa48("35")) {
      {}
    } else {
      stryCov_9fa48("35");
      try {
        if (stryMutAct_9fa48("36")) {
          {}
        } else {
          stryCov_9fa48("36");
          await Category.findByIdAndDelete(req.params.id);
          res.status(200).json(stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), 'Category successfully deleted'));
        }
      } catch (err) {
        if (stryMutAct_9fa48("38")) {
          {}
        } else {
          stryCov_9fa48("38");
          res.status(500).json(err);
        }
      }
    }
  },
  getCategory: async (req, res) => {
    if (stryMutAct_9fa48("39")) {
      {}
    } else {
      stryCov_9fa48("39");
      try {
        if (stryMutAct_9fa48("40")) {
          {}
        } else {
          stryCov_9fa48("40");
          const category = await Category.findById(req.params.id);
          if (stryMutAct_9fa48("43") ? false : stryMutAct_9fa48("42") ? true : stryMutAct_9fa48("41") ? category : (stryCov_9fa48("41", "42", "43"), !category)) {
            if (stryMutAct_9fa48("44")) {
              {}
            } else {
              stryCov_9fa48("44");
              res.status(404);
            }
          } else res.status(200).json(category);
        }
      } catch (err) {
        if (stryMutAct_9fa48("45")) {
          {}
        } else {
          stryCov_9fa48("45");
          res.status(500).json(stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), 'Hehe'));
        }
      }
    }
  },
  getAllCategorys: async (req, res) => {
    if (stryMutAct_9fa48("47")) {
      {}
    } else {
      stryCov_9fa48("47");
      try {
        if (stryMutAct_9fa48("48")) {
          {}
        } else {
          stryCov_9fa48("48");
          const listCategory = await categoryService.getListCategory();
          res.status(200).json(listCategory);
        }
      } catch (err) {
        if (stryMutAct_9fa48("49")) {
          {}
        } else {
          stryCov_9fa48("49");
          res.status(500).json(err);
        }
      }
    }
  }
});