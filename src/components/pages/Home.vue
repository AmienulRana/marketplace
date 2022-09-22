<template>
    <Navbar />
    <router-view>
        <Banner />
        <Category />
        <NewProducts />
    </router-view>
    <Footer />
</template>

<script>
    import Navbar from '../components/element/Navbar/Navbar.vue'
    import Banner from '../components/organism/Home/Banner.vue'
    import Category from '../components/organism/Home/Category.vue'
    import NewProducts from '../components/organism/Home/NewProduct.vue'
    import Footer from '../components/element/Footer';
    export default {
        name: 'Home',
        components:{
            Navbar, Banner, Category, NewProducts, Footer
        }
    }
</script>

<style scoped>

</style>