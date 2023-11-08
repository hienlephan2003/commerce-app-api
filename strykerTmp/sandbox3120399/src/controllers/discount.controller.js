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
const discountService = require('../services/discount.service');
module.exports = stryMutAct_9fa48("50") ? {} : (stryCov_9fa48("50"), {
  getAllDiscountsController: async (req, res) => {
    if (stryMutAct_9fa48("51")) {
      {}
    } else {
      stryCov_9fa48("51");
      try {
        if (stryMutAct_9fa48("52")) {
          {}
        } else {
          stryCov_9fa48("52");
          const discounts = await discountService.getAllDiscounts();
          return discounts ? res.status(200).json(discounts) : res.status(404).json(stryMutAct_9fa48("53") ? "" : (stryCov_9fa48("53"), 'Discounts are not found'));
        }
      } catch (error) {
        if (stryMutAct_9fa48("54")) {
          {}
        } else {
          stryCov_9fa48("54");
          console.error(error.message);
          return res.status(500).json(error.message);
        }
      }
    }
  },
  getDiscountByIdController: async (req, res) => {
    if (stryMutAct_9fa48("55")) {
      {}
    } else {
      stryCov_9fa48("55");
      try {
        if (stryMutAct_9fa48("56")) {
          {}
        } else {
          stryCov_9fa48("56");
          const discountId = req.params.discountId;
          const discount = await discountService.getDiscountById(discountId);
          return discount ? res.status(200).json(discount) : res.status(404).json(stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), 'Discount is not found'));
        }
      } catch (error) {
        if (stryMutAct_9fa48("58")) {
          {}
        } else {
          stryCov_9fa48("58");
          console.error(error.message);
          return res.status(500).json(error.message);
        }
      }
    }
  },
  createNewDiscountController: async (req, res) => {
    if (stryMutAct_9fa48("59")) {
      {}
    } else {
      stryCov_9fa48("59");
      try {
        if (stryMutAct_9fa48("60")) {
          {}
        } else {
          stryCov_9fa48("60");
          const discountInfo = req.body;
          const newDiscount = await discountService.createNewDiscount(discountInfo);
          return newDiscount ? res.status(201).json(newDiscount) : res.status(400).json(stryMutAct_9fa48("61") ? "" : (stryCov_9fa48("61"), 'Can not create new discount'));
        }
      } catch (error) {
        if (stryMutAct_9fa48("62")) {
          {}
        } else {
          stryCov_9fa48("62");
          console.error(error.message);
          return res.status(500).json(error.message);
        }
      }
    }
  },
  updateDiscountController: async (req, res) => {
    if (stryMutAct_9fa48("63")) {
      {}
    } else {
      stryCov_9fa48("63");
      try {
        if (stryMutAct_9fa48("64")) {
          {}
        } else {
          stryCov_9fa48("64");
          const discountId = req.params.discountId;
          const newDiscountInfo = req.body;
          const newDiscount = await discountService.updateDiscount(discountId, newDiscountInfo);
          return newDiscount ? res.status(200).json(newDiscount) : res.status(400).json(stryMutAct_9fa48("65") ? "" : (stryCov_9fa48("65"), 'Can not update new discount'));
        }
      } catch (error) {
        if (stryMutAct_9fa48("66")) {
          {}
        } else {
          stryCov_9fa48("66");
          console.error(error.message);
          return res.status(500).json(error.message);
        }
      }
    }
  },
  deleteDiscountController: async (req, res) => {
    if (stryMutAct_9fa48("67")) {
      {}
    } else {
      stryCov_9fa48("67");
      try {
        if (stryMutAct_9fa48("68")) {
          {}
        } else {
          stryCov_9fa48("68");
          const discountId = req.params.discountId;
          const deletedDiscount = await discountService.deleteDiscount(discountId);
          return deletedDiscount ? res.status(200).json(deletedDiscount) : res.status(400).json(stryMutAct_9fa48("69") ? "" : (stryCov_9fa48("69"), 'Can not delete discount'));
        }
      } catch (error) {
        if (stryMutAct_9fa48("70")) {
          {}
        } else {
          stryCov_9fa48("70");
          console.error(error.message);
          return res.status(500).json(error.message);
        }
      }
    }
  }
});