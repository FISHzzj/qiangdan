export default [
    {
        path: '/kqp_index', // 首页
        name: 'kqp_index',
        component: () => import("@/kqp/index.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/kqp_goods_list/:type?', // 商品列表
        name: 'kqp_goods_list',
        component: () => import("@/kqp/goodslist.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/kqp_detail/:id', // 商品伤情
        name: 'kqp_detail',
        component: () => import("@/kqp/goods_detail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/kqp_member_list/:id', // 查看参团成员
        name: 'kqp_member_list',
        component: () => import("@/kqp/pinklist.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/orderSubmit/:id', // 拼团结算
        name: 'orderSubmit',
        component: () => import("@/kqp/orderSubmit.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/addressList/:id?', // 收货地址管理
        name: 'addressList',
        component: () => import("@/kqp/addressList.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/addAddress/:id?', // 收货地址管理
        name: 'addAddress',
        component: () => import("@/kqp/addAddress.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
]