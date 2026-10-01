(function () {
    // Escucha el movimiento del mouse sobre las imágenes de la galería del modal
    document.addEventListener('mousemove', (e) => {
        const img = e.target.closest('.service-modal__gallery img');
        if (!img) return;

        const rect = img.getBoundingClientRect();
        
        // Calcula la posición del cursor sobre la imagen
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Ángulos de inclinación
        const rotateX = (-y / (rect.height / 2)) * 10;
        const rotateY = (x / (rect.width / 2)) * 10;

        // Aplica la transformación en GPU
        img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    // Restablece la inclinación cuando el cursor sale de la imagen
    document.addEventListener('mouseout', (e) => {
        const img = e.target.closest('.service-modal__gallery img');
        if (img) {
            img.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
        }
    });
})();
