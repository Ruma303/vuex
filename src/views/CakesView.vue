<script setup>
import { inject } from 'vue';
const store = inject('store');
</script>

<template>

    <h1 class="text-4xl">Cakes</h1>
    <p class="text-2xl">Remaining cakes: {{ store.state.cakes }}</p>
    <!-- <p class="text-2xl">Remaining cakes: {{ store.getters.getCakes }}</p> -->

    <div class="flex gap-2 items-center">
        <button class="bg-sky-300 hover:bg-sky-400 hover:cursor p-2 rounded-lg"
            @click="store.methods.decreaseCakes">-</button>
        <button class="bg-sky-300 hover:bg-sky-400 hover:cursor p-2 rounded-lg"
            @click="store.methods.increaseCakes">+</button>
    </div>

</template>