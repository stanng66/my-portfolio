// ====================
// Step 2: Adding a Dynamic Project Gallery
// ====================
// Task 2.2: JavaScript Interactivity
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => { // Event handling button function 

    button.addEventListener("click", function() {

        const details = this.nextElementSibling; // toggle project details

        if (details.style.display === "block") { // Show/Hide Details. Toggling visibility
            details.style.display = "none";
            this.textContent = "Show Details";
        } else {
            details.style.display = "block";
            this.textContent = "Hide Details";
        }

    });

});

// ====================
// Step 3: Adding Form Validation to Your Contact Section
// ====================
// Task 3.1: Plan the Form Structure


// Task 3.2: JavaScript for Validation


// ====================
// Step 4: Optional Bonus – Adding an API or External Library
// ====================