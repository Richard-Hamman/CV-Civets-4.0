// filepath: /assets/loader.js
window.addEventListener("load", () => {
  gsap.to(".loader", { opacity: 0, duration: 0.5, onComplete: () => {
    document.querySelector(".loader").style.display = "none";
  }});
});