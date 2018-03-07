import Vue from 'vue'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'
import awsAppSyncClient from './AppSync'

const el = '#app'
const defaultClient = awsAppSyncClient()
const appsyncProvider = new VueApollo({defaultClient})
const provide = appsyncProvider.provide()
const template = '<App/>'
const components = {App}

Vue.config.productionTip = false
Vue.use(VueApollo)

new Vue({el, router, provide, template, components})
