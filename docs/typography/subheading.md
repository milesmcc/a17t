---
layout: element
tab: elements
subtab: element-subheading
category: Typography
title: Sub&#8203;heading
description: A flexible element for secondary text accompanying a heading
source: https://github.com/milesmcc/a17t/blob/master/src/typography/subheading.js
features:
  - Tones
  - Priorities
selectors:
  - .subheading
display: Inherited
examples:
  - "<h3 class='heading'>This is a heading.</h3>\n<h5 class='subheading'>This is a subheading!</h5>"
---

# Overview

The subheading element makes text look like a muted heading. It's great to pair with a heading, but is usually unnecessary when followed by body text.

It makes the text larger (`xl`) and applies a slightly muted color depending on tone.

# Considerations

**Spacing** --- Unless used inside a content element, the subheading element defines no margin. That means that you'll need to manually position it inside your layout.

# Variants

The subheading has full contextual tone and priority support.

{% capture example %}
{% for tone in site.tones %}
<p class="subheading ~{{tone}}">This is a toned subheading.</p>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<p class="subheading">I'm a little subheading. I'm honestly pretty rare.</p>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}