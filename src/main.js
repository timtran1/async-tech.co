import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import router from './router'
import 'bootstrap-utilities/bootstrap-utilities.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax, {
    colors: {
        primary: 'rgb(99, 91, 255)',
    }
})


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
