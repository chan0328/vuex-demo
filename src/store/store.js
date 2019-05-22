import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product.js';
import pets from './modules/pets.js';
Vue.use(Vuex);

//模块化
const store = new Vuex.Store({
    modules: {
        a: product.products,
        b: pets.pets
    }
})

export default store