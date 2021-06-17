<template>
    <div class="orderList">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>我的买单</p>
        </div>
        <div style="height:12vw"></div>
        <div class="nav flex ali_center flex_around">
            <div class="item" :class="{on:status == 0}" @click="changenav(0)">待售</div>
            <div class="item" :class="{on:status == 1}" @click="changenav(1)">已锁单</div>
            <div class="item" :class="{on:status == 2}" @click="changenav(2)">带确认收款</div>
            <div class="item" :class="{on:status == 3}" @click="changenav(3)">已完成</div>
        </div>
        <div class="list">
            <div class="item" @click="id = 1" v-for="item in 20" :key="item">
                <div class="top flex flex_between ali_center">
                    <div class="left flex ali_center" @click.stop="$router.push('/ft_store/1')">
                        <img src="@/assets/images/dui.png" alt="" />
                        <span>店铺名字</span>
                        <van-icon name="arrow" />
                    </div>
                    <div class="right">买家已取消</div>
                </div>
                <div class="infos flex flex_between ali_center">
                    <div class="left flex ali_center">
                        <img src="@/assets/images/dui.png" alt="" />
                        <div>
                            <p class="name">商品名字</p>
                            <p class="storeId">商家:000112232411</p>
                        </div>
                    </div>
                    <div class="right">
                        <p class="num">X1</p>
                        <p class="price">￥300.00</p>
                    </div>
                </div>
                <div class="time">创建时间;2020-20-20 20：20：20</div>
                <div class="time">订单号：3132564321</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ft_saleorder",
    data() {
        return {
            status: 0,
            title: this.$route.query.title,
            type: this.$route.params.type,
            detail: ""
        }
    },
    methods: {
        changenav(status) {
            this.status = status;
        }
    }
}
</script>
<style lang="less" scoped>
.orderList {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        p {
            text-align: center;
            line-height: 12vw;
        }
        .van-icon {
            position: fixed;
            left: 4vw;
            top: 4vw;
        }
    }
    .nav {
        font-size: 3.47vw;
        color: #333;
        height: 12vw;
        .on {
            color: #fc4142;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -2vw;
                border-bottom: 3px solid #fc4142;
                width: 6vw;
                margin: 0 auto;
            }
        }
    }
    .list {
        padding: 0 3vw;
        .item {
            padding-bottom: 4vw;
            border-bottom: 1px solid #ccc;
            .top {
                .left {
                    height: 13vw;
                    img {
                        width: 5vw;
                        height: 5vw;
                        border-radius: 1vw;
                    }
                    span {
                        margin: 0 2vw;
                        font-size: 3.73vw;
                    }
                }
                .right {
                    color: #fc4142;
                    font-size: 3.47vw;
                }
            }
            .infos {
                height: 20vw;
                .left {
                    img {
                        width: 20vw;
                        height: 20vw;
                        margin-right: 2.4vw;
                    }
                    .name {
                        font-size: 3.73vw;
                        margin-bottom: 3vw;
                    }
                    .storeId {
                        color: #666;
                        font-size: 3.2vw;
                    }
                }
                .right {
                    text-align: right;
                    .num {
                        font-size: 3.2vw;
                        color: #333;
                    }
                    .price {
                        margin-top: 2vw;
                        font-size: 4.5vw;
                        color: #fc4142;
                    }
                }
            }
            .time {
                color: #999;
                font-size: 3.2vw;
                // line-height: 6vw;
                margin-top: 2.4vw;
            }
        }
    }
}
</style>