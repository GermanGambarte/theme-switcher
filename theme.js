const themeBtns = document.querySelectorAll(".theme");

const handleClick = (e) => {
  const theme = e.currentTarget.dataset.theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

themeBtns.forEach((t) => t.addEventListener("click", handleClick));

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  theme && document.documentElement.setAttribute("data-theme", theme);
});
