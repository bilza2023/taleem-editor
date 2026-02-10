<script>
		import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;
	let image = { content: '', showAt: 0 };
	let bullets = [];

	$: {
		image = data.find(d => d.name === 'image') || { content: '', showAt: 0 };
		bullets = data.filter(d => d.name === 'bullet');
	}

	function emit(nextImage = image, nextBullets = bullets) {
		onChange([
			{
				name: 'image',
				content: nextImage.content,
				showAt: nextImage.showAt ?? 0
			},
			...nextBullets.map(b => ({
				name: 'bullet',
				content: b.content,
				showAt: b.showAt ?? 0
			}))
		]);
	}

	function addBullet() {
		emit(image, [...bullets, { content: '', showAt: 0 }]);
	}

	function updateBullet(i, field, value) {
		const next = [...bullets];
		next[i] = {
			...next[i],
			[field]: field === 'showAt' ? Number(value) || 0 : value
		};
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
			value={image.content}
			on:input={(e) =>
				emit({ ...image, content: e.target.value }, bullets)
			}
			style="width:100%;"
		/>
	</label>

	<div style="margin-top:4px;">
		<ShowAtComponent
	value={image.showAt ?? 0}
	currentTime={currentTime}
	onChange={(v) => emit({ ...image, showAt: v }, bullets)}
/>

	</div>

	<div style="margin-top:8px;">
		{#each bullets as bullet, i}
			<div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;">
				<input
					type="text"
					value={bullet.content}
					on:input={(e) => updateBullet(i, 'content', e.target.value)}
					style="flex:1;"
				/>

				<ShowAtComponent
				value={bullet.showAt ?? 0}
				currentTime={currentTime}
				onChange={(v) => updateBullet(i, 'showAt', v)}
			/>
			

				<button on:click={() => removeBullet(i)}>✕</button>
			</div>
		{/each}

		<button on:click={addBullet}>+ Add bullet</button>
	</div>
</div>
