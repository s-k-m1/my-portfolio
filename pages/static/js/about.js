document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.skill-progress');

    progressBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress');

        // Optional: stagger animation for a nicer effect
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 300 * (index + 1));
    });
});