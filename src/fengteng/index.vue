<template>
    <div class="index">
        <div class="header flex ali_center flex_between">
            <span>首页</span>
            <van-icon name="chat-o" />
        </div>
        <!-- 首页轮播 -->
        <swiper ref="mySwiper" class="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in lunbo" :key="index">
                <img :src="item.thumb" alt="">
            </swiper-slide>
        </swiper>
        <!-- 公告 -->
        <div class="notice flex ali_center">
            <van-notice-bar color="#6e6e6e" left-icon="volume-o" :text="guanggao" />
        </div>
        <div class="nav flex ali_center">
            <router-link :to="item.url" class="item flex ali_center" v-for="(item,index) in nav" :key="index" tag="div"  >
                <div class="item flex ali_center" v-if="item.name == '商城' || is_shangc == 1">
                    <img :src="item.img" alt="" />
                    <span>{{item.name}}</span>
                </div>
                <div class="item flex ali_center" v-else>
                    <img :src="item.img" alt="" />
                    <span>{{item.name}}</span>
                </div>
                
            </router-link>
        </div>
        <div class="adv" @click="$router.push('/ft_invite')">
            <img :src="yq_img" alt="" />
        </div>
        <div class="list">
            <div class="title flex ali_center">
                <span></span>
                <div>热门拍卖</div>
                <span></span>
            </div>
            <div class="item" v-for="(item, index) in remai" :key="index" @click="handle">
                <div class="status">拍卖中</div>
                <img :src="item.thumb" alt="" class="cover" />
                <div class="storeInfo flex ali_center">
                    <img class="logo" src="@/assets/images/defaultAvatar.jpg" alt="" />
                    <span class="name">盛世和田玉</span>
                </div>
            </div>
        </div>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomNav from "./common/footernav";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import goodsList from "@/components/goodsList";
import recommend from "@/components/recommend";
import "swiper/swiper-bundle.css";
import { Toast } from 'vant';
export default {
    name: "ft_index",
    components: {
        bottomNav,
        goodsList,
        recommend,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            nav: [
                {
                    img: require("@/assets/images/icon/chongbi1.png"),
                    name: "订单中心",
                    url: "/ft_buyorder"
                },
                {
                    img: require("@/assets/images/icon/tibi1.png"),
                    name: "手续费充值",
                    url: "/ft_wallet"
                },
                {
                    img: require("@/assets/images/icon/yaoqinghaoyou1.png"),
                    name: "我的代理",
                    url: "/ft_team"
                },
                {
                    img: require("@/assets/images/icon/shouyi1.png"),
                    name: "邀请好友",
                    url: "/ft_invite"
                },
                {
                    img: require("@/assets/images/icon/chongbi1.png"),
                    name: "商城",
                    url: "/ft_market"
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
            remai:[],
            lunbo: [],
            guanggao: "",
            yq_img: "",
            is_shangc: "",
        };
    },
    created(){
        this.getData()
    },
    methods: {
        handle(){
            Toast('请进入【传家】进入拍场')
        },
        async getData(){
            let res = await $ajax('auctionauction1', {})
            if(!res) return false
            let {remai, lunbo, guanggao, yq_img, is_shangc} = res
            this.remai = remai
            this.lunbo = lunbo
            this.guanggao = guanggao
            this.yq_img = yq_img
            this.is_shangc = is_shangc

        },
        goitem(e) {
            this.$router.push({
                path: e.url
            });
        }
    }
};
</script>
<style lang="less" scoped>
.index {
    .header {
        height: 15vw;
        padding: 0 4vw;
        color: #fff;
        position: relative;
        background-image: -webkit-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -moz-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -ms-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -o-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        &:after {
            width: 100%;
            position: absolute;
            top: 15vw;
            left: 0;
            background-image: -webkit-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
            background-image: -moz-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
            background-image: -ms-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
            background-image: -o-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
            background-image: linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
            content: "";
            height: 35vw;
        }
    }
    .mySwiper {
        width: 92vw;
        margin: 0 4vw;
        border-radius: 2vw;
        .swiper-slide {
            height: 40vw;
            img {
                width:92vw;
                height: 40vw;
            }
        }
    }
    .notice {
        height: 11vw;
        .van-notice-bar {
            width: 92vw;
        }
    }
    .nav {
        width: 92vw;
        margin: 0 4vw;
        .item {
            width: 25%;
            flex-direction: column;
            padding: 2vw 0;
            img {
                width: 12.5vw;
                height: 12.5vw;
                border-radius: 50%;
                background-color: rgb(200,150,103);
            }
            span {
                line-height: 7vw;
                font-size: 3.47vw;
                font-weight: 600;
            }
        }
    }
    .adv {
        width: 92vw;
        height: 25vw;
        border-radius: 2vw;
        margin: 2vw 4vw;
        img {
            width: 100%;
            height: 100%;
            border-radius: 2vw;
        }
    }
    .list {
        padding: 0 4vw;
        .title {
            height: 10vw;
            justify-content: center;
            span {
                margin-top: 0.5vw;
                width: 6vw;
                height: 2px;
                background-color: rgb(98,98,98);
            }
            div {
                padding: 0 3vw;
            }
        }
        .item {
            width: 92vw;
            height: 40vw;
            border-radius: 2vw;
            position: relative;
            margin-bottom: 3.5vw;
            .cover {
                width: 92vw;
                height: 40vw;
                border-radius: 2vw;;
            }
            .status {
                position: absolute;
                top: 0;
                left: 2vw;
                background-color:rgb(189,146,112);
                font-size: 3.47vw;
                color: #fff;
                width: 12vw;
                text-align: center;
                line-height: 6.2vw;
                &::after {
                    position: absolute;
                    left: 0;
                    top: 5.9vw;
                    content: "";
                    width: 0;
                    height: 0;
                    border-width: 3vw 6vw 0;
                    border-style: solid;
                    border-color: rgb(189,146,112) transparent transparent;
                }
            }
            .storeInfo {
                width: 100%;
                height: 8vw;
                position: absolute;
                bottom: 0;
                padding: 0 2vw;
                background-color: rgba(255,255,255,0.3);
                .logo {
                    width: 5vw;
                    height: 5vw;
                    margin-right: 2vw;
                }
                .name {
                    color: #fff;
                    font-size: 3.73vw;
                }
            }
        }
    }
}
</style>