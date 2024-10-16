document.addEventListener('DOMContentLoaded', function() {
    // Inicializa los íconos de Lucide
    lucide.createIcons();

    // Función para cambiar las secciones del dashboard
    const links = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            links.forEach(item => item.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).classList.add('active');
        });
    });

    // Crear gráfico de ingresos
    const incomeCtx = document.getElementById('incomeChart').getContext('2d');
    new Chart(incomeCtx, {
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

    // Crear gráfico de comparación entre administradores
    const adminComparisonCtx = document.getElementById('adminComparisonChart').getContext('2d');
    new Chart(adminComparisonCtx, {
        type: 'bar',
        data: {
            labels: ['Ana', 'Carlos', 'María', 'Juan', 'Laura'],
            datasets: [
                {
                    label: 'Ingresos generados',
                    data: [12000, 19000, 15000, 21000, 16000],
                    backgroundColor: '#5DABD9'
                },
                {
                    label: 'Solicitudes aprobadas',
                    data: [50, 65, 45, 70, 55],
                    backgroundColor: '#04003B'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Modal para agregar nuevo administrador
    const modal = document.getElementById('addAdminModal');
    const btn = document.getElementById('addAdminBtn');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Manejar el envío del formulario de nuevo administrador
    const addAdminForm = document.getElementById('addAdminForm');
    addAdminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para agregar un nuevo administrador
        alert('Nuevo administrador agregado');
        modal.style.display = 'none';
    });
});