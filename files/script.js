document.addEventListener("DOMContentLoaded", function() {
  const sections = [
    { id: "anime", dataKey: "anime", className: "anime" },
    { id: "movie", dataKey: "movie", className: "movie" },
    { id: "game", dataKey: "game", className: "game" },
    { id: "channel", dataKey: "channel", className: "channel" },
    { id: "tv", dataKey: "tv", className: "tv" }
  ];
  sections.forEach(section => {
    const { id, dataKey, className } = section;
    fetch("files/data.json")
      .then(response => response.json())
      .then(data => {
        const sectionData = data[dataKey];
        const sectionEl = document.getElementById(id);
        let content = "";
        sectionData.forEach(item => {
          const year = new Date(item.release).getFullYear();
          content += `
            <a class="${className}" href="${item.url}" target="_blank">
              <img class="cover" src="${item.cover}" alt="${item.title}">
              <p class="title">${item.title}</p>
              <p class="release">${year}</p>
            </a>`;
        });
        sectionEl.innerHTML += content;
        const stuff = document.querySelectorAll('.this > a');
        stuff.forEach((thing, index) => {
          thing.style.animationDelay = `${index * 0.2}s`;
        });
      });
  });
});