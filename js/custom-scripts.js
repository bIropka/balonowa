$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);