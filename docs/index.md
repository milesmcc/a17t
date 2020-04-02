---
layout: default
---

{% capture example1 %}

<div class="card ~neutral !low">
  ...
</div>
{% endcapture %}

<div class="md:flex items-center justify-between mt-8 mb-16">
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
  <div>
    {% include elements_list.html %}
  </div>
  <div class="content max-w-xl mx-auto">
    <h2>Core interface elements <br> No opinions about anything else.</h2>
    <p>Some CSS frameworks come prepackaged with all sorts of components that are convenient
      at first but quickly become limiting. Utility frameworks like TailwindCSS are awesome, but they go. Both types have their place, but
      most projects need something in between.</p>
    <p>a17t tries to get the balance right. Instead of providing all-inclusive, opinionated components (like jumbotrons,
      navbars, and menus), a17t provides common single-class elements in a default (but easily customizable) style. That
      way, you can build custom designs without having to reinvent the wheel. And because nearly all of a17t's elements
      are a only a single class, customization later on is a breeze.</p>
    <p>When you're starting on a new project, getting your form inputs and buttons to look just right is the last thing
      you should be doing. a17t lets you think about the bigger picture by providing common elements—like chips, form
      elements, and buttons—so you can move quickly.</p>
  </div>
</section>

<hr class="sep">

<section class="md:grid grid-cols-2 gap-8">
  <div class="flex mb-6">
    <span class="badge ~info self-start mr-4">
      <span class="icon">
        <i class="fas fa-atom fa-lg"></i>
      </span>
    </span>
    <div class="flex-grow">
      <h4 class="heading text-xl mb-1">Atomic and flexible</h4>
      <p>a17t provides core, single-class interface elements and empowers you to assemble them your way. And everything
        is easily customizable using CSS variables, so you'll never need to settle for &ldquo;good enough.&rdquo;</p>
    </div>
  </div>
  <div class="flex mb-6">
    <span class="badge ~positive self-start mr-4">
      <span class="icon">
        <i class="fas fa-brain fa-lg"></i>
      </span>
    </span>
    <div class="flex-grow">
      <h4 class="heading text-xl mb-1">Logical and hierarchical</h4>
      <p>a17t encourages you to think in terms of intent and hierarchy by specifying elements in terms of tone and
        priority. As an added bonus, this makes refactoring and customization a breeze.</p>
    </div>
  </div>
  <div class="flex mb-6">
    <span class="badge ~critical self-start mr-4">
      <span class="icon">
        <i class="fas fa-feather fa-lg"></i>
      </span>
    </span>
    <div class="flex-grow">
      <h4 class="heading text-xl mb-1">Lightweight and modern</h4>
      <p>a17t is built using PostCSS, CSS variables, and TailwindCSS. That means it's reliable, customizable, and can
        integrate with any JS stack. Just import a small CSS file and you're good to go.</p>
    </div>
  </div>
  <div class="flex mb-6">
    <span class="badge ~warning self-start mr-4">
      <span class="icon">
        <i class="fas fa-smile-beam fa-lg"></i>
      </span>
    </span>
    <div class="flex-grow">
      <h4 class="heading text-xl mb-1">Satisfying and accessible</h4>
      <p>a17t is designed to make every interaction a delight. In addition to its semantic markup, a17t is full of
        subtle animations and accessibility features that make it satisfying for everyone to use.</p>
    </div>
  </div>
</section>

<script src="https://kit.fontawesome.com/ef150c472d.js" crossorigin="anonymous"></script>