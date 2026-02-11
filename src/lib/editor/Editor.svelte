<script>
	import TopToolbar from "./TopToolbar.svelte";
	import SoundComponent from "./SoundComponent.svelte";
	import SlideList from "./SlideList.svelte";
	export let initialDeck = null;
	import { onMount } from "svelte";
	import { base } from '$app/paths';


	let deckKey = "";
	let deckName = "taleem-deck-new";
	let slides = [];
    let currentTime = 0;
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

	function buildPayload(storageKey) {
		return {
			version: "deck-v1",
			name: storageKey,
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

	const payload = {
		version: "deck-v1",
		name: deckName,
		background: {
			backgroundColor: "#111111",
			backgroundImage: null,
			backgroundImageOpacity: 0.3
		},
		deck: slides.map(normalizeSlide)
	};

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
		const storageKey = getStorageKey(deckName);
		const payload = buildPayload(storageKey);

		const blob = new Blob(
			[JSON.stringify(payload, null, 2)],
			{ type: "application/json" }
		);

		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${storageKey}.json`;
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
});


</script>

<TopToolbar
	bind:deckName
	on:new={resetEditor}
	on:save={saveDeck}
	on:launch={launchDeck}
	on:saveandlaunch={saveAndLaunch}
	on:download={downloadDeck}
	on:mocktimings={addMockTimings}
	on:addslide={(e) => addSlide(e.detail)}
/>

<SoundComponent onTimeUpdate={handleTimeUpdate} />

<SlideList
    {currentTime}
	{slides}
	onUpdate={updateSlide}
	onDelete={deleteSlide}
	onMove={moveSlide}
/>
