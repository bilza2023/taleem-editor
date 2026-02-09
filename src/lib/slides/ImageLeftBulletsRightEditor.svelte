<script>
	export let data = [];
	export let onChange;

	let image = '';
	let bullets = [];

	// normalize incoming data (reactive)
	$: {
		image = (data.find(d => d.name === 'image') || {}).content || '';
		bullets = data.filter(d => d.name === 'bullet');
	}

	function emit(nextImage = image, nextBullets = bullets) {
		onChange([
			{ name: 'image', content: nextImage },
			...nextBullets.map(b => ({ name: 'bullet', content: b.content }))
		]);
	}

	function addBullet() {
		emit(image, [...bullets, { content: '' }]);
	}

	function updateBullet(i, value) {
		const next = [...bullets];
		next[i] = { content: value };
		emit(image, next);
	}

	function removeBullet(i) {
		emit(image, bullets.filter((_, idx) => idx !== i));
	}
</script>

<div style="margin-top:8px;">
	<label>
		Image filename<br />
		<input
			type="text"
			value={image}
			on:input={(e) => emit(e.target.value, bullets)}
			style="width:100%;"
		/>
	</label>

	<div style="margin-top:8px;">
		{#each bullets as bullet, i}
			<div style="display:flex;gap:8px;margin-bottom:6px;">
				<input
					type="text"
					value={bullet.content}
					on:input={(e) => updateBullet(i, e.target.value)}
					style="flex:1;"
				/>
				<button on:click={() => removeBullet(i)}>✕</button>
			</div>
		{/each}

		<button on:click={addBullet}>+ Add bullet</button>
	</div>
</div>
