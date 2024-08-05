// Nav Bar
let list = document.querySelectorAll(".ul a");

list.forEach((li) => {
  li.addEventListener("click", removeActive);
});

function removeActive() {
  list.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

/* **************************************** */

// Shuffle Bar
let links = document.querySelectorAll(".shuffle li");
let card = document.querySelectorAll(".imges .box");

links.forEach((li) => {
  li.addEventListener("click", shuffle);
  li.addEventListener("click", removeMark);
});

function removeMark() {
  links.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function shuffle() {
  card.forEach((card) => {
    card.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((ca) => {
    ca.style.display = "block";
  });
}
