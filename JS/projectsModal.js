// Base de datos de proyectos terminados con diapositivas independientes
const projectsData = {
    1: {
        category: "INTEGRACIÓN",
        title: "Sistemas de Integración Industrial",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-1/design1.jpg",
                subtitle: "Transportador Elevador de 500kg",
                desc: "Diseño e integración de sistema elevador industrial con capacidad de carga de 500 kg para transporte vertical de componentes."
            },                        
            {
                img: "IMAGE/Proyectos_terminados/part-1/impl1.jpeg",
                subtitle: "Implementación Kime Kame",
                desc: "Estación especializada para la prueba y verificación dimensional de encaje y ensamble Kime Kame en piezas automotrices."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-1/design2.jpeg",
                subtitle: "Inserción Automática de FOAM en Resorte",
                desc: "Estación automatizada para inserción de alta precisión de componentes FOAM en ensambles de resorte."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-1/impl2.jpeg",
                subtitle: "Implementación de Fuerza de Operación",
                desc: "Estación automatizada para la medición, prueba y verificación de la fuerza de operación requerida en el ensamble."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-1/design3.jpeg",
                subtitle: "Volteador de Piezas en Inyectora de Plástico",
                desc: "Mecanismo volteador de piezas integrado a inyectoras de plástico para optimizar la salida y manipulación del material."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-1/impl3.jpeg",
                subtitle: "Implementacion de Implementación de Torque",
                desc: "Estación de control y verificación de torque de apriete para aseguramiento de calidad e inspección en línea de producción."
            }
        ]
    },
    2: {
        category: "ATORNILLADO",
        title: "Sistemas de Atornillado y Secuenciado",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-2/atornillado1.jpeg",
                subtitle: "Secuenciado de Atornillado en Pieza",
                desc: "Control de par de apriete y guías de trazabilidad para el secuenciado correcto de tornillos en componentes automotrices."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-2/atornillado2.jpeg",
                subtitle: "Atornillado con Robot",
                desc: "Integración de brazo robotizado de atornillado automatizado para procesos de alta velocidad y repetibilidad."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-2/atornillado3.jpeg",
                subtitle: "Ensamble de Cámara con Taladros Inalámbricos",
                desc: "Estación de ensamble de cámaras integrando taladros inalámbricos inteligentes con monitoreo de par de apriete."
            }
        ]
    },
    3: {
        category: "GO NO GO",
        title: "Fixtures de Verificación GO / NO GO",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-3/Go1.jpeg",
                subtitle: "Verificación de Ángulo Final de Resorte",
                desc: "Dispositivo Go No Go mecánico de alta precisión para la inspección del ángulo de deformación final en resortes."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-3/Go2.jpeg",
                subtitle: "Verificación de Barrenos Tapados",
                desc: "Fixture de control de calidad para validación rápida de barrenos y presencia de obstrucciones en piezas moldeadas."
            }
        ]
    },
    4: {
        category: "SENSORES",
        title: "Detección y Poka-Yoke con Sensores",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-4/sensor1.jpeg",
                subtitle: "Detección de Empaque en Cámara",
                desc: "Sistema Go No Go configurada para la verificación e inspección de empaques en la colocación de cámaras."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-4/sensor2.jpeg",
                subtitle: "Sensores Para Detectar Atornillador",
                desc: "Arreglo de sensores dedicados para la detección automática de presencia, posición y acoplamiento de la herramienta atornilladora."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-4/sensor3.jpeg",
                subtitle: "Sensores Para Detección de Camara de Reversa",
                desc: "Sistema óptico e inductivo especializado para validar el correcto posicionamiento y presencia de cámaras de reversa."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-4/sensor4.jpeg",
                subtitle: "POKA-YOKE Para Detectar el Rodamiento",
                desc: "Sistema Poka-Yoke con sensores avanzados para validar la presencia y orientación de rodamientos en piezas de transmisión."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-4/sensor5.jpeg",
                subtitle: "POKA-YOKE Detección de pastas",
                desc: "Dispositivo Poka-Yoke sensorizado para la inspección automática y confirmación de presencia de pastas."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-4/sensor6.jpeg",
                subtitle: "Sensores Para Detección de RIVNUT",
                desc: "Sensores de alta precisión configurados para la verificación de presencia e inserción correcta de tuercas de remache (RIVNUT)."
            }
        ]
    },
    5: {
        category: "SOPORTE",
        title: "Servicios de Soporte e Ingeniería",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-5/suport1.jpeg",
                subtitle: "Soporte de Control y PLCs",
                desc: "Mantenimiento, diagnóstico de tableros eléctricos y optimización de programas de automatización industrial."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-5/suport2.jpeg",
                subtitle: "Soporte de Diseño Mecánico",
                desc: "Servicios de ingeniería, ajuste dimensional y modificación de estaciones mecánicas de producción."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-5/suport3.jpeg",
                subtitle: "Soporte a Sistemas de Visión Artificial",
                desc: "Calibración de cámaras industriales, iluminación especializada y algoritmos de procesamiento de imágenes en línea."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-5/suport4.jpeg",
                subtitle: "Soporte de Instalación y Puesta en Marcha",
                desc: "Servicio de asistencia técnica en campo para el montaje físico, conexionado eléctrico, alineación mecánica y validación operativa de equipos directamente en planta."
            }
        ]
    },
    6: {
        category: "AGV & AMR",
        title: "Robótica Móvil y Logística Interna",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-6/avg1.jpeg",
                subtitle: "AGV con Conveyor de Rodillos",
                desc: "Vehículo de guiado autónomo equipado con mesa de rodillos para transporte y acomodo automatizado de materiales."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-6/avg2.jpeg",
                subtitle: "AMR con Comunicación a Conveyor y PLC",
                desc: "Robots móviles autónomos integrados con comunicación directa a PLC para rastreo de mercancía y trazabilidad a la medida."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-6/avg3.jpeg",
                subtitle: "Integración de Base de Datos y Trazabilidad en Tiempo Real",
                desc: "Manejo de base de datos SQL conectada a tus dispositivos para una trazabilidad precisa en tiempo real de la producción."
            }
        ]
    },
    7: {
        category: "CONVEYOR",
        title: "Sistemas de Transportadores Industriales",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-7/conveyor1.jpeg",
                subtitle: "Conveyors de Banda Transportadora",
                desc: "Diseño, fabricación e implementación de conveyors de banda recta para todo tipo de materiales y transferencias."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-7/conveyor2.jpeg",
                subtitle: "Conveyors de Rodillos Curvos",
                desc: "Transportadores de rodillos en curvas diseñados para el cambio de dirección fluido y eficiente de cajas o tarimas."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-7/conveyor3.jpeg",
                subtitle: "Conveyors de Rodillos Motorizados en curva",
                desc: "Sistema de transporte en curva con rodillos motorizados para tracción continua y velocidad constante en flujo de líneas."
            }
        ]
    },
    8: {
        category: "ROBÓTICA",
        title: "Celdas Robóticas e Integración",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-8/robot3.jpeg",
                subtitle: "Estación de Paletizado de 25 kg",
                desc: "Integración de celda de paletizado automatizado para 25 kg equipada con sistema de cambio rápido de herramientas (EOAT)."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-8/robot4.jpeg",
                subtitle: "Estación de Atornillado con COBOT DOOSAN",
                desc: "Celda colaborativa equipada con cobot DOOSAN para tareas continuas y precisas de atornillado en ensamble."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-8/robot6.jpeg",
                subtitle: "Dressing para Manguera de Hotmelt",
                desc: "Acondicionamiento y protección de mangueras (dressing) para evitar desgastes y daños térmicos/mecánicos durante el movimiento del robot."
            }
        ]
    },
    9: {
        category: "MAQUINADOS",
        title: "Maquinados e Ingeniería de Precisión",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-9/maquinado1.jpeg",
                subtitle: "Fabricación de Maquinados e Instrumental",
                desc: "Mecanizados de precisión en metales y aceros especiales con estrictas tolerancias industriales para sustitución y mejora de tooling."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-9/maquinado2.jpeg",
                subtitle: "Maquinado rotativo",
                desc: "Mecanizados cilíndricos y rotativos de precisión para flechas, bujes y componentes de transmisión industrial."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-9/maquinado3.jpeg",
                subtitle: "Maquinado de Posicionamiento y Sujeción",
                desc: "Fabricación de mordazas, fixtures y dispositivos de sujeción a la medida para aseguramiento preciso de piezas."
            }
        ]
    },
    10: {
        category: "LÍNEAS DE PRODUCCIÓN",
        title: "Celdas de Ensamble e Inspección de SUNVISOR",
        slides: [
            {
                img: "IMAGE/Proyectos_terminados/part-10/prodd1.jpeg",
                subtitle: "Máquina Injertadora de Tela en SUNVISOR",
                desc: "Estación automatizada especializada para el injertado y prensado de tela en componentes de parasoles automotrices (sunvisor)."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-10/prodd2.jpeg",
                subtitle: "Máquinas de Prueba de Luces y Fuerza de Apertura",
                desc: "Equipos de medición para verificación del funcionamiento de luces y control de fuerza de apertura de flechas en sunvisor."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-10/prodd3.jpeg",
                subtitle: "Máquina de Prueba de Fuerza ",
                desc: "Estación automatizada para ensayo y validación de la fuerza de apertura y esfuerzo mecánico en componentes de parasol."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-10/prodd4.jpeg",
                subtitle: "Máquina de Medición de Torque ",
                desc: "Equipo de precisión para la medición y registro del par de apriete requerido en mecanismos giratorios de sunvisor."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-10/prodd5.jpeg",
                subtitle: "Máquina de Pegado de Etiquetas",
                desc: "Estación automatizada para la aplicación uniforme, alineación y pegado de etiquetas de advertencia en piezas."
            },
            {
                img: "IMAGE/Proyectos_terminados/part-10/prodd6.jpeg",
                subtitle: "Máquina de inspección final",
                desc: "Estación de control de calidad final para inspección estética, verificación funcional y liberación de piezas listas para embarque."
            }
        ]
    }
};

let currentProjectSlide = 0;
let projectTouchStartX = 0;
let projectTouchEndX = 0;
let activeProjectSlides = [];
let autoSlideInterval = null;

// Abrir el drawer lateral según el origen de la tarjeta
function openProjectDrawer(side, projectId) {
    const drawer = document.getElementById('projectDrawer');
    const container = document.getElementById('drawerContainer');
    const data = projectsData[projectId];

    if (!drawer || !container || !data) return;

    drawer.className = 'project-drawer';
    drawer.classList.add(`project-drawer--${side}`);

    // Asigna textos fijos superiores
    document.getElementById('projectCategory').innerText = data.category;
    document.getElementById('projectTitle').innerText = data.title;

    activeProjectSlides = data.slides;

    // Inicializa el slider y muestra el drawer
    setupProjectSlider(data.slides);

    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar el drawer lateral y detener el temporizador
function closeProjectDrawer() {
    const drawer = document.getElementById('projectDrawer');
    if (!drawer) return;

    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }

    drawer.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Configurar elementos del slider, puntos y temporizador automático
function setupProjectSlider(slides) {
    const track = document.getElementById('projectTrack');
    const dotsContainer = document.getElementById('projectDots');

    if (!track || !dotsContainer) return;

    track.innerHTML = '';
    dotsContainer.innerHTML = '';
    currentProjectSlide = 0;

    // Detener temporizador previo si existía
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }

    // Actualiza la descripción de la primera diapositiva
    updateSlideContent(0);

    slides.forEach((slideData, index) => {
        const slide = document.createElement('div');
        slide.className = 'project-drawer__slide';

        const img = document.createElement('img');
        img.src = slideData.img;
        img.alt = slideData.subtitle;

        if (typeof openImageLightbox === 'function') {
            img.onclick = () => openImageLightbox(slideData.img);
        }

        slide.appendChild(img);
        track.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = 'project-drawer__dot';
        if (index === 0) dot.classList.add('project-drawer__dot--active');

        dot.onclick = () => {
            moveToProjectSlide(index, slides.length);
            resetAutoSlide(slides.length);
        };
        dotsContainer.appendChild(dot);
    });

    track.style.transform = `translateX(0%)`;

    // Iniciar auto-desplazamiento de 10 segundos solo si hay más de 1 imagen
    if (slides.length > 1) {
        startAutoSlide(slides.length);
    }

    // Controles táctiles (Swipe)
    track.ontouchstart = (e) => {
        projectTouchStartX = e.changedTouches[0].screenX;
    };

    track.ontouchend = (e) => {
        projectTouchEndX = e.changedTouches[0].screenX;
        handleProjectSwipe(slides.length);
        resetAutoSlide(slides.length);
    };
}

// Actualizar subtítulo y texto descriptivo dinámico
function updateSlideContent(index) {
    const slideData = activeProjectSlides[index];
    if (!slideData) return;

    const descBox = document.getElementById('projectDescription');
    if (descBox) {
        descBox.innerHTML = `<strong>${slideData.subtitle}</strong><br><br>${slideData.desc}`;
    }
}

// Desplazar slider a una diapositiva específica
function moveToProjectSlide(index, totalSlides) {
    const track = document.getElementById('projectTrack');
    const dots = document.querySelectorAll('.project-drawer__dot');

    if (!track) return;

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('project-drawer__dot--active'));
    if (dots[index]) {
        dots[index].classList.add('project-drawer__dot--active');
    }

    currentProjectSlide = index;
    updateSlideContent(index);
}

// Manejar swipe horizontal
function handleProjectSwipe(totalSlides) {
    const swipeThreshold = 40;
    const diffX = projectTouchStartX - projectTouchEndX;

    if (diffX > swipeThreshold) {
        let nextIndex = (currentProjectSlide + 1) % totalSlides;
        moveToProjectSlide(nextIndex, totalSlides);
    } else if (diffX < -swipeThreshold) {
        let prevIndex = (currentProjectSlide - 1 + totalSlides) % totalSlides;
        moveToProjectSlide(prevIndex, totalSlides);
    }
}

// Auto-slide cada 10 segundos (10000ms)
function startAutoSlide(totalSlides) {
    autoSlideInterval = setInterval(() => {
        currentProjectSlide = (currentProjectSlide + 1) % totalSlides;
        moveToProjectSlide(currentProjectSlide, totalSlides);
    }, 10000);
}

function resetAutoSlide(totalSlides) {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
    if (totalSlides > 1) {
        startAutoSlide(totalSlides);
    }
}

// Cierre con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const drawer = document.getElementById('projectDrawer');
        if (drawer && drawer.classList.contains('active')) {
            closeProjectDrawer();
        }
    }
});