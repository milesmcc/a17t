---
layout: default
title: "The atomic web toolkit for pragmatists"
---

{% capture example_profile %}
<div class="card md:flex max-w-lg">
  <div class="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
    <img class="object-cover rounded-full" src="{{ '/assets/profile_image.png' | relative_url }}">
  </div>
  <div class="flex-grow text-center md:text-left">
    <p class="support">Senior Researcher</p>
    <h3 class="text-xl heading">Dr. Katya Hattenagh</h3>
    <p class="mt-2 mb-3">Katya studies the intersection of machine learning and differential topology.</p>
    <div>
      <span class="chip ~neutral mb-1">Discrete Math</span> <span class="chip ~neutral mb-1">Topology</span> <span
        class="chip ~neutral mb-1">Neural Nets</span>
    </div>
  </div>
</div>
{% endcapture %}

{% capture example_table %}
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Landinator 9000 <span class="badge ~neutral">New</span></td>
      <td><span class="chip ~positive">Completed</span></td>
      <td>$300</td>
    </tr>
    <tr>
      <td>Hammer</td>
      <td><span class="chip ~urge">Waiting</span></td>
      <td>$20</td>
    </tr>
    <tr>
      <td>Computer</td>
      <td><span class="chip ~info">Processing</span></td>
      <td>$500</td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% capture example_form %}
<form class="card p-0">
  <section class="p-4 flex flex-col gap-4">
    <div>
      <label class="label" for="toolkit">Current job</label>
      <div class="select ~neutral @low block my-1 max-w-xs">
        <select>
          <option>Teacher</option>
          <option>Engineer</option>
          <option>Firefighter</option>
          <option>Other</option>
        </select>
      </div>
      <p class="support">If you are a student, select 'other.'</p>
    </div>
    <div>
      <label class="label" for="toolkit">Favorite toolkit</label>
      <input id="toolkit" type="text" class="input ~critical !normal my-1 max-w-xs block" placeholder="At least 8 characters..."
        value="Not a17t">
      <p class="support ~critical">The correct answer is a17t!</p>
    </div>
  </section>
  <section class="section ~neutral flex gap-2 p-4">
    <span class="button ~info @high">Submit</span>
    <span class="button ~neutral @low">Save draft</span>
  </section>
</form>
{% endcapture %}

{% capture example_delete %}
<div class="card p-0 border-0">
  <div class="p-4">
    <h2 class="mb-1 text-lg heading">Just making sure!</h2>
    <p class="mb-3 text-base support">To confirm you'd like to delete this repository, please enter its name below.</p>
    <input class="input ~neutral" type="text" placeholder="milesmcc/a17t">
  </div>
  <section class="section ~critical p-4">
    <span class="button ~critical @high">Delete</span>
    <span class="pl-2 text-neutral-800">Go Back</span>
  </section>
</div>
{% endcapture %}

<div class="mb-24 md:mt-24 text-center flex flex-col gap-4">
  <p>
    <a class="chip ~urge @low text-sm md:text-base gap-2" href="https://github.com/milesmcc/a17t/releases">
      <i class="icon fa-brands fa-github"></i>
      Version {{ site.a17t_version }} released &rarr;
    </a>
  </p>
  <h1 class="heading text-3xl md:text-6xl font-extrabold">Build beautiful interfaces without reinventing the wheel.</h1>
  <h3 class="subheading text-base md:text-2xl">a17t is a Tailwind CSS plugin that provides atomic components like <a class="code" href="/interaction/field">field</a>, <a class="code" href="/interaction/button">button</a>, and <a class="code" href="/layout/card">card</a> in a neutral design language that scales with your project.</h3>
  <div class="justify-center mt-4 flex gap-2">
    <a href="/guide/" class="button ~urge @high button-xl">Get started</a>
    <a href="https://github.com/milesmcc/a17t" class="button ~neutral @low button-xl">
      View the source
    </a>
  </div>
</div>

<hr class="h-0 md:h-12 sep">

<section class="md:flex" id="fold">
  <div class="lg:w-9/12">
    <article class="md:flex">
      <aside class="self-start hidden w-3/12 mb-4 md:block mh-auto md:sticky md:pr-12 md:text-right" style="top: 2rem;">
        <p class="text-2xl heading text-urge-600">Overview</p>
      </aside>
      <div class="md:w-9/12 content">
        <h2>Atomic interface elements. <br> Stop styling everything from scratch.</h2>
        <p>Tailwind CSS is great. But do you really want to design all your interface elements from scratch
        for every new project? Are you confident you'll handle all the accessibility states properly?</p>
        <p>Traditional design libraries are overkill &mdash; but Tailwind on its own isn't enough when you're just getting started.
        a17t tries to get the balance right. Instead of providing all-inclusive, opinionated components (like
        jumbotrons, navbars, and menus), a17t provides common single-class elements in a neutral design language.</p>
        <p>As a Tailwind CSS plugin, a17t configures itself using your <code class="code">tailwind.config.js</code> file, so it'll
        integrate seamlessly with your codebase.</p>
      </div>
    </article>
    <hr class="h-16 sep">
    <article class="justify-end md:flex">
      <div class="md:w-9/12 md:max-w-full">
        {% include example.html code=example_form label=true classes="bg-inf" %}
      </div>
    </article>
    <hr class="h-16 sep">
    <article class="md:flex" id="design">
      <aside class="self-start mb-4 md:w-3/12 mh-auto md:sticky md:pr-12 md:text-right" style="top: 2rem;">
        <p class="mb-8 text-3xl heading text-urge-600 md:text-2xl">Design Principles</p>
      </aside>
      <div class="md:w-9/12">
        <section class="grid-cols-2 gap-8 md:grid">
          <div class="mb-6">
            <span class="shield ~info float-right ml-1 mb-1">
              <span class="icon">
                <i class="fas fa-atom fa-lg"></i>
              </span>
            </span>
            <h4 class="mb-1 text-xl heading">Atomic &amp; flexible</h4>
            <p>a17t provides core, single-class interface elements and empowers you to assemble them your way. And
              you can customize it through your Tailwind config, so you'll never need to settle for &ldquo;good
              enough.&rdquo;
            </p>
          </div>
          <div class="mb-6">
            <span class="float-right shield ~positive ml-1 mb-1">
              <span class="icon">
                <i class="fas fa-brain fa-lg"></i>
              </span>
            </span>
            <h4 class="mb-1 text-xl heading">Logical &amp; hierarchical</h4>
            <p>a17t encourages you to think in terms of intent and hierarchy by specifying elements in terms of tone
              and priority. As an added bonus, this makes refactoring and customization a breeze.</p>
          </div>
          <div class="mb-6">
            <span class="float-right shield ~critical ml-1 mb-1">
              <span class="icon">
                <i class="fas fa-feather fa-lg"></i>
              </span>
            </span>
            <h4 class="mb-1 text-xl heading">Lightweight &amp; modern</h4>
            <p>a17t has no dependencies except Tailwind. That means it's reliable, customizable,
              and can integrate with any stack. Just install the plugin and you're good to go.</p>
          </div>
          <div class="mb-6">
            <span class="float-right shield ~urge ml-1 mb-1">
              <span class="icon">
                <i class="fas fa-smile-beam fa-lg"></i>
              </span>
            </span>
            <h4 class="mb-1 text-xl heading">Pleasant &amp; accessible</h4>
            <p>a17t is designed to make every interaction a delight. In addition to its semantic markup, a17t is full
              of subtle animations and accessibility features that make it pleasing for everyone to use.</p>
          </div>
        </section>
      </div>
    </article>
    <hr class="h-16 sep">
    <article class="justify-end md:flex">
      <div class="md:w-9/12 md:max-w-full">
        {% include example.html code=example_profile label=true classes="bg-neutral-100" %}
      </div>
    </article>
    <hr class="h-16 sep">
    <article class="md:flex" id="concepts">
      <aside class="self-start mb-4 md:w-3/12 mh-auto md:sticky md:pr-12 md:text-right" style="top: 2rem;">
        <p class="mb-8 text-3xl heading text-urge-600 md:text-2xl">Concepts</p>
      </aside>
      <div class="md:w-9/12 content">
        <h2>Use tones to control color</h2>
        <p>There's a tone for every Tailwind color! Tones are specified using special class names that start with a tilde 
          (e.g., <code class="code">~green</code>). To make an indigo chip, for example, use <code class="code">chip
            ~indigo</code>.</p>
        <h2>Use priorities to control prominence</h2>
        <p>There are two priorities &mdash; low and high. You can specify a
          priority by its class: an &ldquo;at sign&rdquo; followed by its name (e.g., <code class="code">@high</code> or
          <code class="code">@low</code>). Priorities change elements' visual prominence.</p>
        <h2>A perfect match for Tailwind</h2>
        <p>a17t only provides atomic elements of your interface, like buttons and form inputs, and you'll need a
          tool to stitch everything together. That's where Tailwind comes in. a17t provides a solid and accessible base for your
          interface &mdash; use Tailwind to combine a17t's components into a masterpiece.</p>
      </div>
    </article>
    <hr class="h-16 sep">
    <article class="justify-end md:flex">
      <div class="md:w-9/12 md:max-w-full">
        {% include example.html label=true code=example_table classes="bg-transparent" %}
      </div>
    </article>
    <hr class="h-16 sep">
    <article class="md:flex">
      <aside class="self-start mb-4 md:w-3/12 mh-auto md:sticky md:pr-12 md:text-right" style="top: 2rem;">
        <p class="mb-8 text-3xl heading text-urge-600 md:text-2xl">More Benefits</p>
      </aside>
      <div class="md:w-9/12 content">
        <p><strong>Thoughtful typography</strong> &mdash; a17t is optimized for legibility. From headings to body text
          to labels, a17t tries to follow typographic best practices to ensure consistent, readable interfaces.</p>
        <p><strong>No margins</strong> &mdash; While most a17t elements have some kind of internal spacing, none have
          any external margin by default. This is intentional: spacing is not one-size-fits-all, so not having any makes
          a17t more flexible.</p>
        <p><strong>Tailwind plugin</strong> &mdash; Unlike most component libraries libraries, a17t is a Tailwind plugin
          and reads important values &mdash; like colors and spacing &mdash; from your Tailwind config. That means installation
          and customization is a breeze.</p>
        <p><strong>Effortlessly responsive</strong> &mdash; All of a17t's elements are designed to look great on any
          kind of device. So as long as you build your layout responsively, a17t will automatically follow suit without
          any extra effort.</p>
      </div>
    </article>
    <hr class="h-16 sep">
    <article class="justify-end md:flex">
      <div class="md:w-9/12 md:max-w-full">
        {% include example.html code=example_delete label=true classes="bg-neutral-100" %}
      </div>
    </article>
    <hr class="h-16 sep">
    <article class="pb-12 md:flex" id="install">
      <aside class="self-start mb-4 md:w-3/12 mh-auto md:sticky md:pr-12 md:text-right" style="top: 2rem;">
        <p class="mb-8 text-3xl heading text-urge-600 md:text-2xl">Install</p>
      </aside>
      <div class="md:w-9/12">
        <p class="mb-2 content">To install a17t, simply add it to the plugin section of your Tailwind config with <code class="code">require("a17t")</code>. For more information about
          installing and customizing a17t, check out our <a href="/guide">detailed guide</a>.</p>
        <a href="/guide" class="button ~urge @high px-4 py-2 font-md rounded-md mt-4">Read the guide &rarr;</a>
      </div>
    </article>
  </div>
  <div class="hidden pl-20 opacity-75 md:w-3/12 lg:block">
    {% include elements_list.html %}
  </div>
</section>

<hr class="sep">
