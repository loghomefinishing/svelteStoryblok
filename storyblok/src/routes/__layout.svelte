<script context="module">
  import { storyblokInit, apiPlugin } from "@storyblok/svelte";
  import Feature from "../components/Feature.svelte";
  import Grid from "../components/Grid.svelte";
  import Page from "../components/Page.svelte";
  import Teaser from "../components/Teaser.svelte";
  import Image from "../components/Image.svelte";
  storyblokInit({
    accessToken: "RSkNyekAXsQyHoQzLj4o6Qtt",
    apiOptions: {
    region: "us", // Pass this key/value if your space was created under US region
  },
    use: [apiPlugin],
    components: {
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
      image: Image,
    },
  });
</script>

<script>
  import "../app.css";
  import Index from "./index.svelte";
</script>

<main>
  <slot />
</main>
