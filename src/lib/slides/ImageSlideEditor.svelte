<script>
	export let data = [];
	export let onChange;

	function getImage() {
		const item = data.find(d => d.name === 'image');
		return item ? item.content : '';
	}

	function updateImage(value) {
		onChange([{ name: 'image', content: value }]);
	}
</script>

<div style="margin-top:8px;">
	<label>
		Image filename<br />
		<input
			type="text"
			value={getImage()}
			on:input={(e) => updateImage(e.target.value)}
			style="width:100%;"
			placeholder="example.webp"
		/>
	</label>
</div>
