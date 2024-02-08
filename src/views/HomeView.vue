<script setup>
import { useStore } from 'vuex';
const store = useStore();
/* In HomeView.vue, non hai bisogno di defineEmits perché utilizzerai Vuex per gestire lo stato globalmente. Assicurati che la selezione aggiorni lo state di Vuex. */
</script>

<template>
    <h1 class="text-4xl text-black font-semibold">Homepage</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo! Ex voluptatem iusto in, perspiciatis laboriosam doloribus unde fuga voluptatum harum, dicta nemo esse tempore, quos quo soluta quaerat explicabo? Distinctio impedit voluptate voluptatem. Cum reiciendis odio rem perspiciatis aperiam. Velit voluptatem a magnam! Ducimus adipisci nam sint totam, itaque esse similique suscipit, dolorem deserunt sequi saepe consequatur voluptatum sapiente commodi qui minima doloremque laudantium inventore aut vel neque eligendi! Architecto, quidem pariatur voluptatem, ipsam fugiat nobis odio necessitatibus repudiandae hic consequuntur veniam sint? Quia fugiat ipsum inventore error tempore labore vel cum consequatur, exercitationem, porro repellat minus, voluptatibus ullam?
    </p>

    <div class="colors flex gap-2">
        <h3 class="text-xl">Seleziona tema</h3>

        <select name="" id="" v-model="store.state.theme" class="bg-neutral-200 rounded-md">
            <option value="emerald">Default</option>
            <option value="red">Rosso</option>
            <option value="blue">Blu</option>
            <option value="amber">Ambra</option>
        </select>

    </div>
</template>