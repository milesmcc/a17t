---
layout: element
tab: elements
subtab: element-select
category: Interaction
title: Select
description: A dropdown-style single select element
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/select.css
selectors:
  - .select
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<div class='select !normal max-w-xs'>\n  <select>\n    <option>Choice A</option>\n    <option>Choice B</option>\n    <option>Choice C</option>\n  </select>\n</div>"
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
  - name: --select-chev-offset
    description: how much the chevron should be offset
    type: size
    default: 1em
  - name: --color-core
    description: sets the color of the chevron
    type: color
---

# Overview

Selects are a common interactive element for choosing among a list of predefined options. The a17t `.select` element is a specialized type of [field](/interaction/field) with a downward chevron.

Unlike some elements, the select element must be applied as the _parent_ of the actual HTML `<select>` element it's being applied to. This allows the chevron to be inserted automatically.

# Considerations

**Long options** --- By default, `.select` elements (like all `.field`-based elements) have a width of 100%. This is so that the width is determined by your interface, not your data. Extremely long options in your select will be cut off by the chevron.

# Variants

Selects have full tone, priority, and disabling support. Priorities are communicated through elevation.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority
{% capture example %}
<section class="md:grid grid-cols-3 gap-4">
{% for tone in site.tones %}
  <div class="select ~{{tone}} !{{priority}}">
    <select>
      <option>~{{tone}} !{{priority}}</option>
      <option>Another option</option>
      <option>A very long option that will overlap with the chevron, hopefully.</option>
    </select>
  </div>
{% endfor %}
</section>
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

###### Disabling

{% capture example %}
<div class="select ~neutral">
  <select disabled>
    <option>This select is disabled</option>
    <option>Another option</option>
    <option>A very long option that will overlap with the chevron, hopefully.</option>
  </select>
</div>
{% endcapture %}
{% include example.html code=example %}

# Accessibility

**Use Aria roles and labels.** When building forms, it's easy to rely on visual guidelines to show relationships between elements. Unfortunately, this doesn't help those interacting with your site using a screenreader or other assistive technologies. For this reason, it's important to use [ARIA labels and roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) wherever possible.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<p class="label">Your batch</p>
<div class="select my-1 max-w-xs">
  <select>
    <option>Spring 1</option>
    <option>Spring 2</option>
    <option>Summer 1</option>
    <option>Summer 2</option>
  </select>
</div>
<p class="support">If you're not sure, please reach out.</p>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<p class="label">Your batch</p>
<div class="select ~critical my-1 max-w-xs">
  <select>
    <option>Spring 1</option>
    <option>Spring 2</option>
    <option>Summer 1</option>
    <option>Summer 2</option>
  </select>
</div>
<p class="support ~critical">Unfortunately, that batch is full.</p>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
