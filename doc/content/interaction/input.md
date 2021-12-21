---
layout: element
tab: elements
subtab: element-input
category: Interaction
title: Input
description: A specialized field for HTML input elements
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/input.css
selectors:
  - .input
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<input type='text' class='input ~neutral !normal w-auto' placeholder='Hello world'>"
variables:
  - name: --color-light
    type: color
    description: sets default border color
  - name: --field-shadow-transition-speed
    type: time
    description: sets the speed of the hover and focus transition
    default: 75ms
  - name: --fallback-box-shadow
    type: box shadow
    description: sets the base box shadow
  - name: --field-disabled-opacity
    type: opacity
    description: sets the opacity of disabled fields
    default: 0.8
  - name: --field-hover-box-shadow
    description: sets additional box shadow on hover
    type: box shadow
    default: 0 0 1px 1px var(--color-light)
  - name: --field-focus-box-shadow
    description: sets additional box shadow on focus
    type: box shadow
    default: 0 0 0 2px var(--color-light)
---

# Overview

Inputs are a specialized type of [field](/interaction/field) for use with most `<input>` elements. For more information on why this is useful, check out the [field documentation](/interaction/field).

Currently, the `.input` selector is simply an alias for the `.field` selector. It's possible that input-specific features will be added in the future.

# Considerations

**Multiple (adjacent) inputs** --- You can build adjacent inputs by removing the left or right border from the fields and setting their x-margin to zero. Beware that using adjacent fields can result in a poor user experience on mobile.

# Variants

Inputs have full tone, priority, and disabling support. Priorities are communicated through elevation.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority
{% capture example %}
{% for tone in site.tones %}
<input class="input ~{{tone}} !{{priority}} mb-4 mr-4 w-auto" placeholder="This is an input" type="text">
{% endfor %}
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

###### Disabling

{% capture example %}
<input class="input ~neutral" value="This is a disabled input" type="text" disabled>
{% endcapture %}
{% include example.html code=example %}

# Accessibility

**Use Aria roles and labels.** When building forms, it's easy to rely on visual guidelines to show relationships between elements. Unfortunately, this doesn't help those interacting with your site using a screenreader or other assistive technologies. For this reason, it's important to use [ARIA labels and roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) wherever possible.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<div>
  <p class="label">Your name</p>
  <input class="my-1 field" type="text" placeholder="Miles McCain">
  <p class="support">Just your first name is fine, too.</p>
</div>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<div>
  <p class="label">Your name</p>
  <input class="field my-1 ~critical" type="text" placeholder="Miles McCain" value="hello@sendmiles.email">
  <p class="support ~critical">That's an email, not a name!</p>
</div>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
