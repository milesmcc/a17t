---
layout: element
tab: elements
subtab: element-label
category: Typography
title: Label
description: An element to apply a strong label (often to a form field)
source: https://github.com/milesmcc/a17t/blob/master/src/typography/label.js
selectors:
  - .label
features:
  - Tones
  - Priorities
display: Inherited
examples:
  - "<label class='label' for='name'>What is your name?</label>\n<input class='input my-2' type='text' id='name' placeholder='Miles McCain'>"
---

# Overview

The label element is used for visually prominent labels. They are often helpful for building form interfaces. The label element is simple: it applies a medium weight to its content.

# Considerations

**Intrusiveness** --- Labels are intended to be seen. For a less intrusive label that can fall into the background, use a [supra](/typography/supra).

# Variants

Labels have full tone and priority support. They will automatically look appropriate in most contexts.

{% capture example %}
{% for tone in site.tones %}
<p class="label ~{{tone}}">This is a {{tone}} label.</p>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

**Use with label (`<label>`) elements.** Using the `.label` element on `<label>` tags will help screenreaders and other assistive technologies better represent your content.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<label class="label" for="question">Where is a fun place to be?</label>
<input class="input my-2" id="question" type="text" value="The Recurse Center">
<p class="support">There are two right answers.</p>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<div class="~critical @low">
  <label class="label" for="biggame">Who will win the Big Game?</label>
  <input class="input my-2" id="biggame" type="text" value="Berkeley">
  <p class="support">That's wrong. Stanford will win.</p>
</div>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}