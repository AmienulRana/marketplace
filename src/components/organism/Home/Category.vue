<template>
    <h1 class="text-blue-500 mt-6 text-xl font-medium">Trend Categories</h1>
    <section class="flex mt-4 overflow-x-scroll w-full scrollbar-hidden">
        <section class="flex" style="min-width:1000px">
            <div class="h-155px w-32 bg-grey-500 mr-8 flex flex-col justify-center items-center">
                <img src='@/assets/icons/gadgets.svg' class="mb-3 w-18px h-18px">
                <h2 class="text-blue-500 text-lg mt-3">Gadgets</h2>
            </div>
            <div class="h-155px w-32 bg-grey-500 mr-8 flex flex-col justify-center items-center">
                <img src='@/assets/icons/furniture.svg' class="mb-3 w-18px h-18px">
                <h2 class="text-blue-500 text-lg mt-3">Furniture</h2>
            </div>
            <div class="h-155px w-32 bg-grey-500 mr-8 flex flex-col justify-center items-center">
                <img src='@/assets/icons/makeup.svg' class="mb-3 w-18px h-18px">
                <h2 class="text-blue-500 text-lg mt-3">Make up</h2>
            </div>
            <div class="h-155px w-32 bg-grey-500 mr-8 flex flex-col justify-center items-center">
                <img src='@/assets/icons/sneakers.svg' class="mb-3 w-18px h-18px">
                <h2 class="text-blue-500 text-lg mt-3">Sneakers</h2>
            </div>
            <div class="h-155px w-32 bg-grey-500 mr-8 flex flex-col justify-center items-center">
                <img src='@/assets/icons/tools.svg' class="mb-3 w-18px h-18px">
                <h2 class="text-blue-500 text-lg mt-3">Tools</h2>
            </div>
            <div class="h-155px w-32 bg-grey-500 mr-8 flex flex-col justify-center items-center">
                <img src='@/assets/icons/baby.svg' class="mb-3 w-18px h-18px">
                <h2 class="text-blue-500 text-lg mt-3">Baby</h2>
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        name:'Category',
        data(){
            return {
                categorys:[
                    { icon:'gadgets.svg', name: 'Gadgets' },
                    { icon:'furniture.svg', name: 'Furniture' },
                    { icon:'makeup.svg', name: 'Make up' },
                    { icon:'sneakres.svg', name: 'Sneakres' },
                    { icon:'tools.svg', name: 'Tools' },
                    { icon:'baby.svg', name: 'Baby' },
                ]
            }
        },
        methods: {
            pathToFolder(argsUrl){
                return ``
            }
        }
    }
</script>

<style scoped>

</style>