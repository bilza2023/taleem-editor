
<script>
	// current showAt value
	export let value = 0;

	// injected from Editor (prop-drilled)
	export let currentTime = 0;

	// notify parent when value changes
	export let onChange = () => {};
</script>

<style>
	.wrap {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	input {
		width: 70px;
	}

	button {
		font-size: 12px;
		padding: 2px 4px;
		cursor: pointer;
	}
</style>

<div class="wrap">
	<input
		type="number"
		step="0.01"
		value={value}
		on:input={(e) => onChange(Number(e.target.value) || 0)}
	/>

	<button
		title="Set showAt to current time"
		on:click={() => onChange(currentTime)}
	>
		⏱️
	</button>
</div>
