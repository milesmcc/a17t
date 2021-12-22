---
layout: element
tab: elements
subtab: element-upload
category: Interaction
title: Upload
description: A specialized element for making file uploads look nice
source: https://github.com/milesmcc/a17t/blob/master/src/interaction/upload.css
selectors:
  - .upload
display: Inline Block
examples:
  - "<label class='upload !normal'>\n  <input type='file'>\n  <span class='button field'>Upload</span>\n  Pick a file...\n</label>"
---

# Overview

By default, file upload fields look terribly ugly. The a17t `.upload` element is a mostly-headless way to override the default style with ease. It hides the file input, makes `button field`s look nice (this is the most common element used with `.upload` elements), and ensures that the cursor looks right.

It's important that you use a `<label>` as the parent element (that has the `.upload` selector applied). If you don't, it won't automatically associate with the `<input>`, and your file upload input won't function. 

# Considerations

**Use with labels** --- Make sure that the `.upload` element is an HTML `<label>`. Not only does this have important accessibility consequences, your input won't work without it.

**Tab index** --- Because the `.upload` element hides the actual file `<input>` element, it's critical that you set the `tabindex="0"` attribute on the parent `<label>` in order retain keyboard interactivity.

**Interactivity** --- You can use JavaScript to update the text associated with the upload element when the user selects a file. Unfortunately, this isn't the sort of thing that CSS can do automatically.

# Variants

File uploads are headless --- they don't have a default style on their own --- so you can use them in any number of variants.

# Accessibility

**Use Aria roles and labels.** When building forms, it's easy to rely on visual guidelines to show relationships between elements. Unfortunately, this doesn't help those interacting with your site using a screenreader or other assistive technologies. For this reason, it's important to use [ARIA labels and roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) wherever possible.

{% include accessibility_defaults.html %}

# Examples

{% capture example %}
<label class='upload !normal'>
  <input type='file'>
  <span class='button field'>Upload</span>
  Pick a file...
</label>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<label class='upload !normal'>
  <input type='file'>
  <span class='button ~neutral @high'>Select a File</span>
  <span>screenshot.jpg</span>
</label>
{% endcapture %}
{% include example.html code=example %}

{% capture example %}
<p class="label">Associated files</p>
<label class='upload !normal my-2'>
  <input type='file' accept="image/*">
  <span class='button field'>Choose Photo</span>
  <span>screenshot.jpg</span>
</label>
<p class="support">Only images are supported right now!</p>
{% endcapture %}
{% include example.html code=example %}

{% include todo_more.html %}
