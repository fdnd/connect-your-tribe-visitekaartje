<script>
  import { SprintIndicator } from '$lib/deck/partials';
  export let data = {
    title: {
      content: '',
      level: 1,
      classes: 'large-heading'
    },
    text: {
      content: '',
      classes: 'large-body font-medium'
    }
  };
  $: headingTag = `h${Math.min(Math.max(data.title.level, 1), 6)}`;
  export let transition;
</script>

<section class="text-slide" data-transition={transition}>
  <SprintIndicator />
  <svelte:element 
    this={headingTag} 
    class={data.title.classes}
  >{@html data.title.content}</svelte:element>
  <div class="p {data.text.classes}">{@html data.text.content}</div>
</section>

<style lang="scss">
  .text-slide {
    display: flex !important; /* override revealjs */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

</style>
