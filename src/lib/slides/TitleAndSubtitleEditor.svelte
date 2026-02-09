<script>
	export let data = [];
	export let onChange;

	function getValue(name) {
		const item = data.find(d => d.name === name);
		return item ? item.content : '';
	}

	function update(name, value) {
		const filtered = data.filter(d => d.name !== name);
		onChange([
			...filtered,
			{ name, content: value }
		]);
	}
</script>

<div style="margin-top:8px;">
	<div>
		<label>
			Title<br />
			<input
				type="text"
				value={getValue('title')}
				on:input={(e) => update('title', e.target.value)}
				style="width:100%;"
			/>
		</label>
	</div>

	<div style="margin-top:8px;">
		<label>
			Subtitle<br />
			<input
				type="text"
				value={getValue('subtitle')}
				on:input={(e) => update('subtitle', e.target.value)}
				style="width:100%;"
			/>
		</label>
	</div>
</div>
