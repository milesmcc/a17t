---
layout: element
tab: elements
subtab: element-switch
category: Interaction
title: Switch
description: A multipurpose element for binary on/off form fields
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/switch.js
selectors:
  - .switch
features:
  - Y-Alignment
  - Label Assoc.
  - Cascading Disable
display: Inline Block
examples:
  - "<label class='switch'>\n  <input type='checkbox'>\n  <span>Save my information</span>\n</label>"
variables:
  - name: --switch-disabled-opacity
    type: opacity
    description: sets the opacity when disabled
    default: 0.8
---

# Overview

Switches are simple elements to wrap checkbox and radio elements. In a17t, they are left intentionally unstyled in order to maintain cross-browser compatibility. (In [Bootstrap](https://getbootstrap.com/docs/4.4/components/forms/?#checkboxes-and-radios) and [Bulma](https://bulma.io/documentation/form/checkbox/), checkboxes and radio buttons are left unstyled for the same reason.)

Using the a17t switch is easy. Apply it to a parent element --- usually a label --- that contains both your `<input>` (whether it's of `type="radio"` or `type="checkbox`) followed by a `<span>` (or some other inline element) that contains the text you'd like shown next to the input. Then, a17t will make sure that the alignment and padding is correct.

# Considerations

**Vertical layouts** --- Because switches are inline-block elements, placing them back-to-back in your code will cause them to be stacked horizontally. To achieve a vertical layout, set the switch element to `display: block` using CSS (or add the Tailwind utility selector `.block`).

# Variants

Switches can be applied to either checkbox or radio inputs. If the `disabled` attribute is set on the `<input>`, the entire switch --- label, input, and all --- will be presented as disabled.

# Accessibility

**Be mindful of label associations.** Because the a17t switch element specifies that the label be the parent of the `<input>`, browsers and screenreaders will automatically associate the label with the input. If you use a different structure, however, this accessibility feature will not be automatic and you will need to associate your label with the input using the `for` attribute.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<label class="switch block">
  <input type="checkbox">
  <span>Save my information</span>
</label>
<label class="switch block">
  <input type="checkbox">
  <span>I am not a robot</span>
</label>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<label class="switch">
  <input type="radio" name="rad">
  <span>I am cool</span>
</label>
<label class="switch">
  <input type="radio" name="rad">
  <span>I am not cool</span>
</label>
<label class="switch">
  <input type="radio" name="rad" disabled>
  <span>Disabled</span>
</label>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
