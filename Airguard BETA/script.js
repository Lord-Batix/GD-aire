const carousel = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.carousel-indicator');

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 3;
  updateCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

updateCarousel();


//:::::::::::::::::::Instalar app :::::::::::::::::::::::

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
          console.log('Service Worker registrado con éxito:', registration.scope);
      }).catch((error) => {
          console.log('Error al registrar el Service Worker:', error);
      });
  });
}
