<template>
  <article class="my-5 p-4 rounded-lg border border-gray-300">
    <div class="example-display">
      <slot></slot>
    </div>
    <details class="pt-3">
      <summary class="cursor-pointer caption" :open="expanded"
        >Source code</summary
      >
      <pre
        class="card ~neutral !high overflow-scroll"
      ><code class="example-code"></code></pre>
    </details>
  </article>
</template>

<script>
import pretty from 'pretty'

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br>')
    .replace(/ /g, '&nbsp;')
}

export default {
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$el.querySelector('.example-code').innerHTML = escapeHtml(
      pretty(this.$el.querySelector('.example-display').innerHTML)
    )
  }
}
</script>
