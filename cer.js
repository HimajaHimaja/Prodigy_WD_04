// script.js

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth; // Assuming all slides have the same width
    const sliderWidth = totalSlides * slideWidth;
    
    slider.style.width = `${sliderWidth}px`;

    let slideIndex = 0;

    function slide() {
        slideIndex++;
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

        if (slideIndex >= totalSlides - 1) {
            setTimeout(() => {
                slideIndex = 0;
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0)`;
            }, 1000); // Adjust the delay as needed (should match transition duration)
        }
    }

    setInterval(slide, 3000); // Adjust slide interval as needed (milliseconds)
});
