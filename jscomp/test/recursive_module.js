// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Mt = require("./mt.js");
var Lazy = require("../../lib/js/lazy.js");
var Curry = require("../../lib/js/curry.js");
var Caml_module = require("../../lib/js/caml_module.js");
var CamlinternalLazy = require("../../lib/js/camlinternalLazy.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");
var Caml_external_polyfill = require("../../lib/js/caml_external_polyfill.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

var Xx = {
  f: (function (prim0, prim1) {
      return Caml_external_polyfill.resolve("hfiehi")(prim0, prim1);
    })
};

var Int3 = Caml_module.init_mod([
      "recursive_module.res",
      25,
      4
    ], {
      TAG: "Module",
      _0: [[
          "Function",
          "u"
        ]]
    });

Caml_module.update_mod({
      TAG: "Module",
      _0: [[
          "Function",
          "u"
        ]]
    }, Int3, Int3);

var Inta = Caml_module.init_mod([
      "recursive_module.res",
      29,
      4
    ], {
      TAG: "Module",
      _0: [[
          "Lazy",
          "a"
        ]]
    });

var Intb = Caml_module.init_mod([
      "recursive_module.res",
      34,
      4
    ], {
      TAG: "Module",
      _0: [[
          "Lazy",
          "a"
        ]]
    });

var a = {
  LAZY_DONE: false,
  VAL: (function () {
      return CamlinternalLazy.force(Intb.a);
    })
};

Caml_module.update_mod({
      TAG: "Module",
      _0: [[
          "Lazy",
          "a"
        ]]
    }, Inta, {
      a: a
    });

var a$1 = {
  LAZY_DONE: false,
  VAL: (function () {
      return CamlinternalLazy.force(Inta.a) + 1 | 0;
    })
};

Caml_module.update_mod({
      TAG: "Module",
      _0: [[
          "Lazy",
          "a"
        ]]
    }, Intb, {
      a: a$1
    });

var tmp;

try {
  tmp = CamlinternalLazy.force(Intb.a);
}
catch (raw_exn){
  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
  if (exn.RE_EXN_ID === Lazy.Undefined) {
    tmp = -1;
  } else {
    throw exn;
  }
}

eq("File \"recursive_module.res\", line 39, characters 2-9", -1, tmp);

var Inta$1 = Caml_module.init_mod([
      "recursive_module.res",
      49,
      6
    ], {
      TAG: "Module",
      _0: [[
          "Lazy",
          "a"
        ]]
    });

var Intb$1 = Caml_module.init_mod([
      "recursive_module.res",
      54,
      6
    ], {
      TAG: "Module",
      _0: [[
          "Lazy",
          "a"
        ]]
    });

var a$2 = {
  LAZY_DONE: false,
  VAL: (function () {
      return CamlinternalLazy.force(Intb$1.a) + 1 | 0;
    })
};

Caml_module.update_mod({
      TAG: "Module",
      _0: [[
          "Lazy",
          "a"
        ]]
    }, Inta$1, {
      a: a$2
    });

var a$3 = {
  LAZY_DONE: true,
  VAL: 2
};

Caml_module.update_mod({
      TAG: "Module",
      _0: [[
          "Lazy",
          "a"
        ]]
    }, Intb$1, {
      a: a$3
    });

var A = {
  Inta: Inta$1,
  Intb: Intb$1
};

eq("File \"recursive_module.res\", line 59, characters 3-10", CamlinternalLazy.force(Inta$1.a), 3);

var tmp$1;

try {
  Curry._1(Int3.u, 3);
  tmp$1 = 3;
}
catch (raw_exn$1){
  var exn$1 = Caml_js_exceptions.internalToOCamlException(raw_exn$1);
  if (exn$1.RE_EXN_ID === "Undefined_recursive_module") {
    tmp$1 = 4;
  } else {
    throw exn$1;
  }
}

eq("File \"recursive_module.res\", line 62, characters 2-9", 4, tmp$1);

Mt.from_pair_suites("Recursive_module", suites.contents);

var Int32;

var uuu = Xx.f;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.Int32 = Int32;
exports.Xx = Xx;
exports.uuu = uuu;
exports.Int3 = Int3;
exports.Inta = Inta;
exports.Intb = Intb;
exports.A = A;
/* Int3 Not a pure module */
