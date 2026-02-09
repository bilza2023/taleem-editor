<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	let deckKey = null;
	let deckData = null;

	onMount(() => {
		const unsubscribe = page.subscribe(($page) => {
			deckKey = $page.url.searchParams.get("deck");

			if (!deckKey) {
				console.warn("No deck key provided in URL");
				return;
			}

			const raw = localStorage.getItem(deckKey);

			if (!raw) {
				console.error("Deck not found in localStorage:", deckKey);
				return;
			}

			deckData = JSON.parse(raw);

			console.log("✅ Player loaded deck:", deckKey);
			console.log(deckData);
		});

		return unsubscribe;
	});
</script>

<h2>Player Page</h2>

{#if !deckKey}
	<p>❌ No deck specified.</p>
{:else if !deckData}
	<p>⏳ Loading deck: <strong>{deckKey}</strong></p>
{:else}
	<p>✅ Deck loaded: <strong>{deckKey}</strong></p>
	<p>Slides count: {deckData.deck?.length}</p>

	<pre style="background:#111;color:#0f0;padding:12px;overflow:auto;">
{JSON.stringify(deckData, null, 2)}
	</pre>
{/if}
