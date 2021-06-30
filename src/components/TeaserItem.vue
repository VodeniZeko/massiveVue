<template>
        <div class="justify-center ml-1 text-center bg-left bg-no-repeat lg:space-x-28 md:py-20 md:flex md:flex-row md:bg-contain bg-abstract" >
                <!-- image -->
                    <div class="flex mt-6 md:mx-6 md:w-1/3 h-60"
                    :class="{'sm:mx-12': item.id % 2 !== 0}"
                     >
                    <img :src="item.image.src"
                    :alt="item.image.alt" 
                    class="object-cover w-full sm:object-contain md:object-cover"
                     > 
                    </div>
                <!-- info -->
                    <div class="container lg:text-left md:w-1/3">
                        <p class="pb-2 text-2xl text-blue-800 sm:font-semibold md:text-3xl opacity-80">{{item.title}}</p>
                        <p class="m-3 text-sm sm:leading-6 sm:m-0 lg:w-10/12 lg:text-gray-500 md:text-md">{{item.text}}</p>
                        
                        <slot></slot>
                        <button class="w-20 py-2 text-xs font-bold text-white bg-yellow-600 rounded shadow lg:w-32 lg:mt-4 md:text-sm lg:text-md xl:text-xl hover:bg-yellow-500 focus:shadow-outline focus:outline-none"  type="button">Find Plans</button>
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

