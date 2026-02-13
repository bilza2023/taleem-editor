<script>
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";

	let savedDecks = [];
	let fileInput;
	let newTitle = "";
	let userContentUrl = '';

onMount(() => {
	const saved = localStorage.getItem('taleem-user-content-url');
	if (saved) {
		userContentUrl = saved;
	}
});

function saveUserContentUrl() {
	if (!userContentUrl) {
		localStorage.removeItem('taleem-user-content-url');
		return;
	}

	const cleaned = userContentUrl.trim().replace(/\/$/, '');
	localStorage.setItem('taleem-user-content-url', cleaned);
	alert("saved" + cleaned);
}

	// ----------------------------
	// LOAD SAVED DECKS
	// ----------------------------
	function loadDeckList() {
		savedDecks = Object.keys(localStorage)
			.filter(k => k.startsWith("taleem-deck-"))
			.map(key => {
				try {
					const raw = localStorage.getItem(key);
					const parsed = JSON.parse(raw);

					return {
						key,
						title: parsed?.title || key
					};
				} catch {
					return {
						key,
						title: key
					};
				}
			})
			.sort((a, b) => a.title.localeCompare(b.title));
	}

	// ----------------------------
	// NAVIGATION
	// ----------------------------
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

	// ----------------------------
	// CREATE NEW DECK
	// ----------------------------
	function createNewDeck() {
		if (!newTitle.trim()) {
			alert("Please enter a title.");
			return;
		}

		const storageKey = `taleem-deck-${Date.now()}`;

		const blankDeck = {
			name: newTitle.trim(),
			deck: []
		};

		localStorage.setItem(storageKey, JSON.stringify(blankDeck));

		window.location.href =
			`${base}/editor?deck=${encodeURIComponent(storageKey)}`;
	}

	// ----------------------------
	// UPLOAD JSON
	// ----------------------------
	function triggerUpload() {
		fileInput.click();
	}

	async function handleUpload(event) {
	const file = event.target.files[0];
	if (!file) return;

	try {
		const text = await file.text();
		const parsed = JSON.parse(text);

		// Proper validation aligned with schema
		if (
			!parsed ||
			parsed.version !== "deck-v1" ||
			!parsed.name ||
			!Array.isArray(parsed.deck)
		) {
			alert("Invalid Taleem JSON file.");
			return;
		}

		const storageKey = `taleem-deck-${Date.now()}`;

		// Normalize structure (safety)
		const normalized = {
			version: "deck-v1",
			name: parsed.name,
			background: parsed.background || {
				backgroundColor: "#111111",
				backgroundImage: null,
				backgroundImageOpacity: 0.3
			},
			deck: parsed.deck
		};

		localStorage.setItem(storageKey, JSON.stringify(normalized));

		window.location.href =
			`${base}/editor?deck=${encodeURIComponent(storageKey)}`;

	} catch (err) {
		alert("Invalid JSON file.");
	}
}


	onMount(loadDeckList);
</script>

<h2>Saved decks</h2>

{#if savedDecks.length === 0}
	<p>No decks found.</p>
{:else}
	<ul>
		{#each savedDecks as deck}
			<li style="margin-bottom:10px;">
				<strong>{deck.title}</strong>
				<small style="opacity:0.6;">({deck.key})</small><br />

				<button on:click={() => editDeck(deck.key)}>✏️ Edit</button>
				<button on:click={() => playDeck(deck.key)}>▶️ Play</button>
				<button on:click={() => deleteDeck(deck.key)}>🗑️ Delete</button>
			</li>
		{/each}
	</ul>
{/if}

<hr />

<h3>Create New Presentation</h3>

<input
	type="text"
	placeholder="Enter presentation title"
	bind:value={newTitle}
/>

<button on:click={createNewDeck}>
	➕ Create
</button>

<br /><br />

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

<div style="margin-top: 1rem;">
	<!-- svelte-ignore a11y_label_has_associated_control -->
	<label style="display:block; font-size:0.9rem; margin-bottom:0.3rem;">
		Assets Base URL
	</label>

	<input
		type="text"
		bind:value={userContentUrl}
		placeholder="https://user.github.io/course"
		style="width:100%; padding:0.5rem;"
	/>

	<button
		on:click={saveUserContentUrl}
		style="margin-top:0.5rem; padding:0.4rem 0.8rem;"
	>
		Save
	</button>
</div>
