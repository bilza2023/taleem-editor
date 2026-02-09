<script>
	export let start = 0;
	export let end = 5;
	export let onChange;

	function updateStart(e) {
		onChange(Number(e.target.value), end);
	}

	function updateEnd(e) {
		onChange(start, Number(e.target.value));
	}
</script>

<div style="margin:8px 0;">
	<label>
		Start:
		<input type="number" value={start} on:input={updateStart} />
	</label>

	<label style="margin-left:12px;">
		End:
		<input type="number" value={end} on:input={updateEnd} />
	</label>
</div>
