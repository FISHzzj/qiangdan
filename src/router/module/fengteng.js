export default [
    {
        path: '/',
        name: 'ft_index',
        redirect: { name: 'ft_index' },
        component: () => import("@/fengteng"),
        meta:{
            index: 0,
            mustLogin: false,//1111,
        },
        children: [
            {
                path: '/ft_index', // 首页
                name: 'ft_index',
                component: () => import("@/fengteng/index.vue"),
                props: false,//1111,
                meta:{
                    index: 1,
                    mustLogin: true,//
                }
            },
        ]
    },
    // {
    //     path: '/ft_index', // 首页
    //     name: 'ft_index',
    //     component: () => import("@/fengteng/index.vue"),
    //     props: false,//1111,
    //     meta:{
    //         index: 1,
    //         mustLogin: false,//
    //     }
    // },
    {
        path: '/ft_login', // 登录
        name: 'ft_login',
        component: () => import("@/fengteng/login.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/ft_register', // 注册
        name: 'ft_register',
        component: () => import("@/fengteng/register.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/ft_mine', // 个人中心
        name: 'ft_mine',
        component: () => import("@/fengteng/mine.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_content/:id', // 文章详情
        name: 'ft_content',
        component: () => import("@/fengteng/content.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_team', // 团队
        name: 'ft_team',
        component: () => import("@/fengteng/team.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_addressList', // 收货地址管理
        name: 'ft_addressList',
        component: () => import("@/fengteng/addressList.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_addAddress', // 编辑收货地址
        name: 'ft_addAddress',
        component: () => import("@/fengteng/addAddress.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_store', // 传家
        name: 'ft_store',
        component: () => import("@/fengteng/store.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_goodslist/:type?', // 商品列表
        name: 'ft_goodslist',
        component: () => import("@/fengteng/goodslist.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_goodsdetail', // 商品详情
        name: 'ft_goodsdetail',
        component: () => import("@/fengteng/goodsdetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_buyorder', // 买单列表
        name: 'ft_buyorder',
        component: () => import("@/fengteng/buyorder.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_saleorder', // 卖单列表
        name: 'ft_saleorder',
        component: () => import("@/fengteng/saleorder.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_setting', // 收款设置
        name: 'ft_setting',
        component: () => import("@/fengteng/setting.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_wallet', // 钱包
        name: 'ft_wallet',
        component: () => import("@/fengteng/wallet.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_recharge', // 充值
        name: 'ft_recharge',
        component: () => import("@/fengteng/recharge.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_cash', // 提现
        name: 'ft_cash',
        component: () => import("@/fengteng/cash.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_order/submit', // 提交订单
        name: 'ft_ordersubmit',
        component: () => import("@/fengteng/orderSubmit.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_invite', // 邀请好友
        name: 'ft_invite',
        component: () => import("@/fengteng/invite.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_orderdetail', // 订单详情
        name: 'ft_orderdetail',
        component: () => import("@/fengteng/orderdetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_jfgoodsDetail/:id', // 积分商品详情
        name: 'ft_jfgoodsDetail',
        component: () => import("@/fengteng/jifen_goodsdetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_market', // 积分商城
        name: 'ft_market',
        component: () => import("@/fengteng/market.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_orderList', // 积分订单列表
        name: 'ft_orderList',
        component: () => import("@/fengteng/orderList.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_jf_orderdetail', // 积分详情
        name: 'ft_jf_orderdetail',
        component: () => import("@/fengteng/jf_orderdetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ft_songdan', // 送单
        name: 'ft_songdan',
        component: () => import("@/fengteng/ft_songdan.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/paibi', // 送单
        name: 'paibi',
        component: () => import("@/fengteng/paibi.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/setname', // 设置头像
        name: 'setname',
        component: () => import("@/fengteng/setname.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/kefuqq', // 客服
        name: 'kefuqq',
        component: () => import("@/fengteng/about.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/teamxia', // 团队二级
        name: 'teamxia',
        component: () => import("@/fengteng/teamxia.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
]