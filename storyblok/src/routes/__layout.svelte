<script context="module">
  import { storyblokInit, apiPlugin } from "@storyblok/svelte";
  import Feature from "../components/Feature.svelte";
  import Grid from "../components/Grid.svelte";
  import Page from "../components/Page.svelte";
  import Teaser from "../components/Teaser.svelte";

  storyblokInit({
    accessToken: "lOUdX41IQY0bBUZ9fMf3zwtt",
    apiOptions: {
    region: "us", // Pass this key/value if your space was created under US region
  },
    use: [apiPlugin],
    components: {
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
    },
  });
</script>

<script>
  import "../app.css";
</script>

<main>
  <slot />
</main>
