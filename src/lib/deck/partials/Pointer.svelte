<script>
  export let data = {
    text: "pointiepointpoint",
    color: "var(--c-text)",
    background: "var(--c-highlight)",
    position: "top left",
  };
</script>

<span class="pointer" style="color: {data.color}; background: {data.background}; --bg: {data.background};" data-position={data.position}>
  {@html data.text}
</span>
