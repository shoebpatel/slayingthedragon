export default (action) => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const titleFlex = document.querySelector(".title-flex");

  if (action === 'open') {
    mobileMenu.style.display = "flex";
    titleFlex.style.display = "none";
    document.body.style.overflowY = "hidden";
  }
  if (action === "close") {
    mobileMenu.style.display = "none";
    titleFlex.style.display = "flex";
    document.body.style.overflowY = "auto";
  }
};
