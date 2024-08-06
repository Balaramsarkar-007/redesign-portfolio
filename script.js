// Add any interactive features here
// For example, smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// who am I
document.addEventListener('DOMContentLoaded', function() {
    // Animate text elements
    const animateElements = document.querySelectorAll('.animate-text');
    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200);
    });

    // Animate facts
    const facts = document.querySelectorAll('.fact');
    facts.forEach((fact, index) => {
        fact.style.opacity = '0';
        fact.style.transform = 'translateX(-20px)';
        fact.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            fact.style.opacity = '1';
            fact.style.transform = 'translateX(0)';
        }, 500 + index * 100);
    });

    // Interactive social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.color = getRandomColor();
        });
        icon.addEventListener('mouseout', () => {
            icon.style.color = '#4C6FFF';
        });
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}