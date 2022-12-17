"use strict"

async function obtenerDatos() {
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados");
    const datos = await respuesta.json();
    console.log(datos);

    datos.forEach(element => {

        document.getElementById('table').innerHTML += `  <tr>
             <th>${element.nombre} ${element.apellido}</th>
             <th>${element.area}</th>
             <th>${element.domicilio}</th>
             <th><button class="ver" id="${element.id}">Ver</button></th>
             </tr>`
    });

    let btn = document.querySelectorAll(".ver");
    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            mostrarUno(e.target.id);

        });
    })
}
async function modificarDatos() {
    let datosMelina = {
        "nombre": "Melina",
        "apellido": "Figueroa",
        "area": "Security",
        "domicilio": "Yugoslavia 851 Rio Grande, Tierra del fuego",
        "foto": "data:image/jpeg;base64,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",
        "id": "6",
    }
    console.log(datosMelina);
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/" + datosMelina.id, {
        method: "PUT",
        body: JSON.stringify(datosMelina),
        headers: { "Content-type": "application/json" }
    });
    const data = await respuesta.json();
    console.log(data);
    datosMelina.innerHTML = data;
    console.log("Datos modificados");
}
async function mostrarUno(id) {
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/" + id)
    const datos = await respuesta.json();
    console.log(datos);

    let empleado = document.getElementById("empleado");
    empleado.innerHTML = " ";

    let nombre = document.createElement("th");
    nombre.innerHTML = datos.nombre + " " + datos.apellido;

    let area = document.createElement("th");
    area.innerHTML = datos.area;

    let direccion = document.createElement("th");
    direccion.innerHTML = datos.domicilio;

    let imagen = document.createElement("th");
    imagen.innerHTML = `<img src="${datos.foto}"></img>`

    empleado.appendChild(nombre);
    empleado.appendChild(area);
    empleado.appendChild(direccion);
    empleado.appendChild(imagen);

}





obtenerDatos();
