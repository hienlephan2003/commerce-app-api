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
const Product = require('../models/Product');
exports.createNewProduct = product => {
  if (stryMutAct_9fa48("402")) {
    {}
  } else {
    stryCov_9fa48("402");
    return new Promise(async (resolve, reject) => {
      if (stryMutAct_9fa48("403")) {
        {}
      } else {
        stryCov_9fa48("403");
        try {
          if (stryMutAct_9fa48("404")) {
            {}
          } else {
            stryCov_9fa48("404");
            const newProduct = new Product(product);
            const saveProduct = await newProduct.save();
            const {
              __v,
              createdAt,
              updatedAt,
              ...newProductInfo
            } = saveProduct._doc;
            resolve(newProductInfo);
          }
        } catch (e) {
          if (stryMutAct_9fa48("405")) {
            {}
          } else {
            stryCov_9fa48("405");
            reject(e);
          }
        }
      }
    });
  }
};
exports.updateProduct = (productId, product) => {
  if (stryMutAct_9fa48("406")) {
    {}
  } else {
    stryCov_9fa48("406");
    return new Promise(async (resolve, reject) => {
      if (stryMutAct_9fa48("407")) {
        {}
      } else {
        stryCov_9fa48("407");
        try {
          if (stryMutAct_9fa48("408")) {
            {}
          } else {
            stryCov_9fa48("408");
            console.log(productId);
            console.log(product);
            await Product.findByIdAndUpdate(productId, product);
            const updateProduct = await Product.findById(productId);
            resolve(updateProduct);
          }
        } catch (e) {
          if (stryMutAct_9fa48("409")) {
            {}
          } else {
            stryCov_9fa48("409");
            reject(e);
          }
        }
      }
    });
  }
};
exports.getListProduct = () => {
  if (stryMutAct_9fa48("410")) {
    {}
  } else {
    stryCov_9fa48("410");
    return new Promise(async (resolve, reject) => {
      if (stryMutAct_9fa48("411")) {
        {}
      } else {
        stryCov_9fa48("411");
        try {
          if (stryMutAct_9fa48("412")) {
            {}
          } else {
            stryCov_9fa48("412");
            const allProduct = await Product.find().exec();
            resolve(allProduct);
          }
        } catch (e) {
          if (stryMutAct_9fa48("413")) {
            {}
          } else {
            stryCov_9fa48("413");
            reject(e);
          }
        }
      }
    });
  }
};