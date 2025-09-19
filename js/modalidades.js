document.addEventListener('DOMContentLoaded', () => {
    const gallerySection = document.querySelector('.gallery-section');
    
    if (!gallerySection) {
        return; 
    }

    const galleryItems = gallerySection.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    
    let currentIndex = 0;
    
    const items = Array.from(galleryItems).map(item => ({
        src: item.getAttribute('href'),
        type: item.getAttribute('data-type') || 'image'
    }));

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            showContent(currentIndex);
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                const nextBtn = document.querySelector('.next-btn');
                if (nextBtn) nextBtn.click();
            } else if (e.key === 'ArrowLeft') {
                const prevBtn = document.querySelector('.prev-btn');
                if (prevBtn) prevBtn.click();
            } else if (e.key === 'Escape') {
                const closeBtn = document.querySelector('.close-btn');
                if (closeBtn) closeBtn.click();
            }
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxContent.innerHTML = '';
        }
    });

    function showContent(index) {
        lightboxContent.innerHTML = '';

        const item = items[index];
        if (item.type === 'video') {
            const videoElement = document.createElement('video');
            videoElement.src = item.src;
            videoElement.controls = true;
            videoElement.autoplay = true;
            videoElement.style.maxWidth = '100%';
            videoElement.style.maxHeight = '90vh';
            lightboxContent.appendChild(videoElement);
        } else {
            const imgElement = document.createElement('img');
            imgElement.src = item.src;
            imgElement.style.maxWidth = '100%';
            imgElement.style.maxHeight = '90vh';
            imgElement.style.transition = 'transform 0.3s ease-in-out';

            let isZoomed = false;
            imgElement.addEventListener('click', () => {
                if (isZoomed) {
                    imgElement.style.transform = 'scale(1)';
                } else {
                    imgElement.style.transform = 'scale(1.5)';
                }
                isZoomed = !isZoomed;
            });

            lightboxContent.appendChild(imgElement);
        }

        lightbox.style.display = 'flex';

        const closeBtn = document.querySelector('.close-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (closeBtn) {
            closeBtn.onclick = () => {
                lightbox.style.display = 'none';
                lightboxContent.innerHTML = '';
            };
        }

        if (prevBtn) {
            prevBtn.onclick = () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                showContent(currentIndex);
            };
        }

        if (nextBtn) {
            nextBtn.onclick = () => {
                currentIndex = (currentIndex + 1) % items.length;
                showContent(currentIndex);
            };
        }
    }
});