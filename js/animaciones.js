// Crea un IntersectionObserver para observar las tarjetas de producto
const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.fromTo(entry.target,
                { opacity: 0, y: 20 }, // Estado inicial: opacidad 0 y desplazamiento hacia abajo
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" } // Estado final: opacidad 1, posición original
            );
        }
    });
}, {
    threshold: 0.5 // Se activa cuando al menos el 50% de la tarjeta es visible
});

// Seleccionar todas las tarjetas de producto y observarlas
document.querySelectorAll('.gtr-card').forEach(card => {
    cardObserver.observe(card);
});

// Crea un IntersectionObserver para observar el título
const titleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.fromTo(entry.target.querySelectorAll('span'),
                { opacity: 0, y: 20 }, // Estado inicial (letras invisibles y desplazadas hacia abajo)
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1, // Retraso entre cada letra
                    ease: "power2.out"
                }
            );
        }
    });
}, {
    threshold: 0.5
});

// Selecciona el título y divide el texto en letras
const title = document.querySelector('.nst-title');
if (title) {
    title.innerHTML = title.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
    titleObserver.observe(title); // Cambié el nombre de `observer` a `titleObserver` aquí
}

// Crea un IntersectionObserver para observar la imagen
const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.fromTo(entry.target,
                { opacity: 0, y: 50, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out"
                }
            );
        }
    });
}, {
    threshold: 0.5
});

const image = document.querySelector('.nst-img img');
if (image) {
    imageObserver.observe(image);
}

// Crea un IntersectionObserver para observar los elementos de la clase .item
const itemsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.timeline()
                .fromTo(entry.target,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out"
                    }
                );
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.cards .item').forEach((item, index) => {
    itemsObserver.observe(item);
    gsap.fromTo(item,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.5,
            ease: "power2.out"
        }
    );
});

// Ejecutar la animación de forma automática al cargar la página
gsap.timeline()
    .fromTo('.hero-gt-title h1',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }) // Duración a 0.3
    .fromTo('.hero-gt-title h2',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", delay: 0.2 }) // Duración reducida a 0.3
    .fromTo('.hero-gt-title p',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", delay: 0.2 }); // Duración reducida a 0.3

// Animación de la imagen al cargar la página
gsap.fromTo('.hero-gt-img img',
    { opacity: 0, y: 20 }, // Estado inicial: opacidad 0 y desplazamiento hacia abajo
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" } // Estado final: opacidad 1 y posición original
);


// Crea un IntersectionObserver para observar las tarjetas de "Misión" y "Visión"
const miviObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.fromTo(entry.target,
                { opacity: 0, y: 20 }, // Estado inicial: opacidad 0 y desplazamiento hacia abajo
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" } // Estado final: opacidad 1, posición original
            );
        }
    });
}, {
    threshold: 0.5 // Se activa cuando al menos el 50% de la tarjeta es visible
});

// Seleccionar todas las tarjetas de "Misión" y "Visión" y observarlas
document.querySelectorAll('.mivi .card').forEach(card => {
    miviObserver.observe(card);
});
