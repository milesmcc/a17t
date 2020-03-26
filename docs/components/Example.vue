<template>
  <article class="border border-gray-300 rounded-lg my-5 p-5">
    <div class="example-display">
      <slot></slot>
    </div>
    <details class="pt-2 text-gray-700 text-sm">
      <summary class="cursor-pointer">Source code</summary>
      <pre
        class="p-3 bg-gray-800 rounded text-white overflow-scroll"
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
  mounted() {
    this.$el.querySelector('.example-code').innerHTML = escapeHtml(
      pretty(this.$el.querySelector('.example-display').innerHTML)
    )
  }
}
</script>
