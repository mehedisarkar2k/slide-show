const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const dotContainer = document.querySelector('.dot-container');

for (let i = 0; i < slides.length; i++) {
  dotContainer.innerHTML += `
    <span class="dot"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
  </svg></span>
    `;
}

//------------------------------------------- First Try-------------------------------------------
/*
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;
dots[slideIndex].classList.add('active');

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    slideIndex = i;
    showSlide(i);
  });
}

function showSlide(n) {
  n > slides.length - 1 ? (n = 0) : n;
  //   n < 0 ? (n = slides.length - 1) : n;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
  }

  slides[n].classList.add('active');
  dots[n].classList.add('active');
}

leftArrow.addEventListener('click', () => {
  slideIndex--;
  slideIndex < 0 ? (slideIndex = slides.length - 1) : slideIndex;
  clearInterval(timeout);
  showSlide(slideIndex);
});

rightArrow.addEventListener('click', () => {
  slideIndex++;
  slideIndex > slides.length - 1 ? (slideIndex = 0) : slideIndex;
  clearInterval(timeout);
  showSlide(slideIndex);
});

const timeout = setInterval(() => {
  slideIndex > slides.length - 1 ? (slideIndex = 0) : slideIndex;
  slideIndex++;
  showSlide(slideIndex);
  console.log(slideIndex);
}, 5000);
*/

//------------------------------------------- Second Try-------------------------------------------
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;

// initialize
slides[slideIndex].classList.add('active');
dots[slideIndex].classList.add('active');

// functions
function activeSlide(n) {
  clearSlide();
  showSlide(n);
}
function clearSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');
  }
}

function showSlide(n) {
  slideIndex += n;

  slideIndex === slides.length ? (slideIndex = 0) : slideIndex;
  slideIndex < 0 ? (slideIndex = slides.length - 1) : slideIndex;

  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

// click handle
rightArrow.addEventListener('click', () => {
  activeSlide(1);
});
leftArrow.addEventListener('click', () => {
  activeSlide(-1);
});

// timing function
setInterval(() => {
  activeSlide(1);
}, 5000);

// dot click handle
for (let i = 0; i < slides.length; i++) {
  dots[i].addEventListener('click', () => {
    clearSlide();

    slides[i].classList.add('active');
    dots[i].classList.add('active');

    slideIndex = i;
  });
}
