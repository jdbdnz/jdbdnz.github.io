<script>
  import { Link } from 'svelte-routing'
  import MenuButtonWidth from '../posts/MenuButtonWidth.svelte'
</script>

<section class="m-3 p-2 space-y-10 flex flex-col max-w-screen-md mx-auto">
  <Link to="2020-11-12-dove-short-story">
    <article>
      <header>
        <time datetime="2020-11-12" class="text-tertiary text-sm">November 12th, 2020</time>
        <h2 class="text-2xl mb-1">Dove, a short story</h2>
      </header>
      <p class="my-2">
        To stare at my feet, and at the cracked earth which partially crumbles to sand where my feet fall, is a bad
        habit. I am compelled to keep my head up, searching the indistinct horizon for the Wild which I was threatened
        with since youth.
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
