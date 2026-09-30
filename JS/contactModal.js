// Abrir el modal de contacto
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar el modal de contacto
function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cierre con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});

// Envío del formulario mediante Web3Forms sin recargar la página
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('contactStatus');
    const submitBtn = document.getElementById('contactSubmitBtn');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'ENVIANDO...';
            status.innerText = '';
            status.className = 'contact-modal__status';

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let resJson = await response.json();
                if (response.status === 200) {
                    status.innerText = "¡Mensaje enviado con éxito! Te contactaremos pronto.";
                    status.classList.add('success');
                    form.reset();
                } else {
                    status.innerText = resJson.message || "Ocurrió un error. Inténtalo de nuevo.";
                    status.classList.add('error');
                }
            })
            .catch(() => {
                status.innerText = "Error de conexión. Por favor revisa tu red.";
                status.classList.add('error');
            })
            .then(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = 'ENVIAR MENSAJE';
            });
        });
    }
});