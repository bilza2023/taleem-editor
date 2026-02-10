<script>
	import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;

	function addBullet() {
		onChange([...data, { name: 'bullet', content: '', showAt: 0 }]);
	}

	function updateBullet(index, field, value) {
		const copy = [...data];
		copy[index] = {
			...copy[index],
			[field]: field === 'showAt' ? Number(value) || 0 : value
		};
		onChange(copy);
	}

	function removeBullet(index) {
		onChange(data.filter((_, i) => i !== index));
	}
</script>

<div style="margin-top:8px;">
	{#each data as item, index}
		<div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;">
			<input
				type="text"
				value={item.content}
				on:input={(e) => updateBullet(index, 'content', e.target.value)}
				style="flex:1;"
			/>

				<ShowAtComponent
					value={item.showAt ?? 0}
					currentTime={currentTime}
					onChange={(v) => updateBullet(index, 'showAt', v)}
				/>


			<button on:click={() => removeBullet(index)}>✕</button>
		</div>
	{/each}

	<button on:click={addBullet}>+ Add bullet</button>
</div>
