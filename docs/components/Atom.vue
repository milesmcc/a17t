<template>
  <article>
    <section class="pb-5">
      <h1 class="heading text-4xl text-bold">{{ name }}</h1>
      <p class="subheading text-lg">{{ description }}</p>
    </section>
    <section>
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    name: String,
    description: String
  }
}
</script>
