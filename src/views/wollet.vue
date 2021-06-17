<template>
    <div class="orderSubmit">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" color="#fff" size="20" />
            <p>订单详情</p>
            <span @click="$router.push('/wolletRecord')">资金记录</span>
        </div>
        <div style="height:12vw;"></div>
        <div class="money">
            <div class="top flex ali_center">
                <div class="type">CNY余额</div>
                <i @click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                <i @click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i>
            </div>
            <div class="cny_num">
                <div class="num" v-if="iconeyeclose">≈ 0.00</div>
                <div class="num" v-else>* * * *</div>
            </div>
            <div class="btns flex flex_around ali_center">
                <span class="recharge" @click="changetype(1)">转入</span>
                <span class="cash" @click="changetype(2)">转出</span>
                <span class="exchange" @click="changetype(3)">兑换</span>
            </div>
        </div>
        <div class="list">
            <div class="title flex ali_center">
                <div class="left">币种</div>
                <div class="right">可用</div>
            </div>
            <div @click="godetail('CNY')" class="item flex ali_center">
                <div class="left flex ali_center">
                    <img src="@/assets/images/icon/jyjl.png" alt="" />
                    <span>CNY</span>
                </div>
                <div class="right">
                    <div class="num" v-if="iconeyeclose">0.00</div>
                    <div class="num" v-else>* * * *</div>
                </div>
            </div>
            <div @click="godetail('USDT')" class="item flex ali_center">
                <div class="left flex ali_center">
                    <img src="@/assets/images/icon/jyjl.png" alt="" />
                    <span>USDT</span>
                </div>
                <div class="right">
                    <div class="num" v-if="iconeyeclose">0.00</div>
                    <div class="num" v-else>* * * *</div>
                    <span class="num1" v-if="iconeyeclose">≈00.00CNY</span>
                    <div class="num1" v-else>* * * *</div>
                </div>
            </div>
            <div @click="godetail('BTC')" class="item flex ali_center">
                <div class="left flex ali_center">
                    <img src="@/assets/images/icon/jyjl.png" alt="" />
                    <span>BTC</span>
                </div>
                <div class="right">
                    <div class="num" v-if="iconeyeclose">0.00</div>
                    <div class="num" v-else>* * * *</div>
                    <span class="num1" v-if="iconeyeclose">≈00.00CNY</span>
                    <div class="num1" v-else>* * * *</div>
                </div>
            </div>
            <div @click="godetail('ETH')" class="item flex ali_center">
                <div class="left flex ali_center">
                    <img src="@/assets/images/icon/jyjl.png" alt="" />
                    <span>ETH</span>
                </div>
                <div class="right">
                    <div class="num" v-if="iconeyeclose">0.00</div>
                    <div class="num" v-else>* * * *</div>
                    <span class="num1" v-if="iconeyeclose">≈00.00CNY</span>
                    <div class="num1" v-else>* * * *</div>
                </div>
            </div>
            <div @click="godetail('FIL')" class="item flex ali_center">
                <div class="left flex ali_center">
                    <img src="@/assets/images/icon/jyjl.png" alt="" />
                    <span>FIL</span>
                </div>
                <div class="right">
                    <div class="num" v-if="iconeyeclose">0.00</div>
                    <div class="num" v-else>* * * *</div>
                    <span class="num1" v-if="iconeyeclose">≈00.00CNY</span>
                    <div class="num1" v-else>* * * *</div>
                </div>
            </div>
        </div>
        <div class="mask" v-if="showmask" @click="showmask = false"></div>
        <div class="change_mask" v-if="showmask">
            <div class="title flex ali_center flex_between">
                <span>选择币种</span>
                <van-icon name="cross" @click="showmask = false"></van-icon>
            </div>
            <div v-if="type != 3" class="item flex ali_center" @click="gonext('CNY')">
                <img src="@/assets/images/icon/jyjl.png" alt="">
                <div class="info">
                    <div class="num">CNY</div>
                    <div class="type">余额：0.00CNY</div>
                </div>
            </div>
            <div class="item flex ali_center" @click="gonext('BTC')">
                <img src="@/assets/images/icon/jyjl.png" alt="">
                <div class="info">
                    <div class="num">BTC</div>
                    <div class="type">余额：0.00BTC</div>
                </div>
            </div>
            <div v-if="type != 3" class="item flex ali_center" @click="gonext('USDT')">
                <img src="@/assets/images/icon/jyjl.png" alt="">
                <div class="info">
                    <div class="num">USDT</div>
                    <div class="type">余额：0.00USDT</div>
                </div>
            </div>
            <div class="item flex ali_center" @click="gonext('ETH')">
                <img src="@/assets/images/icon/jyjl.png" alt="">
                <div class="info">
                    <div class="num">ETH</div>
                    <div class="type">余额：0.00ETH</div>
                </div>
            </div>
            <div class="item flex ali_center" @click="gonext('FIL')">
                <img src="@/assets/images/icon/jyjl.png" alt="">
                <div class="info">
                    <div class="num">FIL</div>
                    <div class="type">余额：0.00FIL</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "orderSubmit",
    data() {
        return {
            iconeyeclose: true,
            showmask: false,
            type: 0, // 1 充值2提现3兑换
        };
    },
    mounted() {
        
    },
    methods: {
        changetype(index) {
            this.type = index;
            this.showmask = true;
        },
        gonext(type) {
            if (this.type == 1) { //去充值
                if (type == 'CNY') {
                    this.$router.push('/recharge');
                } else {
                    this.$router.push('/exchange/' + type);
                }
            }
            if (this.type == 2) { //去提现
                this.$router.push('/cash/' + type);
            }
            if (this.type == 3) { //去兑换
                this.$router.push('/changeType/' + type);
            }
        },
        godetail(type) {
            this.$router.push('/moneyDetail/' + type);
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.orderSubmit {
    .header {
        width: 100%;
        height: 12vw;
        top: 0;
        left: 0;
        position: fixed;
        background: #2d77f4;
        z-index: 100;
        color: #fff;
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
        span {
            position: absolute;
            top: 0;
            bottom: 0;
            line-height: 12vw;
            right: 4vw;
            margin: auto 0;
            font-size: 3.2vw;
            color: #eee;
        }
    }
    .money {
        width: 100%;
        background: #2d77f4;
        color: #fff;
        padding: 3vw 4vw;
        .top {
            height: 10vw;
            font-size: 3.47vw;
            .iconfont {
                margin-left: 2vw;
            }
        }
        .cny_num {
            font-size: 7vw;
            font-weight: 600;
        }
        .btns {
            padding: 6vw 0 0;
            span {
                width: 32%;
                line-height: 10vw;
                font-size: 3.47vw;
                height: 10vw;
                border-radius: 1vw;
                text-align: center;
                background: rgba(255,255,255,0.1);
            }
        }
    }
    .list {
        .title {
            padding: 0 4vw;
            font-size: 3.2vw;
            color: blue;
            height: 10vw;
            background: rgba(0,0,255,0.1);
            .left {
                width: 50%;
            }
            .right {
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    left: -3vw;
                    width: 1px;
                    height: 4vw;
                    background: #ccc;
                }
            }
        }
        .item {
            height: 18vw;
            border-bottom: 1px solid #f7f7f7;
            .left {
                width: 50%;
                img {
                    width: 10vw;
                    height: 10vw;
                    margin-right: 2.4vw;
                }
                span {
                    font-size: 4.2vw;
                }
            }
            .right {
                position: relative;
                .num {
                    color: #333;
                    font-weight: 600;
                    font-size: 4.8vw;
                }
                .num1 {
                    color: #999;
                    font-size: 3.2vw;
                }
                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    left: -3vw;
                    width: 1px;
                    height: 4vw;
                    background: #ccc;
                }
            }
        }
    }
    .mask {
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        z-index: 100;
        top: 0;
        left: 0;
        position: fixed;
    }
    .change_mask {
        width: 100vw;
        background: #fff;
        z-index: 101;
        bottom: 0;
        left: 0;
        position: fixed;
        border-radius: 5vw 5vw 0 0;
        .title {
            padding: 0 4vw;
            height: 12vw;
        }
        .item {
            padding: 0 4vw;
            border-bottom: 1px solid #f7f7f7;
            height: 20vw;
            img {
                width: 10vw;
                height: 10vw;
                margin-right: 3vw;
            }
            .num {
                color: #333;
                font-size: 4.3vw;
            }
            .type {
                color: #999;
                font-size: 3vw;
                margin-top: 2vw;
            }
        }
    }
}
</style>