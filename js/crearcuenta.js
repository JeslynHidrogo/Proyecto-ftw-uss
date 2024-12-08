document.getElementById('formCrearCuenta').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const gmail = document.getElementById('gmail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    // Verificar si todos los campos están llenos
    if (!nombres || !apellidos || !dni || !gmail || !telefono || !usuario || !contrasena) {
        alert("Todos los campos deben estar llenos.");
        return;
    }

    // Verificar formato de DNI y teléfono
    const dniPattern = /^\d{8}$/;
    const telefonoPattern = /^\d{9}$/;

    if (!dniPattern.test(dni)) {
        alert("El DNI debe ser de 8 dígitos.");
        return;
    }

    if (!telefonoPattern.test(telefono)) {
        alert("El teléfono debe ser de 9 dígitos.");
        return;
    }

    // Si todo está correcto, mostrar el mensaje
    document.getElementById('mensaje').textContent = 'Cuenta creada exitosamente.';
});
