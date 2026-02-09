<script>
	export let index;
	export let onDelete;
	export let onMove;
</script>

<div style="margin-top:8px;display:flex;gap:8px;">
	<button on:click={() => onMove(index, index - 1)}>↑</button>
	<button on:click={() => onMove(index, index + 1)}>↓</button>
	<button on:click={() => onDelete(index)}>Delete</button>
</div>
