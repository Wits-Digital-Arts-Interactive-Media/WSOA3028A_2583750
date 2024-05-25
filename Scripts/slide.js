document.addEventListener('DOMContentLoaded', () => {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    let countItem = items.length;
    let itemActive = 0;

    next.addEventListener('click', () => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    });

    prev.addEventListener('click', () => {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });

    function showSlider() {
        document.querySelector('.slider .list .item.active').classList.remove('active');
        document.querySelector('.thumbnail .item.active').classList.remove('active');

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
    }

    showSlider();
});

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const cardContainer = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');
    
    let currentIndex = 0;
    const maxIndex = cards.length - 3; // Adjust according to the number of cards visible at once

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; // Loop to the last card if at the first card
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop to the first card if at the last card
        }
        updateCarousel();
    });

    function updateCarousel() {
        const transformValue = -currentIndex * (cards[0].offsetWidth + 20); // Account for card width and margin
        cardContainer.style.transform = `translateX(${transformValue}px)`;
    }

    // Initialize carousel
    updateCarousel();
});




