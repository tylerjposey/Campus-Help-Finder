const searchInput = document.querySelector("#resource-search");
const cards = [...document.querySelectorAll(".resource-card")];
const resultCount = document.querySelector("#result-count");
const noResults = document.querySelector("#no-results");

function filterResources() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const matches = !query || card.dataset.search.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultCount.textContent = String(visibleCount);
  noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterResources);

document.querySelectorAll(".learn-more, .wordmark").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
