<script>
	import TopToolbar from "./TopToolbar.svelte";
	import SoundComponent from "./SoundComponent.svelte";
	import SlideList from "./SlideList.svelte";
	export let initialDeck = null;
	import { onMount } from "svelte";

	let deckName = "taleem-deck-new";
	let slides = [];
    let currentTime = 0;
	function handleTimeUpdate(t) {
		currentTime = t;
		console.log('EDITOR currentTime:', t);
	}

	function loadFromInitialDeck() {
	if (!initialDeck) return;

	deckName = initialDeck.name || "taleem-deck-new";
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
	function getStorageKey(name) {
		if (!name) return null;
		return name.startsWith("taleem-deck-")
			? name
			: `taleem-deck-${name}`;
	}

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
		if (!deckName) return;

		const storageKey = getStorageKey(deckName);
		const payload = buildPayload(storageKey);

		localStorage.setItem(storageKey, JSON.stringify(payload));

	alert(`✅ Saved: ${storageKey}`);
	}

	function launchDeck() {
		if (!deckName) return;

		const storageKey = getStorageKey(deckName);

		window.open(
			`/player?source=local&deck=${encodeURIComponent(storageKey)}`,
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
