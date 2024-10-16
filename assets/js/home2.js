function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");

    if (sidebar.style.width === "250px") {
        // Si la sidebar está abierta, ciérrala
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        // Si la sidebar está cerrada, ábrela
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

  // Manejar el menú desplegable del perfil
  const profileButton = document.getElementById('profileButton');
  const profileDropdown = document.getElementById('profileDropdown');
  profileButton.addEventListener('click', () => {
      profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
  });