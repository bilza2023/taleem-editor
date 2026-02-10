<script>
		import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;

	function getItem(name) {
		return data.find(d => d.name === name) || { content: '', showAt: 0 };
	}

	function update(name, field, value) {
		const filtered = data.filter(d => d.name !== name);
		const current = getItem(name);

		onChange([
			...filtered,
			{
				name,
				content: field === 'content' ? value : current.content,
				showAt: field === 'showAt' ? Number(value) || 0 : current.showAt ?? 0
			}
		]);
	}
</script>

<div style="margin-top:8px;">
	<div>
		<label>
			Title<br />
			<input
				type="text"
				value={getItem('title').content}
				on:input={(e) => update('title', 'content', e.target.value)}
				style="width:100%;"
			/>
		</label>
		<div style="margin-top:4px;">
			<label>
				showAt<br />
				<input
					type="number"
					value={getItem('title').showAt ?? 0}
					on:input={(e) => update('title', 'showAt', e.target.value)}
					style="width:100%;"
				/>
			</label>
		</div>
	</div>

	<div style="margin-top:12px;">
		<label>
			Subtitle<br />
			<input
				type="text"
				value={getItem('subtitle').content}
				on:input={(e) => update('subtitle', 'content', e.target.value)}
				style="width:100%;"
			/>
		</label>
		<div style="margin-top:4px;">
			<label>
				showAt<br />
				<input
					type="number"
					value={getItem('subtitle').showAt ?? 0}
					on:input={(e) => update('subtitle', 'showAt', e.target.value)}
					style="width:100%;"
				/>
			</label>
		</div>
	</div>
</div>
