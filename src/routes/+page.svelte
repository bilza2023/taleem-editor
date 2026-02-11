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
//////////////////////////////////////
import { base } from '$app/paths';

let fileInput;

function triggerUpload() {
	fileInput.click();
}

async function handleUpload(event) {
	const file = event.target.files[0];
	if (!file) return;

	try {
		const text = await file.text();
		const deck = JSON.parse(text);

		// basic sanity check (optional but safe)
		if (!deck || !deck.deck) {
			alert("Invalid Taleem JSON file.");
			return;
		}

		// generate storage key
		const storageKey = `taleem-deck-${Date.now()}`;

		localStorage.setItem(storageKey, text);

		// launch normally
		window.open(
			`${base}/player?deck=${encodeURIComponent(storageKey)}`,
			"_blank"
		);

	} catch (err) {
		alert("Invalid JSON file.");
	}
}

//////////////////////////////////////
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

<button on:click={triggerUpload}>
	📂 Upload Presentation
</button>

<input
	type="file"
	accept=".json,application/json"
	bind:this={fileInput}
	on:change={handleUpload}
	style="display:none"
/>
