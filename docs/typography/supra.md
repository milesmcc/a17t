---
layout: element
tab: elements
subtab: element-supra
category: Typography
title: Supra
description: A small element that's less disruptive than its sibling, the label
source: https://github.com/milesmcc/a17t/blob/master/src/typography/supra.css
features:
  - Tones
  - Priorities
selectors:
  - .supra
display: Inherited
examples:
  - "<p class='supra'>Have fun</p>"
variables:
  - name: --supra-letter-spacing
    type: size
    description: sets the letter spacing
    default: 0.06rem
  - name: --color-muted
    type: color
    description: sets the color
---

# Overview

The supra element is a label-like element that is less visually prominent than an actual [label](/typography/label). It's helpful for when you want to apply some kind of heading or label to a section that should be _less prominent_ than the content around it.

# Considerations

**Spacing** --- The supra defines no margin on its own. That means that you'll need to manually position it inside your layout.

**Overuse** --- The supra is a jack of all trades. Try not to overuse it: while it isn't visually _prominent_, it is certainly visually _distinct_. Overuse will be apparent!

# Variants

The supra has full contextual tone and priority support.

{% capture example %}
{% for tone in site.tones %}
<p class="supra ~{{tone}} !low">Up is down</p>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<p class="supra">New Release</p>
<p class="font-medium text-2xl text-gray-900 mb-2">Our best album yet!</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit vel arcu sed cursus. Morbi eget diam commodo, bibendum tellus nec, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac facilisis mauris. Aenean luctus arcu velit.</p>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}