(function () {
    // Selector unificado para servicios y proyectos terminados
    const targetSelector = '.service-modal__gallery img, .project-drawer__slide img';

    document.addEventListener('mousemove', (e) => {
        const img = e.target.closest(targetSelector);
        if (!img) return;

        const rect = img.getBoundingClientRect();
        
        // Calcula la posición del cursor respecto al centro de la imagen
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Ángulos de inclinación dinámicos
        const rotateX = (-y / (rect.height / 2)) * 10;
        const rotateY = (x / (rect.width / 2)) * 10;

        // Aplica la transformación 3D optimizada en GPU
        img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    document.addEventListener('mouseout', (e) => {
        const img = e.target.closest(targetSelector);
        if (img) {
            img.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
        }
    });
})();