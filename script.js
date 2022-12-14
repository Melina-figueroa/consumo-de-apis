async function obtenerDatos(){
    let respuesta = await fetch("https://rickandmortyapi.com/api/character")
    let datos = await respuesta.json();
    console.log(datos);

    datos.results.forEach(element => {

        document.getElementById('table').innerHTML+=`  <tr>
             <td>${element.name}</td>
             <td>${element.status}</td>
             <td><img src="${element.image}"></td>
             <td><button class="ver" id="${element.id}">Ver</button></td>
             </tr>`      
    
   });

   let btn = document.querySelectorAll(".ver");
   btn.forEach(item => {
    item.addEventListener('click', (e) => {
        mostrarUno(e.target.id);
    });
   })

} 

async function mostrarUno(id){
    let respuesta = await fetch("https://rickandmortyapi.com/api/character/"+id)
    let datos = await respuesta.json();
    console.log(datos);

    let personaje = document.getElementById("personaje");
    personaje.innerHTML = "";
    let nombre = document.createElement("h4");
    nombre.innerHTML = datos.name;

    let estado = document.createElement("h4");
    estado.innerHTML = datos.status;

    let imagen = document.createElement("h4");
    imagen.innerHTML = `<img src="${datos.image}"></img>`

    
    personaje.appendChild(nombre);
    personaje.appendChild(estado);
    personaje.appendChild(imagen);

}

obtenerDatos();