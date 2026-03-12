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
// Task 3.2: JavaScript for Validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    if (!isValid) { // stop form submission if invalid
        event.preventDefault();
    }
});

// ====================
// Step 4: Optional Bonus – Adding an API or External Library
// ====================