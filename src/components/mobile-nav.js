export const openMobileNav = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.display = "flex";
  const navBars = document.querySelector(".mobile-nav-bars");
  navBars.style.display = "none";
  const titleFlex = document.querySelector(".title-flex");
  titleFlex.style.display = "none";
  const body = document.getElementsByTagName("body");
  body[0].style.overflow = "hidden";
}

export const closeMobileNav = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.style.display = "none";
    const navBars = document.querySelector(".mobile-nav-bars");
    navBars.style.display = "block";
    const titleFlex = document.querySelector(".title-flex");
    titleFlex.style.display = "flex";
    const body = document.getElementsByTagName("body");
    body[0].style.overflow = "visible";
}

