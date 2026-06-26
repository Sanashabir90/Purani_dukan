// Purani Dukan - Main JavaScript
console.log("Purani Dukan App is running.");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add active class to current nav item
const currentPage = window.location.pathname.split('/').pop() || 'home.html';
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
        link.style.fontWeight = '700';
        link.style.textDecoration = 'underline';
    }
});