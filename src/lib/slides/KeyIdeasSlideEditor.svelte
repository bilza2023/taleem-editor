<script>
		import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;
	const SIZE = 4;

	function normalize() {
		const base = [...data];
		while (base.length < SIZE) {
			base.push({ name: 'card', icon: '', label: '', showAt: 0 });
		}
		return base.slice(0, SIZE);
	}

	function update(index, field, value) {
		const items = normalize();
		items[index] = {
			...items[index],
			[field]: field === 'showAt' ? Number(value) || 0 : value
		};
		onChange(items);
	}
</script>

<div style="margin-top:8px;">
	{#each normalize() as card, index}
		<div style="border:1px solid #333;padding:8px;margin-bottom:8px;">
			<strong>Card {index + 1}</strong>

			<div style="margin-top:6px;">
				<label>
					Icon<br />
					<input
						type="text"
						value={card.icon}
						on:input={(e) => update(index, 'icon', e.target.value)}
						placeholder="🧠"
					/>
				</label>
			</div>

			<div style="margin-top:6px;">
				<label>
					Label<br />
					<input
						type="text"
						value={card.label}
						on:input={(e) => update(index, 'label', e.target.value)}
						style="width:100%;"
					/>
				</label>
			</div>

			<div style="margin-top:6px;">
				<ShowAtComponent
				value={card.showAt ?? 0}
				currentTime={currentTime}
				onChange={(v) => update(index, 'showAt', v)}
			/>
			</div>
		</div>
	{/each}
</div>
