document.addEventListener('DOMContentLoaded', () => {
  // Inicializar los iconos de Lucide
  lucide.createIcons();

  // Manejar la navegación
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(button => {
      button.addEventListener('click', () => {
          const section = button.dataset.section;
          loadSection(section);
      });
  });

  // Manejar el menú desplegable del perfil
  const profileButton = document.getElementById('profileButton');
  const profileDropdown = document.getElementById('profileDropdown');
  profileButton.addEventListener('click', () => {
      profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Cargar la sección inicial (Home)
  loadSection('home');
});

function loadSection(section) {
  const mainContent = document.getElementById('mainContent');
  let content = '';

  switch (section) {
      case 'home':
          content = `
              <div class="course-container">
                  <div class="course-header">
                      <h2>Descubre rutas para ti</h2>
                      <button>Rutas para ti</button>
                  </div>
                  <div class="course-carousel">
                      ${generateCourseCards(5)}
                  </div>
              </div>
              <div class="course-container">
                  <h2>Mejores cursos</h2>
                  <div class="course-carousel">
                      ${generateCourseCards(5)}
                  </div>
              </div>
              <div class="course-container">
                  <h2>Últimos cursos lanzados</h2>
                  <div class="course-carousel">
                      ${generateCourseCards(5)}
                  </div>
              </div>
          `;
          break;
      case 'biblioteca':
          content = `
              <h1>Biblioteca</h1>
              <p>Aquí encontrarás todos tus cursos y recursos guardados.</p>
          `;
          break;
      case 'misRutas':
          content = `
              <h1>Mis Rutas</h1>
              <button>Crear Ruta</button>
              <p>Aquí se mostrarán tus rutas de aprendizaje personalizadas.</p>
          `;
          break;
      case 'miProgreso':
          content = `
              <h1>Mi Progreso</h1>
              <div class="stats-grid">
                  <div class="stat-card">
                      <h2>Cursos Vistos</h2>
                      <p>12</p>
                  </div>
                  <div class="stat-card">
                      <h2>Cursos Completados</h2>
                      <p>5</p>
                  </div>
                  <div class="stat-card">
                      <h2>Horas de Aprendizaje</h2>
                      <p>48</p>
                  </div>
                  <div class="stat-card">
                      <h2>Certificados Obtenidos</h2>
                      <p>3</p>
                  </div>
              </div>
          `;
          break;
      case 'notificaciones':
          content = `
              <h1>Notificaciones</h1>
              <div class="notification">
                  <i data-lucide="bell"></i>
                  <div>
                      <h2>Nuevo curso disponible</h2>
                      <p>Se ha añadido un nuevo curso de React Avanzado.</p>
                  </div>
              </div>
              <div class="notification">
                  <i data-lucide="bell"></i>
                  <div>
                      <h2>Recordatorio de tarea</h2>
                      <p>Tienes una tarea pendiente para el curso de JavaScript.</p>
                  </div>
              </div>
              <div class="notification">
                  <i data-lucide="bell"></i>
                  <div>
                      <h2>Logro desbloqueado</h2>
                      <p>¡Felicidades! Has completado tu primer curso.</p>
                  </div>
              </div>
          `;
          break;
  }

  mainContent.innerHTML = content;
  lucide.createIcons(); // Reinicializar los iconos después de cambiar el contenido
}

function generateCourseCards(count) {
  let cards = '';
  for (let i = 0; i < count; i++) {
      cards += `
          <div class="course-card">
              <img src="https://via.placeholder.com/250x150" alt="Curso ${i + 1}">
              <div class="course-info">
                  <h3>Curso ${i + 1}</h3>
                  <p>Instructor ${i + 1}</p>
              </div>
          </div>
      `;
  }
  return cards;
}