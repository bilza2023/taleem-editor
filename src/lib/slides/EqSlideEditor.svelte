<script>
	import EqLineEditor from './eq/EqLineEditor.svelte';
	import ShowAtComponent from "./ShowAtComponent.svelte";
	export let data = [];
	export let onChange;
	export let currentTime=0;

	function addLine(type) {
		onChange([
			...data,
			{
				name: 'line',
				type,
				content: '',
				spItems: []
			}
		]);
	}

	function updateLine(index, line) {
		const next = data.slice();
		next[index] = line;
		onChange(next);
	}

	function deleteLine(index) {
		const next = data.slice();
		next.splice(index, 1);
		onChange(next);
	}
</script>

<div class="eq-editor">
	<div class="eq-toolbar">
		<button on:click={() => addLine('heading')}>➕ Heading</button>
		<button on:click={() => addLine('math')}>➕ Math</button>
		<button on:click={() => addLine('text')}>➕ Text</button>
	</div>

	{#each data as line, i}
		<EqLineEditor
			{line}
			onUpdate={(l) => updateLine(i, l)}
			onDelete={() => deleteLine(i)}
		/>
	{/each}
</div>

<style>
	.eq-editor {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.eq-toolbar {
		display: flex;
		gap: 8px;
	}
</style>
