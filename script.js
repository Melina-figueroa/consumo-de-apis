async function obtenerDatos() {
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados");
    const datos = await respuesta.json();
    console.log(datos);

    datos.forEach(element => {

        document.getElementById('table').innerHTML += `  <tr>
             <td>${element.nombre} ${element.apellido}</td>
             <td>${element.area}</td>
             <td>${element.domicilio}</td>
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

async function mostrarUno(id) {
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/" + id)
    const datos = await respuesta.json();
    console.log(datos);

    let empleado = document.getElementById("empleado");
    empleado.innerHTML = " ";

    let nombre = document.createElement("th");
    nombre.innerHTML = datos.nombre;

    let apellido = document.createElement("th");
    apellido.innerHTML = datos.apellido;

    let area = document.createElement("th");
    area.innerHTML = datos.area;

    let direccion = document.createElement("th");
    direccion.innerHTML = datos.domicilio;
    
    let imagen = document.createElement("th");
    imagen.innerHTML = `<img src="${datos.foto}"></img>`


    empleado.appendChild(nombre);
    empleado.appendChild(apellido);
    empleado.appendChild(area);
    empleado.appendChild(direccion);
    empleado.appendChild(imagen);

}

async function modificarDatos(){
    let datosMelina={
        "nombre":"Melina",
        "apellido":"Figueroa",
        "area":"Security",
        "domicilio":"Yugoslavia 851 Rio Grande, Tierra del fuego",
        "foto":"https://thumbs.dreamstime.com/b/woman-hacker-programmer-working-computer-cyber-security-center-filled-display-screens-139987808.jpg",
        "id":"6",
        }
        console.log(datosMelina);
    const respuesta = await fetch ("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+datosMelina.id,{   
    method: "PUT",
        body: JSON.stringify(datosMelina),
        headers:{"Content-type":"application/json"}
    });
    const data = await respuesta.json();
    console.log(data);
    datosMelina.innerHTML = data;
    console.log("Datos modificados");
}


obtenerDatos();
