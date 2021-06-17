<template>
    <div class="orderSubmit">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" color="#000" size="20" />
            <p>{{type}}资产</p>
        </div>
        <div style="height:12vw;"></div>
        <div class="top">
            <div class="title">
                <div class="type">{{type}}总资产</div>
                <div class="num">0.00</div>
            </div>
            <div class="bottom flex flex_between ali_center">
                <div class="left">
                    <div class="type">可用</div>
                    <div class="num">0.00</div>
                </div>
                <div class="right" v-if="type != 'CNY'">
                    <div class="type">折合(CNY)</div>
                    <div class="num">0.00</div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="title">财务记录</div>
            <div class="item flex ali_center flex_between">
                <div class="left">
                    <div class="type">充值入金</div>
                    <div class="time">2020-20-20 20:20:20</div>
                </div>
                <div class="right">+100.00</div>
            </div>
        </div>
        <div class="footer flex ali_center flex_between">
            <div v-if="type != 'USDT' && type != 'CNY'" class="exchange flex ali_center" @click="goexchange">
                <van-icon name="exchange" color="blue" />
                <span>兑换</span>
            </div>
            <div class="cash" :class="{on:type == 'USDT' || type == 'CNY'}" @click="gocash">提现</div>
            <div class="recharge" :class="{on:type == 'USDT' || type == 'CNY'}" @click="gorecharge">充值</div>
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
            type: "CNY", 
        };
    },
    created() {
        this.type = this.$route.params.type;
    },
    mounted() {
        
    },
    methods: {
        goexchange() {

        },
        gocash() {
            // if (this.type == 'CNY') {
            //     this.$router.push('/recharge');
            // } else {
            //     this.$router.push('/exchange/' + this.type);
            // }
        },
        gorecharge() {
            if (this.type == 'CNY') {
                this.$router.push('/recharge');
            } else {
                this.$router.push('/exchange/' + this.type);
            }
        },
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
        z-index: 100;
        color: #000;
        background: #f7f7f7;
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
    .top {
        width: 100%;
        padding: 0 4vw;
        background: #f7f7f7;
        .title {
            .type {
                color: #444;
                font-size: 3.2vw;
            }
            .num {
                color: #333;
                font-size: 7vw;
                font-weight: 600;
            }
        }
        .bottom {
            padding: 4vw 0 3vw;
            .left {
                .type {
                    color: #999;
                    font-size: 3.2vw;
                    margin-bottom: 2vw;
                }
                .num {
                    color: #333;
                    font-size: 4.2vw;
                }
            }
            .right {
                text-align: right;
                .type {
                    color: #999;
                    font-size: 3.2vw;
                    margin-bottom: 2vw;
                }
                .num {
                    color: #999;
                    font-size: 4.2vw;
                }
            }
        }
    }
    .list {
        padding: 0 4vw;
        .title {
            line-height: 15vw;
            font-size: 4.5vw;
            font-weight: 600;
        }
        .item {
            padding: 2vw 0;
            border-bottom: 1px solid #f7f7f7;
            .left {
                .type {
                    font-size: 3.73vw;
                    color: #333;
                }
                .time {
                    margin-top: 1.5vw;
                    color: #999;
                    font-size: 3.2vw;
                }
            }
            .right {
                color: blue;
            }
        }
    }
    .footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 20vw;
        padding: 0 4vw;
        flex-wrap: nowrap;
        background: #fff;
        div {
            width: 29vw;
            text-align: center;
            height: 12vw;
            border-radius: 2vw;
        }
        .exchange {
            height: 20vw;
            flex-direction: column;
            justify-content: center;
        }
        .cash {
            color: blue;
            line-height: 12vw;
            background: rgba(0,0,255,0.1);
            &.on {
                width: 44vw;
            }
        }
        .recharge {
            color: #fff;
            line-height: 12vw;
            background: blue;
            &.on {
                width: 44vw;
            }
        }
    }
}
</style>