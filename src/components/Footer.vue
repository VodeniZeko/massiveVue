<template>
  <footer class="flex flex-col max-w-screen-xl px-8 mx-auto">

<div class="flex flex-col-reverse justify-between pb-4 bg-blue-800 sm:p-0 sm:flex sm:flex-row w-100">
<!-- TEXT -->
    <div class="flex flex-col justify-center text-center text-white sm:w-6/12 ">
      <div class="w-7/12 mx-auto text-left sm:mr-12">
            <p class="pb-4 text-xl md:text-2xl font-semibold">Talk directly to a licensed Insurance agency in oyur area!</p>
            <span class="text-xs leading-6 md:text-md">We're dedicated to helping you find the right Medicare Supplement Insurance. If you're looking to lower your out-of-pocket expenses or expand you current Medicare coverage, we have Licensed Insurance Agents available to provide expert advice and guidance. Let us walk you through the process!</span>
          </div>
      </div>
<!-- IMAGE -->
      <div class="w-full mb-4 bg-center bg-no-repeat sm:m-0 sm:w-5/12 lg:bg-cover spa h-96 g-red-400 bg-couple">
    </div>
</div>


<div class="flex justify-around px-1 py-5 text-xs text-center text-white bg-gray-500 sm:w-full ">
  <span class="">
  Copyright &copy; 2021 SimpleMedicareCoverage. All rights reserved 
  </span>
  <span class="">
  Disclaimer | Terms & Conditions | Contact us | Privacy Policy 
  </span>
</div>
    
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>
