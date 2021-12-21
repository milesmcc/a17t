---
layout: element
tab: elements
subtab: element-sep
category: Layout
title: Sep
description: A helper element to add visual separation between elements
source: https://github.com/milesmcc/a17t/blob/master/src/layout/sep.css
selectors:
  - .sep
display: Inherited
examples:
  - "<p>Before the separator.</p>\n<hr class='sep'>\n<p>After the separator.</p>"
variables:
  - name: --sep-height
    description: sets the sep's height
    default: 3rem
    type: size
---

# Overview

The `.sep` is a simple element to provide spacing within an interface. It's usually applied to an `<hr>` tag. While it doesn't provide a fully featured alternative to margins, it is very helpful when scaffolding interfaces.

If you think that using `<hr class="sep">` instead of `margin-bottom` is an absolute abomination, you're not alone --- it goes against a lot of norms in web development, and you're under no obligation to use it. But there's also a growing movement that insists spacing should be a first-class component. This element caters to the latter crowd.

# Considerations

**Maintainability** --- Using a `.sep` is often more maintainable than using bottom or top margins, as it requires you to think about how the spacing interacts with your page's structure.

**Separation of concerns** --- If a component specifies its own margin, then that component isn't truly separated from the page in which it's embedded. Using a `.sep` is a viable alternative.

**Convention** --- If your goal is to follow traditional web development best practices, avoid using a `.sep` and use margins instead.

# Variants

The `.sep` element has no variants --- it's just a vertical spacer. If you're using Tailwind, you can change its height by using `h-x` utilities (e.g., `h-12`, `h-8`, `h-24`, etc.).

# Accessibility

**Visual separation is secondary to semantic separation.** Not everyone will interact with your interface visually. It's important that all visual separations are supported semantically in your content --- for example, with a header, card, or other element that indicates a logical separation from what came before.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<p>Seps are a very simple element. You can use them pretty much anywhere.</p>
<hr class="sep">
<p>The only limit is your imagination!</p>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
