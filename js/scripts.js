class Telefono{
    constructor(marca, modelo, precio){
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }
}
        

class Carro {
    constructor(total){
        this.telefonos = []
        this.total = total
    }
    agregarAlCarro (celular){
        this.telefonos.push(celular)
        this.total += celular.precio
    }
    
    MostrarCarro(){
        this.telefonos.forEach(listado => {
            console.log(listado);
        });
    }
}

let modelo
let marca
let seguir = true

const celular = new Telefono("Samsung","A32",41999)
const celular2 = new Telefono("Samsung","A52",52999)
const celular3 = new Telefono("Samsung","A72",64999)
const celular4 = new Telefono("Apple","iphone SE",109999)
const celular5 = new Telefono("Apple","iphone 11",142999)
const celular6 = new Telefono("Apple","iphone 12",189999)
const celular7 = new Telefono("Xiaomi","note 10",59999)
const celular8 = new Telefono("Xiaomi","note 11",66999)
const celular9 = new Telefono("Xiaomi","poco m3",69999)
const carro = new Carro(0);

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
                    carro.agregarAlCarro(celular)
                break;
                case "a52":
                    alert("Usted eligió Samsung A52 (Precio: $52999)")
                    carro.agregarAlCarro(celular2)  
                break;
                case "a72":
                    alert("Usted eligió Samsung A72 (Precio: $64999)")
                    carro.agregarAlCarro(celular3)
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
                    carro.agregarAlCarro(celular4)
                break;
                case "11":
                    alert("Usted eligió Iphone 11 (Precio: $142999)")
                    carro.agregarAlCarro(celular5)
                break;
                case "12":
                    alert("Usted eligió Iphone 12 (Precio: $189999)")
                    carro.agregarAlCarro(celular6)
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
                    alert("Usted eligió Xiaomi Note 10 (Precio: $59999)")
                    carro.agregarAlCarro(celular7)
                break;
                case ("note 11"):
                    alert("Usted eligió Xiaomi Note 11 (Precio: $66999)")
                    carro.agregarAlCarro(celular8)
                break;
                case ("poco m3"):
                    alert("Usted eligió Xiaomi Poco M3 (Precio: $69999)")
                    carro.agregarAlCarro(celular9)
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

alert(`Ver consola para ver la lista de productos`)
carro.MostrarCarro()
alert(`El total de su compra es de: ${carro.total}`)