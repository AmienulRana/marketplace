<template>
    <h1 class="text-blue-500 mt-6 mb-4 text-xl font-medium">Trend Categories</h1>
    <section class="grid md:grid-cols-4 lg:grid-cols-5 gap-4 sm:grid-cols-3 grid-cols-2">
        <div class="mb-6 cursor-pointer" v-for="(product, i) in products" :key="i">
            <router-link :to="`/detail/${product.id}`">
                <img :src="`./image/${product.thumbnail}`" class="cover h-36 w-full">
                <h2 class="text-blue-500 text-lg mt-1">{{ product.nameProduct }}</h2>
                <p class="text-orange-500">{{ product.price }}</p>
            </router-link>
        </div>
    </section>
</template>

<script>
    export default {
        name:'NewProduct',
        data(){
            return{
                products: [
                    { id: 1, nameProduct: 'Apple Watch 4', price:"$890", thumbnail:'newproduct1.jpg' },
                    { id: 2, nameProduct: 'Orange Bogotta', price:"$94,509", thumbnail:'newproduct2.jpg' },
                    { id: 3, nameProduct: 'Sofa Ternyaman', price:"$1,409", thumbnail:'newproduct3.jpg' },
                    { id: 4, nameProduct: 'Bubuk Maketti', price:"$225", thumbnail:'newproduct4.jpg' },
                    { id: 5, nameProduct: 'Mavic Kawe', price:"$503", thumbnail:'newproduct5.jpg' },
                    { id: 6, nameProduct: 'Black Edition Nike', price:"$70,482", thumbnail:'newproduct6.jpg' },
                ]
            }
        }
    }
</script>

<style scoped>

</style>