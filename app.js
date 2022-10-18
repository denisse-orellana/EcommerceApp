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
          let lista = document.createElement("div")
          for (let i=0; i<data.length; i++) {
              let h3 = document.createElement("h3")
              h3.innerHTML = data[i].title

              let cardDiv = document.createElement("div")
              cardDiv.className = "card-product"

              let image = document.createElement("img")
              image.src = data[i].image

              let price = document.createElement("p")
              price.innerHTML = `US$ ${data[i].price}`

              let buyButton = document.createElement("button")
              buyButton.innerHTML = 'Buy'

              cardDiv.append(h3)
              cardDiv.append(image)
              cardDiv.append(price)
              cardDiv.append(buyButton)
              lista.append(cardDiv)
          }
          document.getElementById("root").append(lista)
      }
  )
}
elMostrarBtn.addEventListener('click', mostrarProductos)


//! TAREA:
//  crear data del producto, 10 productos
//  crear productos como tarjetas, agregar estilos
//  HACER UNA ESPECIE DE PROMESA PARA HACER EL ASYNC
