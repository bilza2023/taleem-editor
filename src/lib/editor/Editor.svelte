<script>
	import TopToolbar from "./TopToolbar.svelte";
	import SoundComponent from "./SoundComponent.svelte";
	import SlideList from "./SlideList.svelte";
	export let initialDeck = null;
	import { onMount } from "svelte";
	import { base } from '$app/paths';

	let showBackgroundForm = false;

	let deckKey = "";
	let deckName = "taleem-deck-new";
	let slides = [];
    let currentTime = 0;
	let audio = "";


	let background = {
		backgroundColor: "#111111",
		backgroundImage: null,
		backgroundImageOpacity: 0.3
	};


	function handleTimeUpdate(t) {
		currentTime = t;
		console.log('EDITOR currentTime:', t);
	}

	function loadFromInitialDeck() {
	if (!initialDeck) return;

	deckName = initialDeck.name || "un-named";
	slides = Array.isArray(initialDeck.deck)
		? initialDeck.deck
		: [];
}


	/* ───────── EQ safety only ───────── */
	function normalizeSlide(slide) {
		if (slide.type !== "eq") return slide;

		return {
			...slide,
			data: slide.data.map(line => ({
				name: "line",
				type: line.type,
				content: line.content ?? "",
				spItems: Array.isArray(line.spItems) ? line.spItems : []
			}))
		};
	}

	/* ───────── helpers ───────── */

	function buildPayload() {
  return {
    version: "deck-v1",
    name: deckName,
    ...(audio && { audio }),
    deck: slides.map(normalizeSlide)
  };
}



	/* ───────── core actions ───────── */
	function resetEditor() {
		deckName = "taleem-deck-new";
		slides = [];
	}

	function addSlide(type) {
		slides = [
			...slides,
			{
				type,
				start: 0,
				end: 5,
				data: []
			}
		];
	}

	function saveDeck() {
	if (!deckKey) {
		alert("Missing deck key.");
		return;
	}

	const payload = buildPayload();
	payload.background = background;


	localStorage.setItem(deckKey, JSON.stringify(payload));

	alert("✅ Saved");
	}

	function launchDeck() {
		if (!deckKey) return;

		window.open(
			`${base}/player?deck=${encodeURIComponent(deckKey)}`,
			"_blank"
		);
	}


	function saveAndLaunch() {
		saveDeck();
		launchDeck();
	}

	function downloadDeck() {
		const payload = buildPayload();

		const blob = new Blob(
			[JSON.stringify(payload, null, 2)],
			{ type: "application/json" }
		);

		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${deckName}.json`;
		a.click();
		URL.revokeObjectURL(url);
	}

	function addMockTimings() {
		let t = 0;
		slides = slides.map(slide => {
			const start = t;
			const end = t + 5;
			t = end;
			return { ...slide, start, end };
		});
	}

	function updateSlide(index, updated) {
		slides[index] = updated;
		slides = slides;
	}

	function deleteSlide(index) {
		slides.splice(index, 1);
		slides = slides;
	}

	function moveSlide(from, to) {
		const item = slides.splice(from, 1)[0];
		slides.splice(to, 0, item);
		slides = slides;
	}

	let hydrated = false;

$: if (initialDeck && !hydrated) {
	loadFromInitialDeck();
	hydrated = true;
}
onMount(() => {
	const params = new URLSearchParams(window.location.search);
	deckKey = params.get("deck") || "";

	if (!deckKey) {
		console.warn("No deck key in URL");
		return;
	}

	const raw = localStorage.getItem(deckKey);
	if (!raw) {
		console.warn("Deck not found in localStorage");
		return;
	}

	const parsed = JSON.parse(raw);

	deckName = parsed.name || "taleem-deck-new";
	slides = Array.isArray(parsed.deck) ? parsed.deck : [];

	background = parsed.background || background;
	audio = parsed.audio || "";

});


</script>
<TopToolbar
	bind:deckName
	audio={audio}
	on:updateAudio={(e) => audio = e.detail}
	on:new={resetEditor}
	on:save={saveDeck}
	on:launch={launchDeck}
	on:saveandlaunch={saveAndLaunch}
	on:download={downloadDeck}
	on:mocktimings={addMockTimings}
	on:addslide={(e) => addSlide(e.detail)}
/>


<button
	style="margin: 8px 14px;"
	on:click={() => showBackgroundForm = !showBackgroundForm}
>
	🎨 Background
</button>

{#if showBackgroundForm}
	<div class="bg-form">
		<label>
			Color:
			<input
				type="color"
				bind:value={background.backgroundColor}
			/>
		</label>

		<label>
			Image URL:
			<input
				type="text"
				placeholder="image.jpg"
				bind:value={background.backgroundImage}
			/>
		</label>

		<label>
			Image Opacity:
			<input
				type="range"
				min="0"
				max="1"
				step="0.05"
				bind:value={background.backgroundImageOpacity}
			/>
		</label>
	</div>
{/if}


<SoundComponent onTimeUpdate={handleTimeUpdate} />

<SlideList
    {currentTime}
	{slides}
	onUpdate={updateSlide}
	onDelete={deleteSlide}
	onMove={moveSlide}
/>


<style>
	.bg-form {
	margin: 10px 14px;
	padding: 10px;
	background: #0f0f0f;
	border: 1px solid #222;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 400px;
}

.bg-form label {
	display: flex;
	flex-direction: column;
	font-size: 13px;
	gap: 4px;
}

.bg-form input[type="text"] {
	background: #111;
	color: #eee;
	border: 1px solid #333;
	padding: 6px;
	border-radius: 4px;
}

</style>