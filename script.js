window.sr = ScrollReveal({ reset: true});

sr.reveal('.menu', {duration: 1000,});

sr.reveal('.texto-inicio', {
    rotate: {x: 0, y:0, z:0},
    duration: 2000

});

sr.reveal('.coisas-que-fiz', {duration: 2000});

sr.reveal('.skills', {duration: 2000});





const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5 });

const skillsSection = document.querySelector('.minhasskills');
observer.observe(skillsSection);

const checkVisibility = () => {
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        skillsSection.classList.add('visible'); 
    }
};

checkVisibility();

window.addEventListener('scroll', checkVisibility);





