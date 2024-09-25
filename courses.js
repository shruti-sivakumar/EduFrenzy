// courses.js

// Function to filter courses based on search input
document.getElementById("search-bar").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const courseCards = document.querySelectorAll(".course-card");
    
    courseCards.forEach(card => {
        const courseName = card.querySelector("p:nth-child(2)").textContent.toLowerCase();
        if (courseName.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Function to handle filter changes
document.querySelectorAll('.filters select').forEach(select => {
    select.addEventListener('change', filterCourses);
});

function filterCourses() {
    const level = document.getElementById('level').value;
    const duration = document.getElementById('duration').value;
    const price = document.getElementById('price').value;
    const language = document.getElementById('language').value;

    const courseCards = document.querySelectorAll(".course-card");
    courseCards.forEach(card => {
        const cardLevel = card.getAttribute("data-level"); // Assuming you add data-level attribute
        const cardDuration = card.getAttribute("data-duration"); // Assuming you add data-duration attribute
        const cardPrice = card.getAttribute("data-price"); // Assuming you add data-price attribute
        const cardLanguage = card.getAttribute("data-language"); // Assuming you add data-language attribute

        // Check if card matches selected filters
        const matches = (level === "all" || cardLevel === level) &&
                        (duration === "all" || cardDuration === duration) &&
                        (price === "all" || cardPrice === price) &&
                        (language === "all" || cardLanguage === language);

        card.style.display = matches ? "block" : "none";
    });
}
