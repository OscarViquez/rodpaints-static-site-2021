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

timelineAbout
    .from(".about-h1-animation", { y: -100, opacity: 0, duration: .7 }, "-1")
    .from('.about-p-animation', { y: 50, opacity: 0, duration: .5 })

timelineServices
    .from(".services-h1-animation", { y: -100, opacity: 0, duration: .7 }, "-1")
    .from('.services-list-animation', { y: 50, opacity: 0, duration: .5 })
