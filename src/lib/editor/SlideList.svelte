<script>
	import SlideCard from './SlideCard.svelte';

	export let slides = [];
	export let onUpdate;
	export let currentTime=0;
	export let onDelete;
	export let onMove;
</script>

<div style="padding:16px;">
	{#each slides as slide, index}
		<SlideCard
		{currentTime}
			{slide}
			{index}
			onUpdate={onUpdate}
			onDelete={onDelete}
			onMove={onMove}
		/>
	{/each}
</div>
