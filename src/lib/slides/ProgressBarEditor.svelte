<script>
		import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;

	function getBar() {
		return data[0] || { name: 'bar', label: '', value: 0, showAt: 0 };
	}

	function update(field, value) {
		const current = getBar();
		onChange([
			{
				name: 'bar',
				label: field === 'label' ? value : current.label,
				value: field === 'value' ? Number(value) || 0 : current.value,
				showAt: field === 'showAt' ? Number(value) || 0 : current.showAt ?? 0
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

	<label style="display:block;margin-top:8px;">
		showAt<br />
		<input
			type="number"
			value={getBar().showAt ?? 0}
			on:input={(e) => update('showAt', e.target.value)}
			style="width:100px;"
		/>
	</label>
</div>
