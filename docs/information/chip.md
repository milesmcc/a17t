---
layout: element
tab: elements
subtab: element-chip
category: Information
title: Chip
description: An inline element for statuses, labels, categories, and more
source: https://github.com/milesmcc/a17t/blob/master/src/information/chip.css
selectors:
  - .@chip
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<span class='@chip ~gray'>Chip</span>\n<span class='@chip ~green'>Chip</span>\n<span class='@chip ~yellow'>Chip</span>\n<span class='@chip ~red'>Chip</span>\n<span class='@chip ~blue'>Chip</span>\n<span class='@chip ~purple'>Chip</span>"
variables:
  - name: --color-fill
    type: color
    description: sets background color
  - name: --color-content
    type: color
    description: sets text color
---

# Overview

A chip (also called a "tag" or "label") is a helpful element for representing categorical data. For example, you might use a chip to display the status of an item, to list its features (as this documentation does), or to display tags.

Most chips will generally be only a word or two. For longer content, consider using a [card](/layout/card) instead.

# Considerations

**Margins** --- When using badges, be mindful of margins. In most cases, you'll want an y-margin of at least `1rem` to prevent visual overlap when wrapping. (Like all a17t elements, badges specify no margin themselves.) Using Tailwind? Just add `mb-1` to any chip that could have another chip wrap below it.

**Similarity to Buttons** --- Depending on your layout, chips can look a lot like buttons. Avoid using chips and buttons with the same priority near one another to prevent confusion over which elements are interactive.

# Variants

Chips have full tone and priority support.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority
{% capture example %}
{% for tone in site.tones %}
<span class="chip ~{{tone}} !{{priority}} mb-1">Category</span>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<p class="label mb-2">Categories</p>
<p><span class='chip ~neutral mb-1'>Design</span> <span class='chip ~neutral mb-1'>Architecture</span> <span class='chip ~neutral mb-1'>New York</span> <span class='chip ~neutral mb-1'>Urbanism</span></p>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
