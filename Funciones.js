function Desplegar(){
    var Botones = document.getElementsByClassName("Mostrar");
    let Indice = parseInt(document.getElementById("Texto").value, 10);

    for (let i = 0; i < Botones.length; i++) {
        Botones[i].style.display = (Indice % 2 == 1) ? 'block' : 'none';
    }

    Indice++;
    document.getElementById("Texto").value = Indice;
}

function MostrarPrograma(Indice){
    var Programas = document.getElementsByClassName("ProgramaMostrado");
    for (let i = 0; i < Programas.length; i++) {
        Programas[i].style.display = 'none';
    }
    document.getElementById(Indice).style.display = 'block';
}

function SoloNumeros(id){
    id.value = id.value.replace(/[^0-9]/g, '');
}

// Ejercicio 1: Interés Compuesto
function calcularInteres(event) {
    event.preventDefault();
    const capital = parseFloat(document.getElementById("Capital").value);
    const interes = 0.02; // 2% mensual
    const periodo = parseInt(document.getElementById("Periodo").value);

    const ganancia = capital * interes * periodo;
    document.getElementById("resultado1").innerText = `Ganancia: ${ganancia.toFixed(2)}`;
}

// Ejercicio 2: Comisiones
function calcularComisiones(event) {
    event.preventDefault();
    const sueldo = parseFloat(document.getElementById("Sueldo").value);
    const numVentas = parseInt(document.getElementById("NumVentas").value);
    const comision = 0.10; // 10%

    const totalComision = sueldo * comision * numVentas;
    const total = sueldo + totalComision;
    document.getElementById("resultado2").innerText = `Total a recibir: ${total.toFixed(2)}`;
}

// Ejercicio 3: Descuento
function calcularDescuento(event) {
    event.preventDefault();
    const subtotal = parseFloat(document.getElementById("Subtotal").value);
    const descuento = 0.15; // 15%

    const total = subtotal - (subtotal * descuento);
    document.getElementById("resultado3").innerText = `Total a pagar: ${total.toFixed(2)}`;
}

// Ejercicio 4: Calificación Final
function calcularCalificacion(event) {
    event.preventDefault();
    const parcial1 = parseFloat(document.getElementById("Parcial1").value);
    const parcial2 = parseFloat(document.getElementById("Parcial2").value);
    const parcial3 = parseFloat(document.getElementById("Parcial3").value);
    const examen = parseFloat(document.getElementById("Examen").value);
    const trabajo = parseFloat(document.getElementById("Trabajo").value);

    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    const calificacionFinal = (promedioParciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);
    document.getElementById("resultado4").innerText = `Calificación Final: ${calificacionFinal.toFixed(2)}`;
}

// Ejercicio 5: Edad
function calcularEdad(event) {
    event.preventDefault();
    const fechaNacimiento = new Date(document.getElementById("FechaNacimiento").value);
    const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
    document.getElementById("resultado5").innerText = `Edad: ${edad} años`;
}

// Ejercicio 6: Palabras a Números
function palabrasANumeros(event) {
    event.preventDefault();
    const palabras = document.getElementById("Palabras").value.split(',');
    const numeros = palabras.map(palabra => {
        switch (palabra.trim().toLowerCase()) {
            case 'cero': return 0;
            case 'uno': return 1;
            case 'dos': return 2;
            case 'tres': return 3;
            case 'cuatro': return 4;
            case 'cinco': return 5;
            case 'seis': return 6;
            case 'siete': return 7;
            case 'ocho': return 8;
            case 'nueve': return 9;
            default: return -1; // No es un número
        }
    });
    document.getElementById("resultado6").innerText = `Resultados: ${numeros.join(', ')}`;
}

// Ejercicio 7: Horas Extras
function calcularHorasExtras(event) {
    event.preventDefault();
    const horasTrabajadas = parseInt(document.getElementById("HorasTrabajadas").value);
    const pagoPorHora = parseFloat(document.getElementById("PagoPorHora").value);
    
    let total;
    if (horasTrabajadas <= 40) {
        total = horasTrabajadas * pagoPorHora;
    } else {
        const horasExtras = horasTrabajadas - 40;
        const horasExtrasPagadas = Math.min(horasExtras, 8);
        const horasExtrasExcedentes = horasExtras > 8 ? horasExtras - 8 : 0;

        total = (40 * pagoPorHora) + (horasExtrasPagadas * pagoPorHora * 2) + (horasExtrasExcedentes * pagoPorHora * 3);
    }
    document.getElementById("resultado7").innerText = `Total a recibir: ${total.toFixed(2)}`;
}

// Ejercicio 8: Utilidad Anual
function calcularUtilidad(event) {
    event.preventDefault();
    const antiguedad = parseInt(document.getElementById("Antiguedad").value);
    const salario = parseFloat(document.getElementById("Salario").value);
    let porcentaje;

    if (antiguedad < 1) {
        porcentaje = 0.05; // 5%
    } else if (antiguedad < 2) {
        porcentaje = 0.07; // 7%
    } else if (antiguedad < 5) {
        porcentaje = 0.10; // 10%
    } else if (antiguedad < 10) {
        porcentaje = 0.15; // 15%
    } else {
        porcentaje = 0.20; // 20%
    }

    const utilidad = salario * porcentaje;
    document.getElementById("resultado8").innerText = `Utilidad Anual: ${utilidad.toFixed(2)}`;
}

// Ejercicio 9: Validación de Formulario (agregar formulario de ejemplo aquí)

// Ejercicio 0: Eliminación de etiquetas peligrosas
function eliminarEtiquetas(event) {
    event.preventDefault();
    const htmlInput = document.getElementById("HTMLInput").value;
    const sanitizedHTML = htmlInput.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    document.getElementById("resultado0").innerText = `HTML Limpio: ${sanitizedHTML}`;
}

