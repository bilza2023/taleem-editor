<script>
	export let data = [];
	export let onChange;

	function getBar() {
		return data[0] || { name: 'bar', label: '', value: 0 };
	}

	function update(field, value) {
		onChange([
			{
				name: 'bar',
				...getBar(),
				[field]: field === 'value' ? Number(value) : value
			}
		]);
	}
</script>

<div style="margin-top:8px;">
	<label>
		Label<br />
		<input
			type="text"
			value={getBar().label}
			on:input={(e) => update('label', e.target.value)}
			style="width:100%;"
		/>
	</label>

	<label style="display:block;margin-top:8px;">
		Value<br />
		<input
			type="number"
			value={getBar().value}
			on:input={(e) => update('value', e.target.value)}
			style="width:100px;"
		/>
	</label>
</div>
