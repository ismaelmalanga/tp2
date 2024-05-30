document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(personas => mostrarPersonas(personas));

    function mostrarPersonas(personas) {
        const personasDiv = document.getElementById('personas');
        personas.forEach(persona => {
            const cartaPersona = document.createElement('div');
            cartaPersona.className = 'carta-persona';
            cartaPersona.innerHTML = `
                <p>ID: ${persona.id}</p>
                <p>Nombre: ${persona.name}</p>
                <p>Nombre de usuario: ${persona.username}</p>
                <p>Email: ${persona.email}</p>
                <p>Sitio web: ${persona.website}</p>
                <button onclick="verTarea(${persona.id}, this)">Ver Tarea</button>
                <div class="tarea" id="tarea-${persona.id}"></div>
            `;
            personasDiv.appendChild(cartaPersona);
        });
    }
});

function verTarea(personaId, boton) {
    const tareaDiv = document.getElementById(`tarea-${personaId}`);
    if (tareaDiv.innerHTML === '') {
        fetch(`https://jsonplaceholder.typicode.com/todos/${personaId}`)
            .then(response => response.json())
            .then(tarea => mostrarTarea(tarea, tareaDiv, boton));
    } else {
        tareaDiv.innerHTML = '';
        boton.innerText = 'Ver Tarea';
    }
}

function mostrarTarea(tarea,tareaDiv,boton) {
    const cartaTarea = document.createElement('div');
    cartaTarea.className = `carta-tarea ${tarea.completed ? 'completada' : 'no-completada'}`;
    cartaTarea.innerHTML = `
        <p>ID: ${tarea.id}</p>
        <p>Título: ${tarea.title}</p>
        <p>Completada: ${tarea.completed ? 'Sí' : 'No'}</p>
    `;
    tareaDiv.appendChild(cartaTarea);
    boton.innerText = 'Ocultar Tarea';
}
