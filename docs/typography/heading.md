---
layout: element
tab: elements
subtab: element-heading
category: Typography
title: Heading
description: A flexible element for larger, more prominent text
source: https://github.com/milesmcc/a17t/blob/master/src/typography/heading.css
features:
  - Tones
  - Priorities
selectors:
  - .heading
display: Inherited
examples:
  - "<h3 class='heading'>This is a heading.</h3>"
variables:
  - name: --family-secondary
    type: font
    description: sets the font family
  - name: --color-title
    type: color
    description: sets the color
---

# Overview

The heading element makes text look like a title or heading. Inside of a [content element](/typography/content), it is applied to the `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>` tags.

It makes the text larger (`3xl`), semibold, and applies tight leading.

# Considerations

**Spacing** --- Unless used inside a content element, the heading element defines no margin. That means that you'll need to manually position it inside your layout.

# Variants

The heading has full contextual tone and priority support.

{% capture example %}
{% for tone in site.tones %}
<h3 class="heading ~{{tone}} @low">This is a toned heading.</h3>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

**Use with heading (`<h1>`, `<h2>`, etc.) elements.** Using the `.heading` element on heading tags will help screenreaders and other assistive technologies better represent your content.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<h3 class="heading">This is a pretty big deal!</h3>
{% endcapture %}
{% include example.html code=example %}


{% capture example %}
<h5 class="heading text-xl">This is a smaller deal!</h5>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<small class="heading text-lg">Headings are tag-agnostic, but you shouldn't be.</small>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}