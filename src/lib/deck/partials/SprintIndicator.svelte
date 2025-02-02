<script>
  import { baseData } from '$lib/deck/base-data';
</script>

<span class="pill medium-body font-bold">
  Sprint {baseData.sprintNumber} | {baseData.presentationName}
</span>

<style>
  .pill {
    top: var(--padding);
    right: var(--padding);
  }
</style>