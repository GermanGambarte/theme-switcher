const themeBtns = document.querySelectorAll(".theme");

const handleClick = (e) => {
  const theme = e.currentTarget.dataset.theme;
  document.documentElement.setAttribute("data-theme", theme);
};

themeBtns.forEach((t) => t.addEventListener("click", handleClick));
