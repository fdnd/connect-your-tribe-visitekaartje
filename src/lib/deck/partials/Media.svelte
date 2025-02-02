<script>
  export let data = {
    type: "image",
    src: "",
    alt: "",
  };
  export let objectFit = "cover";
</script>

<div class="media is-{data.type}">
  {#if data.type === "image"}
    <img src={data.src} alt={data.alt} style="object-fit: {objectFit}" />
  {/if}
  {#if data.type === "video"}
    <!-- svelte-ignore a11y_media_has_caption -->
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <video src={data.src} alt={data.alt} autoplay muted loop playsinline style="object-fit: {objectFit}" />
  {/if}
</div>

<style>
  .media {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
