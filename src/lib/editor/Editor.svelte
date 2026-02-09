<script>
	import TopToolbar from "./TopToolbar.svelte";
	import SlideList from "./SlideList.svelte";
  
	let deckName = "taleem-deck-new";
	let slides = [];
  
	function normalizeSlide(slide) {
	if (slide.type !== 'eq') return slide;

	return {
		...slide,
		data: slide.data.map(line => ({
			name: 'line',
			type: line.type,
			content: line.content ?? '',
			spItems: Array.isArray(line.spItems) ? line.spItems : []
		}))
	};
}

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
  
	function launchDeck() {
	  if (!deckName) return;
  
	  const payload = {
		version: "deck-v1",
		name: deckName,
		deck: slides.map(normalizeSlide)
	  };
  
	  localStorage.setItem(
		`taleem:deck:${deckName}`,
		JSON.stringify(payload)
	  );
  
	  window.open(
		`/player?source=local&deck=${encodeURIComponent(deckName)}`,
		"_blank"
	  );
	}
  
	function downloadDeck() {
	  const payload = {
		version: "deck-v1",
		name: deckName,
		deck: slides.map(normalizeSlide)
	  };
  
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
  </script>
  
  <TopToolbar
	bind:deckName
	on:new={resetEditor}
	on:launch={launchDeck}
	on:download={downloadDeck}
	on:mocktimings={addMockTimings}
	on:addslide={(e) => addSlide(e.detail)}
  />
  
  <SlideList
	{slides}
	onUpdate={updateSlide}
	onDelete={deleteSlide}
	onMove={moveSlide}
  />
  