<template>

  <Header />
<div class="container max-w-screen-xl mx-auto bg-red-600">
  <h1>hell ofrom container</h1>
</div>
<Footer/>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
