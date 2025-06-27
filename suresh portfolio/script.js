document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate on Scroll)

    AOS.init({

        duration: 1000, // values from 0 to 3000, with step 50ms

        once: true,     // whether animation should happen only once - while scrolling down

    });

    // Typed.js Initialization for Hero Section

    if (document.getElementById('typed-text')) {

        var typed = new Typed('#typed-text', {

            strings: [

                "Student",

                "Curious Learner",

                "Tech Enthusiast",

                "Aspiring Full Stack Developer",

                "Vice President - ECE Student Association",

                "VP - IETE",

                "NSS Coordinator"

            ],

            typeSpeed: 70,

            backSpeed: 40,

            loop: true,

            smartBackspace: true, // Default value

        });

    }

    // tsParticles Initialization

    if (document.getElementById('tsparticles')) {

        tsParticles.load("tsparticles", {

            fpsLimit: 60,

            interactivity: {

                events: {

                    onHover: {

                        enable: true,

                        mode: "repulse", // "grab", "bubble", "repulse"

                    },

                    onClick: {

                        enable: true,

                        mode: "push", // "push", "remove", "bubble"

                    },

                    resize: true,

                },

                modes: {

                    grab: {

                        distance: 140,

                        line_linked: {

                            opacity: 1,

                        },

                    },

                    bubble: {

                        distance: 400,

                        size: 40,

                        duration: 2,

                        opacity: 8,

                        speed: 3,

                    },

                    repulse: {

                        distance: 100,

                        duration: 0.4,

                    },

                    push: {

                        particles_nb: 4,

                    },

                    remove: {

                        particles_nb: 2,

                    },

                },

            },

            particles: {

                color: {

                    value: "#00c6ff", // Your primary accent color

                },

                links: {

                    color: "#ffffff", // Color of lines connecting particles

                    distance: 150,

                    enable: true,

                    opacity: 0.3, // Make lines more subtle

                    width: 1,

                },

                collisions: {

                    enable: true,

                },

                move: {

                    direction: "none",

                    enable: true,

                    outMode: "bounce", // "out" or "bounce"

                    random: false,

                    speed: 1, // Slower particle speed

                    straight: false,

                },

                number: {

                    density: {

                        enable: true,

                        area: 800, // Adjust for particle density

                    },

                    value: 50, // Number of particles

                },

                opacity: {

                    value: 0.5, // Make particles more subtle

                },

                shape: {

                    type: "circle", // "circle", "edge", "triangle", "polygon", "star", "image"

                },

                size: {

                    random: true,

                    value: { min: 1, max: 3 }, // Smaller particles

                },

            },

            detectRetina: true,

        });

    }

    // Smooth scrolling for navigation links & Active Nav Link Highlighting

    const navLinks = document.querySelectorAll('#navbar ul li a');

    const sections = document.querySelectorAll('section');

    function changeNavActiveState() {

        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {} // 100 is offset for navbar height

        

        navLinks.forEach((link) => link.classList.remove('active'));

        if (index >= 0 && navLinks[index]) { // Check if index is valid

           navLinks[index].classList.add('active');

        }

    }

    changeNavActiveState(); // Initial check

    window.addEventListener('scroll', changeNavActiveState);

    // Update current year in footer

    if (document.getElementById('currentYear')) {

        document.getElementById('currentYear').textContent = new Date().getFullYear();

    }

});