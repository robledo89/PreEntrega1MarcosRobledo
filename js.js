// VARIABLES GLOBALES PARA AGREGADOS DE HABITACION
let queEligio1 = "***"
let queEligio2 = "***"
let queEligio3 = "***"


// FUNCION - MENU PRINCIPAL
function mainMenu() {
    let habitacionOK = false
    let totalFinal = 0
    let subTotal = 0
    let opMenu = 0
    do {
        opMenu = prompt("::: Bienvenido al Hotel Relax - Punta del Este :::\n\nPor favor seleccione una opción:\n\n(1) Reservar Habitación\n(2) Agregar servicios a reserva\n(3) Check-Out\n(4) SALIR")
        opMenu = parseInt(opMenu)
        switch (opMenu) {
            case 1:
                if (subTotal != 0) {
                    alert("ATENCIÓN - Ya tiene reserva de HABITACIÓN\n\nPresione una tecla para VOLVER")
                } else {
                    subTotal = subTotal + reservaHab()
                    alert("El sub-total por su reserva es: " + subTotal)
                    habitacionOK = true
                }
                break
            case 2:
                if (habitacionOK) {
                    subTotal = subTotal + totalAgregados()
                    alert("El sub-total por su reserva es: " + subTotal)
                } else {
                    alert("Por favor primero realice la reserva de HABITACIÓN\n\nPresione una tecla para VOLVER")
                }
                break
            case 3:
                if (habitacionOK) {
                    totalFinal = subTotal
                    alert("[LOADING...] Realizando Check-Out\n\nAgregados: "+queEligio1+", "+queEligio2+", "+queEligio3+"\n\nEl total por su compra es: " + totalFinal + " (más IVA)")
                } else {
                    alert("Por favor primero realice la reserva de HABITACIÓN\n\nPresione una tecla para VOLVER")
                }
                break
            case 4:
                if (habitacionOK) {
                    totalFinal = subTotal
                    alert("Muchas gracias por elegirnos, los esperamos!\n\n::: HOTEL RELAX - PUNTA DEL ESTE :::\n\nAgregados: "+queEligio1+", "+queEligio2+", "+queEligio3+"\n\nRecuerde abonar al llegar: " + totalFinal * 1.22 + " (IVA inc.)")
                } else {
                    alert("\nLos esperamos cuando sea de su agrado :)\n\n::: HOTEL RELAX - PUNTA DEL ESTE :::")
                }
                break
            // OPCION INVALIDA
            default: alert("(X) Opción inválida, por favor intente de nuevo")
        }
    } while (opMenu != 4)
};

// FUNCION - RESERVA HABITACION
function reservaHab() {
    let reservaTipo = 0
    let reserva = prompt("::: HABITACIONES :::\nSeleccione la habitación deseada\n\n(1) Básica = $10.000\n(2) Deluxe = $15.000\n(3) Suite Plus = $20.000\n(4) Volver al menú principal\n\nIngrese la opción deseada: ")
    reserva = parseInt(reserva)
    do {
        switch (reserva) {
            case 1: reservaTipo = 10000
                alert("Eligió Habitación Básica")
                break
            case 2: reservaTipo = 15000
                alert("Eligió Habitación Deluxe")
                break
            case 3: reservaTipo = 20000
                alert("Eligió Habitación Suite Plus")
                break
            case 4: alert("Volviendo al MENÚ PRINCIPAL - Aguarde por favor...")
                break
            // OPCION INVALIDA
            default: alert("(X) Opción inválida, por favor intente de nuevo")
        }
        return reservaTipo
    } while (reserva != 4)
};

// FUNCION - AGREGADOS DE LA RESERVA 
function totalAgregados() {
    let agregadosTotal = 0
    let agregados = prompt("::: AGREGADOS :::\nSeleccione el agregado para su reserva\n\n(1) Wifi 24/7 = $1.000\n(2) Servicio de limpieza = $1.500\n(3) Desayuno continental = $2.000\n(4) Volver al menú principal\n\nIngrese las opciones deseadas: ")
    agregados = parseInt(agregados)
    //queEligio = parseInt(queEligio)
    do {
        switch (agregados) {
            case 1:
                if (queEligio1 != "wifi") {
                    agregadosTotal = 1000
                    alert("Agregó el servicio WIFI a su reserva")
                    queEligio1 = "wifi"
                } else {
                    alert("Ya eligió el agregado: " + queEligio1 + "\n\nPresione una tecla para VOLVER")
                }
                break
            case 2:
                if (queEligio2 != "limpieza") {
                    agregadosTotal = 1500
                    alert("Agregó el servicio LIMPIEZA a su reserva")
                    queEligio2 = "limpieza"
                } else {
                    alert("Ya eligió el agregado: " + queEligio2 + "\n\nPresione una tecla para VOLVER")
                }
                break
            case 3:
                if (queEligio3 != "desayuno") {
                    agregadosTotal = 2000
                    alert("Agregó el servicio DESAYUNO a su reserva")
                    queEligio3 = "desayuno"
                } else {
                    alert("Ya eligió el agregado: " + queEligio3 + "\n\nPresione una tecla para VOLVER")
                }
                break
            case 4: alert("Volviendo al MENÚ PRINCIPAL - Aguarde por favor...")
                break
            // OPCION INVALIDA
            default: alert("(X) Opción inválida, por favor intente de nuevo")
        }
        return agregadosTotal
    } while (agregados != 4)
};

// LLAMADO FUNCION MENU PRINCIPAL
mainMenu()