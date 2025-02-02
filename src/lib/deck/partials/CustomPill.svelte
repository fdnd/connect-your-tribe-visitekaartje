<script>
  export let data = {
    text: "",
    color: "var(--c-text)",
    background: "var(--c-highlight)",
    position: "top left",
  };
</script>

<span class="pill medium-body font-bold" style="color: {data.color}; background: {data.background};" data-position={data.position}>
  {data.text}
</span>

