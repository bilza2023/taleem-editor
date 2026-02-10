<script>
		import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;
	function getImage() {
		return data.find(d => d.name === 'image') || { content: '', showAt: 0 };
	}

	function update(field, value) {
		const current = getImage();
		onChange([
			{
				name: 'image',
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
			value={getImage().content}
			on:input={(e) => update('content', e.target.value)}
			style="width:100%;"
			placeholder="example.webp"
		/>
	</label>
<!-- 
	<div style="margin-top:4px;">
		<ShowAtComponent
	value={getImage().showAt ?? 0}
	currentTime={currentTime}
	onChange={(v) => update('showAt', v)}
</div>
/> -->

</div>
