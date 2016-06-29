export default function (router) {
    router.map({
        '/': {
            name: 'index',
            component (resolve) {
                require(['./views/home.vue'], resolve)
            }
        },
        '/home': {
             name: 'home',
             component (resolve) {
                 require(['./views/home'], resolve)
            }
        },
        '/video': {
             name: 'video',
             component (resolve) {
                require(['./views/video'], resolve)
            }
        },
        '/game': {
             name: 'game',
             component (resolve) {
                require(['./views/game'], resolve)
            }
        },
        '/mine': {
             name: 'mine',
             component (resolve) {
                require(['./views/mine'], resolve)
            }
        },
        '/more': {
             name: 'more',
             component (resolve) {
                require(['./views/more'], resolve)
            }
        }
    })
}
