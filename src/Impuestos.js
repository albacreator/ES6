// Definición de la clase Impuestos
class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    // Getter y Setter para montoBrutoAnual
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(monto) {
        this._montoBrutoAnual = monto;
    }

    // Getter y Setter para deducciones
    get deducciones() {
        return this._deducciones;
    }

    set deducciones(deducciones) {
        this._deducciones = deducciones;
    }

    // Método para calcular el monto bruto anual (Ejemplo de lógica de cálculo)
    calcularMontoBrutoAnual(ventas) {
        // Suponiendo que el monto bruto anual es igual a la suma de las ventas
        this.montoBrutoAnual = ventas.reduce((total, venta) => total + venta, 0);
        return this.montoBrutoAnual;
    }

    // Método para calcular las deducciones (Ejemplo de lógica de cálculo)
    calcularDeducciones(porcentaje) {
        // Suponiendo que las deducciones son un porcentaje del monto bruto anual
        this.deducciones = this.montoBrutoAnual * (porcentaje / 100);
        return this.deducciones;
    }
}

// Exportación de la clase Impuestos para que pueda ser utilizada en otros archivos
export default Impuestos;