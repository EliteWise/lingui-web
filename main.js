import Alpine from 'alpinejs';
import { gsap } from 'gsap';
import qrCodeImage from './qrcode.png';

window.Alpine = Alpine;
Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
    const downloadContainer = document.getElementById('download-container');
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        const platform = navigator.userAgent.match(/iPhone|iPad|iPod/) ? 'ios' : 'android';
        const downloadButton = document.createElement('a');
        downloadButton.className = 'cta-button';
        downloadButton.textContent = 'Download on the ' + (platform === 'ios' ? 'App Store' : 'Google Play');
        downloadButton.href = platform === 'ios' ? 'https://apps.apple.com' : 'https://play.google.com/store';
        downloadContainer.appendChild(downloadButton);
    } else {
        const qrCode = document.createElement('img');
        qrCode.src = qrCodeImage;
        qrCode.alt = 'Scan to download Lingui';
        qrCode.className = 'qr-code';
        downloadContainer.appendChild(qrCode);
    }


    // Hero Text Animation
    const heroText = document.querySelector('#hero-text h1');
    heroText.textContent = 'Experience the World Through Language';
    gsap.from(heroText, { opacity: 0, y: -50, duration: 1.5, ease: 'power3.out' });
});

// GSAP Animations - Features Cards
gsap.from('#feature1', { opacity: 0, y: 50, duration: 1, delay: 0.2, ease: 'power3.out' });
gsap.from('#feature2', { opacity: 0, y: 50, duration: 1, delay: 0.4, ease: 'power3.out' });
gsap.from('#feature3', { opacity: 0, y: 50, duration: 1, delay: 0.6, ease: 'power3.out' });
gsap.from('#feature4', { opacity: 0, y: 50, duration: 1, delay: 0.8, ease: 'power3.out' });
gsap.from('#feature5', { opacity: 0, y: 50, duration: 1, delay: 1.0, ease: 'power3.out' });
