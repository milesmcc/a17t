---
layout: element
tab: elements
subtab: element-card
category: Layout
title: Card
description: A block element for mostly self-contained units of content
source: https://github.com/milesmcc/a17t/blob/master/src/layout/card.css
selectors:
  - .card
features:
  - Tones
  - Priorities
display: Block
examples:
  - "<div class='card ~info @high'>\n  <strong>Hello world!</strong> This is what a card can look like.\n</div>"
variables:
  - name: --color-content
    type: color
    description: sets the content (text) color
  - name: --color-background
    type: color
    description: sets the background color
---

# Overview

Cards are an extremely versatile element. They're very helpful when creating any kind of self-contained content block --- whether that's an alert, form section, or anything else.

# Considerations

**Overuse** --- Cards are very easy to overuse. When creating a card, ask yourself "do I really need a card for this?" If the answer is no, then don't. Cards look great and get the job done, but should be used in moderation. (If everything in your interface is in a card, is anything _really_ in a card?)

**Semantic structure** --- It's tempting to always use a `.card` with a `<div>`. Often, there's a more descriptive tag available, like `<article>` or `<section>`. Because a `.card` has little semantic meaning on its own, using it with a `<div>` can lead to inscrutable code.

# Variants

Cards have full tone and priority support.

{% for priority in site.priorities %}

##### {{priority|capitalize}} Priority

{% capture example %}
<div class="md:grid grid-cols-2 gap-4">
  {% for tone in site.tones %}
  <section class="card ~{{tone}} !{{priority}} content">
      <h4>~{{tone}} !{{priority}}</h4>
      <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
  </section>
  {% endfor %}
</div>
{% endcapture %}
{% include example.html code=example classes="bg-neutral-100" %}

{% endfor %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<div class="card ~neutral @low md:flex max-w-lg">
  <img class="rounded-full mx-auto h-20 w-20 md:mr-6 mb-6" src="{{ '/assets/profile_image.png' | relative_url }}">
  <div class="flex-grow text-center md:text-left mb-0">
    <h4 class="heading my-0">Alex Hershenstein</h4>
    <p class="mb-3 mt-2">Alex is a staff designer on the product team.</p>
    <div>
      <span class="chip ~info mb-1">Color Theory</span> <span class="chip ~info mb-1">Product</span> <span
        class="chip ~info mb-1">Dogs</span>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html code=example classes="bg-neutral-100"%}

{% capture example %}
<alert class="card ~critical @high">
  <p><b>Something went wrong!</b> Just kidding. This is just a static demonstration.</p>
</alert>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
