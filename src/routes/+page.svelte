<script>
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";

	let savedDecks = [];

	function loadDeckList() {
		savedDecks = Object.keys(localStorage)
			.filter(k => k.startsWith("taleem-deck-"))
			.sort();
	}

	function editDeck(key) {
		goto(`${base}/editor?deck=${encodeURIComponent(key)}`);
	}

	function playDeck(key) {
		goto(`${base}/player?deck=${encodeURIComponent(key)}`);
	}

	function deleteDeck(key) {
		if (!confirm(`Delete ${key}?`)) return;
		localStorage.removeItem(key);
		loadDeckList();
	}

	function newDeck() {
		goto(`${base}/editor`);
	}

	onMount(loadDeckList);
</script>

<h2>Saved decks</h2>

{#if savedDecks.length === 0}
	<p>No decks found.</p>
{:else}
	<ul>
		{#each savedDecks as key}
			<li style="margin-bottom:10px;">
				<strong>{key}</strong><br />
				<button on:click={() => editDeck(key)}>✏️ Edit</button>
				<button on:click={() => playDeck(key)}>▶️ Play</button>
				<button on:click={() => deleteDeck(key)}>🗑️ Delete</button>
			</li>
		{/each}
	</ul>
{/if}

<button on:click={newDeck}>➕ New Deck</button>
