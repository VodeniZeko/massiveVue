<template>
  <Header />
<div class="container max-w-screen-xl mx-auto h-100vh">
  <HomeView />
</div>
<Footer/>
</template>

<script>
import Header from './components/Header.vue'
import HomeView from './views/HomeView.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    HomeView,
    Footer
  }
}
</script>

<style>

</style>
