let slideIndex = 0;

function showSlide(index) {                                                     //displays slide according to based on provided index
    const slides = document.querySelectorAll('.slider-container figure');       //selects elements with the class name
    slides.forEach(slide => slide.style.display = 'none');                      //hides slides by setting display to none

    const captions = document.querySelectorAll('.slider-container figcaption');
    captions.forEach(caption => caption.style.display = 'none'); 

    const paragraphs = document.querySelectorAll('.slider-container p');
    paragraphs.forEach(paragraph => paragraph.style.display = 'none'); 

    if (index >= slides.length) {                                           // if index is >=total number of slides, slideIndex reset to 0, to loop back to first slide
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = 'block';                             //displays slide by setting display to block
    captions[slideIndex].style.display = 'block'; 
    paragraphs[slideIndex].style.display = 'block'; 
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {                        //waits for dom content to be fully loaded
    showSlide(slideIndex); 
});
