import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ("../views/home/Home.vue")
const Cart = () =>
    import ("../views/cart/Cart.vue");
const Catgory = () =>
    import ("../views/catgory/Catgory.vue");
const Mine = () =>
    import ("../views/mine/Mine.vue");

Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            redirect: "/home"
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/catgory',
            component: Catgory
        },
        {
            path: '/mine',
            component: Mine
        },

    ]
});

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}