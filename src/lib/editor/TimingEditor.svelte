<script>
	// existing API
	export let start = 0;
	export let end = 0;
	export let onChange = () => {};

	// new prop (comes from Editor via prop-drilling)
	export let currentTime = 0;

	function updateStart(v) {
		start = v;
		onChange(start, end);
	}

	function updateEnd(v) {
		end = v;
		onChange(start, end);
	}

	function setStartNow() {
		updateStart(currentTime);
	}

	function setEndNow() {
		updateEnd(currentTime);
	}
</script>

<style>
	.timing {
		display: flex;
		gap: 16px;
		margin-bottom: 8px;
	}

	.field {
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

<div class="timing">
	<div class="field">
		<label>Start</label>
		<input
			type="number"
			step="0.01"
			value={start}
			on:input={(e) => updateStart(+e.target.value)}
		/>
		<button title="Set start to current time" on:click={setStartNow}>
			⏱️
		</button>
	</div>

	<div class="field">
		<label>End</label>
		<input
			type="number"
			step="0.01"
			value={end}
			on:input={(e) => updateEnd(+e.target.value)}
		/>
		<button title="Set end to current time" on:click={setEndNow}>
			⏱️
		</button>
	</div>
</div>
