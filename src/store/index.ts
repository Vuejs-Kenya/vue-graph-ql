import Vue from 'vue';
import Vuex, { ActionTree, MutationTree, Store } from "vuex";

Vue.use(Vuex);

interface State {
    feed: boolean;
    createPost: boolean;
    postWithAuthor: boolean
}

const state: State = {
   feed: false,
   createPost: false,
   postWithAuthor: false
}

const actions: ActionTree<State, any> = {
    async initAuth({commit}): Promise<void> {
        console.log(commit)
    }
}

const mutations: MutationTree<State> = {

}

export default new Store({
    state,
    actions,
    mutations
})