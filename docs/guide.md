---
layout: info
title: Guide
tab: guide
description: How to install a17t and integrate it seamlessly into your project
---

Thanks for using a17t! This guide will get you up to speed on installing, customizing, and troubleshooting a17t. If you have a question that isn't answered here, please feel free to [create an issue](https://github.com/milesmcc/a17t/issues/new).

# Installation

Installing a17t is extremely easy. First, install [Tailwind CSS](https://tailwindcss.com) using their [installation guide](https://tailwindcss.com/docs/installation). Then install a17t by running `npm install a17t`. Finally, add a17t as a plugin in your `tailwind.config.js` file.

###### tailwind.config.js

```javascript
module.exports = {
    ...
    plugins: [
        ...
        require("a17t")
    ],
    ...
}
```

(It doesn't actually matter where a17t is in your plugin list --- any order works!)

Tailwind will then automatically insert all of a17t's components into your project. No need to link to a separate CSS file at all --- a17t simply extends the existing Tailwind CSS bundle. If you're using Tailwind 3.0 or above, you'll also automatically benefit from Tailwind's Just-in-Time compilation in a17t as well.

**You should also consider adding additional "semantic" colors to your Tailwind configuration file.** In the a17t documentation, you'll see many references to "tones." Tones are classes like `~urge` or `~critical`, and they determine the colors applied to elements. Starting in a17t v0.10.0, tones are actually just colors pulled from your Tailwind configuration. For example, if "pink" is a color in your Tailwind configuration, then `chip ~pink` will create a pink [chip](/information/chip).

In general, however, we discourage using literal colors as tones. We believe it's better to write `button ~positive @high` than `button ~green @high`, as it makes customization down the line easier. (Suppose you want to change your "primary" interface color from blue to purple. It's easier to re-map the `primary` color in your Tailwind config than it is to change every instance of `blue` in your markup.)

Adding semantic colors to your Tailwind configuration (and, by extension, to a17t) is easy. Just add them as aliases in your `tailwind.config.js` file:

###### tailwind.config.js

```javascript
let colors = require("tailwindcss/colors")

module.exports = {
    ...
    theme: {
        extend: {
            colors: {
                neutral: colors.slate,
                positive: colors.green,
                urge: colors.violet,
                warning: colors.yellow,
                info: colors.blue,
                critical: colors.red,
            }
        },
    },
    ...
}
```

Now, you'll be able to use semantic tones for a17t (e.g., `~neutral` and `~positive`) and Tailwind (e.g., `text-neutral-100`).

Note that a17t also expects a Tailwind color called `gray` to exist. This color is used for certain borders (e.g., in cards). a17t will not work if the `gray` color is not present. If you'd like to customize this color, simply redefine it in your `tailwind.config.js` file --- but do not remove it!

# Customization

Because a17t reads important values --- like spacing, colors, and border radii --- from your Tailwind config file, customizing a17t is as easy as customizing Tailwind. However, there may be cases where you'd like to make a more fundamental change to one of a17t's components. There are a few ways you can approach this customization.

### One-off changes

Suppose you wanted to change the style of a *single* element in your interface. For example, you might want to make the text of a *single* button bold, but you don't want to affect *every* button in your project.

In this case, we recommend you just apply a Tailwind utility class. For example, to make the text of a single button bold, you'd just write `<button class="button ~neutral font-bold">Bold button</button>`. CSS engines will treat Tailwind's utility classes as higher priority than a17t's utility classes, so everything will work seamlessly.

### Project-wide changes

To continue the earlier example, suppose you wanted to change the style of *every* button in your inteface. For example, you might want to make the text of *every* button in your project bold.

Here, just write some CSS to override a17t's default styling! This is completely encouraged. a17t's elements are designed to be modular, so changing part of an element's styling won't cause any issues. To make every button's text bold, for example, you would just create a new CSS rule:

```css
.button {
    font-weight: bold;
}
```

That's it! Just place this new rule wherever you write your CSS. (Depending on your Tailwind setup, you may need to place this rule inside `@layer components { ... }`.)

# Troubleshooting

##### Tailwind utility classes aren't overriding a17t's styles. What's wrong?

Verify that `@tailwind components` comes earlier than `@tailwind utilities` in your Tailwind CSS file. It should look something like:

```
@tailwind base
@tailwind components
@tailwind utilities
```

Note that `@tailwind utilities` comes *after* `@tailwind components`.

##### Something else...

Can't find what you're looking for? Open an issue on GitHub!

<a href="https://github.com/milesmcc/a17t/issues/new" class="button">
    <i class="icon fa-brands fa-github mr-2"></i>
    Open an Issue
</a>