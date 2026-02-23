// =========================
// Smart hide/show navbar/footer + Hamburger
// =========================
const header = document.getElementById("header");
const footer = document.getElementById("footer");
let lastScroll = 0;

// Hide/show header/footer on scroll
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Scrolling down → hide
        if (header) header.style.top = "-100px";
        if (footer) footer.style.bottom = "-100px";
    } else {
        // Scrolling up → show
        if (header) header.style.top = "0";
        if (footer) footer.style.bottom = "0";
    }

    lastScroll = currentScroll;
});

// Hamburger toggle for mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Link animation on click
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.remove('active'); // reset animation
        void link.offsetWidth;           // trigger reflow
        link.classList.add('active');    // start animation
    });
});