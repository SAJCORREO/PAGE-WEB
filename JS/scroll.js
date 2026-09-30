(function() {
    const reveals = document.querySelectorAll('.reveal');

    // Validación por si no existen elementos con la clase .reveal
    if (reveals.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Se activa un poco antes de llegar a la sección
        threshold: 0.15                 // Requiere que el 15% del elemento sea visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Queda visible permanentemente
            }
        });
    }, observerOptions);

    reveals.forEach(element => {
        observer.observe(element);
    });
})();