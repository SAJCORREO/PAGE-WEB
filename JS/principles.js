(function() {
    const track = document.querySelector('.beggin__track');
    const slides = document.querySelectorAll('.beggin__slide');
    const dots = document.querySelectorAll('.beggin__dot');

    // Validación de seguridad para prevenir ejecuciones en vacío
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideTimer;

    // Variables para registrar los gestos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    function moveToSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove('beggin__dot--active'));
        if (dots[index]) {
            dots[index].classList.add('beggin__dot--active');
        }

        currentIndex = index;
    }

    function startAutoSlide() {
        autoSlideTimer = setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            moveToSlide(nextIndex);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideTimer);
        startAutoSlide();
    }

    // Eventos para la navegación mediante puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
            resetAutoSlide();
        });
    });

    // Detección de deslizado táctil (Swipe)
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50; // Umbral mínimo de 50px para activar el cambio
        const diffX = touchStartX - touchEndX;

        if (diffX > swipeThreshold) {
            // Deslizó a la izquierda -> Siguiente diapositiva
            let nextIndex = (currentIndex + 1) % totalSlides;
            moveToSlide(nextIndex);
            resetAutoSlide();
        } else if (diffX < -swipeThreshold) {
            // Deslizó a la derecha -> Diapositiva anterior
            let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            moveToSlide(prevIndex);
            resetAutoSlide();
        }
    }

    startAutoSlide();
})();
