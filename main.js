// Smooth scroll for anchor links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});

// Function to add animations on scroll
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}

// Options and observer for managing animations on scroll
let options = {
    threshold: 0.5 // Trigger when 50% of the target is visible
};
let observer = new IntersectionObserver(handleIntersection, options);

// Add animation classes for each section
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
    section.classList.add('fade-in-section');
});

// Tabs functionality with enhanced animations
function activateTab(tab) {
    const target = document.querySelector(tab.dataset.tabTarget);
    const contents = document.querySelectorAll('.content');
    const tabs = document.querySelectorAll('.tab');

    contents.forEach(content => {
        content.classList.remove('active');
    });

    tabs.forEach(t => {
        t.classList.remove('active');
    });

    tab.classList.add('active');
    target.classList.add('active');
    target.classList.add('pop');
}

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => activateTab(tab));
    });
});
