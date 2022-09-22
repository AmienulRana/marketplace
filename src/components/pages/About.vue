<template> 
    <Navbar />
    <router-view>
        <div>
            <h2>Ini adalah halaman About</h2>
        </div>
    </router-view>
    <Footer />
</template>

<script>
    import Navbar from '../components/element/Navbar/Navbar.vue'
    import Footer from '../components/element/Footer.vue'
    export default {
        name: 'About',
        components:{
            Navbar, Footer
        }
    }
</script>

<style scoped>

</style>