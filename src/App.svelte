<script>
  import { Router, Link, Route } from 'svelte-routing'
  import './TailwindStyles.svelte'
  import './ThemeStyles.svelte'

  import Header from './components/Header.svelte'
  import TechPosts from './pages/TechPosts.svelte'
  import WritingPosts from './pages/WritingPosts.svelte'
  import MenuButtonWidth from './posts/MenuButtonWidth.svelte'
  import VueDraggableGrouping from './posts/VueDraggableGrouping.svelte'
  import Dove from './posts/Dove.svelte'

  export let url = ''
</script>

<Router {url}>
  <Header />
  <div>
    <Route path="/" component={TechPosts} />
    <Route path="writing" component={WritingPosts} />
    <Route path="2020-11-10-menu-button-width" component={MenuButtonWidth} />
    <Route path="2020-11-12-dove-short-story" component={Dove} />
    <Route path="2020-11-21-grouping-with-vue-draggable" component={VueDraggableGrouping} />
  </div>
</Router>
