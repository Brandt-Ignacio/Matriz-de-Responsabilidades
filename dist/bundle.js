/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  const registerButton = document.getElementById('register-button');\n  registerButton.addEventListener('click', function () {\n    // Obtener los datos del formulario\n    const name = document.getElementById('name').value;\n    const email = document.getElementById('email').value;\n    const password = document.getElementById('password').value;\n    const confirmPassword = document.getElementById('confirm-password').value;\n\n    // Comprobar si las contraseñas coinciden\n    if (password !== confirmPassword) {\n      alert('Las contraseñas no coinciden');\n      return;\n    }\n\n    // Crear un objeto con los datos del usuario\n    const userData = {\n      nombre: name,\n      email: email,\n      contrasena: password\n    };\n\n    // Realizar una solicitud POST al servidor para crear el usuario\n    fetch('/api/crearDatosUsuario', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(userData)\n    }).then(response => {\n      if (!response.ok) {\n        throw new Error('Error al registrar usuario');\n      }\n      return response.json();\n    }).then(data => {\n      alert('Usuario registrado con éxito');\n      // Limpiar el formulario después de registrar\n      document.getElementById('name').value = '';\n      document.getElementById('email').value = '';\n      document.getElementById('password').value = '';\n      document.getElementById('confirm-password').value = '';\n    }).catch(error => {\n      console.error('Error:', error);\n      alert('Error al registrar usuario');\n    });\n  });\n});\n\n//# sourceURL=webpack://final/./src/app/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/index.js"]();
/******/ 	
/******/ })()
;