<script>
	export let data = [];
	export let onChange;

	function updateCell(row, col, value) {
		const copy = data.map(r => [...r]);
		copy[row][col] = value;
		onChange(copy);
	}

	function addRow() {
		if (data.length === 0) {
			onChange([['']]);
		} else {
			onChange([...data, Array(data[0].length).fill('')]);
		}
	}

	function addColumn() {
		const copy = data.map(row => [...row, '']);
		onChange(copy);
	}

	function removeRow(index) {
		onChange(data.filter((_, i) => i !== index));
	}

	function removeColumn(index) {
		onChange(data.map(row => row.filter((_, i) => i !== index)));
	}
</script>

<div style="margin-top:8px;">
	{#if data.length === 0}
		<button on:click={addRow}>+ Add table</button>
	{:else}
		<table border="1" cellpadding="4" cellspacing="0">
			{#each data as row, r}
				<!-- svelte-ignore node_invalid_placement_ssr -->
				<tr>
					{#each row as cell, c}
						<td>
							<input
								type="text"
								value={cell}
								on:input={(e) => updateCell(r, c, e.target.value)}
							/>
						</td>
					{/each}
					<td>
						<button on:click={() => removeRow(r)}>✕</button>
					</td>
				</tr>
			{/each}
		</table>

		<div style="margin-top:8px;display:flex;gap:8px;">
			<button on:click={addRow}>+ Row</button>
			<button on:click={addColumn}>+ Column</button>
			<button on:click={() => removeColumn(data[0].length - 1)}>
				− Last column
			</button>
		</div>
	{/if}
</div>
