
const blogLinks = [
    "/WSOA3028A_2583750/Blogs/blog1.html",
    "/WSOA3028A_2583750/Blogs/blog2.html",
    "/WSOA3028A_2583750/Blogs/blog3.html",
    "/WSOA3028A_2583750/Blogs/blog4.html",
    "/WSOA3028A_2583750/Blogs/blog5.html",
    "/WSOA3028A_2583750/Blogs/blog6.html",
    "/WSOA3028A_2583750/Blogs/blog7.html",
    "/WSOA3028A_2583750/Blogs/blog8.html",
  
];

const prevButton = document.getElementById("prevButton");             //gets buttons by id
const nextButton = document.getElementById("nextButton");

let currentIndex = blogLinks.indexOf(window.location.pathname);       //initialises current index to index of current blog post in the array. window.location.pathname gets current url path and finds index in blog links. Allows script to know which blog is being viewed
                                                                    

prevButton.addEventListener("click", () => {                        //sets up event listener for previous button. When button is clicks, function inside is executed
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
