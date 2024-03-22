document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const description = document.querySelector('.description');
  
    let currentIndex = 0;
  
    function openLightbox(index) {
      const item = galleryItems[index];
      const imgSrc = item.querySelector('img').getAttribute('src');
      const imgAlt = item.querySelector('img').getAttribute('alt');
      const imgDescription = item.querySelector('img').getAttribute('data-description');
  
      lightboxImage.setAttribute('src', imgSrc);
      lightboxImage.setAttribute('alt', imgAlt);
      description.textContent = imgDescription; // Set description text content
      lightbox.classList.add('show');
      currentIndex = index;
    }
  
    function closeLightbox() {
      lightbox.classList.remove('show');
    }
  
    galleryItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
        openLightbox(index);
      });
    });
  
    closeBtn.addEventListener('click', function () {
      closeLightbox();
    });
  
    lightbox.addEventListener('click', function (e) {
      if (e.target !== lightboxImage && e.target !== prevBtn && e.target !== nextBtn) {
        closeLightbox();
      }
    });
  
    prevBtn.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        openLightbox(currentIndex);
      }
    });
  
    nextBtn.addEventListener('click', function () {
      if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
        openLightbox(currentIndex);
      }
    });
  });
  