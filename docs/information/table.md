---
layout: element
tab: element
subtab: element-table
category: Information
title: Table
description: A minimal table for displaying structured data
source: https://github.com/milesmcc/a17t/blob/master/src/information/table.css
selectors:
  - .table
features:
  - Content Aware
display: Block
examples:
  - "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Price</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Landinator 9000 <span class=\"badge ~neutral\">New</span></td>\n      <td><span class=\"chip ~positive\">Completed</span></td>\n      <td>$300</td>\n    </tr>\n    <tr>\n      <td>Hammer</td>\n      <td><span class=\"chip ~urge\">Waiting</span></td>\n      <td>$20</td>\n    </tr>\n    <tr>\n      <td>Computer</td>\n      <td><span class=\"chip ~info\">Processing</span></td>\n      <td>$500</td>\n    </tr>\n  </tbody>\n</table>"
variables:
  - name: --table-background-alternating
    type: color
    description: sets background color of alternating rows
  - name: --color-title
    type: color
    description: sets color of header cells
---

# Overview

Tables are surprisingly hard to get right. The table element applies to the top-level `<table>` element and results in nice-looking (albeit somewhat opinionated) tables.

Tables are one of the few elements in a17t that are more complex than a single class. The `.table` selector specifies styles for `thead`, `tfoot`, `tr`, `tbody`, `td`, and `th`. It automatically also applies itself to `<table>` elements inside the `.content` selector.

# Considerations

**Responsiveness** --- As a UI element, tables generally don't work well on smaller devices. (Just look at the Google Sheets app.) If a fluid mobile layout is important to you, consider using a [card](/layout/card) layout instead.

**Width** --- This element by default is set to use all the horizontal space available to it. This is _usually_ correct, but you can safely change the `.table` width and the content will automatically reflow.

# Variants

Tables do not directly respond to tone and priority variants; that information is simply passed down to child elements (e.g. chips).

# Accessibility

**Tables have complex accessibility requirements.** For more information, consult [this guide](https://www.w3.org/WAI/tutorials/tables/) to WCAG standards for tables. While a17t encourages you to use a standard table structure through its selectors and default styling, the most valuable thing you can do is to structure your tables in a way that's consistent with WCAG standards.

# Examples

TODO: more
