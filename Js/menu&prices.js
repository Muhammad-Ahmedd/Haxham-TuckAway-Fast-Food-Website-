
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
const currentPagenav = window.location.pathname.split("/").pop();

// Select all navbar links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through navbar links and add 'active' class to the current page link
navLinks.forEach(link => {
if (link.getAttribute("href") === currentPagenav) {  // Use currentPagenav here
    link.classList.add("active");
} else {
    link.classList.remove("active");
}
});



// Footer Section: Get the current page URL
const currentPagefoot = window.location.pathname.split("/").pop();

// Select all footer links
const footerLinks = document.querySelectorAll(".footer-link");

// Loop through footer links and add 'active' class to the current page link
footerLinks.forEach(link => {
    if (link.getAttribute("href") === currentPagefoot) {  // Use currentPagefoot here
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});