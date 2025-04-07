// Event Handling: Toggle classes on menu click
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Event Handling: Remove classes on window scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

try {
    // Exception Handling: Swiper initialization for the home slider
    var homeSwiper = new Swiper(".home-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    // Exception Handling: Swiper initialization for the review slider
    var reviewSwiper = new Swiper(".review-slider", {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        spaceBetween: 10,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            700: {
                slidesPerView: 2,
            },
            1050: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });
} catch (error) {
    // Exception Handling: Log error if Swiper initialization fails
    console.error('An error occurred during Swiper initialization:', error);
}