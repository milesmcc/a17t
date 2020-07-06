---
layout: info
title: Customize
tab: customize
description: Explore a17t's advanced customization options with an interactive theme builder
---

{% include sample_themes.html %}

Customizing a17t is unlike customizing most other CSS libraries. With a17t, everything is done at runtime! There are no complicated config files to setup in your repository, no build tools to run, and no conflicts to manage. That's because everything is just CSS variables.

### Preprocessors

You can still run a17t through a preprocessor like PostCSS; after all, a17t is just CSS! The point here is that you don't _need_ to use a preprocessor to take advantage of a17t's customization options.

### Benefits

a17t's approach to customization has a number of benefits:

* You can display different themes based on media queries (dark mode, mobile, etc.) without any JavaScript
* You can dynamically update the theme with JavaScript (as this page does)
* You can serve a17t from a CDN without giving up any customization options

### Ways to Customize

There are two main ways to customize a17t: _modifying the primitives_ and _overriding the elements_.

**Modifying the primitives** means updating core variables such as colors, border radii, spacing, and font sizes. Every a17t element (as well as a17t's builtin Tailwind distribution) builds off these variables, so changing them allows you to quickly (and consistently) change the look and feel of a17t with minimal fuss. This is the fastest and most convenient way to make sweeping changes to your a17t distribution.

**Overriding the elements** means updating element-specific variables (listed at the bottom of each element's page in the documentation) and changing specific CSS attributes using your own custom CSS. While this approach is sometimes necessary, you shouldn't need it too often. (If you find yourself overriding elements often, ask yourself if modifying the primitives would be a better approach.)

### Custom Theme Builder

By updating a17t's primitives, you can make drastic changes to the look and feel of the library. This custom theme builder is designed to give you a head start in building a theme by letting you easily change the most common variables.

Know that customizing a17t isn't limited to changing just these variables! There are dozens of other element-specific and higher-level variables that you can change; this is just scratching the surface of what you can do.

<div class="card ~neutral !low">
    <p>Eventually, the theme builder will be available here. Check back soon! For now, you can explore the themes at the top of the page.</p>
</div>