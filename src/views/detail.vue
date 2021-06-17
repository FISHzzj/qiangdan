<template>
    <div class="detail">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>选择地区</p>
        </div>
        <div style="height:12vw"></div>
        <!-- 商品列表 -->
        <div class="list">
            <div class="item flex">
                <div class="left">
                    <div class="type">联合挖矿</div>
                    <img src="" class="pro_img" alt="" />
                </div>
                <div class="right">
                    <div class="first flex flex_between">
                        <div class="item_1">
                            <div class="type">功耗</div>
                            <div class="num">3.000kw/h</div>
                        </div>
                        <div class="item_1">
                            <div class="type">算力</div>
                            <div class="num">110 <br>TH/s</div>
                        </div>
                    </div>
                    <div class="second">
                        <div class="type">预计日收益</div>
                        <div class="num">0.0000 RTC/台</div>
                        <div class="num1">≈0.00 CNY/台</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品信息 -->
        <div class="pro_wrapper">
            <div class="progress flex ali_center">
                <div class="gress_wrapper">
                    <div :style="{width: 1/10*100 + '%'}"></div>
                </div>
                <div class="num">
                    剩余：<span>86</span>台
                </div>
            </div>
            <div class="pro_name">联合挖矿S19 pro</div>
            <div class="price_free flex ali_center flex_between">
                <div class="price">12345<span>CNY台</span></div>
                <div class="right">电费: <span> 0.12CNY/度</span></div>
            </div>
            <div class="types flex ali_center">
                <div class="type_1">联合挖矿</div>
                <div class="type_2">优先回本</div>
            </div>
            <div class="rules">
                <div class="r_title">产出规则</div>
                <div class="flex ">
                    <div class="item_1">
                        <div class="time">2021-02-01</div>
                        <div class="type">购买日</div>
                        <div class="type_1"></div>
                    </div>
                    <div class="item_2" style="width:50vw">
                        <div class="time">2021-02-01</div>
                        <div class="type">上架时间</div>
                        <div class="type_2"></div>
                    </div>
                    <div class="item_3">
                        <div class="time">2021-02-01</div>
                        <div class="type">服务期结束</div>
                        <div class="type_3"></div>
                    </div>
                </div>
            </div>
            <div class="nav flex ali_center">
                <div @click="changenav(item.index)" :class="{on:status == item.index}" class="item" v-for="(item, index) in nav" :key="index">
                    {{item.name}}
                </div>
            </div>
            <div class="pro_guige" v-if="status == 0" v-html="33333">
                这里是产品规格
            </div>
            <div class="pro_detail" v-if="status == 1" v-html="11111">
                这里是产品详情
            </div>
            <div class="pro_tips" v-if="status == 2" v-html="22222">
                这里是风险提醒
            </div>
            <div class="buy_btn" @click="openWindow">立即购买</div>
        </div>
        <pro-window
            :productInfo="productinfo"
            :showWindow="showWindow"
            @close="closeWindow"
        ></pro-window>
    </div>
</template>
<script>
import proWindow from "./common/prowindow";
export default {
    name: "detail",
    components: {
        proWindow,
    },
    data() {
        return {
            showWindow: false,
            status: 0,
            page: 1,
            limit: 10,
            loadend: false,
            loading: false,
            productinfo: {},
            list: [],
            nav: [
                {
                    name: '产品规格',
                    index: 0
                },
                {
                    name: '产品详情',
                    index: 1
                },
                {
                    name: '风险提醒',
                    index: 2
                }
            ]
        };
    },
    mounted() {

    },
    methods: {
        closeWindow(e) {
            console.log(e);
            this.showWindow = false;
        },
        openWindow() {
            this.showWindow = true;
        },
        changenav(index) {
            this.status = index;
            this.list = [];
            this.page = 1;
            this.loading = false;
            this.loadend = false;
        }
    }
}
</script>
<style lang="less" scoped>
.detail {
    background: #f6f6f8 !important;
    .header {
        width: 100%;
        height: 12vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        .van-icon {
            position: absolute;
            top: 0;
            left: 3vw;
            bottom: 0;
            height: 4vw;
            margin: auto 0;
        }
        p {
            width: 100%;
            line-height: 12vw;
            font-size: 4vw;
            text-align: center;
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
                width: 40vw;
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
            }
            .right {
                width: 50vw;
                position: relative;
                margin-left: 2vw;
                .first {
                    .item_1 {
                        .type {
                            color: #999;
                            font-size: 3.47vw;
                            line-height: 6vw;
                            padding-bottom: 3vw;
                        }
                        .num {
                            color: #333;
                            font-size: 4.2vw;
                        }
                    }
                }
                .second {
                    .type {
                        color: #999;
                        font-size: 3.47vw;
                        line-height: 6vw;
                    }
                    .num {
                        color: #333;
                        font-size: 4.2vw;
                    }
                    .num1 {
                        color: #999;
                        font-size: 4.8vw;
                    }
                }
            }
        }
    }
    .pro_wrapper {
        padding: 0 4vw;
        background: #fff;
        margin-top: -19vw;
        .progress {
            justify-content: flex-end;
            height: 15vw;
            .gress_wrapper {
                width: 28vw;
                height: 5px;
                background: #c7defd;
                position: relative;
                margin-right: 2vw;
                border-radius: 3vw;
                > div {
                    position: absolute;
                    border-radius: 3vw;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background: #2572f4;
                }
            }
            .num {
                font-size: 3.2vw;
                span {
                    color: #2572f4;
                }
            }
        }
        .pro_name {
            color: #333;
            font-size: 4.8vw;
            font-weight: 600;
        }
        .price_free {
            color: #2572f4;
            height: 10vw;
            .price {
                font-size: 5vw;
                font-weight: 600;
                span {
                    font-size: 3.2vw;
                    font-weight: 500;
                }
            }
            .right {
                color: #333;
                font-size: 3.47vw;
                span {
                    color: #96959d;
                }
            }
        }
        .types {
            font-size: 3.2vw;
            .type_1 {
                background: #1b1613;
                color: #fff;
                padding: 1vw 3vw;
                margin-right: 4.4vw;
                border-radius: 2.5vw 0;
            }
            .type_2 {
                color: #2175e9;
                background: #c7defd;
                padding: 1vw 3vw;
                border-radius: 1vw;
            }
        }
        .rules {
            padding: 6vw 4vw;
            .r_title {
                line-height: 10vw;
                color: #333;
                font-weight: 600;
                position: relative;
                &:after {
                    position: absolute;
                    content: "";
                    top: 0;
                    bottom: 0;
                    left: -3vw;
                    width: 0.8vw;
                    height: 4vw;
                    margin: auto 0;
                    background: #2572f4;
                }
            }
            > .flex {
                flex-wrap: nowrap;
                .item_1,
                .item_2 {
                    .time {
                        color: #999;
                        font-size: 3vw;
                        line-height: 8vw;
                    }
                    .type {
                        color: #333;
                        font-size: 4vw;
                    }
                    .type_1 {
                        width: 20vw;
                        height: 1vw;
                        margin-top: 8vw;
                        background: #d2e0ff;
                        color: #d2e0ff;
                        position: relative;
                        &:after {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            content: "";
                            width: 1px;
                            height: 5vw;
                            background: #d2e0ff;
                        }
                        &:before {
                            position: absolute;
                            left: 0;
                            bottom: 5vw;
                            content: "";
                            width: 1.5vw;
                            height: 1px;
                            background: #d2e0ff;
                        }
                    }
                    .type_2 {
                        width: 100%;
                        margin-top: 8vw;
                        height: 1vw;
                        color: #d2e0ff;
                        position: relative;
                        background: #2175e9;
                        &:after {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            content: "";
                            width: 1px;
                            height: 5vw;
                            background: #d2e0ff;
                        }
                        &:before {
                            position: absolute;
                            left: 0;
                            bottom: 5vw;
                            content: "";
                            width: 1.5vw;
                            height: 1px;
                            background: #d2e0ff;
                        }
                    }
                }
                .item_3 {
                    color: #2572f4;
                    .time {
                        font-size: 3vw;
                        line-height: 8vw;
                    }
                    .type {
                        font-size: 4vw;
                    }
                    .type_3 {
                        margin-top: 8vw;
                        width: 20vw;
                        height: 1vw;
                        color: #d2e0ff;
                        position: relative;
                        background: #2175e9;
                        &:after {
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            content: "";
                            width: 1px;
                            height: 5vw;
                            background: #d2e0ff;
                        }
                        &:before {
                            position: absolute;
                            right: 0;
                            bottom: 5vw;
                            content: "";
                            width: 1.5vw;
                            height: 1px;
                            background: #d2e0ff;
                        }
                    }
                }
            }
        }
        .nav {
            height: 12vw;
            .item {
                color: #d6d6d6;
                width: 25vw;
                text-align: center;
                font-weight: 600;
                &.on {
                    color: #2572f4;
                    position: relative;
                    &:after {
                        position: absolute;
                        content: "";
                        left: 0;
                        right: 0;
                        bottom: -1.5vw;
                        width: 5vw;
                        height: 0.8vw;
                        margin: 0 auto;
                        background: #2572f4;
                    }
                }
            }
        }
        .buy_btn {
            position: fixed;
            width: 100%;
            height: 12vw;
            color: #fff;
            background: #2572f4;
            text-align: center;
            bottom: 0;
            left: 0;
            line-height: 12vw;
        }
    }
}
</style>