const items = document.querySelectorAll(".sector-items");

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.fontSize = "30px";
  });
});
