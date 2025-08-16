gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#Page2", 
        scroller: "body", 
        start: "top top", 
        end: "+=150%", 
        scrub: 1, // Smoothly links the animation progress to the scrollbar (1 is for a 1-second delay)
        pin: true, // Pins the trigger element while the animation is active
    }
});

tl.from("#Heading", {
    y: 100, 
    opacity: 0, 
    duration: 1 
});

tl.from("#Page2 h1", {
    y: 100,
    opacity: 0,
    duration: 1
}, "<");

tl.from("#Detail", {
    y: 100,
    opacity: 0,
    duration: 1
}, "-=0.5");

/* Bounce effect to image */
document.addEventListener("DOMContentLoaded", function() {
            gsap.registerPlugin(ScrollTrigger);

           
            
            // 2. The new infinite floating animation ✨
            gsap.to("#iceAge, #tower", {
                y: 20,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.out",
                stagger: {
                  each: 1,
                  from: "start"
                }
            });
        });



var swiper = new Swiper(".mySwiper", {
            // How many slides to show at once. 'auto' can also be used.
            slidesPerView: 1, 
            
            // Space between slides in pixels.
            spaceBetween: 30, 
            
            // Enables continuous looping of slides.
            loop: true, 
            
            // Pagination dots
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            
            

            // Responsive breakpoints
            // This allows you to change the settings for different screen sizes.
            breakpoints: {
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3, // You can adjust this value as needed
                    spaceBetween: 40,
                },
            },
        });