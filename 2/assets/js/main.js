let dokme = document.querySelector(".dokme");
let matn = document.querySelector(".matn");
dokme.addEventListener("click", () => {
  matn.style.color = "red";
  matn.innerHTML= matn.innerHTML.toUpperCase();
});
