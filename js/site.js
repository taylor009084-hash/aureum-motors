/* ==========================================================================
   AUREUM MOTORS — SITE CONFIG
   Edit these values to match your business. They are used across every page.
   ========================================================================== */
const SITE_CONFIG = {
  brand: "Aureum Motors",
  whatsappNumber: "923001234567", // country code + number, no + or spaces
  phone: "+92 300 1234567",
  email: "sales@aureummotors.com",
  address: "Cantt Bazaar Road, Multan, Punjab, Pakistan"
};

/* Builds a wa.me link with an optional prefilled message */
function buildWhatsAppLink(message) {
  const base = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/* ==========================================================================
   HEADER / FOOTER
   ========================================================================== */
function renderHeader(activePage) {
  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "about.html", label: "About Us", key: "about" },
    { href: "contact.html", label: "Contact", key: "contact" }
  ];

  const navItems = links
    .map(
      (l) =>
        `<li><a href="${l.href}" class="nav-link${l.key === activePage ? " is-active" : ""}">${l.label}</a></li>`
    )
    .join("");

  return `
    <div class="header-inner">
      <a href="index.html" class="brand" aria-label="${SITE_CONFIG.brand} — home">
        <span class="brand-mark">AM</span>
        <span class="brand-name">Aureum<em>Motors</em></span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" id="siteNav">
        <ul>${navItems}</ul>
      </nav>
    </div>`;
}

function renderFooter() {
  return `
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="brand-mark">AM</span>
        <span class="brand-name">Aureum<em>Motors</em></span>
      </div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="footer-contact">
        <a href="${buildWhatsAppLink("Hello, I'd like to know more about your cars.")}" target="_blank" rel="noopener">WhatsApp Us</a>
        <span>${SITE_CONFIG.phone}</span>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} ${SITE_CONFIG.brand}. All rights reserved.</div>`;
}

function initHeaderFooter(activePage) {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = renderHeader(activePage);
  if (footerEl) footerEl.innerHTML = renderFooter();

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // header shadow on scroll
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll);
  onScroll();
}

/* ==========================================================================
   HERO SLIDER
   ========================================================================== */
function initHeroSlider(images) {
  const root = document.getElementById("heroSlider");
  if (!root) return;

  root.innerHTML = `
    <div class="slider-track">
      ${images
        .map(
          (src, i) =>
            `<div class="slide${i === 0 ? " is-active" : ""}" style="background-image:url('${src}')"></div>`
        )
        .join("")}
    </div>
    <div class="slider-overlay">
      <p class="slider-eyebrow-free">Curated. Inspected. Delivered with confidence.</p>
      <h1>Exceptional Cars,<br>Honestly Sold.</h1>
      <a href="#collection" class="btn btn-gold">View the Collection</a>
    </div>
    <button class="slider-arrow slider-prev" aria-label="Previous slide">&#8249;</button>
    <button class="slider-arrow slider-next" aria-label="Next slide">&#8250;</button>
    <div class="slider-dots">
      ${images.map((_, i) => `<button class="dot${i === 0 ? " is-active" : ""}" aria-label="Slide ${i + 1}"></button>`).join("")}
    </div>`;

  const slides = root.querySelectorAll(".slide");
  const dots = root.querySelectorAll(".dot");
  let index = 0;
  let timer;

  function go(to) {
    slides[index].classList.remove("is-active");
    dots[index].classList.remove("is-active");
    index = (to + slides.length) % slides.length;
    slides[index].classList.add("is-active");
    dots[index].classList.add("is-active");
  }

  function next() { go(index + 1); }
  function prev() { go(index - 1); }
  function restart() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  root.querySelector(".slider-next").addEventListener("click", () => { next(); restart(); });
  root.querySelector(".slider-prev").addEventListener("click", () => { prev(); restart(); });
  dots.forEach((dot, i) => dot.addEventListener("click", () => { go(i); restart(); }));
  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", restart);

  restart();
}
