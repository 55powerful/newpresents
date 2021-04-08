
//? Custom 1
var particles = Particles.init({
    selector: '.background',
    maxParticles: 200,
    sizeVariations: 5,
    speed: 0.5,
    color: ['#fa1e0e', '#00917c', '#11698e'],
    //! Colors need to be hex coce (i.e. #xxxxxx)
    connectParticles: true,
    responsive: [
        {
            breakpoint: 1600,
            options: {
                maxParticles: 175
            }
        }, {
            breakpoint: 1400,
            options: {
                maxParticles: 150
            }
        }, {
            breakpoint: 1200,
            options: {
                maxParticles: 125
            }
        }, {
            breakpoint: 1000,
            options: {
                maxParticles: 100
            }
        }, {
            breakpoint: 700,
            options: {
                maxParticles: 75
            }
        }, {
            breakpoint: 400,
            options: {
                maxParticles: 50
            }
        }
    ]
});

//* Documentation - https://marcbruederlin.github.io/particles.js/