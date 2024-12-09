
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
});


// Selecciona todos los divs con la clase "card-hover"
const cardHovers = document.querySelectorAll('.card-hover');

// Agrega un event listener a cada div
cardHovers.forEach(card => {
    card.addEventListener('click', () => {
        const link = card.querySelector('a'); // Encuentra el enlace dentro del div
        if (link) {
            window.location.href = link.href; // Redirige al enlace
        }
    });
});


