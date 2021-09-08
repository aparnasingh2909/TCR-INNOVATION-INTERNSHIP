
$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 280) {

        $(".navigation").removeClass("navigation-fixed");
        $(".arrow").removeClass("animate__animated animate__rotateIn");
        var h = document.getElementById("backtotop");
        h.style.opacity = 0;

    }
    else {

        $(".navigation").addClass("navigation-fixed");
        $(".arrow").addClass("animate__animated animate__rotateIn");
        var h = document.getElementById("backtotop");
        h.style.opacity = 1;

    }
});

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";


}

//adding effect to weekend

$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 480) {

        $(".weekend").removeClass("animate__animated animate__bounceInLeft");
        $(".cards").removeClass("animate__animated animate__bounceInRight");

    }
    else {

        $(".weekend").addClass("animate__animated animate__bounceInLeft");
        $(".cards").addClass("animate__animated animate__bounceInRight");
    }
});
//adding to explore

$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 750) {

        $(".explore").removeClass("animate__animated animate__fadeInDown");


    }
    else {

        $(".explore").addClass("animate__animated animate__fadeInDown");

    }
});



//package
$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 1520) {

        $(".package-heading").removeClass("animate__animated animate__bounceInDown");
        $(".package-card").removeClass("animate__animated animate__rotateInDownLeft");


    }
    else {

        $(".package-heading").addClass("animate__animated animate__bounceInDown");
        $(".package-card").addClass("animate__animated animate__rotateInDownLeft");

    }
});




// naviagtion
$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 280) {

       
        $(".navigation").removeClass("animate__animated animate__backInDown");



    }
    else {

        $(".navigation").addClass("animate__animated animate__backInDown");


    }
});

//slider
$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 1880) {

     
        $(".extra-slider").removeClass("animate__animated animate__zoomInDown");

    }
    else {
        $(".extra-slider").addClass("animate__animated animate__zoomInDown");

    }
});


// about
$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 2500) {

        $(".about1").removeClass("animate__animated animate__slideInLeft");
        $(".about-image").removeClass("animate__animated animate__slideInRight");


    }
    else {

        
        $(".about1").addClass("animate__animated animate__slideInLeft");
        $(".about-image").addClass("animate__animated animate__slideInRight");

    }
});

//contact

$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 3000) {

        $(".login-heading").removeClass("animate__animated animate__lightSpeedInLeft");
        $(".girl").removeClass("animate__animated animate__fadeInBottomRight");
        $(".form").removeClass("animate__animated  animate__fadeInRight");



    }
    else {

        $(".login-heading").addClass("animate__animated animate__lightSpeedInLeft");
        $(".girl").addClass("animate__animated animate__fadeInBottomRight");
        $(".form").addClass("animate__animated  animate__fadeInRight");

    }
});



$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x < 3500) {

      
        $(".foot").removeClass("animate__animated animate__rollIn");



    }
    else {

        $(".foot").addClass("animate__animated animate__rollIn");


    }
});


// smooth scroll
$(function () {
    $('smooth-scroll').click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1000, "easeInOutExpo");
    });
});
