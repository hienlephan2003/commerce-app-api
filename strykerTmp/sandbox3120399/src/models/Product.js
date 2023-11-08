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
const mongoose = require('mongoose');
// Define a MongoDB schema for the Product collection
const ProductSchema = new mongoose.Schema(stryMutAct_9fa48("246") ? {} : (stryCov_9fa48("246"), {
  name: stryMutAct_9fa48("247") ? {} : (stryCov_9fa48("247"), {
    type: String,
    require: stryMutAct_9fa48("248") ? false : (stryCov_9fa48("248"), true)
  }),
  nameOfManufacturer: stryMutAct_9fa48("249") ? {} : (stryCov_9fa48("249"), {
    type: String,
    require: stryMutAct_9fa48("250") ? false : (stryCov_9fa48("250"), true)
  }),
  descriptionInformation: stryMutAct_9fa48("251") ? {} : (stryCov_9fa48("251"), {
    type: String,
    require: stryMutAct_9fa48("252") ? false : (stryCov_9fa48("252"), true)
  }),
  technicalInformation: stryMutAct_9fa48("253") ? {} : (stryCov_9fa48("253"), {
    type: String,
    require: stryMutAct_9fa48("254") ? false : (stryCov_9fa48("254"), true)
  }),
  price: stryMutAct_9fa48("255") ? {} : (stryCov_9fa48("255"), {
    type: Number,
    required: stryMutAct_9fa48("256") ? false : (stryCov_9fa48("256"), true)
  }),
  status: stryMutAct_9fa48("257") ? {} : (stryCov_9fa48("257"), {
    type: Number,
    required: stryMutAct_9fa48("258") ? false : (stryCov_9fa48("258"), true)
  }),
  idCategory: stryMutAct_9fa48("259") ? {} : (stryCov_9fa48("259"), {
    type: mongoose.Schema.Types.ObjectId,
    ref: stryMutAct_9fa48("260") ? "" : (stryCov_9fa48("260"), 'Category'),
    required: stryMutAct_9fa48("261") ? false : (stryCov_9fa48("261"), true)
  }),
  thumbnailimage: stryMutAct_9fa48("262") ? {} : (stryCov_9fa48("262"), {
    type: String,
    require: stryMutAct_9fa48("263") ? false : (stryCov_9fa48("263"), true)
  }),
  rates: stryMutAct_9fa48("264") ? [] : (stryCov_9fa48("264"), [stryMutAct_9fa48("265") ? {} : (stryCov_9fa48("265"), {
    rate: stryMutAct_9fa48("266") ? {} : (stryCov_9fa48("266"), {
      type: Number,
      required: stryMutAct_9fa48("267") ? false : (stryCov_9fa48("267"), true)
    }),
    idCustomer: stryMutAct_9fa48("268") ? {} : (stryCov_9fa48("268"), {
      type: mongoose.Schema.Types.ObjectId,
      ref: stryMutAct_9fa48("269") ? "" : (stryCov_9fa48("269"), 'Person'),
      required: stryMutAct_9fa48("270") ? false : (stryCov_9fa48("270"), true)
    })
  })])
}));
const Product = mongoose.model(stryMutAct_9fa48("271") ? "" : (stryCov_9fa48("271"), 'Product'), ProductSchema);
module.exports = Product;