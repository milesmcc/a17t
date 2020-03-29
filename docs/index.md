---
layout: default
---

<h1 class="heading text-5xl">a17t demo</h1>
<h3 class="subheading">a17t is an atomic design toolkit built for the future</h3>
<hr class="sep">
<section>
    <h3 class="heading text-2xl py-4">Cards</h3>
    {% for tone in site.tones %}
    {% capture example %}
    <div class="md:grid grid-cols-3 gap-3">
        {% for priority in site.priorities %}
        <div class="card ~{{tone}} !{{priority}} mb-4 md:mb-0 content">
            <h3 class="heading text-2xl">~{{tone}} !{{priority}}</h3>
            <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt euismod nibh, et
                tempor lectus congue et.</p>
        </div>
        {% endfor %}
    </div>
    {% endcapture %}
    {% include example.html code=example classes="bg-gray-100" %}
    {% endfor %}

    <h3 class="heading text-2xl py-4">Asides</h3>
    {% for tone in site.tones %}
    {% capture example %}
    <div class="aside ~{{tone}} mb-4 md:mb-0 content">
        <p class="content"><strong>This is a {{tone}} aside.</strong> You can specify priorities, but you probably shouldn't. (It's an aside, after all.) What you're seeing here is the default variant &mdash; that is, the !normal priority.</p>
    </div>
    {% endcapture %}
    {% include example.html code=example %}
    {% endfor %}

</section>
<hr class="sep">
<section>
    <h3 class="heading text-2xl py-4">Typography</h3>
    <div class="md:grid grid-cols-2 gap-6">
        <div>
            {% capture example %}
            <section class="content max-w-md">
                <h3 class="heading">With content class.</h3>
                <p>This is a paragraph. When you place your body content inside a content class,
                    a17t makes sure that the spacing figures everything out automatically.</p>
                <p>While a17t usually tries to avoid '<a href="https://rmrm.io">magic</a>' solutions, type is important
                    (and difficult) enough to warrant an exception.</p>
            </section>
            {% endcapture %}
            {% include example.html code=example %}
        </div>
        <div>
            {% capture example %}
            <section class="max-w-md">
                <h3 class="heading">Without content class.</h3>
                <p>This is a paragraph. When you place your body content inside a content class,
                    a17t makes sure that the spacing figures everything out automatically.</p>
                <p>While a17t usually tries to avoid '<a href="https://rmrm.io">magic</a>' solutions, type is important
                    (and difficult) enough to warrant an exception.</p>
            </section>
            {% endcapture %}
            {% include example.html code=example %}
        </div>
    </div>
    {% capture example %}
    <p class="label">This is a label.</p>
    <p class="support">It's like the opposite of a support.</p>
    <p class="support ~critical">These can all have tones, by the way!</p>
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    <p class="supra">This is a supra</p>
    <h3 class="heading">This is a heading</h3>
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    <h3 class="heading">This is a heading-subheading pair</h3>
    <p class="subheading">I'm the subheading (which shouldn't be followed by a paragraph).</p>
    {% endcapture %}
    {% include example.html code=example %}

</section>
<hr class="sep">
<section>
    <h3 class="heading text-2xl py-4">Information</h3>
    {% capture example %}
    {% for tone in site.tones %}
    <div class="mb-1">
        {% for priority in site.priorities %}
        <span class="chip ~{{tone}} !{{priority}}">{{tone|capitalize}}</span>
        {% endfor %}
    </div>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    {% for tone in site.tones %}
    <div class="mb-1">
        {% for priority in site.priorities %}
        <span class="badge ~{{tone}} !{{priority}}">{{forloop.index}}</span>
        <span class="badge ~{{tone}} !{{priority}}">New</span>
        {% endfor %}
    </div>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    {% for tone in site.tones %}
    <div class="mb-1">
        {% for priority in site.priorities %}
        <span class="chip ~{{tone}} !{{priority}} loading text-lg">Loading</span>
        {% endfor %}
    </div>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}

    {% for tone in site.tones %}
    {% capture example %}
    <div class="md:grid grid-cols-3 gap-3">
        {% for priority in site.priorities %}
        <progress class="progress ~{{tone}} !{{priority}} mb-4 md:mb-0" value="60" max="100">60%</progress>
        {% endfor %}
    </div>
    {% endcapture %}
    {% include example.html code=example %}
    {% endfor %}
</section>
<hr class="sep">
<section>
    <h3 class="heading text-2xl py-4">Interaction</h3>
    {% capture example %}
    {% for tone in site.tones %}
    <div class="mb-1">
        {% for priority in site.priorities %}
        <a class="button ~{{tone}} !{{priority}}" href="https://rmrm.io">Hello</a>
        <a class="button ~{{tone}} !{{priority}}" href="https://rmrm.io" disabled>Hello</a>
        <a class="button ~{{tone}} !{{priority}} loading" href="https://rmrm.io">Hello</a>
        {% endfor %}
    </div>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    {% for tone in site.tones %}
    <div class="mb-1">
        {% for priority in site.priorities %}
        <a class="portal ~{{tone}} !{{priority}}" href="https://rmrm.io">Hello</a>
        <a class="portal ~{{tone}} !{{priority}} active" href="https://rmrm.io">Hello</a>
        {% endfor %}
    </div>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}
</section>
<hr class="sep">
<section>
    <h3 class="heading text-2xl py-4">Forms</h3>
    {% capture example %}
    {% for tone in site.tones %}
    <div class="md:grid grid-cols-3 gap-3 mb-6">
        {% for priority in site.priorities %}
        <input class="input ~{{tone}} !{{priority}} mb-1" type="text" placeholder="Type something">
        {% endfor %}
    </div>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}
</section>