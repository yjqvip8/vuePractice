import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home.vue"
import ClassIfy from "../components/classify.vue"
import Sale from "../components/sale.vue"
import Login from "../components/login.vue"
import Register from "../components/register.vue"
import Shop from "../components/shop.vue"
import Detailed from "../components/detailed.vue"
import Trolley from "../components/trolley.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/classify',component:ClassIfy},
    {path:'/sale',component:Sale},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/shop',component:Shop},
    {path:'/detailed',component:Detailed},
    {path:'/trolley',component:Trolley}
  ]
})
