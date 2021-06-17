export default [
    {
        path: '/register/:inviteCode?', // 注册
        name: 'register',
        component: () => import("@/views/register.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/index', // 首页
        name: 'index',
        component: () => import("@/views/home/index.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/settingPwd/:mobile?', // 设置密码
        name: 'settingPwd',
        component: () => import("@/views/settingPwd.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/setting', // 账户设置
        name: 'setting',
        component: () => import("@/views/setting.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/forget', // 忘记密码
        name: 'forget',
        component: () => import("@/views/forget.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/products', // 忘记密码
        name: 'products',
        component: () => import("@/views/home/products.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/detail/:id?', // 产品详情
        name: 'detail',
        component: () => import("@/views/detail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/order/submit/:id?', // 提交订单
        name: 'orderSubmit',
        component: () => import("@/views/orderSubmit.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/user', // 个人中心
        name: 'user',
        component: () => import("@/views/home/user.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/user/realname', // 基础认证
        name: 'realname',
        component: () => import("@/views/realname.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/about', // 关于我们
        name: 'about',
        component: () => import("@/views/about.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/content/:id', // 文章详情
        name: 'content',
        component: () => import("@/views/content.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/feedback', // 意见反馈
        name: 'feedback',
        component: () => import("@/views/feedback.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/agent', // 代理中心
        name: 'agent',
        component: () => import("@/views/agent.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/recharge', // 充值
        name: 'recharge',
        component: () => import("@/views/recharge.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/exchange/:type?', // 转入
        name: 'exchange',
        component: () => import("@/views/exchange.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/myOrder', // 我的订单
        name: 'myOrder',
        component: () => import("@/views/myOrder.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/orderlist/:type?', // 订单列表
        name: 'orderlist',
        component: () => import("@/views/orderlist.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/orderDetail/:id', // 订单详情
        name: 'orderDetail',
        component: () => import("@/views/orderDetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/addrecord/:id?', // 扩容记录
        name: 'addrecord',
        component: () => import("@/views/addrecord.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/wollet', // 我的钱包
        name: 'wollet',
        component: () => import("@/views/wollet.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/moneyDetail/:type?', // 资产详情
        name: 'moneyDetail',
        component: () => import("@/views/moneyDetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/record/:type?', // 记录列表充值提现
        name: 'record',
        component: () => import("@/views/record.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/wolletRecord', // 资金记录
        name: 'wolletRecord',
        component: () => import("@/views/wolletRecord.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/recordDetail/:id', // 记录详情
        name: 'recordDetail',
        component: () => import("@/views/recordDetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/changeType/:type?', // 兑换
        name: 'changeType',
        component: () => import("@/views/changeType.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/huiMoney', // 汇款订单
        name: 'huiMoney',
        component: () => import("@/views/huiMoney.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/receiveSet', // 收付款设置
        name: 'receiveSet',
        component: () => import("@/views/receiveSet.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/binding/:type/:id?', // 绑定体现设置
        name: 'binding',
        component: () => import("@/views/binding.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/cash/:type?', // 提现
        name: 'cash',
        component: () => import("@/views/cash.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/poster', // 邀请好友
        name: 'poster',
        component: () => import("@/views/poster.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/safe', // 账户安全
        name: 'safe',
        component: () => import("@/views/safe.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/base', // 基础认证
        name: 'base',
        component: () => import("@/views/base.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/feeRecord', // 缴费记录
        name: 'feeRecord',
        component: () => import("@/views/feeRecord.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: '/syDetail', // 收益明细
        name: 'syDetail',
        component: () => import("@/views/syDetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: false,//
        }
    },
    {
        path: "/login", //登录
        name: "Login",
        component: () => import("@/views/login.vue"),
        meta: {
            index: 0,
            mustLogin: false,//1111,
        }
    }
];