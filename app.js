/*
* TAREA 4: Part 1
    1) Crear 10 productos en un array
    2) Crear UI similando un ecommerce
    3) Hacer una promesa Async Await
*/



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

// ---------------------------  Then Promise ---------------------------- //
// const mostrarProductos = () => {
//   customFetch(2000, productos).then(
//       data => {
//           let lista = document.createElement("div")
//           for (let i=0; i<data.length; i++) {
//               let h3 = document.createElement("h3")
//               h3.innerHTML = data[i].title

//               let cardDiv = document.createElement("div")
//               cardDiv.className = "card-product"

//               let image = document.createElement("img")
//               image.src = data[i].image

//               let price = document.createElement("p")
//               price.innerHTML = `US$ ${data[i].price}`

//               let buyButton = document.createElement("button")
//               buyButton.innerHTML = 'Buy'

//               cardDiv.append(h3)
//               cardDiv.append(image)
//               cardDiv.append(price)
//               cardDiv.append(buyButton)
//               lista.append(cardDiv)
//           }
//           document.getElementById("root").append(lista)
//       }
//   )
// }
// ---------------------------  Then Promise ---------------------------- //



// ---------------------------  Async Await Promise --------------------- //
const mostrarProductos = async() => {
    try {
        const data = await customFetch(2000, productos)
        // console.log(data)
        getCard(data)
        return data
    } catch (error) {
        console.error(error);
    }
}

const getCard = (data) => {
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
// ---------------------------  Async Await Promise --------------------- //



elMostrarBtn.addEventListener('click', mostrarProductos)