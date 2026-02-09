<script lang="ts">
	import { onMount } from "svelte";
	import Editor from "$lib/editor/Editor.svelte";

	let savedDecks: string[] = [];
	let activeDeckKey: string | null = null;
	let activeDeckData: any = null;

	function loadDeckList() {
		savedDecks = Object.keys(localStorage)
			.filter(k => k.startsWith("taleem-deck-"))
			.sort();
	}

	function openInEditor(key: string) {
		const raw = localStorage.getItem(key);
		if (!raw) return;

		activeDeckKey = key;
		activeDeckData = JSON.parse(raw);
	}

	function openInPlayer(key: string) {
		window.open(
			`/player?source=local&deck=${encodeURIComponent(key)}`,
			"_blank"
		);
	}

	function deleteDeck(key: string) {
		if (!confirm(`Delete ${key}?`)) return;
		localStorage.removeItem(key);
		loadDeckList();
	}

	function newDeck() {
		activeDeckKey = null;
		activeDeckData = null;
	}

	onMount(() => {
		loadDeckList();
	});
</script>

{#if !activeDeckData}
	<h2>Saved decks</h2>

	{#if savedDecks.length === 0}
		<p>No decks found.</p>
	{:else}
		<ul>
			{#each savedDecks as key}
				<li style="margin-bottom:8px;">
					<strong>{key}</strong><br />
					<button on:click={() => openInEditor(key)}>✏️ Edit</button>
					<button on:click={() => openInPlayer(key)}>▶️ Play</button>
					<button on:click={() => deleteDeck(key)}>🗑️ Delete</button>
				</li>
			{/each}
		</ul>
	{/if}

	<button on:click={newDeck}>➕ New Deck</button>
{:else}
	<button on:click={newDeck}>← Back to deck list</button>
	<Editor initialDeck={activeDeckData} />

{/if}
