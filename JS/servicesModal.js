// Base de datos de los 10 servicios de SAJ Technologies
const servicesData = {
    1: {
        category: "ESQUEMAS DE INFRAESTRUCTURA ELÉCTRICA",
        title: "Diseño Eléctrico",
        description: "Elaboración de esquemas y arquitectura de control eléctrico para maquinaria e integración industrial.",
        scope: "Diseñamos diagramas eléctricos normalizados, dimensionamos protección de circuitos y distribuimos componentes dentro de tablero de control garantizando la eficiencia energética y la seguridad operativa.",        
        gallery: ["IMAGE/DIseño-electrico/gabinete1.jpg", "IMAGE/DIseño-electrico/gabinete2.jpg", "IMAGE/DIseño-electrico/gabinete3.jpg", "IMAGE/DIseño-electrico/design4.jpeg", "IMAGE/DIseño-electrico/design5.jpeg"]
    },
    2: {
        category: "INGENIERÍA CAD Y MODELADO 3D",
        title: "Diseño Mecánico",
        description: "Modelado y conceptualización de estructuras, fixturas, herramentales y celdas de trabajo en CAD 3D.",
        scope: "Desarrollamos soluciones mecánicas a la medida, estaciones manuales o automáticas, poka-yokes y modificaciones o mejoras a líneas de producción para la industria automotriz, de inyección de plástico y alimenticia.",
        gallery: ["IMAGE/DIseño-mecanico/design1.jpg", "IMAGE/DIseño-mecanico/design2.jpg", "IMAGE/DIseño-mecanico/design3.jpg", "IMAGE/DIseño-mecanico/design4.jpg", "IMAGE/DIseño-mecanico/design5.jpg"]
    },
    3: {
        category: "AUTOMATIZACIÓN Y PROGRAMACIÓN DE CONTROL",
        title: "Ingeniería en Control (PLCs)",
        description: "Automatización y lógica de procesos mediante la programación de controladores lógicos programables (PLC) e interfaces de usuario.",
        scope: "Realizamos la programación de sistemas de control, integración de PLC y HMI de las principales marcas del mercado (Allen-Bradley, Siemens, Mitsubishi, Schneider, Omron, Keyence) y selección del hardware adecuado para la inspección y viabilidad de cada aplicación.",
        gallery: ["IMAGE/plcs/allen.jpg", "IMAGE/plcs/siemens.png","IMAGE/plcs/hmi.jpg", "IMAGE/plcs/mitsu.png", "IMAGE/plcs/omron.png", "IMAGE/plcs/omron2.jpg"]
    },
    4: {
        category: "SISTEMAS ROBOTIZADOS E INTEGRACIÓN",
        title: "Robótica Industrial",
        description: "Integración de brazos robóticos y cobots (robots colaborativos) para la automatización de procesos repetitivos y de alta precisión.",
        scope: "Implementamos celdas robotizadas para aplicaciones de atornillado, paletizado, manipulación de materiales, aplicación de hotmelt y procesos con requerimientos exigentes de producción.",
        gallery: ["IMAGE/robotica/roboot1.png","IMAGE/robotica/robot2.jpeg", "IMAGE/robotica/robot3.jpeg", "IMAGE/robotica/robot4.jpeg","IMAGE/robotica/robot5.jpeg", "IMAGE/robotica/robot6.jpeg", "IMAGE/robotica/robot7.jpeg"]
    },
    5: {
        category: "INSPECCIÓN ÓPTICA Y CONTROL DE CALIDAD",
        title: "Ingeniería de Visión",
        description: "Implementación de sistemas de inspección óptica y detección mediante cámaras avanzadas e inteligencia artificial.",
        scope: "Configuramos sensores e imágenes inteligentes para control de calidad, verificación de ensamble, presencia/ausencia de componentes y validación de parámetros en tiempo real en la línea de producción.",
        gallery: ["IMAGE/vision/camera1.jpeg", "IMAGE/vision/camera2.jpeg", "IMAGE/vision/camera3.jpeg", "IMAGE/vision/camera4.jpeg"]
    },
    6: {
        category: "MONTAJE E INTEGRACIÓN DE CELDAS",
        title: "Ensamble de Proyectos",
        description: "Integración física y montaje estructural de celdas, estaciones de trabajo y líneas de producción.",
        scope: "Ensamblamos la parte mecánica, neumática y eléctrica de cada proyecto, unificando los requerimientos de ingeniería para entregar sistemas operativos y listos para producción."
    },
    7: {
        category: "PUESTA EN MARCHA Y SERVICIOS EN SITIO",
        title: "Instalación, Puesta en Marcha y Soporte",
        description: "Implementación en planta del cliente, arranque de equipos y acompañamiento técnico continuo.",
        scope: "Instalamos los equipos directamente en sus instalaciones, realizamos la calibración, ajustes de campo, pruebas de rendimiento y ofrecemos soporte técnico presencial para garantizar una entrega puntual y sin contratiempos."
    },
    8: {
        category: "MANTENIMIENTO PREVENTIVO Y CORRECTIVO",
        title: "Mantenimiento Industrial",
        description: "Servicios preventivos y correctivos para maximizar el tiempo de vida de la maquinaria y evitar paros no planificados.",
        scope: "Diagnosticamos, reparamos y optimizamos sistemas mecánicos, eléctricos y de control, asegurando que sus equipos operen siempre bajo sus máximas condiciones de rendimiento y seguridad."
    },
    9: {
        category: "FABRICACIÓN METÁLICA Y SOLDADURA",
        title: "Pailería Industrial",
        description: "Fabricación y soldadura de estructuras metálicas, guardas de seguridad y soportería pesada.",
        scope: "Construimos bases, bastidores, mamparas y estructuras a medida bajo strictly normas de soldadura para brindar rigidez y protección a sus líneas de producción."
    },
    10: {
        category: "MAQUINADO Y AJUSTE MECÁNICO",
        title: "Maquinados Industriales",
        description: "Fabricación de piezas mecánicas de alta precisión mediante procesos de maquinado CNC y convencional.",
        scope: "Fabricamos fixtures, placas, componentes mecánicos a medida y refaccionamiento con estrictas tolerancias de calidad y acabados industriales superiores."
    }
};

// Función para abrir el modal inyectando la información
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const data = servicesData[serviceId];

    if (!modal || !data) return;

    // 1. Textos principales
    document.getElementById('modalCategory').innerText = data.category || "ÁREA ESPECIALIZADA";
    document.getElementById('modalTitle').innerText = data.title || "Servicio";
    document.getElementById('modalDescription').innerText = data.description || "";
    document.getElementById('modalScope').innerText = data.scope || "";

    // 2. Controladores de la galería y diseño adaptativo
    const grid = document.getElementById('modalGrid');
    const mediaContainer = document.getElementById('modalMedia');
    const galleryContainer = document.getElementById('modalGallery');
    
    galleryContainer.innerHTML = '';

    // Si el servicio tiene fotos (del 1 al 5)
    if (data.gallery && data.gallery.length > 0) {
        grid.classList.remove('no-gallery');
        mediaContainer.style.display = 'block';

        data.gallery.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = data.title;
            galleryContainer.appendChild(img);
        });
    } else {
        // Si es un servicio técnico puro sin fotos (del 6 al 10)
        grid.classList.add('no-gallery');
        mediaContainer.style.display = 'none';
    }

    // 3. Activar ventana y pausar scroll en el fondo
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cierre con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});