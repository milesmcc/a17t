---
layout: element
tab: elements
subtab: element-content
category: Typography
title: Content
description: A just-add-water wrapper element for content-heavy markup
source: https://github.com/milesmcc/a17t/blob/master/src/typography/content.css
selectors:
  - .content
features:
  - Spacing
  - Auto-Elements
display: Inherited
examples:
  - "<section class='content'>\n  <h2>Hello world!</h2>\n  <p>The content element makes sure things like spacing, colors, and sizing\n    look right for the 'classic' HTML content tags.</p>\n  <blockquote>\n    <p>It's very helpful for rendering markdown!</p>\n    <p>Have as many paragraphs as you want.</p>\n    <cite>&mdash; Miles McCain</cite>\n  </blockquote>\n</section>"
variables:
  - name: --body-line-height
    type: ratio
    description: sets the line height
    default: 1.5
  - name: --family-primary
    type: fonts
    description: sets the body text font family
  - name: --family-secondary
    type: fonts
    description: sets the display text (heading) font family
  - name: --color-title
    type: color
    description: sets the title color
---

# Overview

The content element automatically styles a set of core HTML tags without requiring any classes be applied directly. It makes sure that their relative spacing is nice, too &mdash; from a typographical perspective, this element is somewhat opinionated. Fortunately, its opinions are backed by typographic best practices.

The content element will automatically style the following elements, if inside a `.content` selector:

* `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` (as [heading](/typography/heading) with automatic sizing)
* `<code>` (as [code](/typography/code))
* `<pre>` (as [pre](/typography/pre))
* `<kbd>` (as [kbd](/typography/kbd))
* `<li>`, `<ol>`, `<ul>`
* `<a>`
* `<strong>`
* `<b>`
* `<blockquote>` (as a neutral [aside](/layout/aside))
* `<table>` (as a [table](/information/table))

In addition, the content element will apply the following spacing rules to its children (note that units are [Tailwind spacing units](https://tailwindcss.com/docs/margin/)).

* At least a margin of 3 between each element (including paragraphs)
* A margin of 12 before each h1, unless it's the first element
* A margin of 10 before each h2, unless it's the first element
* A margin of 8 before each h3, unless it's the first element
* A margin of 6 before each h4, h5, h6, unless it's the first element
* A horizontal margin of 1px before and after `<code>` and `<kbd>` elements
* A left margin of 8 on all lists
* A margin of 5 before and after `<blockquote>`s (and a margin of 1 before the `<cite>` element)   

# Considerations

**Cascading effects** --- The content element defines spacing and styling for core HTML elements, even if no classes are applied. While this is partly what makes it useful (after all, it makes displaying rendered markdown a breeze), it can also have cascading effects that make it difficult to build complex components _inside_ it. Use the content class on as little content as you can to avoid these side effects. (It's perfect to use on your body text, for example, but avoid setting it on your root `<body>` element.)

# Variants

Beyond customization, the content element has no variants.

# Accessibility

**The content block is generally good for accessibility.** That's because it encourages the use of semantic HTML elements, like `<p>`, `<h1>`, and `<blockquote>`. And, because most of a content element is just text, screenreaders can handle it perfectly.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
Just look at this page! It's all inside a <code>.content</code> selector! It's just rendered markdown.
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
