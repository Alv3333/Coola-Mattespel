const gameFiles = [
  // LÄGG ALLA FILNAMN HÄR (utan "cl")
  "acegangstertaxi.html",
  "pinkbike.html",
  "funnymadracing.html",
  "parkingfury2.html",
  "gunmayhemredux.html",
  "raze.html",
  "volleyrandom.html",
  "warfare1944.html"
  // fortsätt listan – ALLA från ugsfiles.zip
];

const container = document.getElementById("games");

gameFiles.forEach(file => {
  const name = file.replace(".html", "");
  container.innerHTML += `
    <div class="game">
      <div class="thumb">${name}</div>
      <h3>${name}</h3>
      <button onclick="openGame('${file}')">Play / Fullscreen</button>
    </div>
  `;
});

function openGame(file) {
  const overlay = document.getElementById("overlay");
  const frame = document.getElementById("gameFrame");
  frame.src = "games/" + file;
  overlay.style.display = "block";
  frame.requestFullscreen?.();
}

function closeGame() {
  document.exitFullscreen?.();
  const overlay = document.getElementById("overlay");
  const frame = document.getElementById("gameFrame");
  frame.src = "";
  overlay.style.display = "none";
}

function searchGames() {
  const q = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".game").forEach(g => {
    g.style.display = g.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
}
