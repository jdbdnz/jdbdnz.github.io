<script>
  import { Link } from 'svelte-routing'
</script>

<section class="m-3 p-2 space-y-10 flex flex-col max-w-screen-md mx-auto">
  <Link to="2020-11-21-grouping-with-vue-draggable">
    <article class="overflow-x-hidden">
      <header>
        <time datetime="2020-11-11" class="text-tertiary text-sm">November 21th, 2020</time>
        <h2 class="text-2xl mb-1">Grouping with Vue.Draggable (or any sorting plugin)</h2>
      </header>
      <p class="my-2">
        Vue.Draggable is one of many excellent tools for sorting a list. However, after struggling to find a pluggable
        solution which also groups items, I devised my own solution which should work just as well for most sorting
        plugins.
      </p>
    </article>

    <span class="underline text-active">Read more</span>
  </Link>

  <Link to="2020-11-10-menu-button-width">
    <article>
      <header>
        <time datetime="2020-11-11" class="text-tertiary text-sm">November 11th, 2020</time>
        <h2 class="text-2xl mb-1">Controlling the width of an open menu button dropdown</h2>
      </header>
      <p class="my-2">
        Like every person, I want my menu button dropdowns to grow with their content, reach a maximum width, and then
        simply wrap. This should trivial. Alas, it is not trivial.
      </p>
    </article>

    <span class="underline text-active">Read more</span>
  </Link>
</section>
