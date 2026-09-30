(function(){
    const openBtton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__links');

    // Función centralizada para abrir el menú móvil
    function openMobileMenu() {
        menu.classList.add('nav__link--show');
        document.body.style.overflow = 'hidden'; // Bloquea totalmente el scroll de la página
    }

    // Función centralizada para cerrar el menú móvil
    function closeMobileMenu() {
        menu.classList.remove('nav__link--show');
        document.body.style.overflow = ''; // Restaura el scroll de la página
    }

    if (openBtton && menu && closeMenu) {
        openBtton.addEventListener('click', openMobileMenu);
        closeMenu.addEventListener('click', closeMobileMenu);

        // Cierra el menú y desbloquea el scroll al dar clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Ocultar al bajar / Mostrar al subir
    if (nav) {
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            // SI EL MENÚ MÓVIL ESTÁ ABIERTO, SE IGNORA EL SCROLL COMPLETAMENTE
            if (menu && menu.classList.contains('nav__link--show')) {
                return;
            }

            const currentScrollY = window.scrollY;

            // Oculta la cápsula si baja más de 100px
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                nav.classList.add('nav--hidden');
            } else {
                // Muestra únicamente la cápsula si sube
                nav.classList.remove('nav--hidden');
            }

            lastScrollY = currentScrollY;
        });
    }
})();