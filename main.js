import Alpine from 'alpinejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import qrCodeImage from './qrcode.png';

window.Alpine = Alpine;
Alpine.start();
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const downloadContainer = document.getElementById('download-container');
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function createQrCodeContainer(imageSrc, altText, labelText) {
        const qrContainer = document.createElement('div');
        qrContainer.className = 'qr-container';

        const qrCode = document.createElement('img');
        qrCode.src = imageSrc;
        qrCode.alt = altText;
        qrCode.className = 'qr-code';

        const qrLabel = document.createElement('p');
        qrLabel.textContent = labelText;
        qrLabel.className = 'qr-label';

        qrContainer.appendChild(qrCode);
        qrContainer.appendChild(qrLabel);

        return qrContainer;
    }

    if (isMobile) {
        const platform = navigator.userAgent.match(/iPhone|iPad|iPod/) ? 'ios' : 'android';
        const downloadButton = document.createElement('a');
        downloadButton.className = 'cta-button';
        downloadButton.textContent = 'Download on the ' + (platform === 'ios' ? 'App Store' : 'Google Play');
        downloadButton.href = platform === 'ios' ? 'https://apps.apple.com' : 'https://play.google.com/store';
        downloadContainer.appendChild(downloadButton);
    } else {

        const qrCodeAndroid = createQrCodeContainer(qrCodeImage, 'Scan to download Lingui on Android', 'Android');
        const qrCodeIos = createQrCodeContainer(qrCodeImage, 'Scan to download Lingui on iOS', 'iOS');

        downloadContainer.appendChild(qrCodeAndroid);
        downloadContainer.appendChild(qrCodeIos);
        
    }


    // Hero Text Animation
    const heroText = document.querySelector('#hero-text h1');
    heroText.textContent = 'Experience the World Through Language';
    gsap.from(heroText, { opacity: 0, y: -50, duration: 1.5, ease: 'power3.out' });

    gsap.utils.toArray('.testimonial-card').forEach(card => {
        gsap.fromTo(card, 
            { opacity: 0.5, x: -200 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 1.2, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    gsap.utils.toArray('.benefit-item').forEach(item => {
        gsap.fromTo(item, 
            { opacity: 0, y: 50, scale: 0.95, rotate: -3 },
            { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                rotate: 0, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});

// GSAP Animations - Features Cards
gsap.from('#feature1', { opacity: 0, y: 50, duration: 1, delay: 0.2, ease: 'power3.out' });
gsap.from('#feature2', { opacity: 0, y: 50, duration: 1, delay: 0.4, ease: 'power3.out' });
gsap.from('#feature3', { opacity: 0, y: 50, duration: 1, delay: 0.6, ease: 'power3.out' });
gsap.from('#feature4', { opacity: 0, y: 50, duration: 1, delay: 0.8, ease: 'power3.out' });
gsap.from('#feature5', { opacity: 0, y: 50, duration: 1, delay: 1.0, ease: 'power3.out' });

const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });