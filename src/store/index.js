import { reactive } from "vue"

const state = reactive({
    cakes: 10,
    coffees: 0,
    theme: 'emerald'
});

const methods = {
    decreaseCakes() {
        state.cakes--
    },
    increaseCakes() {
        state.cakes++
    },
    decreaseCoffee() {
        state.coffees--
    },
    increaseCoffee() {
        state.coffees++
    },
}

/* const getters = {
    getCakes() {
        return state.cakes;
    }
    getCoffees() {
        return state.coffees;
    }
} */

export default { state, methods }