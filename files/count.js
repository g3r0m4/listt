document.addEventListener("DOMContentLoaded", function() {
  fetch("files/data.json")
    .then(response => response.json())
    .then(data => {
      const categories = ["anime", "movie", "game", "channel", "tv"];

      categories.forEach(category => {
        const count = data[category].length;
        document.querySelector(`.${category}-count`).textContent = count;
      });
    })
    .catch(error => console.error("Error fetching data:", error));
});

let digits = Math.floor(100000 + Math.random() * 900000);
console.log(digits)