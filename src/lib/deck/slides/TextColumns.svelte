<script>
  import { CustomPill, Pointer } from "$lib/deck/partials";
  export let transition;
  export let data = {
    customPill: {
      text: "Custom Pill",
      color: "var(--c-text)",
      background: "var(--c-highlight)",
      position: "top left",
    },
    columns: [
      {
        pointer: {
          text: "Pointer",  
          color: "var(--c-text)",
          background: "var(--c-highlight)",
          position: "top right",
        },
        title: {
          content: "Title",
          level: 2,
          classes: "medium-heading",
        },
        text: {
          content:
            "Content",
          classes: "small-heading",
        },
      },
    ],
  };
</script>

<section class="text-columns" data-transition={transition}>
  {#if data.customPill}
    <CustomPill data={data.customPill} /> 
  {/if}
  <div class="text-columns-container" style="--columns: {data.columns.length};">
    {#each data.columns as column}
      <div class:has-pointer={column.pointer} class="column">
        {#if column.pointer}
          <Pointer data={column.pointer} />
        {/if}
        <svelte:element this={`h${Math.min(Math.max(column.title.level, 1), 6)}`} class={column.title.classes}
          >{@html column.title.content}</svelte:element
        >
        <div class="text {column.text.classes}">
          {@html column.text.content}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .text-columns {
    display: flex !important; /* override revealjs */
    flex-direction: column;
    gap: var(--padding);
    justify-content: center;
    padding: var(--padding);
  }
  .text-columns-container {
    display: grid !important; /* override revealjs */
    grid-template-columns: repeat(var(--columns), minmax(300px, 1fr));
    gap: 1em;
    text-align: left;
  }
  .column {
    padding: 1em;
    :global(ul, ol) {
      padding-left: 1.5em;
    }
    .text {
      margin-top: 1em;
    }
    &.has-pointer {
      position: relative;
      background: var(--c-highlight);
      border-radius: var(--border-radius);
    }
  }
</style>