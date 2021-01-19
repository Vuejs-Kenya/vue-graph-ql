import Vue from 'vue'
import App from './components/App.vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'http://localhost:8080/'
  })
})

// use middleware

Vue.use(VueApollo);

Vue.config.productionTip = false

// add apolloProvider to vue options
new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
