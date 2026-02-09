<script>
	export let data = [];
	export let onChange;

	function get(name) {
		const item = data.find(d => d.name === name);
		return item ? item.content : '';
	}

	function update(name, value) {
		const rest = data.filter(d => d.name !== name);
		onChange([
			...rest,
			{ name, content: value }
		]);
	}
</script>

<div style="margin-top:8px;">
	<label>
		Left column<br />
		<textarea
			rows="4"
			style="width:100%;"
			on:input={(e) => update('left', e.target.value)}
		>{get('left')}</textarea>
	</label>

	<label style="display:block;margin-top:8px;">
		Right column<br />
		<textarea
			rows="4"
			style="width:100%;"
			on:input={(e) => update('right', e.target.value)}
		>{get('right')}</textarea>
	</label>
</div>
