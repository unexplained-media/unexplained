const carouselSlide = document.querySelector('.carousel-slide');
const carouselPages = document.querySelectorAll('.carousel-slide div');

//BUTTONS
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//COUNTER
let counter = 1;
const size = carouselPages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () => {
  if (counter >= carouselPages.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselPages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselPages.length -2 ;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
  }
  if (carouselPages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselPages.length - counter ;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
  }
});
