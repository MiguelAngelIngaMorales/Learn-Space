document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    const savePasswordButton = document.getElementById('savePassword');
    const saveChangesButton = document.getElementById('saveChanges');
    const initialIcon = document.getElementById('initialIcon');
    const nombresInput = document.getElementById('nombres');

    homeButton.addEventListener('click', function() {
        alert('Redirigiendo a la página de inicio...');
    });

    savePasswordButton.addEventListener('click', function() {
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword === confirmPassword) {
            alert('Contraseña guardada exitosamente');
        } else {
            alert('Las contraseñas no coinciden');
        }
    });

    saveChangesButton.addEventListener('click', function() {
        alert('Cambios guardados exitosamente');
    });

    nombresInput.addEventListener('input', function() {
        const initial = nombresInput.value.charAt(0).toUpperCase();
        initialIcon.textContent = initial || 'U';
    });
});