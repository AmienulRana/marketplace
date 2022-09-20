<template>
    <header>
            <nav class="flex justify-between items-center py-7 relative">
                <img src="../../../assets/icons/logo.svg" />
                <div class="md:w-auto md:flex-row md:static md:h-0 md:py-0 flex items-center pt-6 pb-6 h-38 w-full justify-between bg-white shadow-xl flex-col absolute top-0 left-0 duration-300 ease-in-out" :class="showNavbar ? 'translateY-100 opacity-100 z-10' : '-translateY-full opacity-100 -z-10'">
                    <ul class="flex sm:flex-row flex-col items-center">
                        <li :class="getNavbarActive('/')">Home</li>
                        <li :class="getNavbarActive('/category')">Category</li>
                        <li :class="getNavbarActive('/redward')">Redward</li>
                        <li :class="getNavbarActive('/signup')">Sign up</li>
                    </ul>
                    <Button text="Sign in" />
                </div>
                <HamburgerButton  @click="handleShowNavbar" />
            </nav>
    </header>
</template>

<script>
import Button from '../Button.vue';
import HamburgerButton from './HamburgerButton.vue'
    export default {
        name: 'Navbar',
        data(){
            return{
                showNavbar:false,
            }
        },
        components:{
            Button, HamburgerButton
        },
        methods:{
            getNavbarActive(name){
                let classNavbar = "md:mb-0 md:mr-7 mb-6 "
                if(name  === '/'){
                    return classNavbar += 'text-orange-500 font-bold'
                }
                return classNavbar += 'text-blue-500'
            },
            handleShowNavbar(){
                this.showNavbar = this.showNavbar ? false : true
            }
        },
        computed:{
            
        }
    }
</script>

<style scoped>
    .translateY-100{
        transform:translateY(100px);
    }
    .-translateY-full{
        transform:translateY(-100%);
    }
</style>