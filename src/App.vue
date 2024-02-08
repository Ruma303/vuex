<script setup>
import { RouterLink, RouterView } from 'vue-router';
import store from '@/store/index';
import { provide, computed } from 'vue';
provide('store', store);

const themeClass = computed(() => {
    switch(store.state.theme) {
        case 'red':
            return ['shadow-red-500', 'text-red-500'];
        case 'blue':
            return ['shadow-blue-500', 'text-blue-500'];
        case 'amber':
            return ['shadow-amber-500', 'text-amber-500'];
        default:
            return 'shadow-emerald-500';
    }
});

</script>

<template>
    <div class="container max-w-[50em] h-full flex flex-col items-center mx-auto my-2 gap-8">
        <h1 class="text-6xl text-emerald-400">Vuex</h1>

        <nav class="flex gap-2 items-center justify-center h-100">
            <router-link to="/cakes" class="text-xl">Cakes</router-link> ||
            <router-link to="/" class="text-xl">Home</router-link> ||
            <router-link to="/coffees" class="text-xl">Coffees</router-link>
        </nav>

        <section :class="['flex flex-col gap-3 mb-5 items-center shadow-xl p-4 min-w-96 min-h-60', themeClass]">
            <router-view></router-view>
        </section>

    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #6AD09D;
    font-size: 1.8em;
}
</style>