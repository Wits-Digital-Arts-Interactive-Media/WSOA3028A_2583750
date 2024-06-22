document.addEventListener('DOMContentLoaded', function() {
    const catFactBtn = document.getElementById('get-catfact-btn');
    const catFactContainer = document.getElementById('catfact-container');
  
    catFactBtn.addEventListener('click', fetchCatFact);
  
    async function fetchCatFact() {
      try {
        const response = await fetch('https://catfact.ninja/fact?max_length=140');
  
        const data = await response.json();
        displayCatFact(data.fact);
      } catch (error) {
        console.error('Error fetching cat fact:', error);
        displayCatFact('Cant display fact');
      }
    }
  
    function displayCatFact(fact) {
      catFactContainer.innerText = fact;
    }
  });
  