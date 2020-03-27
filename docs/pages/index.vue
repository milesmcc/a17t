<template>
  <section>
    <h3 class="heading text-2xl">At a glance</h3>
    <h5 class="support text-xl">
      All the main atoms on a single page for your viewing pleasure.
    </h5>
    <hr class="sep" />
    <section>
      <h4 class="heading text-xl">Layout</h4>
      <p class="content">There was a sep right before this.</p>
      <Example>
        <article class="card p-0 max-w-sm mx-auto">
          <section class="section p-4">
            <h3 class="heading text-2xl">I'm a card.</h3>
            <p class="content py-2">{{ lipsum }}</p>
            <p class="content py-2">{{ lipsum }}</p>
            <p class="content py-2">{{ lipsum }}</p>
          </section>
          <section class="section ~urge p-4">
            <p class="supra text-center">I am a supra</p>
          </section>
        </article>
      </Example>
    </section>
    <hr class="sep" />
    <section>
      <h4 class="heading text-xl">Typography</h4>
      <Example>
        <div class="max-w-md">
          <p class="supra">March 27th, 2019</p>
          <h3 class="heading text-xl">Meditations on Lorem Ipsum</h3>
          <h5 class="support text-lg pb-2">
            This is a helpful supporting title (subtitle).
          </h5>
          <p class="content py-1">
            {{ lipsum }} <a href="https://rmrm.io">Ego</a> sum qui sum.<sup
              >1</sup
            >
          </p>
          <p class="caption"><sup>1</sup> This latin may be incorrect.</p>
        </div>
      </Example>
    </section>
  </section>
</template>

<script>
import Example from '@/components/Example.vue'

export default {
  components: { Example },
  data() {
    return {
      tones: process.env.tones,
      priorities: process.env.priorities,
      lipsum: process.env.lipsum
    }
  }
}
</script>
