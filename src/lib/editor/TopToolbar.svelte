<script>
	export let onAddSlide;

	const slideTypes = [
		'titleAndSubtitle',
		'titleAndPara',
		'bulletList',
		'twoColumnText',
		'imageSlide',
		'fillImage',
		'imageWithTitle',
		'imageWithCaption',
		'imageLeftBulletsRight',
		'imageRightBulletsLeft',
		'table',
		'barChart',
		'progressbar',
		'quoteSlide',
		'keyIdeasSlide',
		'eq'
	];

	function handleAdd(e) {
		const type = e.target.value;
		if (type) {
			onAddSlide(type);
			e.target.value = '';
		}
	}
</script>

<div style="padding:12px;border-bottom:1px solid #ddd;">
	<select on:change={handleAdd}>
		<option value="">Add slide…</option>
		{#each slideTypes as type}
			<option value={type}>{type}</option>
		{/each}
	</select>
</div>
