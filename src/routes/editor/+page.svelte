<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Editor from "$lib/editor/Editor.svelte";

	let initialDeck = null;

	onMount(() => {
		const unsubscribe = page.subscribe(($page) => {
			const key = $page.url.searchParams.get("deck");

			if (!key) {
				initialDeck = null;
				return;
			}

			const raw = localStorage.getItem(key);
			if (!raw) {
				initialDeck = null;
				return;
			}

			initialDeck = JSON.parse(raw);
		});

		return unsubscribe;
	});
</script>

<Editor initialDeck={initialDeck} />
