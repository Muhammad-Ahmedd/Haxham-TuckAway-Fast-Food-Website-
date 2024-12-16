
window.addEventListener("load", function () {
    // Wait for 5 seconds, then fade out the loader and show content
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("main-content");
        
        loader.style.animation = "fadeOut 1s forwards";
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 1000); // Matches fadeOut duration
    }, 2000);
});



 // Get the current page URL
 const currentPage = window.location.pathname.split("/").pop();

// Select all navbar links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through links and add 'active' class to the current page link
navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

// Get the current page URL
const currentPagefoot = window.location.pathname.split("/").pop();

// Select all footer links
const footerLinks = document.querySelectorAll(".footer-link");

// Loop through links and add 'active' class to the current page link
footerLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});



    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");
        const responseMessage = document.getElementById("responseMessage");

        // Add a submit event listener to the form
        form.addEventListener("submit", function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Set the success message and style
            responseMessage.textContent = "Your message has been sent!";
            responseMessage.style.color = "green";

            // Optional: Clear the form fields
            form.reset();
        });
    });


  