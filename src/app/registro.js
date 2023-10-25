import React from 'react';
import './style.css'; // Corrige la ruta al archivo CSS

function registro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
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
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar usuario');
      });
  };

    return (
      <div className="container2">
      <div className="cabeza">
        <br />
        <h1>¡CREA UNA NUEVA CUENTA!</h1>
        <p>
          ¿Ya estás registrado?{' '}
          <a style={{ color: 'aliceblue' }} href="index.html">
            Ingresa aquí
          </a>
        </p>
        <br />
      </div>

      <form id="register-form">
        <input
          type="text"
          placeholder="Nombre completo"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Correo electrónico"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          id="confirm-password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </form>
      <div className="pie">
        <br />
        <br />
        <button type="button" onClick={handleRegister}>
          REGISTRARME
        </button>
      </div>
    </div>
  );
  }

  
  export default registro;