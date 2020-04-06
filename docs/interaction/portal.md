---
layout: element
tab: elements
subtab: element-portal
category: Interaction
title: Portal
description: An inline element for navigation
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/portal.css
selectors:
  - .portal
  - .active
features:
  - Tones
  - Priorities
display: Inline Flex
examples:
  - "<div class='text-gray-700'>\n  <span class='portal'>Code</span>\n  <span class='portal ~positive active' aria-selected='true'>Support</span>\n  <span class='portal'>Members</span>\n  <span class='portal' disabled>Disabled</span>\n</div>"
variables:
  - name: --portal-padding
    type: padding
    description: sets padding around portal text
    default: 0.15em 0.5em
  - name: --portal-transition-speed
    type: time
    description: sets animation speed on focus and hover
    default: 75ms
  - name: --portal-focus-color
    type: color
    description: the color of the portal on focus and highlight
    default: var(--color-title)
  - name: --portal-disabled-opacity
    type: opacity
    description: sets the opacity of disabled portals
    default: 0.6
  - name: --color-fill
    type: color
    description: sets the background color of active portals
  - name: --color-content
    type: color
    description: sets the text color of active portals
---

# Overview

The portal is a navigation element that is helpful for cases in which many links need to be displayed together --- for example, in a navigation pane or sidebar. Generally, a portal shouldn't affect anything other than the current view. (It's inappropriate to bind actions like "save" or "delete" to a portal; use a [button](/interaction/button) instead.)

Portals only adopt any meaningful styling when used with the `.active` selector. If the active selector is not present, the text color and background will not be changed.

# Considerations

**Padding** --- In order to make portals look consistent when placed next to one another, _all_ portals have a default padding applied. Because inactive portals don't have a background color, this additional padding can resemble a margin. If you're including other elements (such as a [label](/typography/label) or [supra](/typography/supra)) in your list of portals, consider applying the `.portal` selector on top. (E.g., `<label class="label portal">`.)

**Disabled state** --- Just because a portal is marked as `disabled` doesn't mean that it's not still interactive. If you're using a portal with an `<a>` tag, for example, the `href` attribute will remain set even if you add the `disabled` attribute. While the cursor will be changed to `not-allowed`, it will potentially remain focusable and clickable.

# Variants

Portals have full tone and priority support.

{% for priority in site.priorities %}
###### {{priority|capitalize}} Priority (Active)
{% capture example %}
{% for tone in site.tones %}
<span class="portal ~{{tone}} !{{priority}} active mr-2 mb-2">Navigate</span>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}
{% endfor %}

# Accessibility

**Be mindful of all possible states.** Not everyone interacts with a portal by moving the mouse to click or hover on it. Some use the tab key to navigate, and others use non-graphical interfaces entirely. While these concerns generally don't apply to portals being used as <a>

**Apply ARIA labels where appropriate.** Applying the `.active` selector to mark a portal as currently active is sufficient for visual users, however it's still important to mark the portal as active using the `aria-selected` attribute.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<p class="portal supra pointer-events-none">Items</p>
<p><span class="portal">Item 1</span></p>
<p><span class="portal ~info active">Item 2</span></p>
<p><span class="portal">Item 3</span></p>
<p><span class="portal">Item 4</span></p>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
