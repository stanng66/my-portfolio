// ====================
// Step 2: Adding a Dynamic Project Gallery
// ====================
// Task 2.2: JavaScript Interactivity
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => { // Event handling button function 

    button.addEventListener("click", function() {

        const details = this.nextElementSibling; // toggle project details

       if (details.style.maxHeight) { // Show/Hide Details. Toggling visibility
           details.style.maxHeight = null;  // improvements made for smoother transition when showing/hiding details
           this.textContent = "Show Details";          
        } else {
            details.style.maxHeight = details.scrollHeight + "px";
            this.textContent = "Hide Details";
        }
    });
});

// ====================
// Step 3: Adding Form Validation to Your Contact Section
// ====================
// Task 3.2: JavaScript for Validation
const form = document.getElementById("contact-form");
const notification = document.getElementById("form-notification");

if (form) {
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
            nameError.textContent = "Please enter your name";
            isValid = false;
        }

        if (email === "" || !email.includes("@")) {
            emailError.textContent = "Please enter a valid email address";
            isValid = false;
        }

        if (message === "") {
            messageError.textContent = "Please enter a message";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); 
        } else {
            event.preventDefault(); 

            if (notification) {
                notification.style.display = "block";

            setTimeout(function() {
                notification.style.display = "none";
            }, 4000);
        }
        form.reset();
        }
    });
}

// ====================
// Step 4: Optional Bonus – External Library
// ====================
// Typed.js - This library allows you to create a typing animation effect, which could be used in an introductory section on your portfolio.
const typedElement = document.getElementById("typed-text");

if (typedElement && typeof Typed !== "undefined") {
    new Typed("#typed-text", {
    strings: ["A Web Development Student", "Learning HTML, CSS, and JavaScript", "Building My Portfolio"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});
}

// Chart.js - This library allows you to add charts to your site, which can be helpful for displaying skills or project statistics visually.
const ctx = document.getElementById("skillsChart");

if (ctx && typeof Chart !== "undefined") {
new Chart(ctx, {
    type: "bar", // "bar" chart to show skill levels in a bar format
    // type: "radar", // "radar" chart to show skill levels in a web like format
    data: {
        labels: ["JavaScript", "GitHub", "CSS", "HTML"],
        datasets: [{
            label: "Skill Level (%)",
            data: [60, 75, 80, 90],
            borderWidth: 1, 
            backgroundColor: "#DE83CB",
            borderRadius: 5
        }]
    },
    options: {
        scales: {
            y: { // y when using type: "bar", use r when using type: "radar"
                beginAtZero: true,
                max: 100
            }
        }
    }
});
}

// ====================
// Chapter 4 - Continuous Improvement
// ====================
// Step 2: Add new features - dark mode toggle
const toggle = document.getElementById("themeToggle");

if (toggle) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
    }

    toggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

document.getElementById("secret-hitbox").addEventListener("click", () => { // Chapter 4, Step 3: Adding new features - Secret Hitbox
    window.open("surprise.html", "_blank"); // Redirect to suprise.html when the secret hitbox is clicked
});

// ====================
// Extra carricular
// ====================
// Back to Top Button Functionality
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 20) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}