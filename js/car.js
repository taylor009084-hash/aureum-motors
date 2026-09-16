function getCarIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("car");
}

function renderCarPage() {
  const container = document.getElementById("carDetail");
  if (!container) return;

  const id = getCarIdFromUrl();
  const car = CARS.find((c) => c.id === id);

  if (!car) {
    container.innerHTML = `
      <div class="not-found">
        <h1>Car Not Found</h1>
        <p>We couldn't find a listing for that vehicle. It may have been sold or the link is incorrect.</p>
        <a href="index.html" class="btn btn-outline">Back to Collection</a>
      </div>`;
    document.title = "Car Not Found — " + SITE_CONFIG.brand;
    return;
  }

  document.title = `${car.name} — ${SITE_CONFIG.brand}`;

  const specRows = Object.entries(car.specs)
    .map(([label, value]) => `<div class="spec-row"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  const thumbs = car.gallery
    .map(
      (src, i) =>
        `<button class="gallery-thumb${i === 0 ? " is-active" : ""}" data-src="${src}" aria-label="View image ${i + 1}">
          <img src="${src}" alt="${car.name} photo ${i + 1}" loading="lazy" />
        </button>`
    )
    .join("");

  const whatsappMessage = `Hello, I'm interested in the ${car.year} ${car.name} (${car.trim}) listed at ${car.price}. Is it still available?`;

  container.innerHTML = `
    <div class="car-detail-grid">
      <div class="car-gallery">
        <div class="gallery-main">
          <img id="galleryMainImg" src="${car.gallery[0]}" alt="${car.name}" />
        </div>
        <div class="gallery-thumbs">${thumbs}</div>
      </div>
      <div class="car-info">
        <p class="car-info-year">${car.year} &middot; ${car.trim}</p>
        <h1>${car.name}</h1>
        <p class="car-info-price">${car.price}</p>
        <p class="car-info-tagline">${car.tagline}</p>
        <a class="btn btn-gold btn-block" href="${buildWhatsAppLink(whatsappMessage)}" target="_blank" rel="noopener">
          Contact Us About This Car
        </a>
        <a class="btn btn-outline btn-block" href="contact.html?car=${encodeURIComponent(car.id)}">
          Send a Message Instead
        </a>
        <p class="car-info-description">${car.description}</p>
        <h2 class="specs-heading">Specifications</h2>
        <div class="specs-grid">${specRows}</div>
      </div>
    </div>`;

  container.querySelectorAll(".gallery-thumb").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("galleryMainImg").src = btn.dataset.src;
      container.querySelectorAll(".gallery-thumb").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderFooter("");
  renderCarPage();
});
