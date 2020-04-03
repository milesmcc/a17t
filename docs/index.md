---
layout: default
---

{% capture example1 %}

<div class="card ~neutral !low">
  ...
</div>
{% endcapture %}

<div class="md:flex items-center justify-between mt-12 mb-24">
  <section class="md:w-6/12 md:mr-12 mb-8">
    <h1 class="heading text-4xl">An atomic design toolkit<br class="hidden md:inline"> for pragmatists.</h1>
    <h3 class="subheading text-xl">Build beautiful, unique interfaces without reinventing the wheel. Let a17t provide
      the core building blocks so you can focus on the bigger picture.</h3>
  </section>
  <section class="md:w-5/12">
    <p class="supra text-gray-600 mb-1">Live Demo</p>
    <div class="card ~neutral !low mb-4">
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
    </div>
    <div class="text-sm">
      {% highlight html %}{{example1}}{% endhighlight %}
    </div>
  </section>
</div>

<hr class="sep">

<section class="md:flex">
  <div class="flex-grow">
    <article class="md:flex pb-12">
      <aside class="hidden md:block w-2/12 self-start mh-auto md:sticky mb-4 md:mr-12" style="top: 2rem;">
        <p class="heading support text-2xl">Overview</p>
      </aside>
      <div class="flex-grow content">
        <h2>Core interface elements. <br> <span class="text-purple-700">No opinions about anything else.</span></h2>
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
      <aside class="md:w-2/12 self-start mh-auto md:sticky mb-4 md:mr-12" style="top: 2rem;">
        <p class="heading support text-3xl mb-8 md:text-2xl">Design Principles</p>
      </aside>
      <div class="flex-grow">
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
            <h4 class="heading text-xl mb-1">Satisfying &amp; accessible</h4>
            <p>a17t is designed to make every interaction a delight. In addition to its semantic markup, a17t is full
              of subtle animations and accessibility features that make it satisfying for everyone to use.</p>
          </div>
        </section>
      </div>
    </article>
  </div>
  <div class="pl-20 hidden md:block">
    {% include elements_list.html %}
  </div>
</section>

<hr class="sep">

<script src="https://kit.fontawesome.com/ef150c472d.js" crossorigin="anonymous"></script>