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
import { Howl } from "https://cdn.skypack.dev/howler@2.2.4";


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
// MODE SWITCH (images)
// ----------------------------------
if (!contentBase) {
  deck = applyStaticPlayerDefaults(deck);
  assetPrefix = "/images/";
} else {
  assetPrefix = contentBase + "/images/";
}

// ----------------------------------
// resolve assets (images/bg)
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
// duration (authoritative for slides)
// ----------------------------------
const duration = getDeckEndTime(deck);

// ----------------------------------
// CLOCK SELECTION
// ----------------------------------
let clock;
let sound = null;

// hosted audio condition
if (contentBase && deck.audio) {

  const audioUrl = `${contentBase}/sounds/${deck.audio}`;

  sound = new Howl({
    src: [audioUrl],
    html5: true,
    preload: true
  });

  clock = {
    play() {
      sound.play();
    },
    pause() {
      sound.pause();
    },
    seek(t) {
      sound.seek(t);
    },
    now() {
      return sound.seek() || 0;
    }
  };

  // if audio ends → stop presentation
  sound.on("end", () => {
    renderLoop.stop();
  });

} else {
  // fallback synthetic timer
  const timer = new Timer();
  clock = timer;
}

// ----------------------------------
// PAM state
// ----------------------------------
const state = {
  currentTime: 0,
  duration
};

// ----------------------------------
// UI refs
// ----------------------------------
const timeEl   = document.getElementById("time");
const playBtn  = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn  = document.getElementById("stop-btn");
const scrubEl  = document.getElementById("scrub");

scrubEl.max = duration;

// ----------------------------------
// draw function
// ----------------------------------
function draw(state) {
  const t = state.currentTime;

  player.renderAt(t);

  if (window.useMath) {
    window.useMath(document.querySelector("#app"));
  }

  timeEl.textContent = `${t.toFixed(1)}s`;
  scrubEl.value = t;
}

renderLoop.setDraw(draw);

// ----------------------------------
// render loop
// ----------------------------------
renderLoop.start(() => {

  const t = clock.now();

  // slide clamping logic
  if (t >= duration) {
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
  clock.play();
};

pauseBtn.onclick = () => {
  clock.pause();
};

stopBtn.onclick = () => {
  clock.pause();
  clock.seek(0);
};

scrubEl.oninput = e => {
  const t = +e.target.value;
  clock.seek(t);
  clock.pause();
};
