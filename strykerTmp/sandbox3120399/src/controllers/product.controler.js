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
const productService = require('../services/product.service.js');
const Product = require('../models/Product.js');
module.exports = stryMutAct_9fa48("86") ? {} : (stryCov_9fa48("86"), {
  createProduct: async (req, res) => {
    if (stryMutAct_9fa48("87")) {
      {}
    } else {
      stryCov_9fa48("87");
      try {
        if (stryMutAct_9fa48("88")) {
          {}
        } else {
          stryCov_9fa48("88");
          const product = req.body;
          const newProduct = await productService.createNewProduct(product);
          res.status(200).json(newProduct);
        }
      } catch (e) {
        if (stryMutAct_9fa48("89")) {
          {}
        } else {
          stryCov_9fa48("89");
          console.log(e);
          res.status(500).json(e);
        }
      }
    }
  },
  updateProduct: async (req, res) => {
    if (stryMutAct_9fa48("90")) {
      {}
    } else {
      stryCov_9fa48("90");
      try {
        if (stryMutAct_9fa48("91")) {
          {}
        } else {
          stryCov_9fa48("91");
          const updateProduct = await productService.updateProduct(req.params.id, req.body);
          res.status(200).json(updateProduct);
        }
      } catch (err) {
        if (stryMutAct_9fa48("92")) {
          {}
        } else {
          stryCov_9fa48("92");
          console.log((stryMutAct_9fa48("93") ? "" : (stryCov_9fa48("93"), 'Update')) + err);
          res.status(500).json(err);
        }
      }
    }
  },
  deleteProduct: async (req, res) => {
    if (stryMutAct_9fa48("94")) {
      {}
    } else {
      stryCov_9fa48("94");
      try {
        if (stryMutAct_9fa48("95")) {
          {}
        } else {
          stryCov_9fa48("95");
          await Product.findByIdAndDelete(req.params.id);
          res.status(200).json(stryMutAct_9fa48("96") ? "" : (stryCov_9fa48("96"), 'Product successfully deleted'));
        }
      } catch (err) {
        if (stryMutAct_9fa48("97")) {
          {}
        } else {
          stryCov_9fa48("97");
          res.status(500).json(err);
        }
      }
    }
  },
  getProduct: async (req, res) => {
    if (stryMutAct_9fa48("98")) {
      {}
    } else {
      stryCov_9fa48("98");
      try {
        if (stryMutAct_9fa48("99")) {
          {}
        } else {
          stryCov_9fa48("99");
          const product = await Product.findById(req.params.id);
          if (stryMutAct_9fa48("102") ? false : stryMutAct_9fa48("101") ? true : stryMutAct_9fa48("100") ? product : (stryCov_9fa48("100", "101", "102"), !product)) {
            if (stryMutAct_9fa48("103")) {
              {}
            } else {
              stryCov_9fa48("103");
              res.status(404).json(stryMutAct_9fa48("104") ? "" : (stryCov_9fa48("104"), 'product not found'));
            }
          } else res.status(200).json(product);
        }
      } catch (err) {
        if (stryMutAct_9fa48("105")) {
          {}
        } else {
          stryCov_9fa48("105");
          res.status(500).json(err);
        }
      }
    }
  },
  getAllProducts: async (req, res) => {
    if (stryMutAct_9fa48("106")) {
      {}
    } else {
      stryCov_9fa48("106");
      try {
        if (stryMutAct_9fa48("107")) {
          {}
        } else {
          stryCov_9fa48("107");
          const listProduct = await productService.getListProduct();
          res.status(200).json(listProduct);
        }
      } catch (err) {
        if (stryMutAct_9fa48("108")) {
          {}
        } else {
          stryCov_9fa48("108");
          res.status(500).json(err);
        }
      }
    }
  }
});