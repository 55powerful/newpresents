//? This function, isolates local scopes and avoids global varialbes.
(function ($) {

    // ! Code will work without .ready(function), but it's just a security.
    $(document).ready(function () {

        $('.container-slides').flickity({
            cellAlign: 'center',
            freeScroll: true,
            pageDots: false,
            freeScrollFriction: 0.03,
            wrapAround: true,
            autoPlay: 10000,
            pauseAutoPlayOnHover: true,
            arrowShape: {
                x0: 0,
                x1: 25, y1: 10,
                x2: 85, y2: 40,
                x3: 50
            }
        });
    });
})(jQuery) //? This () is passed into the $ above. THIS is an Immediately invoked function expression.
