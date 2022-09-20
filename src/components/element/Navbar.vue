<template>
    <header>
            <nav class="flex justify-between items-center py-7">
                <img src="../../assets/icons/logo.svg" />
                <div class="flex items-center">
                    <ul class="flex">
                        <li class="mr-7">Home</li>
                        <li class="mr-7">Category</li>
                        <li class="mr-7">Redward</li>
                        <li class="mr-7">Sign up</li>
                    </ul>
                    <Button text="Sign in" class=""/>
                </div>
            </nav>
    </header>
</template>

<script>
import Button from './Button.vue';
    export default {
        name: 'Navbar',
        components:{
            Button
        }
    }
</script>

<style scoped>

</style>