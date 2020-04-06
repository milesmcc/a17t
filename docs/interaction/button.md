---
layout: element
tab: elements
subtab: element-button
category: Interaction
title: Button
description: A fundamental inline element for interactivity
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/button.css
selectors:
  - .button
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<span class='button ~positive !low'>Button</span>\n<span class='button ~positive !normal'>Button</span>\n<span class='button ~positive !high'>Button</span>"
variables:
  - name: --color-fill
    type: color
    description: sets background color
  - name: --color-content
    type: color
    description: sets text color
  - name: --button-line-height
    type: proportion
    description: sets line height
    default: 1.5
  - name: --button-transition-speed
    type: time
    description: sets select animation speed
    default: 75ms
  - name: --button-filter-brightness
    type: percent
    description: sets the brightness filter on hover + focus
    default: 95%
---

# Overview

The button is a core interface element --- it's the primary way to indicate interactivity, so it comes in many shapes and sizes. Buttons in a17t are inline flex, so you can fit as much into them as you'd like (and they'll automatically look nice).

The example buttons on this page are `<span>` elements, but the `.button` selector can be applied to essentially any type of element. If a button's element is interactive (e.g., an `<a>` with a valid `href` attribute), the `:focus` state will by default be identical to the `:hover` state.

# Considerations

**Navigation** --- Avoid using buttons for navigation. Buttons should generally only be used to perform _actions_. While that may sometimes mean navigating to a new page (as is the case with a sign-up button), it usually doesn't. In cases of regular navigation, consider using a [portal](/interaction/portal) instead.

**Forms** --- When using a button inside forms, it can sometimes be helpful to make the button look more like a field input. If this is what you want, you can apply the [field](/interaction/field) selector (e.g., `<button class="button field">`) on top of the button.

# Variants

Buttons have full tone and priority support.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority
{% capture example %}
{% for tone in site.tones %}
<span class="button ~{{tone}} !{{priority}}">Button</span>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

###### Button Field (normal priority)
{% capture example %}
{% for tone in site.tones %}
<span class="button field ~{{tone}} w-auto">Button</span> 
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

**Be mindful of all possible states.** Not everyone interacts with a button by moving the mouse to click on it. Some use the tab key to select a button visually, and others use non-graphical interfaces entirely. When customizing buttons, remember that the `:hover` state does not apply to all cases in which a button is selected.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<span class="button ~info !high">Submit</span> <span class="button ~info !low">Save for Later</span>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
