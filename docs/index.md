---
layout: default
---

<h1 class="heading text-5xl">a17t demo</h1>
<h3 class="subheading">a17t is an atomic design toolkit built for the future</h3>
<hr class="sep">
<section>
    <h3 class="heading text-2xl py-4">Cards</h3>
    <div class="md:grid grid-cols-3 gap-4">
    {% for tone in site.tones %}
        {% for priority in site.priorities %}
        <div class="card ~{{tone}} !{{priority}} mb-4 md:mb-0 content">
            <h3 class="heading text-2xl">~{{tone}} !{{priority}}</h3>
            <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt euismod nibh, et tempor lectus congue et.</p>
        </div>
        {% endfor %}
    {% endfor %}
    </div>
</section>
