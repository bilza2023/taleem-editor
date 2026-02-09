<script>
	import EqSidePanelEditor from './EqSidePanelEditor.svelte';

	export let line;
	export let onUpdate;
	export let onDelete;

	function updateField(field, value) {
		onUpdate({ ...line, [field]: value });
	}
</script>

<div class="eq-line">
	<div class="eq-line-header">
		<strong>{line.type}</strong>
		<button on:click={onDelete}>✖</button>
	</div>

	<textarea
		bind:value={line.content}
		on:input={(e) => updateField('content', e.target.value)}
		placeholder="content"
	/>

	<EqSidePanelEditor
		items={line.spItems}
		onChange={(items) => updateField('spItems', items)}
	/>
</div>

<style>
	.eq-line {
		border: 1px solid #333;
		padding: 8px;
		border-radius: 6px;
		background: #0f0f0f;
	}

	.eq-line-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 6px;
	}
</style>
