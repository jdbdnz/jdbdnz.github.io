<section class="m-5 max-w-screen-md mx-auto">
  <article>
    <header>
      <time datetime="2020-11-11" class="text-tertiary text-sm">November 11th, 2020</time>
      <h2 class="text-2xl mb-1">Controlling the width of an open menu button dropdown</h2>
    </header>
    <p class="my-2">
      Like every person, I want my menu button dropdowns to grow with their content, reach a maximum width, and then
      simply wrap. This should trivial. Alas, it is not trivial.
    </p>

    <h3 class="text-lg mt-4 font-semibold">Problem</h3>

    <p class="my-2">
      Absolutely positioned items expand to the width of their position parent and then wrap. Here the dropdown is
      absolutely positioned and the button is its relatively positioned parent.
    </p>
    <p class="my-2">
      Observe how the first dropdown wraps at the width of the button, and the second grows just so because the button
      is so wide.
    </p>

    <div class="p-1 flex space-x-2 mb-32">
      <div class="relative bg-active rounded px-2 py-1 text-white shadow-sm">
        <span class="py-1">Button</span>
        <ul class="left-0 absolute mt-1 bg-highlight shadow rounded text-left">
          <li class="p-1">First option</li>
          <li class="p-1">Second option</li>
        </ul>
      </div>
      <div class="relative bg-active rounded px-2 py-1 text-white shadow-sm">
        <span class="py-1">Button with longer name</span>
        <ul class="left-0 absolute mt-1 bg-highlight shadow rounded text-left">
          <li class="p-1">First option</li>
          <li class="p-1">Second option</li>
        </ul>
      </div>
    </div>

    <p class="my-2">
      It's not awful, but it's not great. I don't like the inconsistency, and I don't like that if I wanted the button
      to just be an icon or something, it would be a
      <em>very</em>
      narrow dropdown. Let's see that.
    </p>
    <div class="inline-block relative bg-active rounded px-2 py-1 text-white shadow-sm mb-32">
      <span class="py-1">
        <svg
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="text-primary inline-block stroke fill-current"
          fill="none">
          <g fill-rule="nonzero">
            <path
              d="M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM19 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
          </g>
        </svg>
      </span>
      <ul class="left-0 absolute mt-1 bg-highlight shadow rounded text-left">
        <li class="p-1">First option</li>
        <li class="p-1">Second option</li>
      </ul>
    </div>

    <p class="my-2">Gross.</p>
    <p class="my-2">Let's add a min-width</p>
    <div class="inline-block relative bg-active rounded px-2 py-1 text-white shadow-sm mb-20">
      <span class="py-1">
        <svg
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="text-primary inline-block stroke fill-current"
          fill="none">
          <g fill-rule="nonzero">
            <path
              d="M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM19 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
          </g>
        </svg>
      </span>
      <ul class="left-0 absolute mt-1 bg-highlight shadow rounded text-left min-w-40">
        <li class="p-1">First option</li>
        <li class="p-1">Second option</li>
      </ul>
    </div>

    <p class="my-2">Now there's dead space to the right of my text. Awful. Let's do a stupid work around.</p>

    <h3 class="text-xl mt-8 font-semibold">Stupid workaround.</h3>
    <p class="my-2">
      Give the dropdown an absolutely positioned parent with a ridiculous large width (I've used 10000px here).
    </p>
    <p class="my-2">
      Now the dropdown will grow with its content, regardless of the size of the button (up to 10000px).
    </p>
    <p class="my-2">Add a max-width your dropdown wraps at some point. Here I'll use 200px</p>

    <div class="inline-block relative bg-active rounded px-2 py-1 text-white shadow-sm mb-32">
      <span class="py-1">Button</span>
      <div class="left-0 absolute" style="width: 10000px">
        <ul class="absolute mt-1 bg-highlight shadow rounded text-left" style="max-width: 200px">
          <li class="p-1">Watch me grow with my content</li>
          <li class="p-1">See how I wrap at my max-width.</li>
        </ul>
      </div>
    </div>

    <p class="my-2">
      Oscar wilde claimed that all art is useless and so all that is useful cannot not be art, but I think this
      <strike>stupid workaround</strike>
      elegant solution proves otherwise.
    </p>
    <p class="my-2">
      <a href="//codepen.io/jdbd/pen/PozXYWB" class="underline text-active">Here is the Code Pen</a>
      which demonstrates the problem and the solution.
    </p>
  </article>
</section>
