'use strict';

var data = [
    { id: 1, nombre: 'Fabian', apellido: 'Caamal'},
    { id: 2, nombre: 'Mario', apellido: 'Mena'},
    { id: 4, nombre: 'Maritza', apellido: 'Uicab'},
    { id: 5, nombre: 'Manuel', apellido: 'Dominguez'},
]

const table = document.getElementById('data-table');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let newform = new FormData(form);
    let nombre = newform.get('name');
    let apellido = newform.get('last_name');

    data.push({ id: new Date().getMilliseconds(), nombre, apellido});

    newform.
    index()
});

const index = () => {
    table.innerHTML = getData();
}

const getData = () => {
    let data_table = '';
    
    data.map(item => {            
        data_table += `<tr>
          <td>${item.id}</td>
          <td>${item.nombre}</td>
          <td>${item.apellido}</td>
          <td>
              <button class="btn btn-outline-danger" onclick='delete_user(${item.id})'>X</button>
          </td>
      </tr>`
    });

    return data_table
}

const delete_user = (id) => {
    data = data.filter(item => item.id !== id);
    index()
}

index()
