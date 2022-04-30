class Telefono{
    constructor(marca, modelo, precio){
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }
    
}

let Carro = [];        

function agregarAlCarro(celular) {
    Carro.push(celular)
    alert('Se agregó al carro')
}


let precio
let modelo
let marca
let total = 0
let seguir = true

const celular = new Telefono("Samsung","A32",41999)
const celular2 = new Telefono("Samsung","A52",52999)
const celular3 = new Telefono("Samsung","A72",64999)
const celular4 = new Telefono("Apple","Iphone SE",109999)
const celular5 = new Telefono("Apple","Iphone 11",142999)
const celular6 = new Telefono("Apple","Iphone 12",189999)
const celular7 = new Telefono("Xiaomi","Note 10",59999)
const celular8 = new Telefono("Xiaomi","Note 11",66999)
const celular9 = new Telefono("Xiaomi","Poco M3",69999)
// Ciclo while para preguntar si el usuario quiere seguir comprando o no
while (seguir) {
    marca = prompt("Ingrese la marca del celular. (Samsung, Apple, Xiaomi)").toLowerCase()
    while ((marca != "samsung") && (marca != "apple") && (marca != "xiaomi")){
        alert ("Error ingrese una marca valida")
        marca = prompt("Ingrese la marca del celular. (Samsung, Apple, Xiaomi)").toLowerCase()
    }
    // Hago un switch para que el usuario elija su marca preferida y otro para el modelo del celular
    switch(marca){
        case "samsung":
            modelo = prompt("Elija el modelo del producto. A32, A52, A72").toLowerCase()
            while ((modelo != "a32") && (modelo != "a52") && (modelo != "a72")){
                alert ("Error ingrese un modelo valido")
                modelo = prompt("Elija el modelo del producto. A32, A52, A72").toLowerCase()
            }
            switch(modelo){
                case "a32":
                    alert("Usted eligió Samsung A32 (Precio: $41999)")
                    Sumar(41999)
                    agregarAlCarro(celular)
                    break;
                case "a52":
                    alert("Usted eligió Samsung A52 (Precio: $52999)")
                    agregarAlCarro(celular2)
                    Sumar(52999)
                    break;
                case "a72":
                    alert("Usted eligió Samsung A72 (Precio: $64999)")
                    agregarAlCarro(celular3)
                    Sumar(64999)
                    break;
            }
            break;
        case "apple":
            modelo = prompt("Elija el modelo del producto. SE, 11, 12").toLowerCase()
            while ((modelo != "se") && (modelo != "11") && (modelo != "12")){
                alert ("Error ingrese un modelo valido")
                modelo = prompt("Elija el modelo del producto. SE, 11, 12").toLowerCase()
            }
            switch(modelo){
                case "se":
                    alert("Usted eligió Iphone SE (Precio: $109999)")
                    agregarAlCarro(celular4)
                    Sumar(109999)
                    break;
                case "11":
                    alert("Usted eligió Iphone 11 (Precio: $142999)")
                    agregarAlCarro(celular5)
                    Sumar(142999)
                    break;
                case "12":
                    alert("Usted eligió Iphone 12 (Precio: $189999)")
                    agregarAlCarro(celular6)
                    Sumar(189999)
                    break;
            }
            break;
        case "xiaomi":
            modelo = prompt("Elija el modelo del producto. Note 10, Note 11, Poco M3").toLowerCase()
            while ((modelo != "note 10") && (modelo != "note 11") && (modelo != "poco m3")){
                alert ("Error ingrese un modelo valido")
                modelo = prompt("Elija el modelo del producto. Note 10, Note 11, Poco M3").toLowerCase()
            }
            switch(modelo){
                case ("note 10"):
                    alert("Usted eligió Xiaomi Note 10(Precio: $59999)")
                    agregarAlCarro(celular7)
                    Sumar(59999)
                    break;
                case ("note 11"):
                    alert("Usted eligió Xiaomi Note 11(Precio: $66999)")
                    agregarAlCarro(celular8)
                    Sumar(66999)
                    break;
                case ("poco m3"):
                    alert("Usted eligió Xiaomi Poco M3(Precio: $69999)")
                    agregarAlCarro(celular9)
                    Sumar(69999)
                    break;
            }
            break;
       
    }
    let opcion = prompt("¿Desea seguir comprando? Si/No").toLowerCase()
    if (opcion == "no"){
        seguir = false;
        break
    } 
}
//Funcion para sumar el precio al total 
function Sumar(precio){
    total +=precio;
    return total
}
alert(`Ver consola para ver la lista de productos`)
Carro.forEach(listado => {
    console.log(listado);
});
alert(`El total de su compra es de: ${total}`)