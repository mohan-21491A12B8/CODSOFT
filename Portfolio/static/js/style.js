const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeMenuIcon = document.getElementById('close-menu-icon');

// Show the side menu
mobileMenuIcon.addEventListener('click', () => {
    sideMenu.classList.add('show');
});

// Hide the side menu
closeMenuIcon.addEventListener('click', () => {
    sideMenu.classList.remove('show');
});

function toggleDescription(event) {
    event.preventDefault(); // Prevent the default link behavior
    const description = event.target.closest('.project-info').querySelector('.project-description');
    description.style.display = description.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
}
