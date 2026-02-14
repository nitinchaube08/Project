// ============================================
// VALENTINE'S DAY WEBSITE - JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initYearDisplay();
    initInteractiveButtons();
    initParallaxEffect();
    initSmoothScroll();
    initImageLazyLoading();
    initTypewriterEffect();
    initImageErrorHandling();
    initCursorTrail();
    initSparkleEffects();
    initScrollProgress();
    initParticleBackground();
    initPromiseAnimations();
    initHeartRain();
    initEnhancedConfetti();
});

// ============================================
// Display Current Year
// ============================================
function initYearDisplay() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Footer date
    const footerDate = document.getElementById('footerDate');
    if (footerDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        footerDate.textContent = new Date().toLocaleDateString('en-US', options);
    }
}

// ============================================
// Interactive Yes/No Buttons
// ============================================
function initInteractiveButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');
    
    if (!yesBtn || !noBtn || !responseMessage) return;
    
    let noClickCount = 0;
    const maxNoClicks = 3;
    
    // Yes Button Handler
    yesBtn.addEventListener('click', function() {
        // Confetti animation
        triggerConfetti();
        
        // Show sweet message
        responseMessage.innerHTML = 'Forever with you ❤️';
        responseMessage.style.color = '#c2185b';
        responseMessage.style.fontSize = '2rem';
        
        // Hide No button
        noBtn.style.display = 'none';
        
        // Make Yes button bigger and celebratory
        yesBtn.style.transform = 'scale(1.2)';
        yesBtn.style.background = 'linear-gradient(135deg, #ffd700, #ffb347)';
        
        // Add heart animation
        createFloatingHearts(20);
        
        // Show gift link after a short delay
        setTimeout(() => {
            showGiftLink();
        }, 1500);
    });
    
    // No Button Handler (playful)
    noBtn.addEventListener('click', function() {
        noClickCount++;
        
        if (noClickCount <= maxNoClicks) {
            // Move button away playfully
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() * 100);
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
            noBtn.style.transition = 'transform 0.3s ease';
            
            // Change text playfully
            const messages = [
                'Wait, try again! 😘',
                'Are you sure? 💕',
                'One more chance? ❤️',
                'Pretty please? 🌹'
            ];
            noBtn.textContent = messages[Math.min(noClickCount - 1, messages.length - 1)];
            
            // Reset position after a moment
            setTimeout(() => {
                noBtn.style.transform = 'translate(0, 0)';
            }, 300);
        } else {
            // After max clicks, make it disappear and show message
            noBtn.style.display = 'none';
            responseMessage.innerHTML = 'I knew you\'d say yes! 😊💕';
            responseMessage.style.color = '#c2185b';
            triggerConfetti();
            createFloatingHearts(15);
        }
    });
}

// ============================================
// Show Gift Link
// ============================================
function showGiftLink() {
    const responseMessage = document.getElementById('responseMessage');
    if (!responseMessage) return;
    
    // Create gift container
    const giftContainer = document.createElement('div');
    giftContainer.className = 'gift-container';
    giftContainer.style.cssText = `
        margin-top: 30px;
        padding: 30px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 204, 213, 0.9) 100%);
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(194, 24, 91, 0.3);
        text-align: center;
        animation: giftReveal 0.8s ease-out;
        border: 3px solid rgba(194, 24, 91, 0.3);
        position: relative;
        overflow: hidden;
    `;
    
    // Add gift emoji and title
    const giftTitle = document.createElement('h3');
    giftTitle.innerHTML = '🎁 A Special Gift For You 💝';
    giftTitle.style.cssText = `
        font-family: 'Playfair Display', serif;
        font-size: 1.8rem;
        color: #c2185b;
        margin-bottom: 20px;
        text-shadow: 0 2px 10px rgba(255, 182, 193, 0.5);
    `;
    
    // Add gift message
    const giftMessage = document.createElement('p');
    giftMessage.innerHTML = 'I have something special for you, my love ✨';
    giftMessage.style.cssText = `
        font-size: 1.1rem;
        color: #2c2c2c;
        margin-bottom: 25px;
        font-style: italic;
    `;
    
    // Create the link button
    const giftLink = document.createElement('a');
    giftLink.href = 'https://nitinsunilchaube-arch.github.io/';
    giftLink.target = '_blank';
    giftLink.rel = 'noopener noreferrer';
    giftLink.textContent = 'Open Your Gift 🎀';
    giftLink.style.cssText = `
        display: inline-block;
        padding: 15px 40px;
        background: linear-gradient(135deg, #c2185b, #ffb6c1);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-size: 1.2rem;
        font-weight: 600;
        box-shadow: 0 5px 20px rgba(194, 24, 91, 0.4);
        transition: all 0.3s ease;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
    `;
    
    // Add hover effect
    giftLink.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 8px 30px rgba(194, 24, 91, 0.6)';
    });
    
    giftLink.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 5px 20px rgba(194, 24, 91, 0.4)';
    });
    
    // Add click effect
    giftLink.addEventListener('click', function() {
        createFloatingHearts(10);
        createSparkles(window.innerWidth / 2, window.innerHeight / 2);
    });
    
    // Assemble the gift container
    giftContainer.appendChild(giftTitle);
    giftContainer.appendChild(giftMessage);
    giftContainer.appendChild(giftLink);
    
    // Add to response message area
    responseMessage.appendChild(giftContainer);
    
    // Add sparkles around the gift
    setTimeout(() => {
        const rect = giftContainer.getBoundingClientRect();
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createSparkles(
                    rect.left + Math.random() * rect.width,
                    rect.top + Math.random() * rect.height
                );
            }, i * 100);
        }
    }, 500);
}

// Add CSS animation for gift reveal
const giftAnimationStyle = document.createElement('style');
giftAnimationStyle.textContent = `
    @keyframes giftReveal {
        0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
        }
        50% {
            transform: translateY(-10px) scale(1.05);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;
document.head.appendChild(giftAnimationStyle);

// ============================================
// Enhanced Confetti Effect
// ============================================
function triggerConfetti() {
    // Check if confetti library is loaded
    if (typeof confetti !== 'undefined') {
        // Massive celebration burst
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#ffccd5', '#ffb6c1', '#c2185b', '#ffd700', '#ffb347', '#ffffff'],
            startVelocity: 30,
            gravity: 0.8,
            ticks: 200
        });
        
        // Left burst
        setTimeout(() => {
            confetti({
                particleCount: 80,
                angle: 60,
                spread: 65,
                origin: { x: 0 },
                colors: ['#ffccd5', '#ffb6c1', '#c2185b', '#ffd700'],
                startVelocity: 25
            });
        }, 200);
        
        // Right burst
        setTimeout(() => {
            confetti({
                particleCount: 80,
                angle: 120,
                spread: 65,
                origin: { x: 1 },
                colors: ['#ffccd5', '#ffb6c1', '#c2185b', '#ffd700'],
                startVelocity: 25
            });
        }, 400);
        
        // Center burst
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 90,
                origin: { y: 0.5, x: 0.5 },
                colors: ['#ffccd5', '#ffb6c1', '#c2185b', '#ffd700', '#ffb347'],
                startVelocity: 35,
                gravity: 1
            });
        }, 600);
        
        // Final burst
        setTimeout(() => {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.4 },
                colors: ['#ffccd5', '#ffb6c1', '#c2185b', '#ffd700', '#ffb347', '#ffffff'],
                startVelocity: 40,
                gravity: 0.6
            });
        }, 800);
    }
}

// ============================================
// Create Floating Hearts on Button Click
// ============================================
function createFloatingHearts(count) {
    const container = document.querySelector('.floating-hearts') || document.body;
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 6)];
        heart.style.position = 'fixed';
        heart.style.fontSize = '2rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.opacity = '0.8';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = `floatUp ${2 + Math.random() * 2}s ease-out forwards`;
        
        container.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Parallax Effect for Challenges Section
// ============================================
function initParallaxEffect() {
    // Parallax effect removed since challenges section now uses gradient background
    // This function is kept for potential future enhancements
}

// ============================================
// Smooth Scroll (kept for general page scrolling)
// ============================================
function initSmoothScroll() {
    // Smooth scroll is handled by CSS scroll-behavior: smooth
    // This function is kept for potential future enhancements
}

// ============================================
// Lazy Loading for Images
// ============================================
function initImageLazyLoading() {
    // Check if browser supports Intersection Observer
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.style.opacity = '1';
        });
    }
}

// ============================================
// Image Error Handling
// ============================================
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Ensure images load properly
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            // If image fails to load, try to use a fallback
            const fallbackImages = [
                './Utils/34BF16B8-1E85-45C1-B935-27ED119D9002_1_105_c.jpeg',
                './Utils/4538B619-F607-443A-AE8E-5A14A4B167E0_1_105_c.jpeg',
                './Utils/6EA43435-C266-4B6E-B455-3B2C1D3D0901_1_105_c.jpeg'
            ];
            
            // Try a fallback image
            if (!this.dataset.fallbackAttempted) {
                this.dataset.fallbackAttempted = 'true';
                const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
                this.src = randomFallback;
            } else {
                // If fallback also fails, show placeholder
                this.style.opacity = '0.5';
                this.style.filter = 'grayscale(100%)';
                if (this.parentElement) {
                    this.parentElement.style.backgroundColor = 'rgba(255, 204, 213, 0.5)';
                }
                console.warn('Image failed to load:', this.src);
            }
        });
        
        // Force image to display
        if (img.complete && img.naturalHeight !== 0) {
            img.style.opacity = '1';
        }
    });
}

// ============================================
// Enhanced Typewriter Effect
// ============================================
function initTypewriterEffect() {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;
    
    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    typewriterElement.style.borderRight = '3px solid white';
    typewriterElement.style.whiteSpace = 'nowrap';
    typewriterElement.style.overflow = 'hidden';
    typewriterElement.style.width = '0';
    
    let i = 0;
    const speed = 50; // Typing speed in milliseconds
    
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Keep cursor blinking
            typewriterElement.style.animation = 'blink-caret 0.75s step-end infinite';
        }
    }
    
    // Start typing when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && i === 0) {
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    observer.observe(typewriterElement);
}

// ============================================
// Enhanced Scroll-triggered Animations
// ============================================
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.photo-item, .section-title');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
            
            // Add sparkles when elements come into view
            if (!element.dataset.animated) {
                element.dataset.animated = 'true';
                const rect = element.getBoundingClientRect();
                setTimeout(() => {
                    createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);
                }, 300);
            }
        }
    });
});

// ============================================
// Enhanced Heart Click Effect
// ============================================
document.addEventListener('click', function(e) {
    // Always create hearts on click
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💞'];
    const heart = hearts[Math.floor(Math.random() * hearts.length)];
    
    const heartElement = document.createElement('div');
    heartElement.className = 'cursor-heart';
    heartElement.innerHTML = heart;
    heartElement.style.left = e.clientX + 'px';
    heartElement.style.top = e.clientY + 'px';
    
    document.body.appendChild(heartElement);
    
    setTimeout(() => {
        heartElement.remove();
    }, 1000);
    
    // Create sparkles
    createSparkles(e.clientX, e.clientY);
});

// ============================================
// Cursor Trail with Hearts
// ============================================
function initCursorTrail() {
    let mouseX = 0, mouseY = 0;
    let trailHearts = [];
    const maxTrail = 5;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create trailing hearts
        if (Math.random() > 0.7) { // 30% chance
            const heart = document.createElement('div');
            const hearts = ['❤️', '💕', '💖'];
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.className = 'cursor-heart';
            heart.style.left = mouseX + 'px';
            heart.style.top = mouseY + 'px';
            heart.style.fontSize = (0.8 + Math.random() * 0.4) + 'rem';
            
            document.body.appendChild(heart);
            trailHearts.push(heart);
            
            // Limit trail length
            if (trailHearts.length > maxTrail) {
                const oldHeart = trailHearts.shift();
                if (oldHeart && oldHeart.parentNode) {
                    oldHeart.remove();
                }
            }
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
                trailHearts = trailHearts.filter(h => h !== heart);
            }, 800);
        }
    });
}

// ============================================
// Sparkle Effects on Click
// ============================================
function createSparkles(x, y) {
    const sparkleCount = 8;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + (Math.random() - 0.5) * 100 + 'px';
        sparkle.style.top = y + (Math.random() - 0.5) * 100 + 'px';
        sparkle.style.animationDelay = Math.random() * 0.3 + 's';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 2000);
    }
}

function initSparkleEffects() {
    // Sparkles appear on various interactions
    const interactiveElements = document.querySelectorAll('button, .photo-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);
        });
    });
}

// ============================================
// Scroll Progress Indicator
// ============================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ============================================
// Particle Background Effect
// ============================================
function initParticleBackground() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particle.style.width = (3 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        
        // Random colors
        const colors = ['#ffccd5', '#ffb6c1', '#c2185b', '#ffd700'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// Promise Item Animations
// ============================================
function initPromiseAnimations() {
    const promiseItems = document.querySelectorAll('.promise-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    promiseItems.forEach(item => {
        observer.observe(item);
    });
}

// ============================================
// Heart Rain Effect
// ============================================
function initHeartRain() {
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every interval
            createHeartRain();
        }
    }, 3000);
}

function createHeartRain() {
    const heartCount = 3;
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💞'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = (1.5 + Math.random() * 1) + 'rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.opacity = '0.6';
        heart.style.filter = 'drop-shadow(0 0 10px rgba(255, 182, 193, 0.6))';
        
        const animationDuration = 3 + Math.random() * 2;
        const horizontalDrift = (Math.random() - 0.5) * 200;
        
        heart.style.animation = `heartRain ${animationDuration}s linear forwards`;
        heart.style.setProperty('--drift', horizontalDrift + 'px');
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, animationDuration * 1000);
    }
}

// Add heart rain animation
const heartRainStyle = document.createElement('style');
heartRainStyle.textContent = `
    @keyframes heartRain {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.6;
        }
        100% {
            transform: translateY(calc(100vh + 100px)) translateX(var(--drift, 0)) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartRainStyle);

// ============================================
// Enhanced Confetti
// ============================================
function initEnhancedConfetti() {
    // Continuous subtle confetti on special sections
    const promisesSection = document.querySelector('.promises-section');
    
    if (promisesSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Subtle confetti when promises section is visible
                    setInterval(() => {
                        if (Math.random() > 0.95) {
                            if (typeof confetti !== 'undefined') {
                                confetti({
                                    particleCount: 5,
                                    spread: 50,
                                    origin: { 
                                        x: Math.random(),
                                        y: Math.random() * 0.5 + 0.2
                                    },
                                    colors: ['#ffccd5', '#ffb6c1', '#c2185b'],
                                    startVelocity: 20,
                                    gravity: 0.5
                                });
                            }
                        }
                    }, 2000);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(promisesSection);
    }
}
