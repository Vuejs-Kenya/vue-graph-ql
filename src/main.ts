import Vue from 'vue';
import axios from 'axios';
import VueI18n from 'vue-i18n'

import App from './App.vue'
import { HttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

import store from "./store"
import router from "@/router";

import messages from "@/locale";

Vue.prototype.$appName = "Vue GraphQL";
Vue.prototype.$http = axios;
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
    silentTranslationWarn: true
});

const link = new HttpLink({
    uri: `https://localhost:8080/graphql`
});

const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

Vue.use(VueApollo);
Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    apolloProvider,
    render: h => h(App)
})
