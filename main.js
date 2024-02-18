// Highlight active menu item on click
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            
            tabContents.forEach(tc => {
                tc.classList.remove("active");
            });
            
            tabs.forEach(t => {
                t.classList.remove("active");
            });
            
            tab.classList.add("active");
            target.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const projectTabs = document.querySelectorAll(".project-tab");
    const projectContents = document.querySelectorAll(".project-content");

    projectTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            projectContents.forEach(content => {
                content.classList.remove("active");
            });
            projectTabs.forEach(t => {
                t.classList.remove("active");
            });
            tab.classList.add("active");
            target.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const publicationTabs = document.querySelectorAll(".publication-tab");
    const publicationContents = document.querySelectorAll(".publication-content");

    publicationTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            publicationContents.forEach(content => {
                content.classList.remove("active");
            });
            publicationTabs.forEach(t => {
                t.classList.remove("active");
            });
            tab.classList.add("active");
            target.classList.add("active");
        });
    });
});
