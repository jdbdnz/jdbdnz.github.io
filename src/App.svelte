<script>
  import { Router, Link, Route } from 'svelte-routing'
  import TailwindStyles from './TailwindStyles.svelte'
  import ThemeStyles from './ThemeStyles.svelte'

  import Header from './components/Header.svelte'
  import ListPosts from './pages/ListPosts.svelte'
  import MenuButtonWidth from './posts/MenuButtonWidth.svelte'
  import Dove from './posts/Dove.svelte'

  export let url = ''
</script>

<Router {url}>
  <Header />
  <div>
    <Route path="/" component={ListPosts} />
    <Route path="2020-11-10-menu-button-width" component={MenuButtonWidth} />
    <Route path="2020-11-12-dove-short-story" component={Dove} />
  </div>
</Router>
