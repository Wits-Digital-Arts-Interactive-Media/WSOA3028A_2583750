document.addEventListener("DOMContentLoaded", () => {
    const funCat = document.getElementById("funCat");
    let angle = 0;
    setInterval(() => {
      angle += 10;
      funCat.style.transform = `rotate(${angle}deg)`;
    }, 100); // Change the rotation speed as needed
  });