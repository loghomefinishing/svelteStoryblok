<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center">
	<h1 class="text-2xl text-[#1d243d] font-bold">{blok.image}</h1>
	<h1 class="text-2xl text-[#1d243d] font-bold">{blok.name}</h1>
<p>vs and netlify hibye</p>
<p class="text-3xl font-bold underline">
    Hello world! </p>
</div>
<div><img src="{blok.pic.filename}" alt="dog"/></div>

