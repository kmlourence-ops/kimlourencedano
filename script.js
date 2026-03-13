const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Optional: Animate hamburger icon (turn into X)
    hamburger.classList.toggle('toggle');
});

// Close menu when a link is clicked
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* --- Dynamic Year in Footer --- */
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* --- Scroll Spy (Active Link Highlighting) --- */
// This highlights the correct link in the navbar as you scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Offset is 200px to trigger slightly before the section hits the top
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});