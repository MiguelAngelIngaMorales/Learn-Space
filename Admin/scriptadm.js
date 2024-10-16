document.addEventListener('DOMContentLoaded', function() {
    // Inicializa los íconos de Lucide
    lucide.createIcons();

    // Función para cambiar las secciones del dashboard
    const links = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Remueve la clase 'active' de todos los enlaces y secciones
            links.forEach(item => item.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Agrega la clase 'active' al enlace y sección correspondiente
            this.classList.add('active');
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).classList.add('active');
        });
    });

    // Crear gráfico de ingresos
    const ctx = document.getElementById('incomeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            datasets: [{
                label: 'Ingresos mensuales',
                data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 40000, 38000, 45000],
                borderColor: '#5DABD9',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
        }
    });
});