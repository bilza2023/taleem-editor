
<script>
		import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;

	function addBar() {
		onChange([
			...data,
			{ name: 'bar', label: '', value: 0, showAt: 0 }
		]);
	}

	function updateBar(index, field, value) {
		const copy = [...data];
		copy[index] = {
			...copy[index],
			[field]:
				field === 'value' || field === 'showAt'
					? Number(value) || 0
					: value
		};
		onChange(copy);
	}

	function removeBar(index) {
		onChange(data.filter((_, i) => i !== index));
	}
</script>

<div style="margin-top:8px;">
	{#each data as bar, index}
		<div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;">
			<input
				type="text"
				placeholder="Label"
				value={bar.label}
				on:input={(e) => updateBar(index, 'label', e.target.value)}
				style="flex:1;"
			/>

			<input
				type="number"
				placeholder="Value"
				value={bar.value}
				on:input={(e) => updateBar(index, 'value', e.target.value)}
				style="width:80px;"
			/>

			<ShowAtComponent
			value={bar.showAt ?? 0}
			currentTime={currentTime}
			onChange={(v) => updateBar(index, 'showAt', v)}
		/>
		

			<button on:click={() => removeBar(index)}>✕</button>
		</div>
	{/each}

	<button on:click={addBar}>+ Add bar</button>
</div>
