import Vue from 'vue'
import VueRouter from 'vue-router'
import myMain from '../views/myMain.vue'
import myLogin from '../views/myLogin.vue'
Vue.use(VueRouter)
const routes = [
    {path:'/',
     component:myMain,
     name:'Main',
     redirect:'/home',
     children:[
    //    {path:'home',name:'home',component:myHome},
    //    {path:'user',name:'user',component:myUser},
    //    {path:'mall',name:'mall',component:myMall},
    //    {path:'page1',name:'page1',component:pageOne},
    //    {path:'page2',name:'page2',component:pageTwo}
    ]},
    {
        path:'/login',name:'login',component:myLogin

    }
 

]
const router = new VueRouter({
    routes:routes
})

export default router
