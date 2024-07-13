fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("placeholder").innerHTML = data;
  });

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
