document.addEventListener("DOMContentLoaded", function() {
    // === Loader ===
    window.addEventListener('load', function() {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');
        if (loader) {
            loader.style.display = 'none';
        }
        if (mainContent) {
            mainContent.style.display = 'block';
        }
    });

    // === Carrusel de Noticias ===
    const slides = document.getElementById('slides');
    const dotsContainer = document.getElementById('dots');
    const slideElements = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        slideElements.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % slideElements.length;
        updateCarousel();
    };

    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + slideElements.length) % slideElements.length;
        updateCarousel();
    };

    createDots();
    updateCarousel();

    // --- Movimiento automático del carrusel ---
    setInterval(() => {
        nextSlide();
    }, 3000); // cada 5 segundos

    // === Carrusel de Logos ===
    const track = document.querySelector('.auto-track');
    if (track) {
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // === Menú Hamburguesa ===
    const menuToggle = document.getElementById('menu-toggle');
    const subweb = document.getElementById('subweb');

    if (menuToggle && subweb) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            subweb.classList.toggle('active');
        });

        document.querySelectorAll('.subweb a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.classList.remove('active');
                    subweb.classList.remove('active');
                }
            });
        });
    }
});

/* // === Animaciones dinámicas al hacer scroll ===
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-animate");
                observer.unobserve(entry.target); // Evita que se repita
            }
        });
    }, { threshold: 0.2 });

    // Selecciona secciones, títulos, tarjetas, etc.
    const elements = document.querySelectorAll(
        "section, .card-modalidad, .card-link, .slide, h2, p, .logo"
    );
    elements.forEach(el => observer.observe(el));
});
 */