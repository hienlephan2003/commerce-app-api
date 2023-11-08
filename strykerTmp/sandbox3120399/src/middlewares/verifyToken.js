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
const jwt = require('jsonwebtoken');
const Person = require('../models/Person');
const verifyToken = (req, res, next) => {
  if (stryMutAct_9fa48("129")) {
    {}
  } else {
    stryCov_9fa48("129");
    const authHeader = req.headers.token;
    console.log(authHeader);
    if (stryMutAct_9fa48("131") ? false : stryMutAct_9fa48("130") ? true : (stryCov_9fa48("130", "131"), authHeader)) {
      if (stryMutAct_9fa48("132")) {
        {}
      } else {
        stryCov_9fa48("132");
        const token = authHeader.split(stryMutAct_9fa48("133") ? "" : (stryCov_9fa48("133"), ' '))[1];
        jwt.verify(token, process.env.JWT_SEC, async (err, person) => {
          if (stryMutAct_9fa48("134")) {
            {}
          } else {
            stryCov_9fa48("134");
            if (stryMutAct_9fa48("136") ? false : stryMutAct_9fa48("135") ? true : (stryCov_9fa48("135", "136"), err)) res.status(403).json((stryMutAct_9fa48("137") ? "" : (stryCov_9fa48("137"), 'Invalid token')) + err);
            req.person = person;
            console.log(person);
            next();
          }
        });
      }
    } else {
      if (stryMutAct_9fa48("138")) {
        {}
      } else {
        stryCov_9fa48("138");
        return res.status(401).json(stryMutAct_9fa48("139") ? "" : (stryCov_9fa48("139"), 'You are not authenticated'));
      }
    }
  }
};
const verifyAndAdmin = (req, res, next) => {
  if (stryMutAct_9fa48("140")) {
    {}
  } else {
    stryCov_9fa48("140");
    verifyToken(req, res, () => {
      if (stryMutAct_9fa48("141")) {
        {}
      } else {
        stryCov_9fa48("141");
        if (stryMutAct_9fa48("144") ? req.person.role != 'ADMIN' : stryMutAct_9fa48("143") ? false : stryMutAct_9fa48("142") ? true : (stryCov_9fa48("142", "143", "144"), req.person.role == (stryMutAct_9fa48("145") ? "" : (stryCov_9fa48("145"), 'ADMIN')))) {
          if (stryMutAct_9fa48("146")) {
            {}
          } else {
            stryCov_9fa48("146");
            next();
          }
        } else {
          if (stryMutAct_9fa48("147")) {
            {}
          } else {
            stryCov_9fa48("147");
            res.status(403).json(stryMutAct_9fa48("148") ? "" : (stryCov_9fa48("148"), 'You are restricted from performing this operation'));
          }
        }
      }
    });
  }
};
module.exports = stryMutAct_9fa48("149") ? {} : (stryCov_9fa48("149"), {
  verifyToken,
  verifyAndAdmin
});