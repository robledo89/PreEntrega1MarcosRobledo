// VARIABLES GLOBALES PARA AGREGADOS DE HABITACION
let agregadoSeleccionado = ""

// VARIABLES GLOBALES GENERALES - ENTEROS
let habitacionCosto = 0
let agregadosTotalCosto = 0
let subTotal = 0
let totalFinal = 0
let acumuladorSumaTotales = 0
let sumaAgregadosTotal = 0

// VARIABLES GLOBALES GENERALES - STRINGS
let habitacionTipo

// ARRAYS
const arrayCostos = [];
const arrayDetalle = [];
const arrayClase = [];

// VALIDADORES DE MENU AGREGADOS
let wifiOK = false
let limpiezaOK = false
let desayunoOK = false

// VARIABLES COSTOS INDIVIDUALES DE AGREGADOS
let valorAgregado = 0

// FUNCION - MENU PRINCIPAL
function mainMenu() {
    let habitacionOK = false
    let menuOp = 0
    do {
        menuOp = prompt("::: Bienvenido al Hotel Relax - Punta del Este :::\n\nPor favor seleccione una opción:\n\n(1) Reservar Habitación\n(2) Agregar servicios a reserva\n(3) SALIR")
        menuOp = parseInt(menuOp)
        switch (menuOp) {
            case 1: ////////////////// SUB-MENU RESERVA HABITACIÓN //////////////////
                if (habitacionOK) { // Si ya tiene habitación seleccionada
                    alert("ATENCIÓN - Ya tiene reserva de HABITACIÓN\n\nPresione una tecla para VOLVER")
                } else { // Si no tiene habitación seleccionada, sigue
                    acumuladorSumaTotales = reservaHab();
                    subTotal = acumuladorSumaTotales.habitacionCosto;
                    habitacionOK = true
                }
                break
            case 2: ////////////////// SUB-MENU AGREGAR SERVICIOS //////////////////
                if (habitacionOK) {
                    if (wifiOK && desayunoOK && limpiezaOK){
                        alert("Ya tienes todos los AGREGADOS ingresados\n\nPresione una tecla para VOLVER")
                    } else {
                    acumuladorSumaTotales = menuAgregados();
                    subTotal += acumuladorSumaTotales.agregadosTotalCosto;
                    agregadosTotalCosto = 0
                    }
                }
                else {
                    alert("Por favor primero realice la reserva de HABITACIÓN\n\nPresione una tecla para VOLVER")
                }
                break
            case 3: ////////////////// CHECK-OUT Y SALIR //////////////////
                if (habitacionOK) {
                    totalFinal = subTotal * 1.22
                    sumaAgregadosTotal = arrayDetalle.reduce((acumulador, variableReduce) => acumulador + variableReduce.AGREGADOScosto, 0)                   
                    // chequeo de suma total agregados ///// console.log(sumaAgregadosTotal)
                    pusheoArrayGlobal();
                    pusheoClase();
                    let reservaNombre = prompt("Muchas gracias por elegirnos!\n\nRecuerde abonar al llegar: " + totalFinal + " (IVA inc.)\n\n-> Por favor ingrese NOMBRE del titular para su reserva")
                    arrayClase.unshift(reservaNombre)
                    ///////////////////// IMPRIMO EN LOGS /////////////////////
                    console.log(arrayClase);
                    alert("-> Se ingresó reserva a nombre de: " + reservaNombre + "\n\nLos esperamos!\n\n::: HOTEL RELAX - PUNTA DEL ESTE :::")
                } else {
                    alert("\nNo estas listo para realizar la reserva?\n\nLos esperamos cuando sea de su agrado :)\n\n::: HOTEL RELAX - PUNTA DEL ESTE :::")
                }
                break
            // OPCION INVALIDA
            default: alert("(ERROR) La Opción: ",+ menuOp + " es inválida, por favor intente de nuevo")
        }
    } while (menuOp != 3)
};

// FUNCION - RESERVA HABITACION
function reservaHab() {
    let reservaOP = prompt("::: HABITACIONES :::\nSeleccione la habitación deseada\n\n(1) Básica = $10.000\n(2) Deluxe = $15.000\n(3) Suite Plus = $20.000\n(4) Volver al menú principal\n\nIngrese la opción deseada: ")
    reservaOP = parseInt(reservaOP)
    do {
        switch (reservaOP) {
            case 1:
                habitacionCosto = 10000
                habitacionTipo = "Habitación Básica"
                alert("Eligió Habitación Básica")
                break
            case 2:
                habitacionCosto = 15000
                habitacionTipo = "Habitación Deluxe"
                alert("Eligió Habitación Deluxe")
                break
            case 3:
                habitacionCosto = 20000
                habitacionTipo = "Habitación Suite Deluxe"
                alert("Eligió Habitación Suite Plus")
                break
            case 4: alert("Volviendo al MENÚ PRINCIPAL - Aguarde por favor...")
                break
            // OPCION INVALIDA
            default: alert("(ERROR) La Opción: ",+ reservaOP + " es inválida, por favor intente de nuevo")
        }
        return {
            habitacionCosto: habitacionCosto,
            habitacionTipo: habitacionTipo,
        }
    } while (reservaOP != 4)
};

// FUNCION - AGREGADOS DE LA RESERVA 
function menuAgregados() {
    valorAgregado = 0
    let agregadosOp = prompt("::: AGREGADOS :::\nSeleccione el agregado para su reserva\n\n(1) Wifi 24/7 = $1.000\n(2) Servicio de limpieza = $1.500\n(3) Desayuno continental = $2.000\n(4) Volver al MENU anterior\n\nIngrese las opciones deseadas: ")
    agregadosOp = parseInt(agregadosOp)
    do {
        switch (agregadosOp) {
            case 1:
                if (!wifiOK) {
                    valorAgregado = 1000
                    alert("Agregó el servicio WIFI a su reserva")
                    agregadoSeleccionado = "wifi"
                    wifiOK = true
                    agregadosTotalCosto += valorAgregado
                    pusheoAgregadosIndividual();
                    arrayCostos.push(arrayDetalle);
                } else {
                    alert("Ya eligió el agregado: *** WIFI ***\n\nPresione una tecla para VOLVER")
                }
                break
            case 2:
                if (!limpiezaOK) {
                    valorAgregado = 1500
                    alert("Agregó el servicio LIMPIEZA a su reserva")
                    agregadoSeleccionado = "limpieza"
                    limpiezaOK = true
                    agregadosTotalCosto = agregadosTotalCosto + valorAgregado
                    pusheoAgregadosIndividual();
                    arrayCostos.push(arrayDetalle);
                } else {
                    alert("Ya eligió el agregado: *** LIMPIEZA ***\n\nPresione una tecla para VOLVER")
                }
                break
            case 3:
                if (!desayunoOK) {
                    valorAgregado = 2000
                    alert("Agregó el servicio DESAYUNO a su reserva")
                    agregadoSeleccionado = "desayuno"
                    desayunoOK = true
                    agregadosTotalCosto += valorAgregado
                    pusheoAgregadosIndividual();
                    arrayCostos.push(arrayDetalle);
                } else {
                    alert("Ya eligió el agregado: *** DESAYUNO ***\n\nPresione una tecla para VOLVER")
                }
                break
            case 4:
                alert("Realizando Check-out de AGREGADOS...........\n\nPresione una tecla para volver al MENU anterior")
                break
            // OPCION INVALIDA
            default: alert("(ERROR) La Opción: ",+ agregadosOp + " es inválida, por favor intente de nuevo")
        }
        return {
            agregadosTotalCosto: agregadosTotalCosto,
            queEligio: agregadoSeleccionado,
            valorAgregado: valorAgregado,
        }
    } while (agregadosOp != 4)
};

///////////////// FUNCIONES PARA PUSHEOS ////////////////

function pusheoArrayGlobal() {
    // CONSTRUCCION DE OBJETO COSTOS
    const costos = {
        COSTOHAB: habitacionCosto,
        COSTOAGR: sumaAgregadosTotal,
        SUB: subTotal,
        TOT: totalFinal,
        HAB: habitacionTipo,
        AGREGADOS: arrayDetalle,
    }
    arrayCostos.push(costos);
    console.log(costos);
}

function pusheoAgregadosIndividual() {
    // CONSTRUCCION DE OBJETO COSTOS
    const detalle = {
        AGREGADOSdetalle: agregadoSeleccionado,
        AGREGADOScosto: valorAgregado,
    }
    arrayDetalle.push(detalle);
}

//////////////////////// PRUEBA DE UTILIZACIÓN DE CLASE ////////////////////////
function pusheoClase() {
    const impresionHotelRelax = new claseHotelRelax(
        habitacionTipo,
        habitacionCosto,
        valorAgregado,
        agregadoSeleccionado,
        valorAgregado,
        subTotal,
        totalFinal,
    );
    arrayClase.push(impresionHotelRelax);
}
///////////////////////////////////////////////////////////////////////////////

///////////////// LLAMADO FUNCION MENU PRINCIPAL ////////////////////
mainMenu()

