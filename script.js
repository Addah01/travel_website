// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
      }
  });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
  } else {
      header.style.background = 'var(--bg-white)';
      header.style.backdropFilter = 'none';
  }
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('.newsletter-input').value;
  
  if (email) {
      // Simulate form submission
      alert('Thank you for subscribing! You\'ll receive our best travel offers soon.');
      this.querySelector('.newsletter-input').value = '';
  }
});

// Video play button interaction
document.querySelector('.play-button').addEventListener('click', function() {
  alert('Video player would open here in a real implementation!');
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.destination-card, .feature-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('mobile-active');
}

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});