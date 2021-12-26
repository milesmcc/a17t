---
layout: element
tab: elements
subtab: element-progress
category: Information
title: Progress
description: A block element to show completion, fullness, and other ratios
source: https://github.com/milesmcc/a17t/blob/master/src/information/progress.js
selectors:
  - .progress
features:
  - Tones
display: Block
examples:
  - "<progress class='progress ~neutral' value='75' max='100'>75%</progress>"
---

# Overview

It's a relatively simple progress bar, intended to be applied to an HTML `<progress>` element. At its core, a progress bar is a way to visualize a ratio.

# Considerations

**Color** --- The progress bar uses the `--color-accent-high`, which is a 'middle' variant of the current section color. Don't expect the progress bar to perfectly match the text surrounding it. (If it did, the progress bar would probably look too dark.)

**Indeterminate values** --- A future version of a17t will include support for indeterminate progress bars. For now, consider using a [loading spinner](/utils/loading).

# Variants

Progress bars have full tone support.

{% capture example %}
{% for tone in site.tones %}
<progress class="progress ~{{tone}} @high {% if forloop.last == false %}mb-4{% endif %}" value="75" max="100">75%</progress>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

{% include accessibility_defaults.html %}

{% include todo_more.html %}
