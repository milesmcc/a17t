---
layout: atom
tab: atom
subtab: atom-icon
category: Information
title: Icon
description: A utility atom to wrap all icons, regardless of source
source: https://github.com/milesmcc/a17t/blob/master/src/information/icon.css
selectors:
  - .icon
display: Inline Flex
examples:
  - "<span class=\"icon m-2 ~positive !low\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"13\">\n    <g stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\">\n      <path d=\"M11.29 11.71l-4-4\" />\n      <circle cx=\"5\" cy=\"5\" r=\"4\" />\n    </g>\n  </svg>\n</span>"
variables:
  - name: --color-content
    type: color
    description: sets icon color
  - name: --icon-width
    type: size
    description: sets icon width
    default: 1em
  - name: --icon-height
    type: size
    description: sets icon height
    default: 1em
---

# Overview

Icons are deceptively difficult. Usually, they are loaded from a separate source (sometimes even a separate origin), and can be one of the last elements to appear on a page. When they do finally load, they often cause the interface to resize.

The icon atom has two purposes: to give all icons a set width and height (`1em` by `1em` by default) so that the page doesn't resize when they load, and to ensure that the icon is the correct color (by setting the `color` and `fill` properties).

If you're looking for a nice way to display icons in your content, consider using the icon atom in conjunction with a [shield](./shield).

# Considerations

**Margins** --- Icons have no margins by default. (This will make your life easier.) Just remember to set them yourself!

**Vertical alignment** -- By default, icons are vertically aligned with the middle of the text. If the `font-size` of the surrounding text is not the same as the icon, you may need to tweak things.

# Variants

Icons inherit their color from their context using the `--color-content` variable.

{% capture example %}
{% for tone in site.tones %}
<span class="icon m-2 ~{{tone}} !low">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13">
        <g stroke-width="2" stroke="currentColor" fill="none">
            <path d="M11.29 11.71l-4-4" />
            <circle cx="5" cy="5" r="4" />
        </g>
    </svg>
</span>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

TODO: more
