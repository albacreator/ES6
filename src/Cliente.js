import Impuestos from './Impuestos.js';

class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    // Getter y Setter para nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    // Método para calcular el impuesto
    calcularImpuesto() {
        return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
    }

    // Métodos para calcular el monto bruto anual y deducciones a través de la instancia de Impuestos
    calcularMontoBrutoAnual(ventas) {
        return this._impuesto.calcularMontoBrutoAnual(ventas);
    }

    calcularDeducciones(porcentaje) {
        return this._impuesto.calcularDeducciones(porcentaje);
    }
}

export default Cliente;