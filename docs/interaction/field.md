---
layout: element
tab: elements
subtab: element-field
category: Interaction
title: Field
description: A boilerplate element to apply to fields of (nearly) all types
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/field.js
selectors:
  - .field
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<input type='text' class='field ~neutral w-auto' placeholder='Hello world'>"
---

# Overview

Form fields are a fundamental interface element. They're also hard to get right: you need to think about hover animations, focusing, overriding user-agent stylesheets, cursors, disabled states, 'readonly' inputs, validation, borders, line heights, and more. Fortunately, a17t does all this for you.

Apply a `.field` selector whenever you want a form-style field to look nice. Fields are especially useful for textareas and text inputs.

# Considerations

**Multiple (adjacent) fields** --- You can build adjacent fields by removing the left or right border from the fields and setting their x-margin to zero. Beware that using adjacent fields can result in a poor user experience on mobile.

**Backwards compatability** --- Prior to v0.10.0, a17t had two other elements (`.input` and `.textarea`) that were identical to `.field` under the hood. For simplicity, these elements are all consolated under `.field`. Now, we recommend you just use `.field`. (That being said, `.input` and `.textarea` will continue to work --- we don't want your code to break!)

# Variants

Fields have full tone support.

{% capture example %}
{% for tone in site.tones %}
<input class="field ~{{tone}} m-2 w-auto" placeholder="Type something..." type="text">
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Disabling

{% capture example %}
<input class="field ~neutral" value="This is a disabled input" type="text" disabled>
{% endcapture %}
{% include example.html code=example %}

# Textareas

{% capture example %}
<textarea class='field ~neutral !normal' placeholder='Write something...'></textarea>
{% endcapture %}
{% include example.html code=example %}

# Accessibility

**Use Aria roles and labels.** When building forms, it's easy to rely on visual guidelines to show relationships between elements. Unfortunately, this doesn't help those interacting with your site using a screenreader or other assistive technologies. For this reason, it's important to use [ARIA labels and roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) wherever possible.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<div>
  <p class="label">Your name</p>
  <input class="my-1 field" type="text" placeholder="Miles McCain">
  <p class="support">Just your first name is fine, too.</p>
</div>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<textarea class="field ~neutral !normal" rows="8">This textarea has 8 rows and actual content.</textarea>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<div>
  <p class="label">Your name</p>
  <input class="field my-1 ~critical" type="text" placeholder="Miles McCain" value="hello@sendmiles.email">
  <p class="support ~critical">That's an email, not a name!</p>
</div>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
