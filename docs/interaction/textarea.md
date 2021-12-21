---
layout: element
tab: elements
subtab: element-textarea
category: Interaction
title: Textarea
description: A specialized field for HTML textarea elements
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/textarea.css
selectors:
  - .textarea
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<textarea class='textarea ~neutral !normal' placeholder='Write something...'></textarea>"
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

Textareas are a specialized type of [field](/interaction/field) for use with `<textarea>` elements. For more information on why this is useful, check out the [field documentation](/interaction/field).

Currently, the `.textarea` selector is simply an alias for the `.field` selector. It's possible that textarea-specific features will be added in the future.

# Considerations

The textarea element has no special considerations at this time.

# Variants

Textareas have full tone, priority, and disabling support. Priorities are communicated through elevation.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority
{% capture example %}
<div class="md:grid grid-cols-3 gap-4">
{% for tone in site.tones %}
  <textarea class="textarea ~{{tone}} !{{priority}}" placeholder="This is a textarea"></textarea>
{% endfor %}
</div>
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

###### Disabling

<textarea class="textarea ~{{tone}} !{{priority}}" disabled>This is a disabled textarea!</textarea>

# Accessibility

**Use Aria roles and labels.** When building forms, it's easy to rely on visual guidelines to show relationships between elements. Unfortunately, this doesn't help those interacting with your site using a screenreader or other assistive technologies. For this reason, it's important to use [ARIA labels and roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) wherever possible.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<textarea class="textarea ~neutral !normal" placeholder="This is a textarea placeholder."></textarea>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<textarea class="textarea ~neutral !normal" rows="8">This textarea has 8 rows and actual content.</textarea>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<textarea class="textarea ~neutral !normal" rows="8" disabled>This textarea has 8 rows and is disabled.</textarea>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
