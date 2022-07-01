
// Comenzamos con algunas pruebas...

alert("Hola Usuario, hagamos unas pruebitas...")

// Asignamos unas variables y desarrollamos ciclos...

let numero = parseInt(prompt("ingrese un numero y le sumaremos de 1 en uno 10 veces..."));

for(let i = 1; i <= 10; i++){
    let result = numero + i;
    let mensaje = "Tu resultado es:" + result;
    alert(mensaje);
}

alert("Hacemos otra prueba...");

let numerito = parseInt(prompt("ingrese otro numerito y lo saludaremos esa cantidad de veces..."));

for(let i = 1; i < numerito; i++){
    alert("Hola");
}

alert("Muchas gracias por probar mis primeros codigos en JavaScript!!");