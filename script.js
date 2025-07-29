// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#4ea0ff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#4ea0ff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});

// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Typing Effect
const words = ["Ethical Hacker", "Web Developer", "Cybersecurity Enthusiast", "Technical Writer"];
const typingText = document.querySelector('.typing-text');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typingTimeout = setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingTimeout = setTimeout(typeEffect, 500);
  } else {
    typingTimeout = setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 1000);
});

// Animate skill bars when scrolled into view
const skillBars = document.querySelectorAll('.skill-progress');
    
function animateSkillBars() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    }
  });
}

// Run once on page load and then on scroll
window.addEventListener('load', animateSkillBars);
window.addEventListener('scroll', animateSkillBars);

// Certificate Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const certificateItems = document.querySelectorAll('.certificate-item');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');
let currentIndex = 0;

certificateItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    const imgSrc = item.querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
});

lightboxPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + certificateItems.length) % certificateItems.length;
  const imgSrc = certificateItems[currentIndex].querySelector('img').src;
  lightboxImg.src = imgSrc;
});

lightboxNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % certificateItems.length;
  const imgSrc = certificateItems[currentIndex].querySelector('img').src;
  lightboxImg.src = imgSrc;
});

// Project Lightbox
const projectImages = document.querySelectorAll('.project-image img');

projectImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Testimonial Slider
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;

function showSlide(index) {
  testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
  
  // Update dots
  testimonialDots.forEach(dot => dot.classList.remove('active'));
  testimonialDots[index].classList.add('active');
  
  currentSlide = index;
}

testimonialDots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// Auto slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialItems.length;
  showSlide(currentSlide);
}, 5000);

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
    
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.opacity = '1';
    backToTop.style.visibility = 'visible';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.visibility = 'hidden';
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
    
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  
  // Simulate form submission (replace with actual form submission)
  setTimeout(() => {
    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
    formStatus.className = 'form-status success';
    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    
    // Hide status message after 5 seconds
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = '';
    }, 5000);
  }, 1500);
});

// Scroll Reveal Animation
const sections = document.querySelectorAll('section');
    
function checkScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}
    
// Initialize sections as hidden
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});
    
// Run on load and scroll
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
    
// Header scroll effect
const header = document.querySelector('header');
    
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Background Music Control
const bgMusic = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');
let isPlaying = false;

// Fungsi untuk memulai musik (dengan interaksi pengguna pertama)
function startMusic() {
  // Memastikan audio dimulai hanya setelah interaksi pengguna
  document.body.addEventListener('click', function firstInteraction() {
    bgMusic.volume = 1; // Atur volume (0-1)
    bgMusic.play()
      .then(() => {
        isPlaying = true;
        musicControl.classList.add('playing');
      })
      .catch(error => {
        console.log("Autoplay prevented:", error);
      });
    
    // Hapus event listener setelah digunakan
    document.body.removeEventListener('click', firstInteraction);
  }, { once: true });
}

// Mulai musik saat halaman dimuat
window.addEventListener('DOMContentLoaded', startMusic);

// Toggle musik saat kontrol diklik
musicControl.addEventListener('click', function(e) {
  e.stopPropagation();

  if (isPlaying) {
    bgMusic.pause();
    musicControl.classList.remove('playing');
  } else {
    bgMusic.play();
    musicControl.classList.add('playing');
  }
  isPlaying = !isPlaying;
});

// Deteksi ketika tab tidak aktif (pause musik)
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    bgMusic.pause();
  } else if (isPlaying) {
    bgMusic.play();
  }
});