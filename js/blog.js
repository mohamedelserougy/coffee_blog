let btnTop = document.getElementById("scroll_top");
let backbtn = document.getElementById("back");

btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

backbtn.addEventListener("click", () => {
  window.open("../index.html", "_self");
});
