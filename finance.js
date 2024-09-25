// Function to filter finance offers based on search input
document.getElementById("search-bar").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const financeCards = document.querySelectorAll(".finance-offer-card");
    
    financeCards.forEach(card => {
        const offerName = card.querySelector("h3").textContent.toLowerCase();
        if (offerName.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Function to sort finance offers
document.getElementById("sort").addEventListener("change", function() {
    const sortValue = this.value;
    const financeCards = Array.from(document.querySelectorAll(".finance-offer-card"));
    
    financeCards.sort((a, b) => {
        const nameA = a.querySelector("h3").textContent;
        const nameB = b.querySelector("h3").textContent;

        if (sortValue === "name") {
            return nameA.localeCompare(nameB);
        } else if (sortValue === "amount") {
            // Replace with actual logic if you have an amount attribute
            return 0; // Placeholder
        } else if (sortValue === "deadline") {
            // Replace with actual logic if you have a deadline attribute
            return 0; // Placeholder
        }
    });

    const offersGrid = document.querySelector(".finance-offers-grid");
    offersGrid.innerHTML = ''; // Clear the current offers
    financeCards.forEach(card => offersGrid.appendChild(card)); // Append sorted offers
});

// Function to filter by type
document.getElementById("type").addEventListener("change", function() {
    const typeValue = this.value;
    const financeCards = document.querySelectorAll(".finance-offer-card");
    
    financeCards.forEach(card => {
        const offerType = card.getAttribute("data-type"); // Assuming you add data-type attribute to each card
        if (typeValue === "all" || offerType === typeValue) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
