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
const ListOfProductBuyService = require('../services/listOfProductBuy.service');
module.exports = stryMutAct_9fa48("71") ? {} : (stryCov_9fa48("71"), {
  getListOfProductOfCustomerController: async (req, res) => {
    if (stryMutAct_9fa48("72")) {
      {}
    } else {
      stryCov_9fa48("72");
      try {
        if (stryMutAct_9fa48("73")) {
          {}
        } else {
          stryCov_9fa48("73");
          const idCustomer = req.params.idCustomer;
          const listOfProducts = await ListOfProductBuyService.getListOfProductOfCustomer(idCustomer);
          return res.status(200).send(listOfProducts);
        }
      } catch (error) {
        if (stryMutAct_9fa48("74")) {
          {}
        } else {
          stryCov_9fa48("74");
          console.error(error.message);
          return res.status(500).send(stryMutAct_9fa48("75") ? "" : (stryCov_9fa48("75"), 'Something went wrong'));
        }
      }
    }
  },
  createNewListProductBuyController: async (req, res) => {
    if (stryMutAct_9fa48("76")) {
      {}
    } else {
      stryCov_9fa48("76");
      try {
        if (stryMutAct_9fa48("77")) {
          {}
        } else {
          stryCov_9fa48("77");
          const listOfProductsInfo = req.body;
          const newListOfProducts = await ListOfProductBuyService.createNewListProductBuy(listOfProductsInfo);
          return res.status(200).send(newListOfProducts);
        }
      } catch (error) {
        if (stryMutAct_9fa48("78")) {
          {}
        } else {
          stryCov_9fa48("78");
          console.error(error.message);
          return res.status(500).send(stryMutAct_9fa48("79") ? "" : (stryCov_9fa48("79"), 'Something went wrong'));
        }
      }
    }
  },
  updateListProductBuyController: async (req, res) => {
    if (stryMutAct_9fa48("80")) {
      {}
    } else {
      stryCov_9fa48("80");
      try {
        if (stryMutAct_9fa48("81")) {
          {}
        } else {
          stryCov_9fa48("81");
          const idListOfProduct = req.params.idListOfProduct;
          const listOfProductsInfo = req.body;
          const updatedListProductBuy = await ListOfProductBuyService.updateListProductBuy(idListOfProduct, listOfProductsInfo);
          resolve(updatedListProductBuy);
        }
      } catch (error) {
        if (stryMutAct_9fa48("82")) {
          {}
        } else {
          stryCov_9fa48("82");
          reject(error);
        }
      }
    }
  },
  deleteListProductBuy: async (req, res) => {
    if (stryMutAct_9fa48("83")) {
      {}
    } else {
      stryCov_9fa48("83");
      try {
        if (stryMutAct_9fa48("84")) {
          {}
        } else {
          stryCov_9fa48("84");
          const idListOfProduct = req.params.idListOfProduct;
          const deleteProductBuyController = await ListOfProductBuyService.deleteListProductBuy(idListOfProduct);
          resolve(deleteProductBuyController);
        }
      } catch (error) {
        if (stryMutAct_9fa48("85")) {
          {}
        } else {
          stryCov_9fa48("85");
          reject(error);
        }
      }
    }
  }
});