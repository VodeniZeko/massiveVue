<template>
  <HelloWorld msg="Some Text"/>
  <ByeWorld msg="Other Text"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ByeWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ByeWorld
  }
}
</script>

<style>

</style>
