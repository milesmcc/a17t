---
layout: element
tab: elements
subtab: element-aside
category: Layout
title: Aside
description: A block element for tangential content
source: https://github.com/milesmcc/a17t/blob/master/src/layout/aside.css
selectors:
  - .aside
features:
  - Tones
display: Inline Flex
examples:
  - "<aside class='aside ~info'>\n  <strong>Hello world!</strong> This is what an aside looks like.\n</aside>"
variables:
  - name: --aside-border-width
    type: size
    description: sets left accent border width
    default: 3px
  - name: --color-muted
    type: color
    description: sets accent border color
  - name: --color-content
    type: color
    description: sets the background color
---

# Overview

An aside is a helpful block element intended to contain content that's less important than or tangential to the content around it. Instead of popping out, it tends to blend in.

When using asides, try to stick only to the `!normal` priority. While other priorities will work, they probably won't look the way you'd like. (And, after all, a high-priority aside isn't an aside!)

# Considerations

**Thinking in terms of priority** --- Asides can often be replaced with [cards](/layout/card) when used to communicate some kind of important alert or update. You can think of an aside as a less disruptive card: helpful for when you don't want the content to stick out, but unhelpful when you do.

**Content** --- Inside a `.content` selector, `<blockquote>` elements are automatically styled as `.aside`s.

**Semantic structure** --- It's recommended to use the `.aside` selector with the `<aside>` HTML5 element. It's not required, but generally results in more semantic markup.

# Variants

Asides have full tone support. They also support priorities, but if you're changing the priority of an aside, you probably should use another element. (_Aside_ probably isn't semantically appropriate.)

{% capture example %}
{% for tone in site.tones %}
<aside class="aside ~{{tone}} mb-4">
    <p><strong>Hey there!</strong> This is an aside. There's so much you can do in it. It's very exciting. This doesn't need to be text, by the way &mdash; it
    could be anything!</p>
</aside>
{% endfor %}
{% endcapture %}
{% include example.html code=example %}

# Accessibility

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<div class="content">
    <p>This is a content block.</p>
    <blockquote>
        <p>This is a blockquote. Notice how it's styled as an aside!</p>
    </blockquote>
    <p>This is some more content.</p>
</div>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<aside class="aside ~info !low mb-4">
    <p>This is a low-priority critical aside. <b>You probably don't want this, but... maybe you do?</b></p>
</aside>
<aside class="aside ~positive !normal mb-4">
    <p>This is a normal-priority positive aside. <b>This is probably what you want.</b></p>
</aside>
<aside class="aside ~info !high mb-4">
    <p>This is a high-priority info aside. <b>In most cases, you probably don't want this &mdash; use a card instead.</b></p>
</aside>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
