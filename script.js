// === Sticky Navbar on Scroll ===
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 10);
});

// === Sidebar Toggle (Mobile Navbar) ===
const sidebar = document.getElementById('sidebar');
const hamburgerBtn = document.getElementById('hamburger');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

function toggleSidebar() {
  if (sidebar) sidebar.classList.toggle('open');
}

hamburgerBtn?.addEventListener('click', toggleSidebar);
closeSidebarBtn?.addEventListener('click', toggleSidebar);

// === Contact Sidebar Toggle (Optional Feature) ===
const contactSidebar = document.getElementById('contactSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const openContactBtn = document.getElementById('openSidebar');
const closeContactBtn = document.getElementById('closeSidebar');

function openContactSidebar() {
  contactSidebar?.classList.add('open');
  sidebarOverlay?.classList.add('active');
}

function closeContactSidebar() {
  contactSidebar?.classList.remove('open');
  sidebarOverlay?.classList.remove('active');
}

openContactBtn?.addEventListener('click', openContactSidebar);
closeContactBtn?.addEventListener('click', closeContactSidebar);
sidebarOverlay?.addEventListener('click', closeContactSidebar);

// === Testimonial Slider ===
const slides = document.querySelectorAll(".testimonial-slide");
let currentSlide = 0;

function showNextSlide() {
  if (slides.length > 0) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
}

if (slides.length > 0) {
  setInterval(showNextSlide, 4000); // Auto-rotate every 4 seconds
}

// === Dish Description Popup ===
function showDescription(dishName) {
  document.getElementById('dishName').innerText = dishName;
  document.getElementById('dishPopup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('dishPopup').style.display = 'none';
}

// === Animate Footer on Scroll Into View ===
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');
  if (footer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add('animate');
        }
      });
    });
    observer.observe(footer);
  }
});
