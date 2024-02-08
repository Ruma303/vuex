<script setup>
import { inject } from 'vue';
const store = inject('store');
</script>

<template>

    <h1 class="text-4xl">Coffees</h1>
    <p class="text-2xl">Remaining coffees: {{ store.state.coffees }}</p>

    <div class="flex gap-2 items-center">
        <button class="bg-sky-300 hover:bg-sky-400 hover:cursor p-2 rounded-lg"
            @click="store.methods.decreaseCoffee">-</button>
        <button class="bg-sky-300 hover:bg-sky-400 hover:cursor p-2 rounded-lg"
            @click="store.methods.increaseCoffee">+</button>
    </div>

</template>