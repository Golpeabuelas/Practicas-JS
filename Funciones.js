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
    let valor = id.value;
    let auxiliar = "";
    let SoloNumeros = true;

    for(let i = 0; i < valor.length; i++){
        if(/[0-9]/.test(valor.charAt(i))){
            auxiliar += valor.charAt(i);
        } else{
            SoloNumeros = false;
            break;
        }
    }

    if(SoloNumeros == false){
        auxiliar = "";
        for(let i = 0; i < (valor.length - 1); i++){
            auxiliar += valor.charAt(i);
        }
    }

    id.value = auxiliar;
}

function Borrar(){
    let Inputs = document.getElementsByClassName("Input");

    for(let i = 0; i < Inputs.length; i++){
        Inputs[i].value = Inputs[i].defaultValue;
    }
}

// Ejercicio 1: Interés Compuesto
function calcularInteres(event) {
    event.preventDefault();
    const capital = parseFloat(document.getElementById("Capital").value);
    const interes = parseInt(document.getElementById("Interés").value);
    const periodo = parseInt(document.getElementById("Periodo").value);

    const ganancia = capital * Math.pow(1+Math.pow(interes, - 1), periodo);
    document.getElementById("resultado1").innerText = `Tu dinero al retirarlo: ${ganancia.toFixed(2)}`;
}

// Ejercicio 2: Comisiones
function calcularComisiones(event) {
    event.preventDefault();
    const sueldo = parseFloat(document.getElementById("Sueldo").value);
    const numVentas = parseInt(document.getElementById("NumVentas").value);
    const comision = parseFloat(document.getElementById("Comision").value); 

    const totalComision = sueldo * comision * numVentas;
    const total = sueldo + totalComision;
    document.getElementById("resultado2").innerText = `Total a recibir: ${total.toFixed(2)}`;
}

// Ejercicio 3: Descuento
function calcularDescuento(event) {
    event.preventDefault();
    const subtotal = parseFloat(document.getElementById("Subtotal").value);
    const descuento = parseInt(document.getElementById("Descuento").value); 

    const total = subtotal - (subtotal * Math.pow(descuento, -1));
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
            default: return -1; 
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
    const Antiguedad = parseInt(document.getElementById("Antiguedad").value);
    const Salario = parseFloat(document.getElementById("Salario").value);
    let Porcentaje;

    if (Antiguedad < 1) {
        Porcentaje = 0.05; 
    } else if (Antiguedad < 2) {
        Porcentaje = 0.07; 
    } else if (Antiguedad < 5) {
        Porcentaje = 0.10; 
    } else if (Antiguedad < 10) {
        Porcentaje = 0.15; 
    } else {
        Porcentaje = 0.20; 
    }

    const utilidad = Salario * Porcentaje;
    document.getElementById("resultado8").innerText = `Utilidad Anual: ${utilidad.toFixed(2)}`;
}

// Ejercicio 9: Validación de Formulario (agregar formulario de ejemplo aquí)

// Ejercicio 0: Eliminación de etiquetas peligrosas
function eliminarEtiquetas(event) {
    event.preventDefault();

    const Input = document.getElementById("HTMLInput").value;
    const NoScript = Input.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    const NoLink = NoScript.replace(/<link[^>]*>/gi, '');
    document.getElementById("resultado0").innerText = `HTML Limpio: ${NoLink}`;
}

