'use strict';

$(function () {

    // Global variables
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();


    // Adding particles
    var numberOfParticles = .00010 * (windowWidth * windowHeight);

    $(window).click(function (e) {
        window.pJS_GUI.particles.array.push(new window.pJS_GUI.fn.particle(
            {value: '#fff'}, 100, {x: e.pageX, y: e.pageY}
        ));
    });

    var timeOut;

    function addParticle() {
        if (window.pJS_GUI.particles.array.length > numberOfParticles) {
            clearTimeout(timeOut);
            return;
        }

        window.pJS_GUI.particles.array.push(new window.pJS_GUI.fn.particle(
            {value: '#fff'}, 100
            ));

        timeOut = setTimeout(addParticle, 60);
    }

    function afterParticlesLoaded() {
        window.pJS_GUI = window.pJSDom[0].pJS;
        addParticle();
    }

    particlesJS.load('particles', 'assets/particles.json', afterParticlesLoaded);

    $(".typing").typed({
        strings: ["User Experience Designer.", "Frontend Developer."],
        startDelay: 100,
        typeSpeed: 100,
        backSpeed: 40,
        backDelay: 1000,
        // loop: true,
        // loopCount: 2
    });
});

//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-35430357-1', 'auto');
ga('send', 'pageview');