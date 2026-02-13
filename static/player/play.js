import { Timer, renderLoop } from
  "https://unpkg.com/taleem-pam@latest/dist/taleem-pam.esm.js";

import {
  createTaleemPlayer,
  resolveBackground,
  resolveAssetPaths
} from
  "https://unpkg.com/taleem-player@latest/dist/taleem-player.esm.js";

import { getDeckEndTime } from "./getDeckEndTime.js";
import { applyStaticPlayerDefaults } from "./applyStaticPlayerDefaults.js";

// ----------------------------------
// read deck name from URL
// ----------------------------------
const params = new URLSearchParams(window.location.search);
const deckName = params.get("deck");

if (!deckName) {
  document.body.innerHTML = "<h2>No deck specified</h2>";
  throw new Error("Missing deck");
}

// ----------------------------------
// load deck from localStorage ONLY
// ----------------------------------
const raw = localStorage.getItem(deckName);

if (!raw) {
  document.body.innerHTML = "<h2>Deck not found in localStorage</h2>";
  throw new Error("Deck not found in localStorage");
}

let deck;
try {
  deck = JSON.parse(raw);
// eslint-disable-next-line no-unused-vars
} catch (e) {
  document.body.innerHTML = "<h2>Invalid deck JSON</h2>";
  throw new Error("Invalid deck JSON");
}

// ----------------------------------
// resolve user content base
// ----------------------------------
let contentBase = localStorage.getItem("taleem-user-content-url") || "";
contentBase = contentBase.trim().replace(/\/$/, "");

let assetPrefix = "";

// ----------------------------------
// MODE SWITCH
// ----------------------------------
if (!contentBase) {
  // Demo mode (no user hosting)
  deck = applyStaticPlayerDefaults(deck);
  assetPrefix = "/images/";
} else {
  // Hosted mode (user controls images)
  assetPrefix = contentBase + "/images/";
}

// ----------------------------------
// resolve assets
// ----------------------------------
resolveAssetPaths(deck, assetPrefix);
resolveBackground(deck, assetPrefix);


// ----------------------------------
// create player
// ----------------------------------
const player = createTaleemPlayer({
  mount: "#app",
  deck
});

// ----------------------------------
// duration (authoritative)
// ----------------------------------
const duration = getDeckEndTime(deck);

// ----------------------------------
// PAM state + timer
// ----------------------------------
const state = {
  currentTime: 0,
  duration
};

const timer = new Timer();

// ----------------------------------
// UI refs
// ----------------------------------
const timeEl   = document.getElementById("time");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const scrubEl = document.getElementById("scrub");

scrubEl.max = duration;

// ----------------------------------
// draw function (pure render)
// ----------------------------------
function draw(state) {
  const t = state.currentTime;

  player.renderAt(t);

  // post-render math
  if (window.useMath) {
    window.useMath(document.querySelector("#app"));
  }

  timeEl.textContent = `${t.toFixed(1)}s`;
  scrubEl.value = t;
}

renderLoop.setDraw(draw);

// ----------------------------------
// start render loop
// ----------------------------------
renderLoop.start(() => {
  const t = timer.now();

  if (t >= duration) {
    timer.pause();
    state.currentTime = duration;
    renderLoop.draw(state);
    return;
  }

  state.currentTime = t;
  renderLoop.draw(state);
});

// ----------------------------------
// controls
// ----------------------------------
playBtn.onclick = () => {
  timer.play();
};

pauseBtn.onclick = () => {
  timer.pause();
};

stopBtn.onclick = () => {
  timer.pause();
  timer.seek(0);
};

scrubEl.oninput = e => {
  timer.seek(+e.target.value);
  timer.pause();
};
