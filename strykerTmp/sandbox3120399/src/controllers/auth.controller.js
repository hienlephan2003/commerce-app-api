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
const Person = require('../models/Person.js');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
async function createPerson(req, res) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    try {
      if (stryMutAct_9fa48("1")) {
        {}
      } else {
        stryCov_9fa48("1");
        const newPerson = new Person(stryMutAct_9fa48("2") ? {} : (stryCov_9fa48("2"), {
          userName: req.body.userName,
          password: (stryMutAct_9fa48("5") ? req.body.password == null : stryMutAct_9fa48("4") ? false : stryMutAct_9fa48("3") ? true : (stryCov_9fa48("3", "4", "5"), req.body.password != null)) ? CryptoJs.AES.encrypt(req.body.password, process.env.SECRET).toString() : stryMutAct_9fa48("6") ? "Stryker was here!" : (stryCov_9fa48("6"), ''),
          idRole: req.body.idRole
        }));
        console.log(newPerson);
        const savePerson = await newPerson.save();
        res.status(200).json(stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), 'success'));
      }
    } catch (err) {
      if (stryMutAct_9fa48("8")) {
        {}
      } else {
        stryCov_9fa48("8");
        console.log(err);
        res.status(500).json(err);
      }
    }
  }
}
async function loginPerson(req, res) {
  if (stryMutAct_9fa48("9")) {
    {}
  } else {
    stryCov_9fa48("9");
    try {
      if (stryMutAct_9fa48("10")) {
        {}
      } else {
        stryCov_9fa48("10");
        const user = await Person.findOne(stryMutAct_9fa48("11") ? {} : (stryCov_9fa48("11"), {
          username: req.body.username
        }));
        if (stryMutAct_9fa48("14") ? false : stryMutAct_9fa48("13") ? true : stryMutAct_9fa48("12") ? user : (stryCov_9fa48("12", "13", "14"), !user)) {
          if (stryMutAct_9fa48("15")) {
            {}
          } else {
            stryCov_9fa48("15");
            res.status(401).json(stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), 'Wrong Login Details'));
            return;
          }
        }
        const descryptedPass = CryptoJs.AES.decrypt(user.password, process.env.SECRET);
        const depassword = descryptedPass.toString(CryptoJs.enc.Utf8);
        if (stryMutAct_9fa48("19") ? depassword === req.body.password : stryMutAct_9fa48("18") ? false : stryMutAct_9fa48("17") ? true : (stryCov_9fa48("17", "18", "19"), depassword !== req.body.password)) {
          if (stryMutAct_9fa48("20")) {
            {}
          } else {
            stryCov_9fa48("20");
            res.status(401).json(stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), 'Wrong password'));
            return;
          }
        }
        const {
          password,
          __v,
          createdAt,
          ...others
        } = user._doc;
        const userToken = jwt.sign(stryMutAct_9fa48("22") ? {} : (stryCov_9fa48("22"), {
          id: user._id,
          role: user.role
        }), process.env.SECRET, stryMutAct_9fa48("23") ? {} : (stryCov_9fa48("23"), {
          expiresIn: stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), '21d')
        }));
        res.status(200).json(stryMutAct_9fa48("25") ? {} : (stryCov_9fa48("25"), {
          ...others,
          userToken
        }));
      }
    } catch (e) {
      if (stryMutAct_9fa48("26")) {
        {}
      } else {
        stryCov_9fa48("26");
        console.log(e);
        res.status(500).json(e);
      }
    }
  }
}
module.exports = stryMutAct_9fa48("27") ? {} : (stryCov_9fa48("27"), {
  createPerson,
  loginPerson
});