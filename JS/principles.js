(function() {
    const track = document.querySelector('.beggin__track');
    const slides = document.querySelectorAll('.beggin__slide');
    const dots = document.querySelectorAll('.beggin__dot');

    // Validación de seguridad para prevenir ejecuciones en vacío
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideTimer;

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

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
            resetAutoSlide();
        });
    });

    startAutoSlide();
})();