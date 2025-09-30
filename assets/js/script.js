// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Open project links
function openProject(url) {
  window.open(url, "_blank");
}
// ===== Scroll Spy for Active Section =====
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector("nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
});
// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
function toggleInfo(element) {
  let info = element.querySelector(".info");
  if (info.style.display === "block") {
    info.style.display = "none";
  } else {
    info.style.display = "block";
  }
}

