<template>
    <div class="products">
        <!-- 顶部导航 -->
        <div class="nav flex ali_center flex_around">
            <div class="item" @click="changenav(item.index)" v-for="(item, index) in nav" :key="index" :class="{on: status == item.index}">
                {{item.name}}
            </div>
        </div>
        <!-- 商品列表 -->
        <div class="list">
            <div class="item flex" v-for="item in 6" :key="item" @click="godetail(item)">
                <div class="left">
                    <div class="type">联合挖矿</div>
                    <img src="" class="pro_img" alt="" />
                    <div class="num">剩余：<span>86</span>台</div>
                </div>
                <div class="right">
                    <div class="name line">联合挖矿S19 pro</div>
                    <div class="first second">算力:110TH/s  |  功耗:3.30kw/h</div>
                    <div class="first">预计日产出:0.000 BTC/台</div>
                    <div class="first">≈0.00 CNY/台</div>
                    <div class="bottom">
                        <div class="price">11111<span>CNY</span></div>
                        <div class="price1">≈0.00USDT</div>
                    </div>
                </div>
            </div>
        </div>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomNav from "../common/footernav";
export default {
    name: "products",
    components: {
        bottomNav
    },
    data() {
        return {
            status: 0,
            page: 1,
            limit: 10,
            loadend: false,
            loading: false,
            list: [],
            nav: [
                {
                    name: 'BTC专区',
                    index: 0
                },
                {
                    name: 'ETH专区',
                    index: 1
                },
                {
                    name: 'FIL专区',
                    index: 2
                }
            ]
        };
    },
    mounted() {

    },
    methods: {
        changenav(index) {
            this.status = index;
            this.list = [];
            this.page = 1;
            this.loading = false;
            this.loadend = false;
        },
        godetail(id) {
            this.$router.push({
                path: "/detail",
                query: {
                    id
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.products {
    .nav {
        width: 92vw;
        height: 12vw;
        margin: 2vw 4vw;
        background: #eee;
        .item {
            width: 30%;
            height: 10vw;
            color: #999;
            line-height: 10vw;
            text-align: center;
            &.on {
                background: #fff;
                color: #000;
            }
        }
    }
    .list {
        padding: 2vw 0;
        .item {
            margin-bottom: 6vw;
            padding: 0 3vw;
            flex-wrap: nowrap;
            .left {
                position: relative;
                width: 35vw;
                height: 48vw;
                .type {
                    color: #aa9d8a;
                    font-size: 3.2vw;
                    text-align: center;
                    line-height: 6vw;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    background: #1b1612;
                    z-index: 1;
                    border-radius: 2vw 0 2vw 0;
                } 
                .pro_img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: chartreuse;
                    border-radius: 3vw;
                }
                .num {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    line-height: 8vw;
                    z-index: 1;
                    font-size: 3vw;
                    padding-left: 2vw;
                    span {
                        color: #4067ea;
                        margin: 0 1vw;
                    }
                }
            }
            .right {
                width: 55vw;
                position: relative;
                margin-left: 2vw;
                .name {
                    color: #333;
                    font-size: 4vw;
                    font-weight: 600;
                }
                .first {
                    color: #999;
                    font-size: 3vw;
                    line-height: 5vw;
                }
                .second {
                    line-height: 8vw;
                }
                .bottom {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    text-align: right;
                    .price {
                        color: #4067ea;
                        font-size: 6vw;
                        font-weight: 600;
                        span {
                            font-size: 3vw;
                            font-weight: 500;
                        }
                    }
                    .price1 {
                        color: #666;
                        font-size: 3vw;
                    }
                }
            }
        }
    }
}
</style>