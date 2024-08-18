// About page : slider 
let currentSlideIndex = 0;
const slideGroups = document.querySelectorAll('.slide-group');
const totalSlides = slideGroups.length;

function updateSlide(index) {
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }
    const offset = -currentSlideIndex * 100;
    document.querySelector('.slider-content').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    updateSlide(currentSlideIndex + 1);
}

function prevSlide() {
    updateSlide(currentSlideIndex - 1);
}

setInterval(nextSlide, 2000);