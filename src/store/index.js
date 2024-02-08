import { reactive, readonly } from "vue"

const state = reactive({
    cakes: 10,
    coffees: 0,
    theme: 'emerald',
    notEditable: 'Questa variabile non è modificabile'
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

export default {
    state,
    methods,
    // notEditable: readonly(state.notEditable) ???
}