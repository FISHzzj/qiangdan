<template>
    <div class="index">
        <div class="header">
            <div class="top flex ali_center flex_between">
                <van-icon name="arrow-left" color="#fff" />
                <span></span>
            </div>
            <div class="storeInfo flex ali_center">
                <img :src="dianpu.names_img" alt="" />
                <div class="info">
                    <p class="name">{{dianpu.names}}</p>
                    <p class="num">{{dianpu.zong}}件商品</p>
                </div>
            </div>
        </div>
        <!-- 首页轮播 -->
        <swiper ref="mySwiper" class="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in lunbo" :key="index">
                <img :src="item.thumb" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="list"  v-for="(item, index) in category" :key="index">
            <div class="title flex ali_center flex_between">
                <div class="title flex ali_center">
                     <img src="@/assets/images/chuizi.png" alt="" />
                    <div>拍卖专场</div>
                </div>
                <div><van-button round type="info" size="mini" @click="yuyueshow(item.id)">预约</van-button></div>
               
            </div>
            <div class="item" @click="gonext(item.id)">
                <div class="status">祥瑞昌拍</div>
                <img :src="item.advimg" alt="" class="cover" />
                <div class="storeInfo flex ali_center">
                    <div class="name flex ali_center">
                        <span></span>
                        <p>{{item.name}}</p>
                        <span></span>
                    </div>
                    <!-- <p class="time">(00:00:00-00:00:00)</p> -->
                </div>
            </div>
            <!-- <div class="item" @click="$router.push('/ft_goodsList/bottom?title=下午场')">
                <div class="status">祥瑞昌拍</div>
                <img src="@/assets/images/getOrdersHeader.png" alt="" class="cover" />
                <div class="storeInfo flex ali_center">
                    <div class="name flex ali_center">
                        <span></span>
                        <p>上午场</p>
                        <span></span>
                    </div>
                    <p class="time">(00:00:00-00:00:00)</p>
                </div>
            </div> -->
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
                    img: require("@/assets/images/vip3.png"),
                    name: "订单中心",
                    url: ""
                },
                {
                    img: require("@/assets/images/vip3.png"),
                    name: "手续费充值",
                    url: ""
                },
                {
                    img: require("@/assets/images/vip3.png"),
                    name: "我的代理",
                    url: ""
                },
                {
                    img: require("@/assets/images/vip3.png"),
                    name: "邀请好友",
                    url: ""
                },
            ],
            swiperOptions: {
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 30000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 显示分页
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, //允许分页点击跳转
                },
            },
            category:[],
            lunbo:[],
            id: "",
            dianpu:{}
        };
    },
    mounted(){
        this.getData()
    },
    methods:{
        async getData(){
            let res = await $ajax('auctionauction1getCategory', {})
            if(!res) return false
            let {category, lunbo, dianpu} = res
            this.category = category.parent[0]
            console.log( this.category )
            this.lunbo = lunbo
            this.dianpu = dianpu

        },
        gonext(id){
            console.log(id)
            // return
            this.$router.push({
                name: 'ft_goodslist',
                query:{
                    id: id
                }
            })
        },
        yuyueshow(id){
             Dialog.confirm({
                message: '请先预约',
            }).then(() => {
                // on close
                // this.sureupload = true  
                this.id = id
                this.yuyue( )
            }) .catch(() => {
                // on cancel
                // this.sureupload = true
            });
        },
        async yuyue(){
            let res = await $ajax('auctionauction1auction_yy', {category_id: this.id})
            if(!res) return false
            Toast(res.msg)
        },
    }
};
</script>
<style lang="less" scoped>
.index {
    .header {
        padding: 0 4vw;
        color: #fff;
        position: relative;
        background-image: -webkit-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -moz-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -ms-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: -o-linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        background-image: linear-gradient(90deg,rgb(63,63,63),rgb(37,37,37));
        .top {
            height: 15vw;
        }
        .storeInfo {
            padding-bottom: 6vw;
            img {
                width: 10vw;
                height: 10vw;
                border-radius: 1.5vw;
                margin-right: 2.4vw;
            }
            .name {
                font-weight: bold;
                font-size: 3.73vw;
            }
            .num {
                font-size: 3.2vw;
            }
        }
    }
    .mySwiper {
        padding: 0 4vw;
        border-radius: 2vw;
        position: relative;
        top: -4vw;
        z-index: 1;
        background-color: #fff;
        border-radius: 4vw;
        .pagination-bullet-active {
            background: #666 !important;
        }
        .swiper-slide {
            height: 40vw;
            img {
                width:92vw;
                height: 40vw;
            }
        }
    }
    .list {
        padding: 0 4vw;
        .title {
            height: 10vw;
            img {
                width: 6vw;
                height: 6vw;
            }
            div {
                font-size: 3.47vw;
                padding: 0 2vw;
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
                background-color:rgb(153,153,153);
                font-size: 3.2vw;
                color: #fff;
                width: 14vw;
                text-align: center;
                line-height: 6.2vw;
                &::after {
                    position: absolute;
                    left: 0;
                    top: 5.9vw;
                    content: "";
                    width: 0;
                    height: 0;
                    border-width: 3vw 7vw 0;
                    border-style: solid;
                    border-color: rgb(153,153,153) transparent transparent;
                }
            }
            .storeInfo {
                width: 92vw;
                height: 100%;
                position: absolute;
                bottom: 0;
                padding: 0 2vw;
                justify-content: center;
                flex-direction: column;
                .time {
                    color: #fff;
                    margin-top: 2vw;
                }
                .name {
                    color: #fff;
                    font-size: 7vw;
                    span {
                        width: 6vw;
                        height: 3px;
                        border-radius: 1.5px;
                        background-color: #fff;
                    }
                    p {
                        padding: 0 2vw;
                    }
                }
            }
        }
    }
}
</style>