document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        hamburger.querySelector('.hamburger').classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
        mobileMenu.style.transition = 'all 0.5s ease';
        
    });
});
