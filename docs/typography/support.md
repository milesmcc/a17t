---
layout: element
tab: elements
subtab: element-support
category: Typography
title: Support
description: An element to apply a supporting label (often to a form field)
source: https://github.com/milesmcc/a17t/blob/master/src/typography/support.js
selectors:
  - .support
features:
  - Tones
  - Priorities
display: Inherited
examples:
  - "<input class='input ~neutral my-2' type='text' placeholder='Miles McCain'>\n<p class='support'>This is a support. Take note!</p>"
---

# Overview

The support element is used for visually secondary labels (usually for supporting---but non-critical---information). They are often helpful for building form interfaces. The support element is very simple: it applies a small font size.

# Considerations

**Intrusiveness** --- Supports are intended to almost fade into the background; you're only supposed to see it if you're looking for it. For a more intrusive element, use a [label](/typography/label).

# Variants

Supports have full tone and priority support. They will automatically look appropriate in most contexts.

{% capture example %}
{% for tone in site.tones %}
<p class="support ~{{tone}} @low">This is a {{tone}} support.</p>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

**Be mindful of font size and color.** By default, support elements can be very small. Combined with their sometimes muted color, they can sometimes be hard to read. While they should still pass accessibility guidelines, they don't _excel_ at them.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<input class="input ~neutral my-1" id="question" type="text" value="The Recurse Center">
<p class="support">There are two right answers.</p>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<div class="~critical @low">
  <input class="input my-1" type="text" value="Berkeley">
  <p class="support">That's wrong. Stanford.</p>
</div>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}