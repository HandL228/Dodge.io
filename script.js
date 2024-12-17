function updateOffroadPrice() {
  const basePrice = 2500000; // Базовая цена внедорожной комплектации
  const engineSelect = document.getElementById("offroad-engine");
  const priceDisplay = document.getElementById("offroad-price");

  let selectedEngine = engineSelect.value;

  if (selectedEngine === "2.0") {
    priceDisplay.textContent = basePrice.toLocaleString();
  } else if (selectedEngine === "1.6") {
    priceDisplay.textContent = (basePrice - 200000).toLocaleString();
  }
}

function updateSportPrice() {
  const basePrice = 4000000; // Базовая цена спортивной комплектации
  const engineSelect = document.getElementById("sport-engine");
  const priceDisplay = document.getElementById("sport-price");

  let selectedEngine = engineSelect.value;

  if (selectedEngine === "4.4") {
    priceDisplay.textContent = basePrice.toLocaleString();
  } else if (selectedEngine === "5.0") {
    priceDisplay.textContent = (basePrice - 150000).toLocaleString();
  }
}
// Автослайдер
const slider = document.querySelector('.slider');
const slides = slider.children;
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let index = 0;
const slideCount = slides.length;
const intervalTime = 3000;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slideCount;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slideCount) % slideCount;
  showSlide(index);
}

// Автоматическая смена слайдов
let slideInterval = setInterval(nextSlide, intervalTime);

// Управление кнопками
nextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, intervalTime);
});

prevButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
  slideInterval = setInterval(nextSlide, intervalTime);
});

function openLightbox(image) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  lightboxImage.src = image.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}
// Функция для генерации капчи
function generateCaptcha() {
  const canvas = document.getElementById('captcha-image');
  const ctx = canvas.getContext('2d');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captchaText = '';
  
  // Генерируем случайный текст для капчи
  for (let i = 0; i < 6; i++) {
    captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  // Очищаем канвас и рисуем новый текст
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Arial';
  ctx.fillStyle = '#333';
  ctx.fillText(captchaText, 50, 50);

  // Сохраняем капчу в элементе для последующей проверки
  canvas.setAttribute('data-captcha', captchaText);
  
  // Добавляем эффект размытия
  ctx.filter = 'blur(4px)';
  ctx.fillText(captchaText, 50, 50);
}

// Функция для проверки капчи
function validateCaptcha() {
  const captchaInput = document.getElementById('captcha-input').value;
  const captchaText = document.getElementById('captcha-image').getAttribute('data-captcha');

  if (captchaInput !== captchaText) {
    alert('Неверная капча! Попробуйте снова.');
    return false;
  }
  
  return true;
}

// Генерация капчи при загрузке страницы
window.onload = generateCaptcha;


// Генерация капчи при загрузке страницы
window.onload = generateCaptcha;


