<template>
        <div class="justify-center ml-1 text-center bg-left bg-no-repeat md:py-20 sm:flex sm:flex-row md:bg-contain bg-abstract" >
                <!-- image -->
                    <div class="flex mx-12 xs:mx-0 sm:my-8 sm:px-14 ">
                    <img :src="item.image.src" class="sm:object-contain md:object-cover h-72 w-72" > 
                    </div>
                <!-- info -->
                    <div class="container my-4 md:my-8 sm:text-left sm:w-64 md:w-96">
                        <p class="pb-2 text-xl font-semibold text-blue-800 md:text-3xl opacity-80">{{item.title}}</p>
                        <p class="text-sm lg:text-gray-500 md:text-md ">{{item.text}}</p>
                        
                        <slot></slot>
                        <button class="w-32 py-1 mt-4 text-xs font-bold text-white bg-yellow-600 rounded shadow sm:w-3/5 md:text-sm sm:w-6/12 lg:text-md xl:text-xl hover:bg-yellow-500 focus:shadow-outline focus:outline-none"  type="button">Find Plans</button>
                    </div>
                
        </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    
// mounted () {
//   console.log(this.item)
// }
}
</script>

