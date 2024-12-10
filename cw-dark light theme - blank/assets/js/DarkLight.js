let SW = document.querySelector(".themeSwitch");
let Body = document.body;

SW.addEventListener("click", () => {
  if (Body.getAttribute("data-bs-theme") == "dark") {
    SW.setAttribute("class", "bi bi-moon themeSwitch");
    Body.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    SW.setAttribute("class", "bi bi-brightness-high themeSwitch");
    Body.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "tire");
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") == "tire") {
    Body.setAttribute("data-bs-theme", "dark");
    SW.setAttribute("class", "bi bi-brightness-high themeSwitch");
  }
});
