<template>
    <div class="orderSubmit">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>拼团结算</p>
        </div>
        <div class="addressInfo flex ali_center" @click="$router.push('/addressList/1')">
            <van-icon name="location-o" />
            <div class="right" v-if="!address.id">
                <p class="name_phone">姓名： 145  14500000000</p>
                <p class="adddetail">北京市</p>
            </div>
            <div class="right" v-else>添加收货地址</div>
        </div>
        <div class="goodsInfo">
            <div class="title">商品信息</div>
            <div class="list">
                <div class="item flex ali_center">
                    <img src="@/assets/images/vip2.png" class="proimg" alt="">
                    <div class="right">
                        <p class="name">这里是名字这里是名字这里是名字</p>
                        <p class="price_num">
                            <span class="price">￥300.00</span>
                            <span class="num">X1</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="bottom">共1件商品 共计<span>￥200.00</span></div>
        </div>
        <div class="payways">
            <div class="title">支付方式</div>
            <div class="item flex ali_center flex_between" @click="change('PPVB')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>PPVB(￥0)</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == 'PPVB'" name="checked" />
                    <div v-else></div>
                </div>
            </div>
        </div>
        <div style="height:12vw;"></div>
        <div class="footer flex flex_between ali_center">
            <div class="left">合计￥200.00</div>
            <div class="right">提交结算</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "orderSubmit",
    data() {
        return {
            payType: 'PPVB',
            address: {}
        };
    },
    mounted() {
    },
    methods:{
        change(type) {
            this.payType = type;
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.orderSubmit {
    background: #f7f7f7 !important;
}
.header {
    width: 100%;
    height: 12vw;
    position: relative;
    background-color: #fff;
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
.addressInfo {
    width: 100%;
    height: 18vw;
    padding: 0 4vw;
    margin: 2vw 0;
    background: #fff;
    .right {
        margin-left: 3vw;
        font-size: 3.47vw;
    }
}
.goodsInfo {
    padding: 0 4vw;
    background: #fff;
    .title {
        line-height: 10vw;
        color: #333;
        font-size: 3.73vw;
    }
    .list {
        padding: 2vw 0;
        border-top: 1px solid #f7f7f7;
        border-bottom: 1px solid #f7f7f7;
        .item {
            width: 100%;
            height: 23vw;
            background: #eee;
            border-radius: 2vw;
            img {
                width: 20vw;
                height: 20vw;
                border-radius: 1vw;
                margin: 0 2vw;
            }
            .right {
                height: 100%;
                padding: 2vw 0;
            }
            .name {
                font-size: 3.73vw;
            }
            .price {
                color: #fc4142;
                font-size: 3.47vw;
            }
            .num {
                color: #666;
                font-size: 3.2vw;
            }
        }
    }
    .bottom {
        font-size: 3.47vw;
        color: #666;
        text-align: right;
        line-height: 10vw;
        background: #fff;
        span {
            color: #fc4142;
        }
    }
}
.payways {
    background: #fff;
    .title {
        padding: 0 4vw;
        line-height: 8vw;
        border-bottom: 1px solid #f7f7f7;
        font-size: 3.2vw;
        color: #666;
    }
    .item {
        padding: 0 4vw;
        height: 10vw;
        .left {
            span {
                margin-left: 2.4vw;
                font-size: 3.47vw;
            }
        }
        .right {
            div {
                width: 4vw;
                height: 4vw;
                border-radius: 50%;
                border: 1px solid #f7f7f7;
            }
        }
    }
}
.footer {
    width: 100%;
    height: 12vw;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    .left {
        color: #fc4142;
        font-size: 3.2vw;
    }
    .right {
        width: 40vw;
        height: 12vw;
        text-align: center;
        line-height: 12vw;
        color: #fff;
        background: #fc4142;
    }
}
</style>