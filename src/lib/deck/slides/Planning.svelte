<script>
  import { SprintIndicator, CustomPill } from "$lib/deck/partials";
  export let transition;
  export let data = {
    customPill: {
      text: "Sprint 12",
      color: "var(--c-text)",
      background: "var(--c-highlight)",
      position: "top left",
    },
    title: {
      content: "Planning",
      level: 1,
      classes: "xlarge-heading",
    },
    progress: 0,
    list: ["Item", "Item"],
  };
  $: headingTag = `h${Math.min(Math.max(data.title.level, 1), 6)}`;
</script>

<section class="planning-slide" data-transition={transition}>
  {#if data.customPill}
    <CustomPill data={data.customPill} />
  {/if}
  <SprintIndicator />
  <svelte:element this={headingTag} class={data.title.classes}
    >{@html data.title.content}</svelte:element
  >
  <ol class="planning-list small-heading">
    {#each data.list as item, index}
      <li class:is-current={index === data.progress}>{item}</li>
    {/each}
  </ol>
</section>

<style>
  .planning-slide {
    display: flex !important; /* override revealjs */
    flex-direction: column;
    justify-content: end;
    height: 100%;
    text-align: left;
    padding: var(--padding);
    .planning-list {
      padding: var(--padding);
      padding-left: calc(var(--padding) * 2);
      border: 0.1em solid var(--c-text);
      border-radius: var(--border-radius);
      box-shadow: 0.2em 0.2em 0 var(--c-text);
      max-width: 70%;
      margin-top: var(--padding);
      :global(li:has(~ li.is-current)) {
        opacity: 0.5;
        text-decoration: line-through;
      }
      li.is-current {
        font-weight: bold;
      }
    }
  }
</style>
