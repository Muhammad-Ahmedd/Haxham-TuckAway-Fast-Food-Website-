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

