/* ejercicio 1*/
/*let respuestaNumero1 = prompt("¿eres bellisimo/a?");

if (respuestaNumero1 === "si") {
    console.log("ciertamente");
} else if (respuestaNumero1 === 'no') {
    console.log("no te creo");
}
/* ejercicio 2*/
/*var n1 = prompt("escribe un numero");

if (n1 % 2 === 0) {
    document.write("Es divisible por 2");
    console.log("numero divisible entre 2");
    alert ("Si en divisible por 2 ");
} else {
    document.write("No es divisible por 2");
    console.log("numero no es divisible entre 2");
    alert ("No es divisible por 2");
}
/*ejercicio 3*/
/*const primerNumero = parseFloat(prompt("Ingresa el primer número:"));
const segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));

if (isNaN(primerNumero) || isNaN(segundoNumero)) {
  console.log("Al menos uno de los valores ingresados no es un número válido.");
} else {
  if (primerNumero < segundoNumero) {
    console.log(primerNumero + " es menor que " + segundoNumero + ".");
  } else {
    console.log(segundoNumero + " es menor que " + primerNumero + ".");
  }
}*/
/*ejercicio 4*/
/*let n2 = prompt("Numero de cliente");

if (n2 == 1000) {
    alert("Ganaste premio")
} else {
    alert("Lo sentimos,sigue intentando")
}
/*ejercicio 5*/
/*var n1 = prompt("Escriba un numero");
var n2 = prompt("Escriba otro numero");
if (n1 < n2) {
    document.write(n1);
    console.log("n1 es el numero menor");
} else {
    document.write(n2);
    console.log("n2 el numero menor es")
}
/*ejercicio 6*/
/*var n1 = prompt("escriba un numero");
var n2 = prompt("escriba otro numero");
var n3 = prompt("escriba otro numero");

if ( n1 > n2 && n1 > n3) {
    document.write(n1);
    console.log("n1 es el numero mayor");
} else if (n2 > n3) {
    document.write(n2);
    console.log("n2 es el numero mayor");
} else {
    document.write(n3);
    console.log("n3 es el numero mayor");
}
/*ejercicio 7 */
/*var dia= prompt("escribe un dia de la semana");
  if (dia === "lunes" ) {
    alert("exelente inicio de semana");
 } else if (dia === "viernes") {
    alert("hoy no se sale a bailar");
 } else if(dia === "sabado" && "domingo") {
    alert("descanse un poco y siga estudiando");
 } else if(dia === "domingo") {
    alert("descanse un poco y siga estudiando");
 } else if(dia === "martes" || "miercoles" || "jueves") {
    alert("siga trabajando")
 } 
 /* ejercicio 8 */
/*let calificacion = prompt ("Escriba su nota");

 if (calificacion >= 0 && calificacion < 6 ) {
    alert("Reprobaste")
} else if(calificacion >= 6 && calificacion < 9 ){
    alert("Regular")
} else if (calificacion >= 9 && calificacion < 10) {
    alert("Bien")
} else if (calificacion >= 10 && calificacion < 11) {
    alert("Exelente")
} else {
    alert("Error, Ingrese una calificacion valida")
}*/
/*ejercicio 9*/
/*compra = prompt("Que helado quiere comprar");

    if (compra === "sin topping" ) {
        alert("cuesta 50 MXN")
    } else if(compra === "oreo") {
        alert("cuesta 10 MXN")
    } else if(compra === "KitKat") {
        alert("cuesta 15 MXN")
    } else if(compra === "brownie") {
        alert("cuesta 20 MXN")
    } else {
        alert("No hay ese topping, lo sentimos")
        alert("precio del helado sin ningún topping es de 50MXN")
    }*/
/*ejercicio 10*/
   
    /*
    let costos_Mensuales = prompt("escoja un programa")
    
        if (costos_Mensuales === "course") {
            alert("Le cuesta $4999 MXN");
        } else if(costos_Mensuales === "carrera") {
            alert("Le cuesta $3999 MXN")
        } else if(costos_Mensuales === "master") {
            alert("Le cuesta $2999 MXN")
        } else {
            alert("ERROR")
        }

    let descuento = prompt("Cuentas con alguna Beca ¿Cual?")

        if (descuento === "facebook") {
            alert("Tienes descuento del 20%");
            alert((costos_Mensuales === "course") + (",Queda en ") + (4999 - 999.8));
            alert((costos_Mensuales === "carrera") + (",Queda en") + (3999 - 799.8));
            alert((costos_Mensuales === "master") + (",Queda en") + (2999 - 599.8));
 
        } else if(descuento === "google") {
            alert("Tienes descuento del 15%");
            alert((costos_Mensuales === "course") + (",Queda en ") + (4999 - 749.85));
            alert((costos_Mensuales === "carrera") + (",Queda en") + (3999 - 599.85));
            alert((costos_Mensuales === "master") + (",Queda en") + (2999 - 449.85));
        } else if(descuento === "jesua") {
            alert("Tienes descuento del 50%");
            alert((costos_Mensuales === "course") + (",Queda en ") + (4999 - 2499.5));
            alert((costos_Mensuales === "carrera") + (",Queda en") + (3999 - 1999.5));
            alert((costos_Mensuales === "master") + (",Queda en") + (2999 - 1499.5));
        } else {
            alert("No tiene descuento");
        }*/

    /*Ejercicio 11*/
    let vehiculo = prompt("En que veiculo se transporto (coche, moto, autobus):");
    let kilometros_recorridos = parseFloat(prompt("Ingrasa los kilometros recorridos:"));
    let litros_consumidos = parseFloat(prompt("Cuantos litros se consumieron:"));

    let precio_kilometro;

        if (vehiculo === "coche") {
            precio_kilometro = 0.20;
        } else if (vehiculo === "moto") {
            precio_kilometro = 0.10;
        } else if (vehiculo === "autobus") {
            precio_kilometro = 0.5;
        } else {
            console.log("Error tipo de vehiculo no valido");
            /*return;*/
        }
        let costo_total = precio_kilometro * kilometros_recorridos;

        if (litros_consumidos <= 100) {
            costo_total += 5;
        } else {
            costo_total +=  10;
        }
        console.log("el valor total a pagar es:", costo_total)
       