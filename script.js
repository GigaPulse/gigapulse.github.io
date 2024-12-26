// Скролл к секции "О нас" при нажатии на кнопку
document.getElementById('learn-more').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth'
  });
});
