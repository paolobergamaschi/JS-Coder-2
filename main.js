function Producto(nombre,precio,colores){
    this.nombre = nombre;
    this.precio = precio;
    this.colores = colores || [];
}
const catalogo = []
const prod1 = new Producto("Funda de telefono", "$" + 2000,["Rojo" , "Azul" , "Negro"])
catalogo.push(prod1)
const prod2 = new Producto("Cargador de telefono","$" + 6000,["Blanco","Negro"])
catalogo.push(prod2)
const prod3 = new Producto("Auriculares con cable","$" + 2500,["Negro, Rojo, Blanco, Amarillo"])
catalogo.push(prod3)
const prod4 = new Producto("Auriculares inalambricos","$" + 4000,["Blanco"])
catalogo.push(prod4)
const prod5 = new Producto("Cable lightning","$" + 2400,["Blanco"])
catalogo.push(prod5)
const prod6 = new Producto("Cable USB-C","$" + 2000,["Blanco", "Negro"])
catalogo.push(prod6)
const prod7 = new Producto("Cargador inalambrico","$" + 9000 ,["Blanco"])
catalogo.push(prod7)

let filtroUnico = prompt("Ingrese el producto especifico que desea buscar");
console.log(catalogo.find((prod) => prod.nombre === filtroUnico))

let filtro = prompt("Desea filtrar por palabra, color, o precio?");
if(filtro === ""){alert("Ingrese una palabra valida.")
}
else{
switch (filtro) {
    case "palabra":
        const filtroPalabra = prompt("Ingrese palabra a buscar")
        if(filtroPalabra === ""){alert("Ingrese una palabra valida.")  }
        else{
         console.log(catalogo.filter((prod) => prod.nombre.includes(filtroPalabra)))
    }
    break;
    case "color":
        const filtroColor = prompt("Ingrese el color a filtrar")
        if(filtroColor != "Azul" && filtroColor != "Rojo" && filtroColor != "Negro" && filtroColor != "Blanco" && filtroColor != "Amarillo"){alert("Ingrese un color valido")
        }
        else{
        console.log(catalogo.filter((prod) => prod.colores.includes(filtroColor)))
    }
    break;
    case "precio":
        const precioMaximo = parseInt(prompt("Ingrese precio maximo"))
        if (precioMaximo <= 0){alert("No se encontraron productos por ese precio.")}
        else{
        const filtroPrecio = catalogo.filter(prod => {const precioNumero = parseFloat(prod.precio.slice(1))
        return precioMaximo >= precioNumero})
        console.log(filtroPrecio)
    }
    break;
    default:
        alert("Ingrese un parametro valido.")
    break;
}
}

// catalogo.forEach((prod) =>
// console.log(prod)
// )










