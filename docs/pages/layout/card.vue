<template>
  <Atom
    name="Card"
    description="A block-style atom for drawing content out from the foreground."
  >
    <Example>
      <div class="card ~info !high">
        <p class="content">
          <strong>Hey!</strong> Check out our new card! And here's a
          <a href="https://rmrm.io">link</a> for good measure.
        </p>
      </div>
    </Example>
    <div v-for="tone in tones" :key="tone">
      <Example>
        <section class="md:grid grid-cols-3 gap-4">
          <div
            v-for="priority in priorities"
            :key="priority"
            class="card my-4 md:my-0"
            :class="[tone, priority]"
          >
            <h3 class="heading text-2xl">{{ tone }} {{ priority }}</h3>
            <p class="content">
              {{ lipsum }}
            </p>
          </div>
        </section>
      </Example>
    </div>
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
