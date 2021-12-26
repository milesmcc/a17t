---
layout: element
tab: elements
subtab: element-dropdown
category: Interaction
title: Dropdown
description: An expandable element for exposing hidden content
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/dropdown.js
selectors:
  - .dropdown
  - .dropdown-display
  - .selected
  - .manual
features:
  - Auto-Hover
  - Headless
  - Manual
display: Inherited
examples:
  - "<span class='dropdown' tabindex='0'>\n  <span class='button ~neutral'>\n    <span>Select me</span>\n    <span class='ml-3 chev'></span>\n  </span>\n  <div class='dropdown-display'>\n    <div class='card ~neutral @high m-4 w-48'>Hello world!</div>\n  </div>\n</span>"
---

# Overview

Dropdowns are a pain. You need to think about absolute and relative positioning, z-indexes, opacities, transitions, cursors, and more. You also need to make sure that your dropdown is accessible --- and that's no easy task.

The a17t dropdown element is a headless utility that eases most of these challenges. Just give it a selector (to control when the dropdown is shown or not) and some content to show when expanded (which can be anything). The possibilities are limitless.

To create a dropdown, apply the `.dropdown` selector to the parent element. Put the dropdown selector --- the button, for example --- inside the element. (No special classes are required for the selector.) Finally, apply the `.dropdown-display` class to the element inside the `.dropdown` that should be shown or hidden.

By default, dropdowns will automatically expand when the selector is hovered or selected. To manually expand a dropdown using JavaScript, add the `.selected` selector to the parent `.dropdown` element. To disable the automatic expanding on `:hover`, add the `.manual` selector to the parent `.dropdown` element.

# Considerations

**Tab indexes** --- Because browsers will usually not automatically detect that your `.dropdown` element is interactive, remember to always set the `tabindex="0"` attribute to make your dropdown focusable. 

**Styling** --- A common design pattern is to use a [button](/interaction/button) or [portal](/interaction/portal) for the dropdown 'selector' and a card for the dropdown content. This is by no means required; dropdowns do not have any default look. (They only provide functionality.)

**Spacing** --- You'll probably want to add a small y-margin to the _main child_ of your `.dropdown-display`. Be sure not to set the y-margin on the `.dropdown-display`, as this could mess up the `:hover` behavior.

**JavaScript** --- If you want to add interaction to a dropdown using JavaScript, add the `.manual` class to the parent `.dropdown` element, and then apply the `.selected` selector when you want to show the `.dropdown-display`.

# Variants

Dropdowns are headless (they have no visual identity) and can be used with any element. Add the `.manual` selector to disable automatic expanding.

# Accessibility

**Be mindful of all mediums.** Not everyone interacts with a dropdown by moving the mouse to click or hover on it. Some use the tab key to select a dropdown, and others use entirely non-graphical interfaces.

{% include accessibility_defaults.html %}

# Examples

Check out the navigation on the top of this page for an example of what you can do with dropdowns!

{% include todo_more.html %}
