export const nextUtility = {
  stickyNav() {
    const header = document.getElementById("header-sticky");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  },
  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
};
