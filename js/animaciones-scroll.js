// js/animaciones-scroll.js
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // ms
    once: true,     // true = se ejecuta solo una vez
    offset: 100,    // px antes de entrar al viewport
  });
});
