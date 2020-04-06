---
layout: element
tab: elements
subtab: element-field
category: Interaction
title: Field
description: A boilerplate element to apply to fields of (nearly) all types
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/field.css
selectors:
  - .field
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<input type='text' class='field ~neutral !normal w-auto' placeholder='Hello world'>"
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

Form fields are a fundamental interface element. They're also hard to get right: you need to think about hover animations, focusing, overriding user-agent stylesheets, cursors, disabled states, 'readonly' inputs, validation, borders, line heights, and more. Fortunately, a17t does all this for you.

Apply a `.field` selector whenever you want a form-style field to look nice. All the specialized field inputs are based off of this `.field` element: [Inputs](/interaction/input), [Selects](/interaction/select), and [Textareas](/interaction/textarea).

# Considerations

**Specialized fields** --- The `.field` element is a relatively low-level utility. Often, you'll want to use a more specific element when you're working with form inputs (see list above).

**Multiple (adjacent) fields** --- You can build adjacent fields by removing the left or right border from the fields and setting their x-margin to zero. Beware that using adjacent fields can result in a poor user experience on mobile.

# Variants

Fields have full tone and priority support. Priorities are communicated through elevation.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority
{% capture example %}
{% for tone in site.tones %}
<input class="field ~{{tone}} !{{priority}} mb-4 mr-4 w-auto" placeholder="Type something..." type="text">
{% endfor %}
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

# Accessibility

**Use Aria roles and labels!** When building forms, it's easy to rely on visual guidelines to show relationships between elements. Unfortunately, this doesn't help those interacting with your site using a screenreader or other assistive technologies. For this reason, it's important to use [ARIA labels and roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) wherever possible.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<div>
  <p class="label">Your name</p>
  <input class="field my-1" type="text" placeholder="Miles McCain">
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
