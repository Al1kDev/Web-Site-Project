// Fonction pour l'effet de saisie de texte
const dynamicText = document.getElementById('dynamic-text');
const textArray = ['Bienvenue sur mon profil', 'Suivez-moi sur les réseaux sociaux', 'Merci de votre visite'];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    dynamicText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      dynamicText.textContent = '';
      textIndex = (textIndex + 1) % textArray.length;
      charIndex = 0;
      typeText();
    }, 2000);
  }
}

// Fonction pour le compteur de visites
const viewCount = document.getElementById('view-count');
let count = localStorage.getItem('viewCount') ? parseInt(localStorage.getItem('viewCount')) : 0;
count++;
localStorage.setItem('viewCount', count);
viewCount.textContent = count;

// Fonction pour afficher l'overlay
const overlay = document.querySelector('.overlay');
const enterBtn = document.getElementById('enter-btn');
enterBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
setTimeout(() => {
  overlay.style.display = 'none';
}, 500); // attend la fin de l'animation

  document.getElementById('background-audio').play();
  typeText();
});
