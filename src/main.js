import Cliente from './Cliente';
import Impuestos from './Impuestos';

// impuestos
const impuestos = new Impuestos(0, 0);

// cliente y sus impuestos
const cliente = new Cliente('Dwight Kurt Schrute III', impuestos);

const ventas = [5000, 35000, 22500]; //lo que vendió Dwight
const porcentajeDeducciones = 7; // le deducen el 7% de Fonasa (?)

//monto bruto anual
const montoBrutoAnual = cliente.calcularMontoBrutoAnual(ventas);
console.log(`Monto Bruto Anual de ${cliente.nombre} es de: ${montoBrutoAnual} usd`);

//deducciones
const deducciones = cliente.calcularDeducciones(porcentajeDeducciones);
console.log(`Deducciones de ${cliente.nombre} es de: ${deducciones} usd`);

//impuesto anual
const impuesto = cliente.calcularImpuesto();
console.log(`El impuesto anual a pagar de ${cliente.nombre} es de: ${impuesto} usd`);