const letterBoxes = document.querySelectorAll("[data-letter-effect]");
    let activeLetterBoxIndex = 0;
    let lastActiveLetterBoxIndex = 0;
    let totalLetterBoxDelay = 0;

    const setLetterEffect = function () {
      const currentLetterBox = letterBoxes[lastActiveLetterBoxIndex];
      const nextLetterBox = letterBoxes[activeLetterBoxIndex];

      // Animate current text out
      const currentLetters = currentLetterBox.querySelectorAll('span');
      currentLetters.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.05}s`;
        span.classList.remove('in');
        span.classList.add('out');
      });

      // Delay to allow the out animation to complete before starting the in animation
      setTimeout(() => {
        currentLetterBox.classList.remove('active');

        // Animate next text in
        const nextLetters = nextLetterBox.querySelectorAll('span');
        nextLetters.forEach((span, index) => {
          span.style.animationDelay = `${index * 0.05}s`;
          span.classList.remove('out');
          span.classList.add('in');
        });

        nextLetterBox.classList.add('active');

        // Update indices for next transition
        lastActiveLetterBoxIndex = activeLetterBoxIndex;
        activeLetterBoxIndex = (activeLetterBoxIndex + 1) % letterBoxes.length;

        // Set the next letter effect
        setTimeout(setLetterEffect, totalLetterBoxDelay * 1000 + 3000);
      }, totalLetterBoxDelay * 1000);
    };

    const initializeLetterEffect = function () {
      letterBoxes.forEach((box, i) => {
        const letters = box.textContent.trim();
        box.textContent = "";

        let letterAnimationDelay = 0;

        for (let j = 0; j < letters.length; j++) {
          const span = document.createElement("span");
          span.style.animationDelay = `${letterAnimationDelay}s`;
          span.textContent = letters[j];

          if (letters[j] === " ") span.classList.add("space");

          box.appendChild(span);
          letterAnimationDelay += 0.05;
        }

        if (i === activeLetterBoxIndex) {
          totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
          box.classList.add("active");
        }
      });

      setTimeout(setLetterEffect, totalLetterBoxDelay * 1000 + 3000);
    };

    window.addEventListener("load", initializeLetterEffect);

    document.addEventListener("DOMContentLoaded", function() {
      const aboutSection = document.querySelector(".section.about");
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutSection.classList.add("active");
          } else {
            aboutSection.classList.remove("active");
          }
        });
      }, {
        threshold: 0.1
      });
    
      observer.observe(aboutSection);
    });