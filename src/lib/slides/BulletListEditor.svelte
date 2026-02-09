<script>
	export let data = [];
	export let onChange;

	function addBullet() {
		onChange([...data, { name: 'bullet', content: '' }]);
	}

	function updateBullet(index, value) {
		const copy = [...data];
		copy[index] = { name: 'bullet', content: value };
		onChange(copy);
	}

	function removeBullet(index) {
		onChange(data.filter((_, i) => i !== index));
	}
</script>

<div style="margin-top:8px;">
	{#each data as item, index}
		<div style="display:flex;gap:8px;margin-bottom:6px;">
			<input
				type="text"
				value={item.content}
				on:input={(e) => updateBullet(index, e.target.value)}
				style="flex:1;"
			/>
			<button on:click={() => removeBullet(index)}>✕</button>
		</div>
	{/each}

	<button on:click={addBullet}>+ Add bullet</button>
</div>
