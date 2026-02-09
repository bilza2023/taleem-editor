<script>
	import TopToolbar from './TopToolbar.svelte';
	import SlideList from './SlideList.svelte';

	let slides = [];

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

	function updateSlide(index, updated) {
		slides = slides.map((s, i) => (i === index ? updated : s));
	}

	function deleteSlide(index) {
		slides = slides.filter((_, i) => i !== index);
	}

	function moveSlide(from, to) {
		if (to < 0 || to >= slides.length) return;
		const copy = [...slides];
		const [item] = copy.splice(from, 1);
		copy.splice(to, 0, item);
		slides = copy;
	}
</script>

<TopToolbar onAddSlide={addSlide} />

<SlideList
	{slides}
	onUpdate={updateSlide}
	onDelete={deleteSlide}
	onMove={moveSlide}
/>
