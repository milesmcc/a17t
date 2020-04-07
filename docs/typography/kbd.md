---
layout: element
tab: elements
subtab: element-kbd
category: Typography
title: Kbd
description: An inline element for representing the keyboard
source: https://github.com/milesmcc/a17t/blob/master/src/typography/kbd.css
selectors:
  - .kbd
display: Inline
examples:
  - "To print, press <kbd class='kbd'>Cmd</kbd> + <kbd class='kbd'>P</kbd>"
variables:
  - name: --kbd-background
    type: color
    description: sets the kbd background
    default: theme("colors.gray.700")
  - name: --kbd-color
    type: color
    description: sets the color
    default: theme("colors.white")
---

# Overview

The kbd element makes text look like a button on the keyboard (perhaps not skeuomorphically, but at least figuratively). Inside of a [content element](/typography/content), it is applied to the `<kbd>` tag automatically.

It applies a dark background and a monospace font.

# Considerations

**Spacing** --- Unless used inside a content element, the kbd element defines no margin. That means that you'll need to manually position it inside your layout.

# Variants

Beyond customization, the kbd element has no variants.

# Accessibility

**Use with kbd (`<kbd>`) elements.** Using the `.kbd` element on `<kbd>` tags will help screenreaders and other assistive technologies better represent your content.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
Press <kbd class="kbd">F</kbd> to pay respects
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}