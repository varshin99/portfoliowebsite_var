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
