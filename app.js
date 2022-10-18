const isOk = true
const productos = [
  {
    id: 1,
    title: 'Tablet Almost New Last Model',
    price: 85,
    stock: 70,
    image: 'https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd02bb0ba/images/large/26083320.jpg?sw=1200&sh=1200&sm=fit'
  },
  {
    id: 2,
    title: 'Smartphone X 22 Model',
    price: 99,
    stock: 50,
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffalabella.scene7.com%2Fis%2Fimage%2FFalabella%2F14900284_1%3Fwid%3D800%26hei%3D800%26qlt%3D70&imgrefurl=https%3A%2F%2Fwww.falabella.com%2Ffalabella-cl%2Fproduct%2Fprod30673319%2FSmartphone-Galaxy-S21%2B-128GB&tbnid=bCPboCKBDWOZYM&vet=12ahUKEwi2u_iFwOj6AhXVNrkGHWHAAskQMygBegUIARDDAw..i&docid=vhd6TeY2Wu55gM&w=800&h=800&q=smarthphone&ved=2ahUKEwi2u_iFwOj6AhXVNrkGHWHAAskQMygBegUIARDDAw'
  }, 
  {
    id: 3,
    title: 'Computer NewModel',
    price: 99,
    stock: 200,
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F77%2F170477-050-1C747EE3%2FLaptop-computer.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftechnology%2Fcomputer&tbnid=_bAxRLesPf9HpM&vet=12ahUKEwjQtLLTvej6AhXTN7kGHdp_BTMQMygAegUIARD4Ag..i&docid=9oCv57c03X8yLM&w=1600&h=1097&q=computer&ved=2ahUKEwjQtLLTvej6AhXTN7kGHdp_BTMQMygAegUIARD4Ag'
  }, 
  {
    id: 4,
    title: 'Mouse NewModel',
    price: 15,
    stock: 600,
    image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiTxfzovej6AhUeQEgAHUgqDSEYABAFGgJjZQ&sig=AOD64_0b21y0Auv7T3QByRfKL1phulBJAQ&adurl&ctype=5&ved=2ahUKEwjqw_Dovej6AhWTOLkGHSO8DIIQvhd6BAgBEH0'
  }, 
  {
    id: 5,
    title: 'Printer NewModel 22',
    price: 85,
    stock: 45,
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61yRmna2U%2BL._AC_SL1000_.jpg&imgrefurl=https%3A%2F%2Fwww.ubuy.cl%2Fen%2Fproduct%2F3G8GDQ-canon-pixma-tr4520-wireless-all-in-one-photo-printer-with-mobile-printing-black-works-with-alexa&tbnid=2iNCUtNZrNnm8M&vet=12ahUKEwj9m-6Hvuj6AhUSM7kGHezDCMEQMygBegUIARC9Aw..i&docid=1Ce3uxgogYX7MM&w=844&h=627&itg=1&q=printer&ved=2ahUKEwj9m-6Hvuj6AhUSM7kGHezDCMEQMygBegUIARC9Aw'
  }, 
  {
    id: 6,
    title: 'Monitor New Model',
    price: 55,
    stock: 20,
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.renderhub.com%2Fross-hankinson%2Fcomputer-monitor-screen%2Fcomputer-monitor-screen-01.jpg&imgrefurl=https%3A%2F%2Fwww.renderhub.com%2Fross-hankinson%2Fcomputer-monitor-screen&tbnid=tJzs8E13flRqTM&vet=12ahUKEwj6uLG2vuj6AhWzNbkGHXY7BKkQMygBegUIARDwAg..i&docid=GUNZwr4qYkWd7M&w=1200&h=1200&q=MONITOR%20SCREEN&ved=2ahUKEwj6uLG2vuj6AhWzNbkGHXY7BKkQMygBegUIARDwAg'
  }, 
  {
    id: 7,
    title: 'Audifonos Air Pod 22',
    price: 55,
    stock: 20,
    image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwj107PGvuj6AhUGJ5EKHdnKCWQYABAPGgJjZQ&sig=AOD64_3av1KVtLEptlZgDnUHSlUrKQMZQg&adurl&ctype=5&ved=2ahUKEwithKnGvuj6AhX6F7kGHVR0Bz0Qvhd6BQgBEJ8B'
  }, 
  {
    id: 8,
    title: 'Working Desk',
    price: 199,
    stock: 10,
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F715KMQwFGaL._AC_SL1000_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.co.uk%2FFurniturebox-UK-Modern-Computer-Executive%2Fdp%2FB082WGRTQH&tbnid=BX5dYj90xZyj9M&vet=12ahUKEwjt0cX5vuj6AhVnArkGHQPkAXMQMygJegUIARDfAQ..i&docid=hzDCv3qWS951xM&w=1000&h=667&q=work%20desd&ved=2ahUKEwjt0cX5vuj6AhVnArkGHQPkAXMQMygJegUIARDfAQ'
  }, 
  {
    id: 9,
    title: 'Working Chair',
    price: 35,
    stock: 40,
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Foffice-chair-1628532397.jpg%3Fcrop%3D0.502xw%3A1.00xh%3B0.250xw%2C0%26resize%3D640%3A*&imgrefurl=https%3A%2F%2Fwww.popularmechanics.com%2Fhome%2Fg25333915%2Foffice-chairs%2F&tbnid=vC9eSl_T0K5sGM&vet=12ahUKEwjC0pepv-j6AhVuNbkGHa7WB14QMygBegUIARDuAg..i&docid=4b0Haweu9QwVdM&w=640&h=637&q=Chair%20work&ved=2ahUKEwjC0pepv-j6AhVuNbkGHa7WB14QMygBegUIARDuAg'
  }, 
  {
    id: 10,
    title: 'Soporte computador',
    price: 30,
    stock: 50,
    image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwj086LgwOj6AhUeQEgAHUgqDSEYABALGgJjZQ&sig=AOD64_0Ugpa0oud1_X4I9nah4IYVMcc4kQ&adurl&ctype=5&ved=2ahUKEwjYiJDgwOj6AhUWN7kGHc8UDxUQwg96BAgBEGg'
  }
]

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
