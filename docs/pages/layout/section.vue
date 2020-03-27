<template>
  <Atom
    name="Section"
    description="An assumptionless grouping element with support for contextual color."
  >
    <Example>
      <section class="section ~urge">
        A section makes no assumptions about how you use it&mdash;which means
        you'll find yourself using it everywhere.
      </section>
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
