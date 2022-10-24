<script context="module">
  import { useStoryblokApi } from "@storyblok/svelte";

  export async function load() {
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/home", {
      version: "draft",
    });
    return {
      props: { story: data.story },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";

  export let story;

  onMount(() => {
    useStoryblokBridge(story.id, (newStory) => (story = newStory), { customParent: 'https://localhost:5173'});
  });
</script>

<div>
  {#if story}
    <StoryblokComponent blok={story.content} />
  {/if}
</div>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeT0Hlq4mb54bLcxbgZPa0Ve1dVbyCkz3_fVtxaBgxWtknJqw/viewform?embedded=true" width="640" height="552" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>