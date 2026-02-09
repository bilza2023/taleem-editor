<script>
	import { createEventDispatcher } from "svelte";

	export let deckName = "taleem-deck-new";

	const dispatch = createEventDispatcher();

	function onAddSlide(e) {
		const type = e.target.value;
		if (!type) return;
		dispatch("addslide", type);
		e.target.value = "";
	}
</script>

<div class="topbar">
	<select class="select" on:change={onAddSlide}>
		<option value="">➕ Add slide…</option>
		<option value="titleAndSubtitle">Title & Subtitle</option>
		<option value="titleAndPara">Title & Paragraph</option>
		<option value="bulletList">Bullet List</option>
		<option value="twoColumnText">Two Column Text</option>
		<option value="imageSlide">Image</option>
		<option value="fillImage">Fill Image</option>
		<option value="imageWithTitle">Image with Title</option>
		<option value="imageWithCaption">Image with Caption</option>
		<option value="imageLeftBulletsRight">Image Left / Bullets Right</option>
		<option value="imageRightBulletsLeft">Image Right / Bullets Left</option>
		<option value="table">Table</option>
		<option value="barChart">Bar Chart</option>
		<option value="progressbar">Progress Bar</option>
		<option value="quoteSlide">Quote</option>
		<option value="keyIdeasSlide">Key Ideas</option>
		<option value="eq">Equation (EQ)</option>
	</select>

	<button class="btn" on:click={() => dispatch("new")}>🆕 New</button>

	<input
		class="deck-input"
		type="text"
		bind:value={deckName}
		placeholder="deck name"
	/>

	<button class="btn" on:click={() => dispatch("save")}>
		💾 Save
	</button>

	<button class="btn primary" on:click={() => dispatch("launch")}>
		▶️ Launch
	</button>

	<button class="btn" on:click={() => dispatch("download")}>
		⬇️ Download JSON
	</button>

	<button class="btn subtle" on:click={() => dispatch("mocktimings")}>
		⏱️ Add mock timings
	</button>
</div>

<style>
	.topbar {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 14px;
		background: linear-gradient(#111, #0b0b0b);
		border-bottom: 1px solid #2a2a2a;
	}

	.select {
		background: #0f0f0f;
		color: #eee;
		border: 1px solid #333;
		padding: 6px 8px;
		border-radius: 4px;
		font-size: 13px;
	}

	.deck-input {
		flex: 1;
		max-width: 260px;
		padding: 6px 8px;
		background: #0f0f0f;
		border: 1px solid #333;
		color: #eee;
		border-radius: 4px;
		font-size: 14px;
	}

	.btn {
		padding: 6px 10px;
		background: #1a1a1a;
		color: #eee;
		border: 1px solid #333;
		border-radius: 4px;
		cursor: pointer;
		font-size: 13px;
		white-space: nowrap;
	}

	.btn:hover {
		background: #222;
	}

	.btn.primary {
		background: #1f3d2b;
		border-color: #2f6b4a;
	}

	.btn.primary:hover {
		background: #255a3b;
	}

	.btn.subtle {
		opacity: 0.85;
	}
</style>
