<template>
  <Atom
    name="Sep"
    description="A spacing element that visually separates content with minimal fuss."
  >
    <Example>
      <p>This is content before the separator.</p>
      <hr class="sep" />
      <p>This is content after the separator.</p>
    </Example>
  </Atom>
</template>

<script>
import Atom from '@/components/Atom.vue'
import Example from '@/components/Example.vue'

export default {
  components: { Atom, Example },
  data() {
    return {
      tones: process.env.tones,
      priorities: process.env.priorities,
      lipsum: process.env.lipsum
    }
  }
}
</script>
