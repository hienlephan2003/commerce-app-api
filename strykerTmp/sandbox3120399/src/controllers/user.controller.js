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
const Person = require('../models/Person');
const CryptoJs = require('crypto-js');
module.exports = stryMutAct_9fa48("109") ? {} : (stryCov_9fa48("109"), {
  updatePerson: async (req, res) => {
    if (stryMutAct_9fa48("110")) {
      {}
    } else {
      stryCov_9fa48("110");
      if (stryMutAct_9fa48("112") ? false : stryMutAct_9fa48("111") ? true : (stryCov_9fa48("111", "112"), req.body.password)) {
        if (stryMutAct_9fa48("113")) {
          {}
        } else {
          stryCov_9fa48("113");
          req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.SECRET).toString();
        }
      }
      try {
        if (stryMutAct_9fa48("114")) {
          {}
        } else {
          stryCov_9fa48("114");
          await Person.findByIdAndUpdate(req.person.id, req.body);
          const UpdatePerson = await Person.findById(req.person.id);
          const {
            password,
            __v,
            createdAt,
            ...others
          } = UpdatePerson._doc;
          res.status(200).json(others);
        }
      } catch (err) {
        if (stryMutAct_9fa48("115")) {
          {}
        } else {
          stryCov_9fa48("115");
          res.status(500).json(stryMutAct_9fa48("116") ? {} : (stryCov_9fa48("116"), {
            err
          }));
        }
      }
    }
  }
  // deletePerson: async (req, res) => {
  //   try {
  //     await Person.findByIdAndDelete(req.person.id);
  //     res.status(200).json('Account Successfully Deleted');
  //   } catch (er) {
  //     res.status(500).json(er);
  //   }
  // },
  // getPerson: async (req, res) => {
  //   try {
  //     const person = await Person.findById(req.person.id);
  //     const { password, __v, createdAt, ...personData } = person._doc;
  //     res.status(200).json(personData);
  //   } catch (er) {
  //     res.status(500).json(er);
  //   }
  // },
  // getAllPerson: async (req, res) => {
  //   try {
  //     const allPerson = await Person.find();
  //     res.status(200).json(allPerson);
  //   } catch (er) {
  //     res.status(500).json(er);
  //   }
  // },
});