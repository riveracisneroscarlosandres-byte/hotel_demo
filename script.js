/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 80) {
    navbar.style.background = "white";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    if (navLinks) navLinks.style.background = "white";
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.style.color = "#263238";
    });

    document.querySelector(".logo").style.color = "#263238";
    document.querySelector(".nav-button").style.background = "#6f9560";
    document.querySelector(".nav-button").style.color = "white";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";

    if (navLinks) navLinks.style.background = "transparent";
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.style.color = "white";
    });

    document.querySelector(".logo").style.color = "white";
    document.querySelector(".nav-button").style.background = "white";
    document.querySelector(".nav-button").style.color = "#6f9560";
  }
});

/* =========================
   AÑO AUTOMÁTICO FOOTER
========================= */

const year = new Date().getFullYear();
const footerText = document.querySelector("footer p:last-child");

if (footerText) {
  footerText.innerHTML = `© ${year} Todos los derechos reservados`;
}

/* =========================
   ANIMACIONES SCROLL
========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
