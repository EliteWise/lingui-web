import Alpine from 'alpinejs';
import { gsap } from 'gsap';

window.Alpine = Alpine;
Alpine.start();

// Animation du texte d'en-tête (Hero Text)
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('#hero-text h1');
    heroText.textContent = 'Experience the World Through Language';
    gsap.from(heroText, { opacity: 0, y: -50, duration: 1.5, ease: 'power3.out' });
});

// Animations GSAP pour les cartes de fonctionnalités
gsap.from('#feature1', { opacity: 0, y: 50, duration: 1, delay: 0.2, ease: 'power3.out' });
gsap.from('#feature2', { opacity: 0, y: 50, duration: 1, delay: 0.4, ease: 'power3.out' });
gsap.from('#feature3', { opacity: 0, y: 50, duration: 1, delay: 0.6, ease: 'power3.out' });
gsap.from('#feature4', { opacity: 0, y: 50, duration: 1, delay: 0.8, ease: 'power3.out' });
gsap.from('#feature5', { opacity: 0, y: 50, duration: 1, delay: 1.0, ease: 'power3.out' });
