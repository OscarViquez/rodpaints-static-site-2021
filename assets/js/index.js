let timelineHome = gsap.timeline({
    scrollTrigger: {
        trigger: '.landing-animation-startpoint',
    },

});

let timelineAbout = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-h1-animation',
    },

});

let timelineServices = gsap.timeline({
    scrollTrigger: {
        trigger: '.services-h1-animation',
    },

});

let timelineQuote = gsap.timeline({
    scrollTrigger: {
        trigger: '.quote__paragraph',
    },

});


timelineHome
    .from(".landing__wrapper-hook", { x: 20, opacity: 0, duration: .5 },)
    .from(".landing__wrapper-description", { x: 20, opacity: 0, duration: .5 },)
    .from('.landing__buttons', { y: 20, opacity: 0, duration: .5 })


timelineAbout
    .from(".about-h1-animation", { y: -100, opacity: 0, duration: .7 }, "-1")
    .from('.about-p-animation', { y: 50, opacity: 0, duration: .5 })

timelineServices
    .from(".services-h1-animation", { y: -100, opacity: 0, duration: .7 }, "-1")
    .from('.services-list__item', { y: 50, opacity: 0, duration: .5 })


timelineQuote
    .from(".quote__title", { y: -100, opacity: 0, duration: .7 }, "-1")
    .from('.quote__paragraph', { y: 50, opacity: 0, duration: .5 })

