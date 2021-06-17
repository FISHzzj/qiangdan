<template>
    <div class="orderSubmit">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" color="#fff" size="20" />
            <p>兑换</p>
        </div>
        <div class="top_1"></div>
        <div class="top">
            <div class="header_top flex ali_center flex_between">
                <div class="first" @click="showmask = true">
                    <div class="type">兑换币</div>
                    <div class="name flex ali_center">
                        <img src="@/assets/images/icon/jyjl.png" alt="">
                        <span>{{type}}</span>
                        <van-icon name="arrow-down" />
                    </div>
                </div>
                <div class="second">
                    <div class="type">换取币</div>
                    <div class="name flex ali_center">
                        <img src="@/assets/images/icon/jyjl.png" alt="">
                        <span>USDT</span>
                    </div>
                </div>
            </div>
            <div class="changeicon">
                <van-icon name="exchange"></van-icon>
            </div>
            <div class="changenum flex flex_between">
                <input type="num" placeholder="兑换数量" >
                <div>{{receivenum}}</div>
            </div>
            <div class="tips flex ali_center flex_between">
                <div class="left">
                    {{type}}余额不足，<span @click="gorecharge(type)">请转入</span>
                </div>
                <div class="right">可用余额：0.00{{type}}</div>
            </div>
            <div class="time_num flex flex_between">
                <div class="left">
                    <div>{{type}}/USDT 1{{type}}≈0.00USDT</div>
                    <div class="">手续费：0.03%</div>
                </div>
                <div class="right">{{second}}s</div>
            </div>
        </div>
        <div class="tip">
            <div class="title">温馨提示：</div>
            <div class="grey">1.受汇率影响货币价格是是波动，请以最终兑换成功数量为准;</div>
            <div class="grey">1.请确认兑换货币币种，一经兑换成功不可撤回;</div>
            <div class="grey">1.ETH最低起兑换数量：0.1ETH;</div>
            <div class="grey">1.、兑换由第三方大宗商家承兑;</div>
        </div>
        <div class="submit">确定兑换</div>
        <div @click="showService = true" class="flex service ali_center">
            <van-icon color="#666" name="service-o" />
            <span>联系客服</span>
        </div>
        <div class="mask" v-if="showmask" @click="showmask = false"></div>
        <div class="change_mask" v-if="showmask">
            <div class="title flex ali_center flex_between">
                <span>选择币种</span>
                <van-icon name="cross" @click="showmask = false"></van-icon>
            </div>
            <div class="item flex ali_center" @click="change('BTC')">
                <img src="@/assets/images/icon/jyjl.png" alt="">
                <div class="info">
                    <div class="num">BTC</div>
                    <div class="type">余额：0.00BTC</div>
                </div>
            </div>
            <div class="item flex ali_center" @click="change('ETH')">
                <img src="@/assets/images/icon/jyjl.png" alt="">
                <div class="info">
                    <div class="num">ETH</div>
                    <div class="type">余额：0.00ETH</div>
                </div>
            </div>
            <div class="item flex ali_center" @click="change('FIL')">
                <img src="@/assets/images/icon/jyjl.png" alt="">
                <div class="info">
                    <div class="num">FIL</div>
                    <div class="type">余额：0.00FIL</div>
                </div>
            </div>
        </div>
        <service
            :showService="showService"
            @close="closeservice"
        ></service>
    </div>
</template>
<script>
import service from "./common/service";
export default {
    name: "changeType",
    components: {
        service,
    },
    data() {
        return {
            showService: false,
            second: 30,
            receivenum: '收入数量',
            type: '',
            showmask: false,
            timer: null,
        };
    },
    created() {
        this.type = this.$route.params.type;
    },
    mounted() {
        this.daojishi();        
    },
    destroyed() {
        window.clearInterval(this.timer);
    },
    methods: {
        closeservice(e) {
            this.showService = false;
        },
        daojishi() {
            this.second = 30;
            this.timer = setInterval(() => {
                this.second--
                if (this.second == 0) {
                    clearInterval(this.timer);
                    this.daojishi();
                }
            }, 1000);
        },
        change(type) {
            this.type = type;
            this.showmask = false;
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
    .header {
        width: 100%;
        height: 12vw;
        background: #2d77f4;
        position: relative;
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
    .top_1 {
        width:100%;
        height: 20vw;
        background-image: linear-gradient(180deg, #2d77f4, #fff);
    }
    .top {
        width: 92vw;
        margin: -17vw 4vw 0;
        background: #fff;
        border-radius: 3vw;
        padding: 4vw 3vw;
        .header_top {
            .first {
                .type {
                    color: #999;
                    margin-bottom: 2vw;
                    font-size: 3.2vw;
                }
                .name {
                    img {
                        width: 8vw;
                        height: 8vw;
                    }
                    span {
                        font-weight: 600;
                        font-size: 6vw;
                        margin: 0 2vw;
                    }
                }
            }
            .second {
                .type {
                    color: #999;
                    margin-bottom: 2vw;
                    text-align: right;
                    font-size: 3.2vw;
                }
                .name {
                    img {
                        width: 8vw;
                        height: 8vw;
                    }
                    span {
                        font-weight: 600;
                        font-size: 6vw;
                        margin: 0 2vw;
                    }
                }
            }
        }
        .changeicon {
            width: 8vw;
            height: 8vw;
            text-align: center;
            border: 1px solid #eee;
            border-radius: 50%;
            line-height: 8vw;
            margin: 0 auto;
            position: relative;
            &::after {
                position: absolute;
                content: "";
                width: 40vw;
                height: 1px;
                top: 0;
                right: -40vw;
                bottom: 0;
                background: #eee;
                margin: auto 0;
            }
            &::before {
                position: absolute;
                content: "";
                width: 40vw;
                height: 1px;
                top: 0;
                left: -40vw;
                bottom: 0;
                background: #eee;
                margin: auto 0;
            }
        }
        .changenum {
            border-bottom: 1px solid #f7f7f7;
            height: 12vw;
            line-height: 12vw;
        }
        .tips {
            font-size: 3.2vw;
            line-height: 10vw;
            .left {
                color: #fc4142;
                span {
                    color: blue;
                }
            }
        }
        .time_num {
            background: #f5f5f5;
            border-radius: 2vw;
            padding: 2vw;
            .left {
                font-size: 3.2vw;
                line-height: 6.5vw;
            }
            .right {
                color: blue;
            }
        }
    }
    .tip {
        margin-top: 4vw;
        padding: 0 4vw;
        .title {
            line-height: 12vw;
            color: #333;
            font-size: 4vw;
        }
        .grey {
            font-size: 3.2vw;
        }
    }
    .submit {
        position: fixed;
        height: 12vw;
        line-height: 12vw;
        width: 100%;
        bottom: 16vw;
        left: 4vw;
        text-align: center;
        color: #fff;
        background: blue;
        border-radius: 2vw;
        width: 92vw;
    }
    .service {
        position: fixed;
        height: 12vw;
        width: 100%;
        justify-content: center;
        bottom: 2vw;
        left: 0;
        span {
            margin-left: 2vw;
            color: #666;
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