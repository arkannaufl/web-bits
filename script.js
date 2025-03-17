    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const barIcon = document.getElementById('bar-icon');
    const closeIcon = document.getElementById('close-icon');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');  // Slide-in and Slide-out menu
        barIcon.classList.toggle('hidden');  // Hide bar icon
        closeIcon.classList.toggle('hidden');  // Show close icon
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');  // Slide-out menu
        barIcon.classList.remove('hidden');  // Show bar icon
        closeIcon.classList.add('hidden');  // Hide close icon
    });