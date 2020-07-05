---
layout: element
tab: elements
subtab: element-code
category: Typography
title: Code
description: A small selector for inline code
source: https://github.com/milesmcc/a17t/blob/master/src/typography/code.css
selectors:
  - .code
display: Inline
examples:
  - "This is <code class='code'>inline code</code>."
variables:
  - name: --code-background
    type: color
    description: sets the background color
    default: theme('colors.neutral.200')
---

# Overview

The code element displays inline code in a monospace font. Inside of a [content element](/typography/content), it is applied to the `<code>` tag.  

# Considerations

**Spacing** --- Unless used inside a content element, the code element defines no margin. That means that you'll need to manually position it inside your text itself.

# Variants

Beyond customization, the code element has no variants.

# Accessibility

**Use with `<code>`.** Using the `.code` element on a `<code>` tag will help screenreaders and other assistive technologies better represent your content.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
It's pretty simple. There's nothing to it. It's a <code class="code">.code</code> element!
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
