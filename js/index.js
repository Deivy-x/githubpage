/* loader 
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");

    loader.style.display = "none";
    content.style.display = "block";
  });

/* Hasta Aquí */



  window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    var content = document.getElementById("main-content");

    if (loader) loader.style.display = "none";
    if (content) content.style.display = "block";
  });
 


const slides = document.getElementById("slides");
  const dotsContainer = document.getElementById("dots");
  const totalSlides = slides.children.length;
  let currentIndex = 0;
  let interval = setInterval(nextSlide, 5000); // Cambia cada 5s

  // Crear los puntos
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index);
    resetInterval();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

