"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente"));
var _Impuestos = _interopRequireDefault(require("./Impuestos"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// impuestos
var impuestos = new _Impuestos["default"](0, 0);

// cliente y sus impuestos
var cliente = new _Cliente["default"]('Dwight Kurt Schrute III', impuestos);
var ventas = [5000, 35000, 22500]; //lo que vendió Dwight
var porcentajeDeducciones = 7; // le deducen el 7% de Fonasa (?)

//monto bruto anual
var montoBrutoAnual = cliente.calcularMontoBrutoAnual(ventas);
console.log("Monto Bruto Anual de ".concat(cliente.nombre, " es de: ").concat(montoBrutoAnual, " usd"));

//deducciones
var deducciones = cliente.calcularDeducciones(porcentajeDeducciones);
console.log("Deducciones de ".concat(cliente.nombre, " es de: ").concat(deducciones, " usd"));

//impuesto anual
var impuesto = cliente.calcularImpuesto();
console.log("El impuesto anual a pagar de ".concat(cliente.nombre, " es de: ").concat(impuesto, " usd"));