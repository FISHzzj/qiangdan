<template>
    <div class="index">
        <!-- 首页轮播 -->
        <swiper ref="mySwiper" class="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in 5" :key="index">
                <img src="@/assets/images/vip3.png" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- 公告 -->
        <div class="notice flex ali_center">
            <img src="@/assets/images/home/laba.png" alt="">
            <swiper ref="notice" class="swiper" :options="noticeSwiper">
                <swiper-slide v-for="(item, index) in 5" :key="index">
                    <p class="line">这里是公告这里是公告这里是公告这里是公告这里是公告</p>
                </swiper-slide>
            </swiper>
            <div class="more">更多</div>
        </div>
        <!-- 数据 -->
        <section class="wrapper">
            <div class="title flex ali_center">
                <img src="" alt="">
                <p>矿池运营数据</p>
            </div>
            <div class="item" v-for="item in 3" :key="item">
                <div class="title_1 flex ali_center">
                    <p>BTC矿池</p>
                    <van-icon name="warning-o" color="#999" />
                </div>
                <div class="somenum flex ali_center">
                    <div class="item_1">
                        <div class="type">ANTpool</div>
                        <div class="number">100000.00</div>
                    </div>
                    <div class="item_1">
                        <div class="type">FZpool</div>
                        <div class="number">100000.00</div>
                    </div>
                    <div class="item_1">
                        <div class="type">RRM综合产币</div>
                        <div class="number">100000.00</div>
                    </div>
                </div>
            </div>
        </section>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomNav from "../common/footernav";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
    name: "index",
    components: {
        bottomNav,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            noticeSwiper: {
                direction: "vertical",
                loop: true,
                speed: 500,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
            },
            swiperOptions: {
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 显示分页
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, //允许分页点击跳转
                },
            },
        };
    }
}
</script>
<style lang="less" scoped>
.index {
    .mySwiper {
        .swiper-container {
            background: #ccc;
        }
        .pagination-bullet-active {
            color: #fff;
        }
        .swiper-slide {
            height: 50vw;
            img {
                width:92vw;
                height: 50vw;
            }
        }
    }
    .notice {
        padding: 0 4vw;
        img {
            width: 5.33vw;
            height: 5.33vw;
        }
        .swiper {
            width: 76vw;
            height: 12vw;
            line-height: 12vw;
            font-size: 3.2vw;
            p {
                width: 76vw;
            }
        }
        .more {
            color: #999;
            font-size: 3.2vw;
        }
    }
    .wrapper {
        padding: 0 4vw;
        .title {
            height: 12vw;
            img {
                width: 5.33vw;
                height: 5.33vw;
                margin-right: 2.4vw;
                background: #000;
            }
            p {
                font-size: 4.2vw;
                font-weight: 600;
            }
        }
        .item {
            .title_1 {
                height: 10vw;
                p {
                    position: relative;
                    text-indent: 2vw;
                    margin-right: 2vw;
                    &::before {
                        position: absolute;
                        content: "";
                        width: 1vw;
                        height: 4vw;
                        top: 0;
                        left: 0;
                        background: #e1b231;
                        bottom: 0;
                        margin: auto 0;
                    }
                }
            }
            .somenum {
                height: 20vw;
                flex-wrap: nowrap;
                .item_1 {
                    width: 34%;
                    text-align: center;
                    .type {
                        color: #666;
                        font-size: 3.47vw;
                    }
                    .num {
                        color: #333;
                        font-size: 4vw;
                        font-weight: 600;
                    }
                }
            }
        }
    }
}
</style>