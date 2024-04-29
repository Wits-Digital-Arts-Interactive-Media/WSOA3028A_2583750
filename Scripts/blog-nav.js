
const blogLinks = [
    "/WSOA3028A_2583750/Blogs/blog1.html",
    "/WSOA3028A_2583750/Blogs/blog2.html",
    "/WSOA3028A_2583750/Blogs/blog3.html",
    "/WSOA3028A_2583750/Blogs/blog4.html",
    "/WSOA3028A_2583750/Blogs/blog5.html",
    "/WSOA3028A_2583750/Blogs/blog6.html",
    "/WSOA3028A_2583750/Blogs/blog7.html",
    "/WSOA3028A_2583750/Blogs/blog8.html",
    // Add more links for other blog posts as needed
];

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = blogLinks.indexOf(window.location.pathname); // Get the index of the current blog post in the array

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        window.location.href = blogLinks[currentIndex];
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < blogLinks.length - 1) {
        currentIndex++;
        window.location.href = blogLinks[currentIndex];
    }
});
