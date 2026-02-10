<script>
	// text
	import TitleAndSubtitleEditor from '$lib/slides/TitleAndSubtitleEditor.svelte';
	import TitleAndParaEditor from '$lib/slides/TitleAndParaEditor.svelte';
	import BulletListEditor from '$lib/slides/BulletListEditor.svelte';
	import TwoColumnTextEditor from '$lib/slides/TwoColumnTextEditor.svelte';

	// images
	import ImageSlideEditor from '$lib/slides/ImageSlideEditor.svelte';
	import ImageWithTitleEditor from '$lib/slides/ImageWithTitleEditor.svelte';
	import ImageWithCaptionEditor from '$lib/slides/ImageWithCaptionEditor.svelte';
	import ImageLeftBulletsRightEditor from '$lib/slides/ImageLeftBulletsRightEditor.svelte';
	import ImageRightBulletsLeftEditor from '$lib/slides/ImageRightBulletsLeftEditor.svelte';

	// data / charts
	import TableEditor from '$lib/slides/TableEditor.svelte';
	import BarChartEditor from '$lib/slides/BarChartEditor.svelte';
	import ProgressBarEditor from '$lib/slides/ProgressBarEditor.svelte';

	// misc
	import QuoteSlideEditor from '$lib/slides/QuoteSlideEditor.svelte';
	import KeyIdeasSlideEditor from '$lib/slides/KeyIdeasSlideEditor.svelte';

	// eq
	import EqSlideEditor from '$lib/slides/EqSlideEditor.svelte';

	export let type;
	export let data = [];
	export let onChange;
	export let currentTime=0;
</script>

{#if type === 'titleAndSubtitle'}
	<TitleAndSubtitleEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'titleAndPara'}
	<TitleAndParaEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'bulletList'}
	<BulletListEditor {data} {onChange} currentTime={currentTime}/>

{:else if type === 'twoColumnText'}
	<TwoColumnTextEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'imageSlide' || type === 'fillImage'}
	<ImageSlideEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'imageWithTitle'}
	<ImageWithTitleEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'imageWithCaption'}
	<ImageWithCaptionEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'imageLeftBulletsRight'}
	<ImageLeftBulletsRightEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'imageRightBulletsLeft'}
	<ImageRightBulletsLeftEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'table'}
	<TableEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'barChart'}
	<BarChartEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'progressbar'}
	<ProgressBarEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'quoteSlide'}
	<QuoteSlideEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'keyIdeasSlide'}
	<KeyIdeasSlideEditor {data} {onChange}  currentTime={currentTime} />

{:else if type === 'eq'}
	<EqSlideEditor {data} {onChange}  currentTime={currentTime} />

{:else}
	<div style="margin-top:8px;color:red;">
		Unknown slide type: <b>{type}</b>
	</div>
{/if}
