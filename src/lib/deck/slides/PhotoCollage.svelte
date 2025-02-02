<script>
  import { Media, CustomPill } from "$lib/deck/partials";
  export let transition;
  export let data = {
    customGrid: false,
    objectFit: "cover",
    gap: false,
    padding: false,
    background: false,
    customPill: {
      text: "Custom Pill",
      color: "var(--c-text)",
      background: "var(--c-highlight)",
      position: "top left",
    },
    images: [
      {
        type: "image",
        src: "src",
        alt: "",
      },
    ],
    captionPosition: "right center",
    caption: "",
  };
</script>

{#if data.images}
  <section
    class="photo-collage-slide"
    class:has-gap={data.gap}
    class:has-padding={data.padding}
    style="--grid-columns: {data.customGrid
      ? data.customGrid
      : data.images.length == 2 ? '2' : Math.ceil(data.images.length / 2)};
      --background: {data.background ? data.background : '#fff;'}"
    data-transition={transition}
  >
    {#if data.customPill}
      <CustomPill data={data.customPill} />
    {/if}
    {#each data.images as image}
      <Media data={image} objectFit={data.objectFit} />
    {/each}
    {#if data.caption}
      <div
        class="caption small-heading font-medium"
        data-position={data.captionPosition}
      >
        {@html data.caption}
      </div>
    {/if}
  </section>
{/if}

<style>
  .photo-collage-slide {
    background: var(--background);
    display: grid !important; /* override revealjs */
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    gap: 0;
    height: 100%;
    max-width: 100vw;
    padding: 0 !important; /* override revealjs */
    &.has-gap {
      gap: var(--padding);
    }
    &.has-padding {
      padding: var(--padding) !important; /* override revealjs */
    }
    /* Make media fit always*/
    :global(.media) {
      position: relative;
    }
    :global(.media img, .media video) {
      position: absolute;
      top: 0;
      left: 0;
    }
    .caption {
      position: absolute;
      padding: var(--small-padding);
      border-radius: var(--border-radius);
      border: 0.1em solid var(--c-text);
      box-shadow: 0.2em 0.2em 0 var(--c-text);
      background: var(--c-background);
      color: var(--c-text);
      text-align: left;
      &[data-position="left top"] {
        top: var(--padding);
        left: var(--padding);
        right: auto;
        text-align: left;
        transform: none;
      }
      &[data-position="left top"],
      &[data-position="top left"] {
        left: var(--padding);
        top: var(--padding);
      }
      &[data-position="left center"],
      &[data-position="center left"] {
        left: var(--padding);
        top: 50%;
        transform: translateY(-50%);
      }
      &[data-position="left bottom"],
      &[data-position="bottom left"] {
        left: var(--padding);
        bottom: var(--padding);
      }
      &[data-position="center top"],
      &[data-position="top center"] {
        top: var(--padding);
        left: 50%;
        transform: translateX(-50%);
      }
      &[data-position="center center"] {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
      &[data-position="center bottom"] {
        bottom: var(--padding);
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
      }
      &[data-position="right top"],
      &[data-position="top right"] {
        top: var(--padding);
        right: var(--padding);
      }
      &[data-position="right center"],
      &[data-position="center right"] {
        right: var(--padding);
        top: 50%;
        transform: translateY(-50%);
      }
      &[data-position="right bottom"],
      &[data-position="bottom right"] {
        right: var(--padding);
        bottom: 5rem; /* controls ;) */
      }
    }
  }
</style>
