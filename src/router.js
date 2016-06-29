export default function (router) {
    router.map({
        '/': {
            name: 'index',
            component: require('./components/Hello.vue')
        },
        '/hi': {
            name: 'hi',
            // 按需加载
            component: function (resolve) {
                require(['./components/Hi.vue'], resolve)
            }
        },
        '/home': {
             name: 'home',
             component (resolve) {
                 require(['./views/home'], resolve)
            }
        },
        '/list': {
             name: 'list',
             component (resolve) {
                require(['./views/list'], resolve)
            }
        }
    })
}
