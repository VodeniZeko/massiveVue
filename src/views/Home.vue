<template>
  <main v-if="!loading">
    <!-- <DataTitle :dataDate="dataDate" :text="title" />

    <DataBoxes :stats="status" />

    <CountrySelect :countries="countries" @get-country="getCountryData" /> -->
  </main>

  <main v-else class="flex flex-col justify-center text-center align-center">
    <div class="mt-10 mb-6 text-3xl text-gray-500">
      Loading
    </div>
  </main>
</template>

<script>
// import CountrySelect from '@/components/CountrySelect';
// import DataBoxes from '@/components/DataBoxes';
// import DataTitle from '@/components/DataTitle';
// import { ref } from 'vue';
export default {
  name: 'Home',
  components: {
    // DataTitle,
    // DataBoxes,
    // CountrySelect
  },
  
};

</script>

