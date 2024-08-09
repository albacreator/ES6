"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.reduce.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Definición de la clase Impuestos
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  // Getter y Setter para montoBrutoAnual
  return _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    },
    set: function set(monto) {
      this._montoBrutoAnual = monto;
    }

    // Getter y Setter para deducciones
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(deducciones) {
      this._deducciones = deducciones;
    }

    // Método para calcular el monto bruto anual (Ejemplo de lógica de cálculo)
  }, {
    key: "calcularMontoBrutoAnual",
    value: function calcularMontoBrutoAnual(ventas) {
      // Suponiendo que el monto bruto anual es igual a la suma de las ventas
      this.montoBrutoAnual = ventas.reduce(function (total, venta) {
        return total + venta;
      }, 0);
      return this.montoBrutoAnual;
    }

    // Método para calcular las deducciones (Ejemplo de lógica de cálculo)
  }, {
    key: "calcularDeducciones",
    value: function calcularDeducciones(porcentaje) {
      // Suponiendo que las deducciones son un porcentaje del monto bruto anual
      this.deducciones = this.montoBrutoAnual * (porcentaje / 100);
      return this.deducciones;
    }
  }]);
}(); // Exportación de la clase Impuestos para que pueda ser utilizada en otros archivos
var _default = exports["default"] = Impuestos;