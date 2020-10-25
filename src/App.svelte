<script>
  import TailwindStyles from './TailwindStyles.svelte'
  import ThemeStyles from './ThemeStyles.svelte'

  const message = 'Learn Svelte'
</script>

<div class="text-center">
  <header class="bg-gray-100 h-screen flex justify-center items-center flex-col">
    <div class="grid grid-flow-row auto-rows-max md:auto-rows-min">
      <div class="text-primary bg-primary border border-primary rounded px-2">
        <span>text-primary</span>
        <span>bg-primary</span>
      </div>
      <div class="text-secondary bg-secondary border border-primary rounded px-2">
        <span>text-secondary</span>
        <span>bg-secondary</span>
      </div>
      <div class="text-tertiary bg-base border border-primary rounded px-2">
        <span>text-tertiary</span>
        <span>bg-base</span>
      </div>
      <div class="text-disabled bg-highlight border border-primary rounded px-2">
        <span>text-disabled</span>
        <span>bg-highlight</span>
      </div>
      <div class="text-quarternary bg-disabled border border-primary rounded px-2">
        <span>text-quarternary</span>
        <span>bg-disabled</span>
      </div>
      <div class="text-inverse bg-inverse border border-primary rounded px-2">
        <span>text-inverse</span>
        <span>bg-inverse</span>
      </div>
      <div class="text-inverse-secondary bg-inverse-secondary border border-primary rounded px-2">
        <span>text-inverse-secondary</span>
        <span>bg-inverse-secondary</span>
      </div>
      <div class="text-inverse-tertiary bg-inverse-highlight border border-primary rounded px-2">
        <span>text-inverse-tertiary</span>
        <span>bg-inverse-highlight</span>
      </div>
    </div>
  </header>
</div>
