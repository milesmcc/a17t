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
        <p class="content"><strong>This is a {{tone}} aside.</strong> You can specify priorities, but you probably
            shouldn't. (It's an aside, after all.) What you're seeing here is the default variant &mdash; that is, the
            !normal priority.</p>
    </div>
    {% endcapture %}
    {% include example.html code=example %}
    {% endfor %}

    <h3 class="heading text-2xl py-4">Icons</h3>
    {% capture example %}
    {% for tone in site.tones %}
    <span class="icon m-2 ~{{tone}} !low">
        <i class="fas fa-camera fa-lg"></i>
    </span>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}

</section>
<hr class="sep">
<section>
    <h3 class="heading text-2xl py-4">Typography</h3>
    {% capture example %}
    <section class="content">
        <h3>This is a content block</h3>
        <p>This is a paragraph. When you place your body content inside a content class,
            a17t makes sure that the spacing figures everything out automatically.</p>
        <p>While a17t usually tries to avoid '<a href="https://rmrm.io">magic</a>' solutions, type is important
            (and difficult) enough to warrant an exception.</p>
        <blockquote>
            This is a blockquote. Lorem ipsum dolor sit amet. These are words that were once spoken, I guess.
            <cite>This is its source.</cite>
        </blockquote>
        <p>This is a final closing paragraph to show you how it all comes together.</p>
        <h3>Just kidding, there's more.</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul>
            <li>An item</li>
            <li>Another item</li>
            <li>Three items?</li>
        </ul>
        <p>This is <i>real</i>a final closing paragraph to show you how it all comes together.</p>
        <ol>
            <li>One!</li>
            <li>Two?</li>
            <li>Three.</li>
        </ol>
    </section>
    {% endcapture %}
    {% include example.html code=example %}
    {% capture example %}
    <p class="label">This is a label.</p>
    <p class="support">It's like the opposite of a support.</p>
    <p class="support ~critical">These can all have tones, by the way!</p>
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    <div class="content">
    <p>This is some text, with an inline <code>&lt;code&gt;</code> tag. This requires a content block!</p>
    <pre><code>This is some longer code!

that() {
spansMultipleLines();  
}</code></pre>

<p>To use this <code>code</code><code>block</code>, press <kbd>Cmd</kbd> and <kbd>C</kbd><kbd>X</kbd> together.</p>
</div>
{% endcapture %}
{% include example.html code=example %}

    {% capture example %}
    <p class="supra">This is a supra</p>
    <h3 class="heading">This is a heading</h3>
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
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

    {% capture example %}
    {% for priority in site.priorities %}
    <textarea class="field !{{priority}} mb-1" placeholder="Type something"></textarea>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    {% for tone in site.tones %}
    <div class="md:grid grid-cols-3 gap-3 mb-6">
        {% for priority in site.priorities %}
        <div class="select ~{{tone}} !{{priority}} mb-1">
            <select>
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
                <option>This is a very long option and is likely to overlap with the chevron</option>
            </select>
        </div>
        {% endfor %}
    </div>
    {% endfor %}
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    <label class="switch block">
        <input type="checkbox">
        <span>Save my information</span>
    </label>
    <label class="switch block">
        <input type="checkbox">
        <span>I am not a robot</span>
    </label>
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    <label class="switch">
        <input type="radio" name="rad">
        <span>I am cool</span>
    </label>
    <label class="switch">
        <input type="radio" name="rad">
        <span>I am not cool</span>
    </label>
    <label class="switch">
        <input type="radio" name="rad" disabled>
        <span>Disabled</span>
    </label>
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    <label class="upload">
        <input type="file">
        <span class="button field">Upload</span>
        Pick a file...
    </label>
    {% endcapture %}
    {% include example.html code=example %}

    {% capture example %}
    <div class="button ~neutral !high">
        More Options
        <span class="icon ml-4 mr-1">
            <i class="chev"></i>
        </span>
    </div>
    {% endcapture %}
    {% include example.html code=example %}

</section>
