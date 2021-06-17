<template>
    <div class="orderlist">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>{{typeName}}订单</p>
        </div>
        <div class="top" v-if="type ==1">
            <div class="num">0.00</div>
            <div class="type">持有矿机数(台)</div>
        </div>
        <div class="top" v-if="type ==2">
            <div class="num">0.00</div>
            <div class="type">持有总算力(T)</div>
        </div>
        <div class="top" v-if="type ==3">
            <div class="num">0.00</div>
            <div class="type">持有生效订单(笔)</div>
        </div>
        <div class="nav flex ali_center flex_around">
            <div class="item" :class="{on:status == 1}" @click="changenav(1)">待支付</div>
            <div class="item" :class="{on:status == 2}" @click="changenav(2)">生效中</div>
            <div class="item" :class="{on:status == 3}" @click="changenav(3)">已终止</div>
        </div>
        <div class="list">
            <div class="item" @click="$router.push('/orderDetail/1')">
                <div class="flex ali_center flex_between id_status">
                    <span class="order_sn">订单号： 10000000</span>
                    <span class="status">生效中</span>
                </div>
                <div class="infos flex flex_between ali_center">
                    <div class="name">这里是名字</div>
                    <div class="num">X1</div>
                </div>
                <div class="buy_time">购买日：2121-21-21 12:21:12</div>
                <div class="buy_time">到期日：2121-21-21 12:21:12</div>
                <div class="bottom flex ali_center flex_between">
                    <div class="left">总价<span>0.000</span>CNY</div>
                    <div class="right flex ali_center">
                        <span>续期产品</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "orderlist",
    data() {
        return {
            status: 1,
            typeName: "",
            type: 0
        };
    },
    mounted() {
        this.type = this.$route.params.type;
        if (this.type ==1) {
            this.typeName = "联合挖矿";
        } else if (this.type ==2) {
            this.typeName = "IPFS存储";
        } else if (this.type ==3) {
            this.typeName = "合约算力";
        }
    },
    methods: {
        changenav(index) {
            this.status = index;
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.orderlist {
    background: #f7f7f7 !important;
    .header {
        width: 100%;
        height: 12vw;
        position: relative;
        background: #fff;
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
    .top {
        text-align: center;
        background: #fff;
        padding: 6vw 0;
        .num {
            font-size: 7vw;
            font-weight: 600;
            
        }
        .type {
            color: #666;
            font-size: 3.2vw;
        }
    }
    .nav {
        height: 12vw;
        text-align: center;
        background: #fff;
        .item {
            width: 30vw;
            color: #ccc;
            font-weight: 600;
            &.on {
                color: #333;
                position: relative;
                &::after {
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    bottom: -2vw;
                    width: 8vw;
                    content: "";
                    height: 0.75vw;
                    background: blue;
                }
            }
        }
    }
    .list {
        width: 100vw;
        padding: 3vw 4vw;
        .item {
            background: #fff;
            padding: 0 3vw;
            border-radius: 3vw;
            .id_status {
                height: 10vw;
                border-bottom: 1px solid #f7f7f7;
                font-size: 3.2vw;
                .order_sn {
                    color: #333;
                }
                .status {
                    color: blue;
                }
            }
            .infos {
                height: 14vw;
                .name {
                    max-width: 60vw;
                    color: #333;
                    font-weight: 600;
                    font-size: 4.2vw;
                }
                .num {
                    color: #999;
                    font-size: 3.2vw;
                }
            }
            .buy_time {
                color: #999;
                font-size: 3vw;
                line-height: 5vw;
            }
            .bottom {
                height: 13vw;
                border-top: 1px solid #f7f7f7;
                .left {
                    color: #333;
                    font-size: 3.47vw;
                    span {
                        font-weight: 600;
                        font-size: 6vw;
                    }
                }
                .right {
                    span {
                        width: 19vw;
                        color: #ccc;
                        line-height: 8vw;
                        height: 8vw;
                        font-size: 3.47vw;
                        border-radius: 3vw;
                        border: 1px solid #ccc;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>