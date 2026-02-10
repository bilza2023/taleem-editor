
<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		// ----------------------------------
		// load external scripts (KaTeX)
		// ----------------------------------
		const katex = document.createElement('script');
		katex.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.28/dist/katex.min.js';
		katex.defer = true;

		const autoRender = document.createElement('script');
		autoRender.src =
			'https://cdn.jsdelivr.net/npm/katex@0.16.28/dist/contrib/auto-render.min.js';
		autoRender.defer = true;
		autoRender.onload = () => {
			window.__katexReady = true;
		};

		document.head.appendChild(katex);
		document.head.appendChild(autoRender);

		// ----------------------------------
		// load useMath helper
		// ----------------------------------
		const useMath = document.createElement('script');
		useMath.src = '/player/useMath.js';
		document.body.appendChild(useMath);

		// ----------------------------------
		// finally load the player runtime
		// ----------------------------------
		const play = document.createElement('script');
		play.type = 'module';
		play.src = '/player/play.js';
		document.body.appendChild(play);
	});
</script>

<svelte:head>
	<title>Taleem Player</title>

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.28/dist/katex.min.css"
	/>

	<link
		rel="stylesheet"
		href="https://unpkg.com/taleem-player@latest/dist/css/themes/dark.css"
	/>
	<link
		rel="stylesheet"
		href="https://unpkg.com/taleem-player@latest/dist/css/taleem.css"
	/>

	<!-- <link rel="stylesheet" href="/taleem.css" /> -->

	<script type="importmap">
		{
		  "imports": {
		    "taleem-pam": "https://unpkg.com/taleem-pam@latest/dist/taleem-pam.esm.js"
		  }
		}
	</script>
</svelte:head>

<style>
	body {
		margin: 0;
		font-family: system-ui, sans-serif;
	}

	#app {
		height: 100vh;
		padding-bottom: 90px;
		box-sizing: border-box;
	}

	/* bottom bar */
	.nav-test {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 90px;
		background: rgba(187, 187, 188, 0.85);
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0 1rem;
		z-index: 999999;
	}

	.nav-test span {
		font-weight: 700;
		min-width: 80px;
	}

	.scrub-wrap {
		flex: 1;
		display: flex;
		align-items: center;
	}

	#scrub {
		width: 100%;
	}
</style>

<!-- PLAYER MOUNT -->
<div id="app"></div>

<!-- BOTTOM CONTROLS -->
<div class="nav-test">
	<button id="play-btn">▶</button>
	<button id="pause-btn">⏸</button>
	<button id="stop-btn">⏹</button>

	<span id="time">0.0s</span>

	<div class="scrub-wrap">
		<input id="scrub" type="range" min="0" max="1" step="0.1" />
	</div>
</div>
