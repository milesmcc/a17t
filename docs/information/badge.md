---
layout: element
tab: elements
subtab: element-badge
category: Information
title: Badge
description: A small inline status indicator helpful for unread counts, notifications, and more
source: https://github.com/milesmcc/a17t/blob/master/src/information/badge.css
selectors:
  - .badge
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<span class='badge ~neutral'>Badge</span>\n<span class='badge ~positive'>Badge</span>\n<span class='badge ~warning'>Badge</span>\n<span class='badge ~critical'>Badge</span>\n<span class='badge ~info'>Badge</span>\n<span class='badge ~urge'>Badge</span>"
variables:
  - name: --color-fill
    type: color
    description: sets background color
  - name: --color-content
    type: color
    description: sets text color
  - name: --badge-size
    type: size
    description: sets height
    default: 0.6em
---

# Overview

The badge is a small inline element ideal for data heavy interfaces. It's useful for drawing attention to the elements near it -- for example, as a "New" label or unread count.

Badges are nearly always pinned on another element (i.e., inline). If you're thinking about using a badge on its own, consider a [chip](/chip) instead.

# Considerations

**Vertical alignment** --- Badges are vertically aligned with the middle of the text surrounding it. While normally this results in correct positioning, it can look odd when badges are followed by non-text elements.

**Reduced text size** --- Badges are best preceded with text that is of size `1 rem`. If they are used next to text of other sizes, the badge will look disproportional. (You can resize setting `--badge-size`.)

**Medium font weight** --- To compensate for their reduced text size, badges by default have an increased text weight (medium) to aid readability.

**Spacing** --- When using badges, be mindful of margins. In most cases, you'll want an x-margin of at least `1rem`. (Like all a17t elements, badges specify no margin themselves.)

# Variants

Badges have full tone and priority support.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority
{% capture example %}
{% for tone in site.tones %}
<span class="badge ~{{tone}} !{{priority}}">New</span>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<p>Unread <span class='badge ~critical !high'>55</span></p>
{% endcapture %}
{% include example.html code=example %}

TODO: more
