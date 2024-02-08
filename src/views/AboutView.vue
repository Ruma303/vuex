<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const notEditable = computed({
    get: () => store.state.notEditable,
    set: (value) => {
        store.commit('setNotEditable', value);
    }
});

</script>

<template>
    <h1 class="text-4xl text-black font-semibold">About</h1>
    <p>
        {{ store.state.notEditable }}
    </p>

    <input v-model="notEditable" id="" class="border-2 border-zinc-500 rounded-md px-1 focus-within:border-pink-500 placeholder:italic placeholder:text-slate-400" name="" type="text">
</template>