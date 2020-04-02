---
layout: element
tab: element
subtab: element-progress
category: Information
title: Progress
description: A block element to show completion, fullness, and other ratios
source: https://github.com/milesmcc/a17t/blob/master/src/information/progress.css
selectors:
  - .progress
features:
  - Tones
display: Block
examples:
  - "<progress class='progress' value='75' max='100'>75%</progress>"
variables:
  - name: --progress-height
    type: size
    description: sets height
  - name: --progress-background-color
    type: color
    default: Gray 300
    description: sets background color (unfilled portion)
  - name: --color-core
    type: color
    description: sets fill color
---

# Overview

It's a relatively simple progress bar, intended to be applied to an HTML `<progress>` element. At its core, a progress bar is a way to visualize a ratio.

# Considerations

**Color** --- The progress bar uses the `--color-core`, which is the 'pure' variant of the current section color. Don't expect the progress bar to perfectly match the text surrounding it. (If it did, the progress bar would probably look too dark.)

**Indeterminate values** --- A future version of a17t will include support for indeterminate progress bars. For now, consider using a [loading spinner](/utils/loading).

# Variants

Progress bars have full tone support.

{% capture example %}
{% for tone in site.tones %}
<progress class="progress ~{{tone}} mb-4" value="75" max="100">75%</progress>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<p class="label mb-2">Categories</p>
<p><span class='chip ~neutral mb-1'>Design</span> <span class='chip ~neutral mb-1'>Architecture</span> <span class='chip ~neutral mb-1'>New York</span> <span class='chip ~neutral mb-1'>Urbanism</span></p>
{% endcapture %}
{% include example.html code=example %}

TODO: more
