document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send the login data to your backend
        console.log('Login attempt:', { email, password });
        alert('Inicio de sesión simulado. En una implementación real, esto se enviaría al servidor.');
    });

    // Social login buttons (for future implementation)
    const githubButton = document.querySelector('.btn-github');
    const googleButton = document.querySelector('.btn-google');

    githubButton.addEventListener('click', function() {
        alert('Inicio de sesión con GitHub no implementado aún.');
    });

    googleButton.addEventListener('click', function() {
        alert('Inicio de sesión con Google no implementado aún.');
    });
});