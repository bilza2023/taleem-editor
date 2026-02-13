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
		if (saved) userContentUrl = saved;
	});

	function saveUserContentUrl() {
		if (!userContentUrl) {
			localStorage.removeItem('taleem-user-content-url');
			return;
		}
		const cleaned = userContentUrl.trim().replace(/\/$/, '');
		localStorage.setItem('taleem-user-content-url', cleaned);
		alert("Saved");
	}

	function loadDeckList() {
		savedDecks = Object.keys(localStorage)
			.filter(k => k.startsWith("taleem-deck-"))
			.map(key => {
				try {
					const raw = localStorage.getItem(key);
					const parsed = JSON.parse(raw);
					return {
						key,
						title: parsed?.name || key,
						hasAudio: !!parsed?.audio
					};
				} catch {
					return { key, title: key, hasAudio: false };
				}
			})
			.sort((a, b) => a.title.localeCompare(b.title));
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

	function createNewDeck() {
		if (!newTitle.trim()) {
			alert("Please enter a title.");
			return;
		}

		const storageKey = `taleem-deck-${Date.now()}`;

		const blankDeck = {
			version: "deck-v1",
			name: newTitle.trim(),
			deck: []
		};

		localStorage.setItem(storageKey, JSON.stringify(blankDeck));
		window.location.href = `${base}/editor?deck=${encodeURIComponent(storageKey)}`;
	}

	function triggerUpload() {
		fileInput.click();
	}

	async function handleUpload(event) {
		const file = event.target.files[0];
		if (!file) return;

		try {
			const text = await file.text();
			const parsed = JSON.parse(text);

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

			localStorage.setItem(storageKey, JSON.stringify(parsed));
			window.location.href = `${base}/editor?deck=${encodeURIComponent(storageKey)}`;

		} catch {
			alert("Invalid JSON file.");
		}
	}

	onMount(loadDeckList);
</script>

<div class="home">

	<h4>Taleem Presentations</h4>
	<span><a href="/taleem-editor/help">help</a></span>
	<!-- <hr/> -->
	<!-- HERO BUTTONS -->
	<section class="hero">
		<div class="hero-buttons">

			<button class="jumbo primary" on:click={triggerUpload}>
				📂 OPEN Taleem Deck
			</button>

			<div class="new-wrapper">
				<input
					type="text"
					placeholder="New presentation title"
					bind:value={newTitle}
				/>
				<button class="jumbo secondary" on:click={createNewDeck}>
					➕ NEW Taleem Deck
				</button>
			</div>

			<input
				type="file"
				accept=".json,application/json"
				bind:this={fileInput}
				on:change={handleUpload}
				style="display:none"
			/>
		</div>
	</section>
<hr/>
	<!-- LIST SECTION -->
	<section class="deck-list">
		<h3>Presentations</h3>

		{#if savedDecks.length === 0}
			<p class="empty">No decks found.</p>
		{:else}
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Key</th>
						<th>🔊</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each savedDecks as deck, i}
						<tr>
							<td>{i + 1}</td>
							<td class="title">{deck.title}</td>
							<td class="key">{deck.key}</td>
							<td>{deck.hasAudio ? "🎵" : "—"}</td>
							<td class="actions">
								<button on:click={() => editDeck(deck.key)}>✏️</button>
								<button on:click={() => playDeck(deck.key)}>▶️</button>
								<button on:click={() => deleteDeck(deck.key)}>🗑️</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</section>
	<!-- <hr/> -->
	<!-- USER CONTENT URL -->
	<section class="assets">
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label>Assets Base URL</label>
		<input
			type="text"
			bind:value={userContentUrl}
			placeholder="https://user.github.io/course/static"
		/>
		<button on:click={saveUserContentUrl}>Save</button>
	</section>

</div>

<style>
.home {
	padding: 40px 60px;
	background: #0e0e0f;
	color: #eee;
	min-height: 100vh;
	font-family: system-ui, sans-serif;
}

.hero {
	text-align: center;
	margin-bottom: 50px;
}

.hero-buttons {
	display: flex;
	justify-content: center;
	gap: 40px;
	align-items: center;
	flex-wrap: wrap;
}

.jumbo {
	font-size: 1.2rem;
	padding: 18px 32px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	font-weight: 600;
	letter-spacing: 0.5px;
	transition: all 0.2s ease;
}

.jumbo.primary {
	background: #1f3d2b;
	color: #fff;
}

.jumbo.secondary {
	background: #2b2b2b;
	color: #fff;
}

.jumbo:hover {
	transform: translateY(-2px);
	opacity: 0.9;
}

.new-wrapper {
	display: flex;
	gap: 10px;
	align-items: center;
}

.new-wrapper input {
	padding: 12px;
	border-radius: 6px;
	border: 1px solid #333;
	background: #181818;
	color: #eee;
	width: 240px;
}

.deck-list {
	margin-top: 40px;
}

.deck-list h3 {
	margin-bottom: 15px;
	font-weight: 500;
}

table {
	width: 100%;
	border-collapse: collapse;
	background: #161616;
	border-radius: 8px;
	overflow: hidden;
}

th, td {
	padding: 12px;
	text-align: left;
	border-bottom: 1px solid #222;
	font-size: 0.9rem;
}

th {
	background: #1c1c1c;
	font-weight: 500;
}

.title {
	font-weight: 500;
}

.key {
	font-size: 0.8rem;
	opacity: 0.6;
}

.actions button {
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	margin-right: 6px;
}

.actions button:hover {
	opacity: 0.7;
}

.empty {
	opacity: 0.6;
}

.assets {
	margin-top: 50px;
	opacity: 0.7;
	font-size: 0.85rem;
	max-width: 600px;
}

.assets input {
	width: 100%;
	padding: 8px;
	margin-top: 6px;
	background: #111;
	border: 1px solid #333;
	color: #eee;
	border-radius: 4px;
}

.assets button {
	margin-top: 8px;
	padding: 6px 12px;
	background: #222;
	border: 1px solid #333;
	color: #eee;
	border-radius: 4px;
	cursor: pointer;
}
</style>
