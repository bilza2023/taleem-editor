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
		Title<br />
		<input
			type="text"
			value={getItem('title').content}
			on:input={(e) => update('title', 'content', e.target.value)}
			style="width:100%;"
		/>
	</label>

	<label style="display:block;margin-top:4px;">
		showAt<br />
		<input
			type="number"
			value={getItem('title').showAt ?? 0}
			on:input={(e) => update('title', 'showAt', e.target.value)}
			style="width:100%;"
		/>
	</label>

	<label style="display:block;margin-top:8px;">
		Paragraph<br />
		<textarea
			rows="4"
			style="width:100%;"
			on:input={(e) => update('para', 'content', e.target.value)}
		>{getItem('para').content}</textarea>
	</label>

	<label style="display:block;margin-top:4px;">
		showAt<br />
		<input
			type="number"
			value={getItem('para').showAt ?? 0}
			on:input={(e) => update('para', 'showAt', e.target.value)}
			style="width:100%;"
		/>
	</label>
</div>
