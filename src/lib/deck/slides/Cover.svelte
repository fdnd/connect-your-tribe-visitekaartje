<script>

  export let data = {
    classes: "large-heading",
    sprintNr: {
      content: `Sprint {nummer}`,
    },
    presentationName: {
      content: `{presentatie naam}`,
    },
    type: {
      content: "workshop",
    },
    emojis: {
      content: ["🚀", "💪", "="],
    },
  };
  export let transition;

</script>

<section class="cover-slide {data.classes}" data-transition={transition}>
  <div class="code-string-line">
    <h1 class="code-string is-filled">
      {data.sprintNr.content}
    </h1>
    <div class="code-string is-emoji is-outlined">
      {data.emojis.content[0]}
    </div>
    <h1 class="code-string is-outlined">
      {data.presentationName.content}
    </h1>
    <div class="code-string is-emoji is-filled">
      {data.emojis.content[1]}
    </div>
  </div>

  <div class="code-string-line">
    <div class="code-string is-emoji is-outlined">
      {data.emojis.content[2]}
    </div>
    <h1 class="code-string is-filled">
      {data.type.content}
    </h1>
  </div>
</section>

<style>
  .cover-slide {
    display: flex !important; /* reveal.js override */
    justify-content: space-between;
    flex-direction: column;
    gap: 1em;
    padding: var(--padding);
    text-align: left;
  }
  .code-string { /* Heading logic*/
    font-size: 100%;
  }
  .cover-slide .code-string-line:last-child {
    justify-content: flex-end;
  }
</style>
