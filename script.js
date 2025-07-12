
    // Mobile Menu Toggle
    document.querySelector('.ham-menu').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
    });

    // Close menu on nav link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
      });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Animate on scroll
    const animateElements = document.querySelectorAll('.animate, .delay-1, .delay-2');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    animateElements.forEach(el => observer.observe(el));

