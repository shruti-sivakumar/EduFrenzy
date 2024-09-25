// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Set interval for automatic slide change
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Top Categories Carousel (optional enhancement)
// Add any carousel functionality here if needed

// Featured Courses Carousel (optional enhancement)
// Add any carousel functionality here if needed