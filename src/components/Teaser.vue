<template>
            <div class="flex flex-col max-w-screen-xl ml-1 ">
                <div class="h-full " v-for="item in items" v-bind:key="item.id">
                    <TeaserItem class="" :item="item" :class="{'flex flex-col sm:flex-row  sm:flex-row-reverse bg-right': item.id % 2 === 0, 'bg-blue-100' : item.id % 2 !== 0}"/>
                </div>
            </div>
</template>

<script>
import TeaserItem from "./TeaserItem.vue"

export default {
  name: `Teaser`,
  components: {
      TeaserItem
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>

<style>
    .flip {
-moz-transform: scale(-1, 1);
-webkit-transform: scale(-1, 1);
-o-transform: scale(-1, 1);
-ms-transform: scale(-1, 1);
transform: scale(-1, 1);
    }
</style>
