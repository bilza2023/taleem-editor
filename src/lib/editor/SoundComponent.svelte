<script>
	import { Howl } from 'howler';

	let sound = null;
	let isLoaded = false;
	let isPlaying = false;

	let currentTime = 0;
	let duration = 0;
	let isScrubbing = false;

	function loadSound() {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'audio/*';

		input.onchange = (e) => {
			const file = e.target.files[0];
			if (!file) return;

			if (sound) {
				sound.unload();
				sound = null;
			}

			const format = file.type?.split('/')[1];

			sound = new Howl({
				src: [URL.createObjectURL(file)],
				format: format ? [format] : undefined,
				html5: true,
				onload: () => {
					duration = sound.duration();
					isLoaded = true;
				},
				onplay: () => {
					isPlaying = true;
					tick();
				},
				onpause: () => {
					isPlaying = false;
				},
				onstop: () => {
					isPlaying = false;
					currentTime = 0;
				}
			});
		};

		input.click();
	}

	function play() {
		if (sound) sound.play();
	}

	function pause() {
		if (sound) sound.pause();
	}

	function stop() {
		if (sound) sound.stop();
	}

	function tick() {
		if (!sound || !sound.playing()) return;

		if (!isScrubbing) {
			currentTime = sound.seek() || 0;
		}

		requestAnimationFrame(tick);
	}

	function onScrubStart() {
		isScrubbing = true;
	}

	function onScrub(e) {
		currentTime = Number(e.target.value);
	}

	function onScrubEnd() {
		if (sound) sound.seek(currentTime);
		isScrubbing = false;
	}

	function formatTime(t) {
		return t.toFixed(2) + 's';
	}
</script>

<style>
	.sound-bar {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		background: rgba(0, 0, 0, 0.05);
		border-top: 1px solid #ccc;
	}

	button {
		padding: 0.25rem 0.5rem;
		cursor: pointer;
	}

	.time {
		font-weight: 600;
		min-width: 110px;
	}

	.scrub {
		flex: 1;
	}
</style>

{#if !isLoaded}
	<div class="sound-bar">
		<button on:click={loadSound}>Load Sound</button>
	</div>
{:else}
	<div class="sound-bar">
		<button on:click={play}>▶</button>
		<button on:click={pause}>⏸</button>
		<button on:click={stop}>⏹</button>

		<span class="time">
			{formatTime(currentTime)} / {formatTime(duration)}
		</span>

		<input
			class="scrub"
			type="range"
			min="0"
			max={duration}
			step="0.01"
			bind:value={currentTime}
			on:mousedown={onScrubStart}
			on:input={onScrub}
			on:mouseup={onScrubEnd}
		/>
	</div>
{/if}
