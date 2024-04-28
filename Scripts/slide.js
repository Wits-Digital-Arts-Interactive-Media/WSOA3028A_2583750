let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-container figure');
    slides.forEach(slide => slide.style.display = 'none'); // Hide all slides

    const captions = document.querySelectorAll('.slider-container figcaption');
    captions.forEach(caption => caption.style.display = 'none'); // Hide all captions

    const paragraphs = document.querySelectorAll('.slider-container p');
    paragraphs.forEach(paragraph => paragraph.style.display = 'none'); // Hide all paragraphs

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = 'block'; // Show the current slide
    captions[slideIndex].style.display = 'block'; // Show the current caption
    paragraphs[slideIndex].style.display = 'block'; // Show the current paragraph
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex); // Show the first slide when the page loads
});
