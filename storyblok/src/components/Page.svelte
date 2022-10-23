<script>
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

  export let blok;
</script>
<p>hello-test</p>
{#key blok}
  <div use:storyblokEditable={blok} class="px-6">
    {#each blok.body as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
{/key}

