// Search bar filter functionality
const categorySearch = document.getElementById('categorySearch');
const categoryCards = document.querySelectorAll('.category-card');

categorySearch.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  
  categoryCards.forEach(card => {
    const categoryName = card.querySelector('h3').textContent.toLowerCase();
    if (categoryName.includes(searchTerm)) {
      card.style.display = 'block'; // Show card if it matches search
    } else {
      card.style.display = 'none'; // Hide card if it doesn't match
    }
  });
});
