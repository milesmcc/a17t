---
layout: default
---

{% capture example1 %}<p class="supra">Live Demo</p>
<div class="card ~urge !high">
  ...
</div>
{% endcapture %}

{% capture example2 %}
<form>
  <div class="mb-4">
    <label class="label block">What does a17t optionally go well with?</label>
    <div class="select !normal my-1">
      <select>
        <option selected="selected">TailwindCSS</option>
        <option>Anything!</option>
      </select>
    </div>
    <p class="support">And it's pure CSS, so it works with all JS.</p>
  </div>
  <button class="button ~urge !high">Submit</button>
  <button class="button ~neutral !normal">Save</button>
</form>
{% endcapture %}

<div class="md:flex items-center justify-between md:mt-24 mb-32">
  <section class="md:w-6/12 md:mr-12">
    <h1 class="heading text-4xl mb-1">An atomic design toolkit<br class="hidden md:inline"> for pragmatists</h1>
    <h3 class="subheading text-xl">Build beautiful, unique interfaces without reinventing the wheel. Let a17t provide
      the core building blocks, then customize with ease.</h3>
    <div>
    </div>
  </section>
  <section class="md:w-5/12">
    <p class="supra mb-1">Live Demo</p>
    <div class="card ~urge !high mb-4">
      <pre><code>{{example1|escape}}</code></pre>
    </div>
  </section>
</div>

<hr class="sep h-12">

<section class="md:flex">
  <div class="flex-grow">
    <article class="md:flex pb-12">
      <aside class="hidden md:block w-3/12 self-start mh-auto md:sticky mb-4 md:pr-12 md:text-right" style="top: 2rem;">
        <p class="heading support text-2xl">Overview</p>
      </aside>
      <div class="md:w-9/12 content">
        <h2>Core interface elements. <br> No opinions about anything else.</h2>
        <p>Some CSS frameworks come prepackaged with all sorts of components that are convenient
          at first but quickly become limiting. Utility frameworks like Tailwind are awesome, but
          can be slow to start with.</p>
        <p>a17t tries to get the balance right. Instead of providing all-inclusive, opinionated components (like
          jumbotrons, navbars, and menus), a17t provides common single-class elements in a default (but easily
          customizable) style.
        </p>
      </div>
    </article>
    <hr class="sep h-16">
    <article class="md:flex pb-12">
      <aside class="md:w-3/12 self-start mh-auto md:sticky mb-4 md:pr-12 md:text-right" style="top: 2rem;">
        <p class="heading support text-3xl mb-8 md:text-2xl">Design Principles</p>
      </aside>
      <div class="md:w-9/12">
        <section class="md:grid grid-cols-2 gap-8">
          <div class="mb-6">
            <span class="shield ~info float-right ml-1 mb-1">
              <span class="icon">
                <i class="fas fa-atom fa-lg"></i>
              </span>
            </span>
            <h4 class="heading text-xl mb-1">Atomic &amp; flexible</h4>
            <p>a17t provides core, single-class interface elements and empowers you to assemble them your way. And
              everything is easily customizable using CSS variables, so you'll never need to settle for &ldquo;good
              enough.&rdquo;
            </p>
          </div>
          <div class="mb-6">
            <span class="float-right shield ~positive ml-1 mb-1">
              <span class="icon">
                <i class="fas fa-brain fa-lg"></i>
              </span>
            </span>
            <h4 class="heading text-xl mb-1">Logical &amp; hierarchical</h4>
            <p>a17t encourages you to think in terms of intent and hierarchy by specifying elements in terms of tone
              and priority. As an added bonus, this makes refactoring and customization a breeze.</p>
          </div>
          <div class="mb-6">
            <span class="float-right shield ~critical ml-1 mb-1">
              <span class="icon">
                <i class="fas fa-feather fa-lg"></i>
              </span>
            </span>
            <h4 class="heading text-xl mb-1">Lightweight &amp; modern</h4>
            <p>a17t is built using PostCSS, CSS variables, and TailwindCSS. That means it's reliable, customizable,
              and can integrate with any JS stack. Just import a small CSS file and you're good to go.</p>
          </div>
          <div class="mb-6">
            <span class="float-right shield ~urge ml-1 mb-1">
              <span class="icon">
                <i class="fas fa-smile-beam fa-lg"></i>
              </span>
            </span>
            <h4 class="heading text-xl mb-1">Pleasant &amp; accessible</h4>
            <p>a17t is designed to make every interaction a delight. In addition to its semantic markup, a17t is full
              of subtle animations and accessibility features that make it pleasing for everyone to use.</p>
          </div>
        </section>
      </div>
    </article>
    <hr class="sep h-16">
    <article class="md:flex pb-12">
      <aside class="md:w-3/12 self-start mh-auto md:sticky mb-4 md:pr-12 md:text-right" style="top: 2rem;">
        <p class="heading support text-3xl mb-8 md:text-2xl">Tailwind</p>
      </aside>
      <div class="md:w-9/12">
        <aside class="aside ~positive content bg-green-200">
          <h3>Great to use with TailwindCSS</h3>
          <p>Using a17t in conjunction with <a href="https://tailwindcss.com/">TailwindCSS</a> is optional, but is the
            recommended approach as it makes for a great development experience. Use a17t for your core interface
            elements, and assemble them using Tailwind. That's how this documentation site is built!</p>
        </aside>
      </div>
    </article>
    <hr class="sep h-16">
    <article class="md:flex pb-12">
      <aside class="md:w-3/12 self-start mh-auto md:sticky mb-4 md:pr-12 md:text-right" style="top: 2rem;">
        <p class="heading support text-3xl mb-8 md:text-2xl">Crash Course</p>
      </aside>
      <div class="md:w-9/12 content">
        <h3>Use tones to control color</h3>
        <p>There are six tones by default: neutral, positive, warning, critical, info, and urge. (Don't worry, these
          colors are all customizable.) You can specify a tone by using its class: a tilde followed by the tone name
          (e.g., <code>~positive</code>). The classes required for a green chip, for example, are <code>chip
            ~positive</code>.</p>
        <h3>Use priorities to control prominence</h3>
        <p>There are three priorities &mdash; low, normal, and high. The default priority is normal. You can specify a
          priority by using its class: an exclamation point followed by its name (e.g., <code>!high</code> or
          <code>!low</code>). Usually, priorities affect an elements' colors, but fallback to using elevation
          (communicated through drop shadow by default) when changing colors is not possible.</p>
        <h3>Consider using with Tailwind</h3>
        <p>Because a17t only provides the core elements of your interface, like buttons and form inputs, you'll need a
          tool to stitch everything together. (a17t does not provide any grid utilities.) While you could do this using
          pure CSS, using a17t in conjunction with Tailwind makes for a very smooth and efficient development
          experience.</p>
      </div>
    </article>
    <hr class="sep h-16">
    <article class="md:flex pb-12">
      <aside class="md:w-3/12 self-start mh-auto md:sticky mb-4 md:pr-12 md:text-right" style="top: 2rem;">
        <p class="heading support text-3xl mb-8 md:text-2xl">More Benefits</p>
      </aside>
      <div class="md:w-9/12 content">
        <p><strong>Thoughtful typography</strong> &mdash; a17t is optimized for legibility. From headings to body text
          to labels, a17t tries to follow typographic best practices to ensure consistent, readable interfaces.</p>
        <p><strong>No margins</strong> &mdash; While most a17t elements have some kind of internal spacing, none have
          any external margin by default. This is intentional: spacing is not one-size-fits-all, so not having any makes
          a17t more flexible.</p>
        <p><strong>CSS variables</strong> &mdash; Unlike libraries built using preprocessing tools like Sass, a17t
          relies on CSS variables for customization. That means you can tweak it dynamically on the page without using
          any build tools.</p>
        <p><strong>Effortlessly responsive</strong> &mdash; All of a17t's elements are designed to look great on any
          kind of device. So as long as you build your layout responsively, a17t will automatically follow suit without
          any extra effort.</p>
      </div>
    </article>
    <hr class="sep h-16">
    <article class="md:flex pb-12">
      <aside class="md:w-3/12 self-start mh-auto md:sticky mb-4 md:pr-12 md:text-right" style="top: 2rem;">
        <p class="heading support text-3xl mb-8 md:text-2xl">Install</p>
      </aside>
      <div class="md:w-9/12">
        <div class="card ~neutral !high font-mono mb-4">
          npm install a17t
        </div>
        <p>(More detailed installation instructions and a CDN is coming soon.)</p>
      </div>
    </article>
  </div>
  <div class="pl-20 hidden md:block opacity-75">
    {% include elements_list.html %}
  </div>
</section>

<hr class="sep">

<script src="https://kit.fontawesome.com/ef150c472d.js" crossorigin="anonymous"></script>