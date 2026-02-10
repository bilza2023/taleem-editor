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
		Image filename<br />
		<input
			type="text"
			value={getItem('image').content}
			on:input={(e) => update('image', 'content', e.target.value)}
			style="width:100%;"
		/>
	</label>
<!-- 
	<label style="display:block;margin-top:4px;">
		showAt<br />
		<input
			type="number"
			value={getItem('image').showAt ?? 0}
			on:input={(e) => update('image', 'showAt', e.target.value)}
			style="width:100%;"
		/>
	</label> -->

	<label style="display:block;margin-top:8px;">
		Caption<br />
		<input
			type="text"
			value={getItem('caption').content}
			on:input={(e) => update('caption', 'content', e.target.value)}
			style="width:100%;"
		/>
	</label>

	<label style="display:block;margin-top:4px;">
		<ShowAtComponent
		value={getItem('caption').showAt ?? 0}
		currentTime={currentTime}
		onChange={(v) => update('caption', 'showAt', v)}
	/>
	
	</label>
</div>
