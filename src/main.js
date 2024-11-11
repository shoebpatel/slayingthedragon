import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/header.css';
import '../styles/intro.css';
import '../styles/courses.css';
import '../styles/about.css';
import '../styles/support.css';
import '../styles/feature.css';
import '../styles/faq.css';
import '../styles/disclosure.css';
import '../styles/footer.css';
import '../styles/utils.css';

import mobileNav from "../src/components/mobile-nav";

window.mobileNav = mobileNav;

function isMobileDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
}

if (!isMobileDevice()) {
  const accountBtn = document.querySelector(".account-btn-wrapper");
  const accountSignIn = document.querySelector(".account-sign-in");
  if (accountBtn) accountBtn.style.display = "none";
  if (accountSignIn) accountSignIn.style.display = "block";
}
