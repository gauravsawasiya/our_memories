const years = Object.keys(memories);

const yearRail = document.getElementById("yearRail");
const yearGrid = document.getElementById("yearGrid");
const yearView = document.getElementById("yearView");
const memoriesSection = document.getElementById("memories");
const selectedYear = document.getElementById("selectedYear");
const selectedYearLabel = document.getElementById("selectedYearLabel");
const selectedYearText = document.getElementById("selectedYearText");
const photoGrid = document.getElementById("photoGrid");
const photoYearHint = document.getElementById("photoYearHint");

years.forEach((year) => {
  const railItem = document.createElement("a");
  railItem.className = "year-dot";
  railItem.href = "#memories";
  railItem.textContent = year;
  railItem.addEventListener("click", () => openYear(year));
  yearRail.appendChild(railItem);

  const card = document.createElement("article");
  card.className = "year-card";
  card.innerHTML = `
    <div class="number">${year}</div>
    <p>${memories[year].title}</p>
    <div class="arrow">↗</div>
  `;
  card.addEventListener("click", () => openYear(year));
  yearGrid.appendChild(card);
});

function openYear(year) {
  const data = memories[year];
  selectedYear.textContent = year;
  selectedYearLabel.textContent = data.title.toUpperCase();
  selectedYearText.textContent = data.text;
  photoYearHint.textContent = year;

  photoGrid.innerHTML = "";

  if (!data.photos.length) {
    photoGrid.innerHTML = `
      <div class="empty-chapter">
        <div class="empty-heart">♡</div>
        <h3>Your ${year} memories go here</h3>
        <p>Add photos to <code>photos/${year}/</code> and list them in <code>memories.js</code>.</p>
      </div>
    `;
  } else {
    data.photos.forEach((photo) => {
      const figure = document.createElement("figure");
      figure.className = "photo-card";
      figure.innerHTML = `
        <img src="${photo.src}" alt="${photo.caption || `Memory from ${year}`}" loading="lazy">
        ${photo.caption ? `<figcaption>${photo.caption}</figcaption>` : ""}
      `;
      photoGrid.appendChild(figure);
    });
  }

  memoriesSection.hidden = true;
  yearView.hidden = false;
  yearView.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("backToYears").addEventListener("click", () => {
  yearView.hidden = true;
  memoriesSection.hidden = false;
  memoriesSection.scrollIntoView({ behavior: "smooth" });
});
