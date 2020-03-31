---
layout: atom
tab: atom
subtab: atom-badge
category: Information
title: Badge
description: A small status indicator helpful for unread counts, product updates, and more.
source: https://github.com/milesmcc/a17t/blob/master/src/information/badge.css
examples:
  - "Unread <span class='badge ~critical !high'>55</span><br>\nNew item <span class='badge ~neutral !normal'>New</span>"
variables:
  - name: --color-fill
    type: color
    description: sets background color
  - name: --color-content
    type: color
    description: sets text color
  - name: --badge-size
    type: size
    description: sets height
    default: 0.6em
---

The badge is a helpful element. It can do a lot of helpful things.

Lorem ipsum dolor sit amet. This is `code` and it is helpful.