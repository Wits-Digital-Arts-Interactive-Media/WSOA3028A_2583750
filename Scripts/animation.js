document.addEventListener("DOMContentLoaded", () => {
    const funCat = document.getElementById("funCat");           // gets id
    let angle = 0;
    setInterval(() => {
      angle += 10;
      funCat.style.transform = `rotate(${angle}deg)`;          //rotates transform according to angle
    }, 100); 
  });