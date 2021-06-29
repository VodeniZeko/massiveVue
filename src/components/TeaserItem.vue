<template>
        <div class="flex flex-row justify-center py-20 ml-1 bg-left bg-no-repeat bg-contain bg-abstract" >
                <!-- image -->
                    <div class="my-8 px-14 ">
                    <img :src="item.image.src" class="object-cover h-72 w-72" > 
                    </div>
                <!-- info -->
                    <div class="container my-8 text-left h-86 w-96">
                        <p class="pb-2 text-sm font-semibold text-blue-800 md:text-3xl opacity-80">{{item.title}}</p>
                        <p class="text-gray-500 text-md">{{item.text}}</p>
                        
                        <slot></slot>
                        <button class="w-3/5 py-1 mt-4 text-xs font-bold text-white bg-yellow-600 rounded shadow sm:text-sm sm:w-6/12 lg:text-md xl:text-xl hover:bg-yellow-500 focus:shadow-outline focus:outline-none"  type="button">Find Plans</button>
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

