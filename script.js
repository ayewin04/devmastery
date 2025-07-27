
document.addEventListener('DOMContentLoaded', function() {
    // Navigation between sections
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // Card navigation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // Remove active class from all links and sections
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to corresponding nav link
            document.querySelector(`nav a[data-section="${sectionId}"]`).classList.add('active');
            
            // Show corresponding section
            document.getElementById(sectionId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            accordionItem.classList.toggle('active');
            
            // Close other accordion items if needed
            // const currentActive = document.querySelector('.accordion-item.active');
            // if (currentActive && currentActive !== accordionItem) {
            //     currentActive.classList.remove('active');
            // }
        });
    });
    
    // Initialize first section as active if none is active
    if (!document.querySelector('.content-section.active')) {
        document.querySelector('.content-section').classList.add('active');
    }
    
    // Initialize first nav link as active if none is active
    if (!document.querySelector('nav a.active')) {
        document.querySelector('nav a').classList.add('active');
    }
});
// Update your JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  // Toggle mobile menu
  menuToggle.innerHTML = '<i class="fas fa-bars"></i><i class="fas fa-times"></i>';
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        // Small delay to allow the menu to close before scrolling
        setTimeout(() => {
          window.scrollTo({
            top: document.querySelector('header').offsetHeight,
            behavior: 'smooth'
          });
        }, 300);
      }
    });
  });
});