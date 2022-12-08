const url = "http://localhost:3000/ramens";

el("new-ramen").addEventListener("submit", createNewRamen);

// fectch api
fetch(url)
  .then((res) => res.json())
  .then(renderRamens);

function renderRamens(ramens) {
  // iterate through ramens
  ramens.forEach(renderRamenBar);
}

function renderRamenBar(ramen) {
  const ramenMenuDiv = el("ramen-menu");

  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image;
  ramenMenuDiv.append(ramenImage);

  ramenImage.addEventListener("click", (e) => renderDetails(ramen));
}

//render reumendetails to the DOM
function renderDetails(ramen) {
  console.log(ramen.image);
  const detailImage = el("detail-image");
  const ramenName = el("ramen-name");
  const restaurantName = el("restaurant-name");
  const ratingDisplay = el("rating-display");
  const commentDisplay = el("comment-display");

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  ramenName.textContent = ramen.name;
  restaurantName.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}

//create new element
function createNewRamen(e) {
  e.preventDefault();

  const newRamen = {
    name: e.target.name.value,
    rating: e.target.rating.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    comment: e.target["new-comment"].value,
  };
  renderRamenBar(newRamen); //creates new ramen on the ramenBar
  e.target.reset();
}

function el(elementName) {
  return document.getElementById(elementName);
}
