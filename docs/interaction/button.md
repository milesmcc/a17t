---
layout: element
tab: elements
subtab: element-button
category: Interaction
title: Button
description: A fundamental inline element for interactivity
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/button.js
selectors:
  - .button
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<button class='button ~info @high'>Submit</button>\n<button class='button ~neutral @low'>Save Draft</button>\n"
---

# Overview

The button is a core interface element --- it's the primary way to indicate interactivity, so it comes in many shapes and sizes. Buttons in a17t are inline flex, so you can fit as much into them as you'd like (and they'll automatically look nice).

The example buttons on this page are `<span>` elements, but the `.button` selector can be applied to essentially any type of element. If a button's element is interactive (e.g., an `<a>` with a valid `href` attribute), the `:focus` state will by default be identical to the `:hover` state.

# Considerations

**Navigation** --- Avoid using buttons for navigation. Buttons should generally only be used to perform _actions_. While that may sometimes mean navigating to a new page (as is the case with a sign-up button), it usually doesn't. In cases of regular navigation, consider using a [portal](/interaction/portal) instead.

# Variants

Buttons have full tone and priority support.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority
{% capture example %}
{% for tone in site.tones %}
<span class="button ~{{tone}} @{{priority}} mb-1">Button</span>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

###### Loading Button

To make a button "loading," simply apply the `.loading` selector.

{% capture example %}
<span class="button ~info @low loading mb-1">Save</span>
<span class="button ~urge @high loading mb-1">Save</span>
<span class="button ~critical @high loading mb-1">Save</span>
{% endcapture %}
{% include example.html code=example %}

# Accessibility

**Be mindful of all possible states.** Not everyone interacts with a button by moving the mouse to click on it. Some use the tab key to select a button visually, and others use non-graphical interfaces entirely. When customizing buttons, remember that the `:hover` state does not apply to all cases in which a button is selected.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<div class="card ~neutral @low p-0 border-0">
  <div class="p-4 content">
    <h3>What's going on?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo nulla. Nam vitae pellentesque risus. Duis faucibus erat sit amet arcu efficitur lobortis. Donec ac convallis diam, non suscipit mauris.</p>
  </div>
  <div class="p-4 section ~neutral">
    <span class="button ~neutral @high">Save</span> <span class="button ~neutral @low">Continue Editing</span>
  </div>
</div>
{% endcapture %}
{% include example.html code=example classes="bg-neutral-100" %}

{% include todo_more.html %}
