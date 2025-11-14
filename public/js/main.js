// Fade de entrada
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


// Parallax suave nas imagens
document.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.image-placeholder img');
    const scroll = window.pageYOffset;

    images.forEach(img => {
        img.style.transform = `translateY(${scroll * 0.08}px)`;
    });
});
