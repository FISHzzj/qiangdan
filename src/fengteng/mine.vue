<template>
    <div class="index">
        <div class="header">
            <div class="top flex ali_center flex_between" >
                <span></span>
                <img src="@/assets/images/logout.png" alt="" @click="logout"/>
                
            </div>
            <div class="userInfo flex ali_center flex_between">
                <div class="userInfo flex ali_center">
                    <img class="avatar" :src="avatar" alt="">
                    <div class="info">
                         <div class="phone">ID：{{id}}</div>
                        <div class="phone">昵称：{{nickname}}</div>
                        <div class="phone">VIP等级：{{member_level.levelname}}</div>
                       
                        <div class="phone">手机号：{{mobile}}</div>
                        
                    </div>
                </div>
                <div>
                    <van-icon @click="$router.push('/setname')" name="arrow" size="20" />

                </div>
                

            </div>
            <div class="flex flex_between ali_center money">
                <div class="item">
                    <p class="type">余额</p>
                    <p class="num">{{credit2 || 0}}</p>
                </div>
                <div class="item">
                    <p class="type">积分</p>
                    <p class="num">{{credit1 || 0}}</p>
                </div>
                <div class="item" @click="paibi">
                    <p class="type">竞拍币</p>
                    <p class="num">{{credit50 || 0}}</p>
                </div>
                <div class="item">
                    <p class="type">累计佣金</p>
                    <p class="num">{{yj || 0}}</p>
                </div>
                <div class="item">
                    <p class="type">代理人数</p>
                    <p class="num">{{xia || 0}}</p>
                </div>
            </div>
        </div>
        <div class="myOrder">
            <div class="title">我的订单</div>
            <div class="list flex flex_between ali_center">
                <div class="item flex ali_center" @click="$router.push('/ft_buyorder')">
                    <img src="@/assets/images/icon/1.png" alt="" />
                    <p>买单</p>
                </div>
                <div class="item flex ali_center" @click="$router.push('/ft_saleorder')">
                    <img src="@/assets/images/icon/2.png" alt="" />
                    <p>卖单</p>
                </div>
                <div class="item flex ali_center" @click="$router.push('/ft_invite')">
                    <img src="@/assets/images/icon/3.png" alt="" />
                    <p>邀请码</p>
                </div>
                <div class="item flex ali_center" @click="$router.push('/ft_wallet')">
                    <img src="@/assets/images/icon/4.png" alt="" />
                    <p>钱包</p>
                </div>
            </div>
        </div>
        <div class="list">
            <div v-for="item in nav" @click="$router.push(item.url)" :key="item.name" class="item flex ali_center flex_between">
                <img :src="item.img" alt="" />
                <div class="right flex ali_center flex_between">
                    <span>{{ item.name }}</span>
                    <van-icon name="arrow" />
                </div>
            </div>
        
        </div>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomNav from "./common/footernav";
export default {
    name: "ft_index",
    components: {
        bottomNav
    },
    data() {
        return {
            nav: [
                {
                    img: require("@/assets/images/icon/about.png"),
                    name: "收货地址",
                    url: "/ft_addressList"
                },
                {
                    img: require("@/assets/images/icon/daili.png"),
                    name: "收款设置",
                    url: "/ft_setting"
                },
                // {
                //     img: require("@/assets/images/icon/shoufukuan.png"),
                //     name: "送单",
                //     url: "/ft_songdan"
                // },
                {
                    img: require("@/assets/images/icon/dingdan.png"),
                    name: "我的签约",
                    url: "/ft_content/me_qy?title=我的签约"
                },
                {
                    img: require("@/assets/images/icon/fankui.png"),
                    name: "用户指南",
                    url: "/ft_content/attention?title=用户指南"
                },
                {
                    img: require("@/assets/images/icon/jia.png"),
                    name: "风险提示",
                    url: "/ft_content/fengxian?title=风险提示"
                },
                {
                    img: require("@/assets/images/icon/qianbao.png"),
                    name: "规则指引",
                    url: "/ft_content/strategy?title=规则指引"
                },
                {
                    img: require("@/assets/images/icon/shoufukuan.png"),
                    name: "关于我们",
                    url: "/ft_content/aboutus?title=关于我们"
                },
                {
                    img: require("@/assets/images/icon/shoufukuan.png"),
                    name: "我的客服",
                    url: "/kefuqq"
                },
            ],
            swiperOptions: {
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
            },
            id: "",
            credit2: "",
            credit1: "",
            nickname: "",
            mobile: "",
            avatar: "",
            yj: "",
            xia: "",
            credit50: "",
            member_level:{},
        };
    },
    mounted(){
        this.getData()
    },
    methods:{
        async paibi(){
            this.$router.push({
                name: 'paibi'
            })
        },
        async getData(){
            let res = await $ajax('auctionauction1get_member', {})
            if(!res) return false
            let member = res.member
            Object.keys(member).forEach((key)=>{
                this[key] = member[key]
            })

        },
        logout() {
            Dialog.confirm({
                title: '温馨提示',
                message: '是否退出登录？',
            }).then(async () => {
                // on close
                // let res = await $ajax('logout', {})
                // if(!res) return false
                
                // Toast(res.msg)
                localStorage.removeItem('openid')
                localStorage.removeItem('mobile')

                this.$router.push({
                    name: "ft_login"
                })
               
            });
        },
        
    }
};
</script>
<style lang="less" scoped>
.index {
    .header {
        padding: 0 4vw;
        background-image: -webkit-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -moz-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -ms-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -o-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        .top {
            height: 12vw;
            img {
                width: 4.8vw;
            }
        }
        .userInfo {
            color: #fff;
            img {
                width: 12vw;
                height: 12vw;
                border-radius: 50%;
                margin-right: 2.4vw;
            }
            .name {
                font-size: 5vw;
            }
            .phone {
                font-size: 3.47vw;
            }
        }
        .money {
            padding: 4vw 0 2vw;
            text-align: center;
            .item {
                width: 33vw;
                .type {
                    color: #999;
                    font-size: 3vw;
                }
                .num {
                    margin-top: 1vw;
                    color: #fff;
                    font-size: 4vw;
                }
            }
        }
    }
    .myOrder {
        padding: 2vw 0;
        border-bottom: 1px solid #f5f5f5;
        .title {
            padding-left: 4vw;
            line-height: 10vw;
        }
        .list {
            .item {
                width: 25%;
                justify-content: center;
                flex-direction: column;
                font-size: 3.47vw;
                img {
                    width: 7.5vw;
                    margin-bottom: 1vw;
                    height: 7.5vw;
                    border-radius: 50%;
                }
            }
        }
    }
    > .list {
        padding: 0 4vw;
        .item {
            height: 12vw;
            img {
                width: 4.5vw;
                height: 4.5vw;
                margin-right: 4vw;
            }
            .right {
                font-size: 3.2vw;
                height: 12vw;
                width: 84vw;
                border-bottom: 1px solid #ccc;
            }
        }
    }
}
</style>