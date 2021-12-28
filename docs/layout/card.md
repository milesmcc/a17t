---
layout: element
tab: elements
subtab: element-card
category: Layout
title: Card
description: A block element for mostly self-contained units of content
source: https://github.com/milesmcc/a17t/blob/master/src/layout/card.js
selectors:
  - .card
features:
  - Tones
  - Priorities
display: Block
examples:
  - "<div class='card ~info @high'>\n  <strong>Hello world!</strong> This is a card... inside another card. In practice, you probably wouldn't want to do this. No need to nest cards. They're great on their own!\n</div>\n<div class='card mt-2'>\n  <strong>Hi!</strong> This is also a card...\n</div>"
---

# Overview

Cards are an extremely versatile element. They're very helpful when creating any kind of self-contained content block --- whether that's an alert, form section, or anything else.

There are two main types of cards in a17t: basic cards and toned cards. Basic cards are simple and use only a single CSS selector, `.card`. A basic card will have a transparent background and a subtle gray border with a bit of box shadow. Toned cards introduce --- you guessed it --- color, and you can access them using `.card ~color` (for example, `card ~pink`).

As you might expect, toned cards have full priority support, so you can apply the `@low` and `@high` classes however you'd like. Applying these classes to basic cards is not recommended.

# Considerations

**Overuse** --- Cards are very easy to overuse. When creating a card, ask yourself "do I really need a card for this?" If the answer is no, then don't. Cards look great and get the job done, but should be used in moderation. (If everything in your interface is in a card, is anything really in a card?)

**Semantic structure** --- It's tempting to always use a `.card` with a `<div>`. Often, there's a more descriptive tag available, like `<article>` or `<section>`. Because a `.card` has little semantic meaning on its own, using it with a `<div>` can lead to inscrutable code.

# Variants

### Basic Cards

Basic cards are simple, and have a simple white background. This is often the best choice --- applying color to cards can often be overwhelming. To create a basic card, a simple `<div class="card">...</div>` will suffice.

{% capture example %}
<section class="card">
    <p><strong>This is basic card.</strong> Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
</section>
{% endcapture %}
{% include example.html code=example %}

### Toned Cards

Cards have full tone and priority support. Use these in moderation, as they are very visually prominent! Overusing too many toned cards can quickly make an interface overwhelming.

{% for priority in site.priorities %}

##### {{priority|capitalize}} Priority

{% capture example %}
<div class="md:grid grid-cols-2 gap-4">
  {% for tone in site.tones %}
  <section class="card ~{{tone}} @{{priority}}">
      <p><strong>This is ~{{tone}} !{{priority}}.</strong> Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
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
<div class="card md:flex max-w-lg">
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
<form class="card p-0 max-w-sm">
  <section class="p-4 flex flex-col gap-4">
    <div>
      <label class="label" for="toolkit">Current job</label>
      <div class="select ~neutral @low my-1">
        <select>
          <option>Teacher</option>
          <option>Engineer</option>
          <option>Firefighter</option>
          <option>Other</option>
        </select>
      </div>
      <p class="support">If you are a student, select 'other.'</p>
    </div>
    <div>
      <label class="label" for="toolkit">Favorite toolkit</label>
      <input id="toolkit" type="text" class="input ~critical !normal my-1" placeholder="At least 8 characters..."
        value="Not a17t">
      <p class="support ~critical">The correct answer is a17t!</p>
    </div>
  </section>
  <section class="section ~neutral flex gap-2 p-4">
    <span class="button ~info @high">Submit</span>
    <span class="button ~neutral @low">Save draft</span>
  </section>
</form>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
