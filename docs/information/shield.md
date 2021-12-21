---
layout: element
tab: elements
subtab: element-shield
category: Information
title: Shield
description: An element to make icons look good at any size
source: https://github.com/milesmcc/a17t/blob/master/src/information/shield.css
selectors:
  - .shield
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<span class=\"shield ~info\">\n  <span class=\"icon\">\n    <i class=\"fas fa-atom fa-lg\"></i>\n  </span>\n</span>"
variables:
  - name: --color-fill
    type: color
    description: sets background color
  - name: --color-content
    type: color
    description: sets icon color
  - name: --shield-padding-x
    type: size
    description: sets the x-padding
    default: 1rem
  - name: --shield-padding-y
    type: size
    description: sets the y-padding
    default: 1rem
---

# Overview

Icons are fundamental to many designs, but they often don't look good on their own. They usually need to be paired with some text of approximately the same size --- for example, in a [portal](/interaction/portal). The shield makes it possible for icons to look good on their own by giving them a muted circular background --- although this behavior, like everything else in a17t, can be customized.

# Considerations

**Responsiveness** --- What looks proportional on desktop might not look right on mobile, and vice versa. As always, be sure to test your design on all screen sizes to ensure a reliable experience.

**Padding** --- By default, shields' padding is defined in `rem`s. If you're using an icon that's larger than the root em size, you'll want to manually adjust the padding using the `--shield-padding-x` and `--shield-padding-y` variables.

**Icons** --- For the best experience, a shields' sole element should be an [icon element](/information/icon). If you're using a shield in another context, though, don't feel bound by this recommendation.

# Variants

Icons have full tone and priority support, although using the `!normal` (default) priority is recommended.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority {% if priority == "normal" %}(Recommended){% endif %}
{% capture example %}
{% for tone in site.tones %}
<span class="shield ~{{tone}} !{{priority}} ml-1 mb-1">
  <span class="icon">
    <i class="fas fa-swatchbook fa-lg"></i>
  </span>
</span>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% capture example %}

<div class="flex">
  <div class="shield ~info mr-4 self-start">
    <span class="icon">
      <i class="fas fa-pen-nib fa-lg"></i>
    </span>
  </div>
  <div class="flex-grow">
  <h4 class="heading text-xl mb-1">Atomic &amp; flexible</h4>
  <p>a17t provides core, single-class interface elements and empowers you to assemble them your way. And
    everything is easily customizable using CSS variables, so you'll never need to settle for &ldquo;good enough.&rdquo;
  </p>
  </div>
</div>

{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
