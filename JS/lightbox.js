// Visor Lightbox Ultrarrápido optimizado con requestAnimationFrame
(function () {
    let lightbox = null;
    let lightboxImg = null;

    // Cache de nodos al cargar el DOM para evitar búsquedas repetidas con getElementById
    document.addEventListener('DOMContentLoaded', () => {
        lightbox = document.getElementById('imageLightbox');
        lightboxImg = document.getElementById('lightboxImg');
    });

    window.openImageLightbox = function (src) {
        if (!lightbox || !lightboxImg) {
            lightbox = document.getElementById('imageLightbox');
            lightboxImg = document.getElementById('lightboxImg');
        }

        if (!lightbox || !lightboxImg) return;

        // Limpia la imagen previa para no parpadear con la foto anterior
        lightboxImg.src = src;

        // Renderizado fluido sincrónico a 60 FPS mediante GPU
        requestAnimationFrame(() => {
            lightbox.classList.add('active');
        });
    };

    window.closeImageLightbox = function () {
        if (!lightbox) return;
        lightbox.classList.remove('active');
    };

    // Manejo ultra eficiente de la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeImageLightbox();
            e.stopImmediatePropagation();
        }
    });
})();