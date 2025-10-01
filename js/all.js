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

    