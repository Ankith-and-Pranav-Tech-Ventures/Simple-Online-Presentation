let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active-slide', 'slide-enter', 'slide-enter-active', 'slide-exit', 'slide-exit-active');
    if (i === index) {
      slide.classList.add('slide-enter');
      setTimeout(() => slide.classList.add('slide-enter-active'), 20);
    }
  });
  updateButtons(index);
}

function updateButtons(index) {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  prevButton.disabled = index === 0;
  nextButton.disabled = index === totalSlides - 1;
}

document.getElementById('prev').addEventListener('click', () => {
  if (currentSlide > 0) {
    slides[currentSlide].classList.add('slide-exit');
    setTimeout(() => {
      slides[currentSlide].classList.add('slide-exit-active');
      currentSlide--;
      showSlide(currentSlide);
    }, 20);
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    slides[currentSlide].classList.add('slide-exit');
    setTimeout(() => {
      slides[currentSlide].classList.add('slide-exit-active');
      currentSlide++;
      showSlide(currentSlide);
    }, 20);
  }
});

window.onload = () => {
  showSlide(currentSlide);
};
