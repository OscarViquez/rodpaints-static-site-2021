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

timelineHome
    .from(".landing__wrapper-comp-name", { y: -50, opacity: 0, duration: .5 }, "-1")
    .from(".landing__wrapper-hook", { x: 20, opacity: 0, duration: .5 }, )
    .from(".landing__wrapper-description", { x: 20, opacity: 0, duration: .5 }, )
    .from('.landing__buttons', { y: 20, opacity: 0, duration: .5 })


timelineAbout
    .from(".about-h1-animation", { y: -100, opacity: 0, duration: .7 }, "-1")
    .from('.about-p-animation', { y: 50, opacity: 0, duration: .5 })

timelineServices
    .from(".services-h1-animation", { y: -100, opacity: 0, duration: .7 }, "-1")
    .from('.services-list-animation', { y: 50, opacity: 0, duration: .5 })
