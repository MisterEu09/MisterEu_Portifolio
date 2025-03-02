
function toggleMenu() {
document.querySelector("nav").classList.toggle("active");
}

const optionButtons = document.querySelectorAll('.optionAbout button');
const optionLists = document.querySelectorAll('.option-content ul');

optionButtons.forEach(button => {
button.addEventListener('click', () => {
const targetListId = button.dataset.target;

// Nascondi tutte le liste
optionLists.forEach(list => {
    list.style.display = 'none';
});

// Mostra la lista selezionata
const targetList = document.getElementById(targetListId);
if (targetList) {
    targetList.style.display = 'block';
}

// Gestisci la classe "active" nei bottoni
optionButtons.forEach(btn => btn.classList.remove('active'));
button.classList.add('active');
});
});

// Mostra la prima lista al caricamento della pagina (opzionale)
document.addEventListener('DOMContentLoaded', () => {
const firstButton = document.querySelector('.optionAbout button');
if (firstButton) {
firstButton.click(); // Simula il click sul primo bottone
}
});


// Efeito de Digitação Melhorado
const typingText = document.querySelector(".typing-text");
const words = ["Desenvolvedor Web", "Criador de Conteúdo", "Apaixonado por Código"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    let currentText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);
    
    typingText.textContent = currentText;
    
    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    
    setTimeout(typeEffect, isDeleting ? 100 : 200);
}
typeEffect();

// Efeito de Scroll Suave e Animações
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});



