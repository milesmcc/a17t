---
layout: element
tab: elements
subtab: element-section
category: Layout
title: Section
description: An opinionless element that applies context-dependent color
source: https://github.com/milesmcc/a17t/blob/master/src/layout/section.css
selectors:
  - .section
features:
  - Tones
  - Priorities
display: Inherited
examples:
  - "<div class='card ~neutral !low p-0 border'>\n  <div class='p-4'>\n    <h2 class='heading text-xl mb-1'>Welcome to the team.</h2>\n    <p>Lorem ipsum dolor sit amet. I forget the rest of lorem ipsum and don't want to look it up, so here's this instead.</p>\n  </div>\n  <section class='section ~info p-4'>\n    <span class='button ~info !high'>Save</span>\n    <span class='button bg-transparent'>Go Back</span>\n  </section>\n</div>"
variables:
  - name: --color-content
    type: color
    description: sets the content (text) color
  - name: --color-background
    type: color
    description: sets the background color
---

# Overview

Sections are a utility element for applying context-aware text and background colors to a section of your layout. It has no padding; it has no border; it has no box shadow. It's there to make your life easier when incorporating color and priority into your interface.

The `.section` element is responsible for the color in [cards](/layout/card) and [asides](/layout/aside).

# Considerations

**Low level** --- The `.section` element is very low level. In some cases, more specific elements, like [cards](/layout/card) and [asides](/layout/aside), are more appropriate.

# Variants

Sections have full tone and priority support. (They are the primary way that tones and priorities are implemented!)

{% for priority in site.priorities %}

##### {{priority|capitalize}} Priority

{% capture example %}
<div class="md:grid grid-cols-2 gap-4">
  {% for tone in site.tones %}
  <section class="section ~{{tone}} !{{priority}}">Sections aren't meant to be used alone.</section>
  {% endfor %}
</div>
{% endcapture %}
{% include example.html code=example %}

{% endfor %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% include todo_more.html %}
