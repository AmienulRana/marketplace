<template>
    <Navbar />
    <Banner />
</template>

<script>
    import Navbar from '../components/element/Navbar/Navbar.vue'
    import Banner from '../components/organism/Home/Banner.vue'
    export default {
        name: 'Home',
        components:{
            Navbar, Banner
        }
    }
</script>

<style scoped>

</style>