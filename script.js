// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for sections
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    section.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
