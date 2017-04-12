(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './styledFade', '../HOC'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./styledFade'), require('../HOC'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledFade, global.HOC);
    global.index = mod.exports;
  }
})(this, function (exports, _styledFade, _HOC) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _HOC2 = _interopRequireDefault(_HOC);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // fade animation components
  var fadeObj = {
    FadeIn: (0, _HOC2.default)('FadeIn', _styledFade.fadeIn),
    FadeInDown: (0, _HOC2.default)('FadeInDown', _styledFade.down),
    FadeInDownBig: (0, _HOC2.default)('FadeInDownBig', _styledFade.downBig),
    FadeInUp: (0, _HOC2.default)('FadeInUp', _styledFade.up),
    FadeInUpBig: (0, _HOC2.default)('FadeInUpBig', _styledFade.upBig),
    FadeInLeft: (0, _HOC2.default)('FadeInLeft', _styledFade.left),
    FadeInLeftBig: (0, _HOC2.default)('FadeInLeftBig', _styledFade.leftBig),
    FadeInRight: (0, _HOC2.default)('FadeInRight', _styledFade.right),
    FadeInRightBig: (0, _HOC2.default)('FadeInRightBig', _styledFade.rightBig)
  };

  exports.default = fadeObj;
});