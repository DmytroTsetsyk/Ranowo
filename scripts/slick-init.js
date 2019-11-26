$( document).ready(function() { 
    InitSlickSlider();
});

function InitSlickSlider() {
    $('.mobile-banner').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
    });
}