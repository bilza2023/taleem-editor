<script>
	import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;

	function getItem(name) {
		return data.find(d => d.name === name) || { content: '', showAt: 0 };
	}

	function update(name, field, value) {
		const rest = data.filter(d => d.name !== name);
		const current = getItem(name);

		onChange([
			...rest,
			{
				name,
				content: field === 'content' ? value : current.content,
				showAt: field === 'showAt' ? Number(value) || 0 : current.showAt ?? 0
			}
		]);
	}
</script>

<div style="margin-top:8px;">
	<label>
		Left column<br />
		<textarea
			rows="4"
			style="width:100%;"
			on:input={(e) => update('left', 'content', e.target.value)}
		>{getItem('left').content}</textarea>
	</label>

	<label style="display:block;margin-top:4px;">
		showAt<br />
		<ShowAtComponent
	value={getItem('left').showAt ?? 0}
	currentTime={currentTime}
	onChange={(v) => update('left', 'showAt', v)}
/>

	</label>

	<label style="display:block;margin-top:8px;">
		Right column<br />
		<textarea
			rows="4"
			style="width:100%;"
			on:input={(e) => update('right', 'content', e.target.value)}
		>{getItem('right').content}</textarea>
	</label>

	<label style="display:block;margin-top:4px;">
		<ShowAtComponent
		value={getItem('right').showAt ?? 0}
		currentTime={currentTime}
		onChange={(v) => update('right', 'showAt', v)}
	/>
	
	</label>
</div>
