<script>
	import SlideToolbar from './SlideToolbar.svelte';
	import SlideTypeRouter from './SlideTypeRouter.svelte';
	import TimingEditor from './TimingEditor.svelte';

	export let slide;
	export let index;
	export let onUpdate;
	export let onDelete;
	export let onMove;
	export let currentTime=0;

	let folded = false;

	function updateData(data) {
		onUpdate(index, {
			...slide,
			data
		});
	}

	function updateTiming(start, end) {
		onUpdate(index, {
			...slide,
			start,
			end
		});
	}
</script>

<div style="border:1px solid #ccc;margin-bottom:12px;padding:12px;">
	<!-- Header -->
	<div style="display:flex;justify-content:space-between;align-items:center;">
		<strong>{index + 1}. {slide.type}</strong>
		<button on:click={() => (folded = !folded)}>
			{folded ? 'Unfold' : 'Fold'}
		</button>
	</div>

	{#if !folded}
		<!-- Timing -->
		<TimingEditor
			start={slide.start}
			end={slide.end}
			onChange={updateTiming}
			{currentTime}
		/>

		<!-- Slide-specific editor -->
		<SlideTypeRouter
		   {currentTime}
			type={slide.type}
			data={slide.data}
			onChange={updateData}
		/>
	{/if}

	<!-- Bottom toolbar -->
	<SlideToolbar
		{index}
		onDelete={onDelete}
		onMove={onMove}
	/>
</div>
