<script>
  export let transition = "fade";
  export let data = {
    quote: {
      content: "Quote",
      classes: "large-heading",
    },
    author: {
      content: "Author",
      classes: "small-heading",
    },
  };
</script>

<section class="quote-slide" data-transition={transition}>
  <blockquote class="font-bold {data.quote.classes}">
    {@html data.quote.content}
  </blockquote>
  {#if data.author}
    <cite class="font-medium {data.author.classes}">
      {@html data.author.content}
    </cite>
  {/if}
</section>

<style>
  .quote-slide {
    display: flex !important; /* override reveal.js */
    flex-direction: column;
    justify-content: center;
    padding: var(--padding);
    text-align: left;
    blockquote {
      max-width: 80%;
      line-height: 1.5;
      padding: var(--border-radius);
      border-radius: var(--border-radius);
      background-color: var(--c-highlight);
      :global(mark) {
        background-color: var(--c-highlight-2);
      }
    }
    cite {
      display: block;
      font-style: normal;
      padding: var(--border-radius);
    }
  }
</style>
