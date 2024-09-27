// Global variables for managing slides
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

let currentCourseIndex = 0;
let currentMentorIndex = 0;
let currentCommunityIndex = 0;
const slidesToShow = 1; // Adjust this to the number of slides visible at once
const slideDuration = 5000; // 5 seconds

// Function to show a single slide based on index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function moveSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.children;
    const totalSlides = slides.length;
    const slidesToShow = 4; // Adjust this to the number of slides visible at once

    let currentIndex;
    if (sliderId === 'course-slider') {
        currentIndex = currentCourseIndex;
    } else if (sliderId === 'mentor-slider') {
        currentIndex = currentMentorIndex;
    } else if (sliderId === 'community-slider') {
        currentIndex = currentCommunityIndex;
    }

    // Update the index based on the direction
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0; // Prevent going left
    if (currentIndex > totalSlides - slidesToShow) currentIndex = totalSlides - slidesToShow; // Prevent going right

    // Update the display property of the slides
    for (let i = 0; i < slides.length; i++) {
        if (i >= currentIndex && i < currentIndex + slidesToShow) {
            slides[i].style.display = 'flex';
        } else {
            slides[i].style.display = 'none';
        }
    }

    // Save the current index based on sliderId
    if (sliderId === 'course-slider') {
        currentCourseIndex = currentIndex;
    } else if (sliderId === 'mentor-slider') {
        currentMentorIndex = currentIndex;
    } else if (sliderId === 'community-slider') {
        currentCommunityIndex = currentIndex;
    }
}

// Function for auto-sliding through all sliders
function autoSlide() {
    moveSlide('course-slider', 1);
    moveSlide('mentor-slider', 1);
    moveSlide('community-slider', 1);
}

// Initialize the sliders and set intervals
document.addEventListener('DOMContentLoaded', () => {
    // Show the first slide initially for the main slider
    showSlide(currentSlide);
    // Set interval for automatic slide change
    setInterval(nextSlide, slideDuration);

    // Set interval for auto sliding through categories
    setInterval(/*autoSlide,*/ slideDuration);
});

// Optional: Add button click listeners for manual control
document.getElementById('course-next').onclick = () => moveSlide('course-slider', 1);
document.getElementById('course-prev').onclick = () => moveSlide('course-slider', -1);
document.getElementById('mentor-next').onclick = () => moveSlide('mentor-slider', 1);
document.getElementById('mentor-prev').onclick = () => moveSlide('mentor-slider', -1);
document.getElementById('community-next').onclick = () => moveSlide('community-slider', 1);
document.getElementById('community-prev').onclick = () => moveSlide('community-slider', -1);
