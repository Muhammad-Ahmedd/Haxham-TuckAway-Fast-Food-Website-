//loader

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


// Reviews Array
const reviews = [
    {
        name: "Amelia Clarke",
        date: "03/12/2024",
        text: "Amazing fish and chips! Best in town. Definitely coming back.",
        rating: "★★★★★",
        avatar: "A"
    },
    {
        name: "Ethan Harris",
        date: "28/11/2024",
        text: "Quick service and delicious burgers! My kids loved it.",
        rating: "★★★★☆",
        avatar: "E"
    },
    {
        name: "Sophie Turner",
        date: "22/11/2024",
        text: "A perfect spot for a casual meal. The fries are a must-try!",
        rating: "★★★★★",
        avatar: "S"
    },
    {
        name: "Liam Walker",
        date: "15/11/2024",
        text: "Affordable, tasty, and clean. Hexham Tuckaway never disappoints.",
        rating: "★★★★★",
        avatar: "L"
    },
    {
        name: "Olivia Carter",
        date: "10/11/2024",
        text: "The wraps are fantastic! Great spot for a quick bite.",
        rating: "★★★★☆",
        avatar: "O"
    }
];

// Review Index
let currentReviewIndex = 0;

// DOM Elements
const reviewCard = document.getElementById("review-card");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

// Function to Update Review Card
function updateReviewCard() {
    const review = reviews[currentReviewIndex];
    reviewCard.innerHTML = `
        <div class="review-user">
            <div class="avatar">${review.avatar}</div>
            <div class="review-meta">
                <h3>${review.name}</h3>
                <p>${review.date}</p>
            </div>
        </div>
        <div class="review-text">
            <p>"${review.text}"</p>
        </div>
        <div class="review-stars">
            ${review.rating}
        </div>
    `;
}

// Event Listeners
prevArrow.addEventListener("click", () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateReviewCard();
});

nextArrow.addEventListener("click", () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReviewCard();
});

// Initialize First Review
updateReviewCard();

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

