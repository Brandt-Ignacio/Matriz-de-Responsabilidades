document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', function() {
        // Obtener los datos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Comprobar si las contraseñas coinciden
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Crear un objeto con los datos del usuario
        const userData = {
            nombre: name,
            email: email,
            contrasena: password
        };

          // Realizar una solicitud POST al servidor para crear el usuario
          fetch('/api/crearDatosUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al registrar usuario');
            }
            return response.json();
        })
        .then(data => {
            alert('Usuario registrado con éxito');
            // Limpiar el formulario después de registrar
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirm-password').value = '';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al registrar usuario');
        });
    });
});
function obtenerUsuarios() {
    fetch('/api/usuarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuarios:', data); // Muestra los usuarios en la consola
    })
    .catch(error => {
        console.error('Error al obtener usuarios:', error);
    });
}

// Llama a la función para obtener usuarios cuando la página se carga
document.addEventListener('DOMContentLoaded', obtenerUsuarios);