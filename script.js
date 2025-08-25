document.addEventListener('DOMContentLoaded', () => {

    /* =================== ANIMACIONES EN SCROLL =================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // El elemento es visible en un 20%
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animation]').forEach(element => {
        element.classList.add('hidden'); // Ocultar inicialmente
        observer.observe(element);
    });

    /* =================== MENÚ MÓVIL =================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    /* =================== FORMULARIO DE CONTACTO =================== */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Aquí se manejaría el envío del formulario a un backend
            alert('Mensaje enviado. ¡Gracias por contactarnos!');
            contactForm.reset();
        });
    }

});
