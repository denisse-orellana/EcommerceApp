import { productos } from "./products.js"
// console.log(productos)

const isOk = true

const customFetch = (time, task) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (isOk) {
              resolve(task)
          } else {
              reject("Error")
          }
      }, time)
  })
}

let elMostrarBtn = document.getElementById('mostrarBtn')
const mostrarProductos = () => {
  customFetch(2000, productos).then(
      data => {
          let lista = document.createElement("ul")
          for (let i=0; i<data.length; i++) {
              let p = document.createElement("li")
              p.innerHTML = data[i].title

              let image = document.createElement("img")
              image.src = data[i].image

              lista.append(p)
              lista.append(image)
          }
          document.getElementById("root").append(lista)
      }
  )
}
elMostrarBtn.addEventListener('click', mostrarProductos)


//! tarea:
//  crear data del producto, 10 productos
//  crear productos como tarjetas, agregar estilos
//  HACER UNA ESPECIE DE PROMESA PARA HACER EL ASYNC
