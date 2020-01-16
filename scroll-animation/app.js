const flightPath = {
    curviness: 2,
    autoRotate: true,
    values: [
        {x: window.innerWidth/8, y: 0},
        {x: window.innerWidth/6, y: 10},
        {x: window.innerWidth/3, y: 100},
        {x: window.innerWidth/2, y: -100},
        {x: window.innerWidth/6, y: -50},
        {x: window.innerWidth/4, y: 100},
        {x: window.innerWidth/2, y: 0},
        {x: window.innerWidth, y: -250}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.rocket', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 2000,
    triggerHook: 0
})
    .setTween(tween)
   // .addIndicators()
    .setPin(".animation")
    .addTo(controller);