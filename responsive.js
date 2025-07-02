const menuIcon = document.getElementById('menuIcon');
const navItem = document.getElementById('navItem');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');

menuIcon.addEventListener('click', () => {
    navItem.classList.toggle('show');

    // Recalculate menu state after toggling
    const isMenuOpen = navItem.classList.contains('show');
    openIcon.style.display = isMenuOpen ? 'none' : 'inline';
    closeIcon.style.display = isMenuOpen ? 'inline' : 'none';
    document.body.classList.toggle('no-scroll', isMenuOpen);
});
