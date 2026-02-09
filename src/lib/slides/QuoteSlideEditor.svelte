<script>
	export let data = [];
	export let onChange;

	function get(name) {
		const item = data.find(d => d.name === name);
		return item ? item.content : '';
	}

	function update(name, value) {
		const rest = data.filter(d => d.name !== name);
		onChange([...rest, { name, content: value }]);
	}
</script>

<div style="margin-top:8px;">
	<label>
		Quote<br />
		<textarea
			rows="3"
			style="width:100%;"
			on:input={(e) => update('quote', e.target.value)}
		>{get('quote')}</textarea>
	</label>

	<label style="display:block;margin-top:8px;">
		Author<br />
		<input
			type="text"
			value={get('author')}
			on:input={(e) => update('author', e.target.value)}
			style="width:100%;"
		/>
	</label>
</div>
