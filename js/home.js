function renderCarGrid() {
  const grid = document.getElementById("carGrid");
  if (!grid) return;

  if (!CARS.length) {
    grid.innerHTML = `<p class="empty-state">No cars listed yet. Add one in js/cars-data.js.</p>`;
    return;
  }

  grid.innerHTML = CARS.map(
    (car) => `
    <article class="car-card">
      <a href="car.html?car=${encodeURIComponent(car.id)}" class="car-card-media">
        <img src="${car.thumbnail}" alt="${car.name}" loading="lazy" />
      </a>
      <div class="car-card-body">
        <div class="car-card-heading">
          <h3>${car.name}</h3>
          <span class="car-card-year">${car.year} &middot; ${car.trim}</span>
        </div>
        <p class="car-card-tagline">${car.tagline}</p>
        <div class="car-card-footer">
          <span class="car-card-price">${car.price}</span>
          <a href="car.html?car=${encodeURIComponent(car.id)}" class="car-card-link">View Details</a>
        </div>
      </div>
    </article>`
  ).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderFooter("home");
  initHeroSlider([
    "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
  ]);
  renderCarGrid();
});
