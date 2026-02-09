<script>
	export let items = [];
	export let onChange;

	function addItem(type) {
		onChange([
			...items,
			{ type, content: '' }
		]);
	}

	function updateItem(index, value) {
		const next = items.slice();
		next[index] = { ...next[index], content: value };
		onChange(next);
	}

	function deleteItem(index) {
		const next = items.slice();
		next.splice(index, 1);
		onChange(next);
	}
</script>

<div class="sp-editor">
	<div class="sp-toolbar">
		<button on:click={() => addItem('spText')}>➕ Text</button>
		<button on:click={() => addItem('spMath')}>➕ Math</button>
		<button on:click={() => addItem('spImage')}>➕ Image</button>
	</div>

	{#each items as item, i}
		<div class="sp-item">
			<input
				bind:value={item.content}
				on:input={(e) => updateItem(i, e.target.value)}
				placeholder={item.type}
			/>
			<button on:click={() => deleteItem(i)}>✖</button>
		</div>
	{/each}
</div>

<style>
	.sp-editor {
		border-top: 1px dashed #333;
		padding-top: 8px;
		margin-top: 8px;
	}

	.sp-item {
		display: flex;
		gap: 6px;
		margin-bottom: 6px;
	}
</style>
