// Adiciona rolagem suave ao clicar nos links do menu
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajuste para navbar fixa
                behavior: 'smooth'
            });
        }
    });
});

// Destaca o link do menu da seção visível na tela
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menuLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, options);

sections.forEach(section => observer.observe(section));
