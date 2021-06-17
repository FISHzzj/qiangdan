<template>
    <div class="orderSubmit">
        <div class="header">
            <van-icon @click="leave" name="arrow-left" color="#fff" size="20" />
            <p>订单详情</p>
            <span @click="cancle">取消订单</span>
        </div>
        <div class="top_1"></div>
        <div class="top">
            <div class="order_status flex ali_center">
                <img src="" alt="" />
                <div class="">
                    <div class="status">等待用户付款</div>
                    <div class="time">创建时间: <span>2021-02-02 14:00:00</span></div>
                </div>
            </div>
            <div class="order_id flex ali_center flex_between">
                <div class="">订单号：<span>00000000</span></div>
                <span class="copy" data-clipboard-text="00000000">复制</span>
            </div>
        </div>
        <div class="orderInfo">
            <div class="title">这里是商品名字</div>
            <div class="item num flex ali_center flex_between">
                <p>购买台数</p>
                <span>x1</span>
            </div>
            <div class="item num flex ali_center flex_between">
                <p>矿机总价</p>
                <span>0.000USDT</span>
            </div>
            <div class="item num flex ali_center flex_between">
                <p>预缴电费</p>
                <span>60天</span>
            </div>
            <div class="item num flex ali_center flex_between">
                <p>电费金额</p>
                <span>0.000CNY</span>
            </div>
            <div class="money">
                <p>总价 <span>0.000</span> USDT</p>
            </div>
        </div>
        <div class="tips">确定支付后不支持退款,请仔细确定订单信息</div>
        <div class="pay_ways">
            <div class="title">支付方式</div>
            <div class="item flex ali_center flex_between" @click="change('USDT')">
                <div class="flex ali_center">
                    <img src="" class="icon" alt="" />
                    <span>USDT支付</span>
                    <p>9.8折优惠</p>
                </div>
                <img v-if="paytype == 'USDT'" src="@/assets/images/dui.png" alt="" />
                <img v-else src="@/assets/images/yuan.png" alt="" />
            </div>
            <div class="item flex ali_center flex_between" @click="change('BTC')">
                <div class="flex ali_center">
                    <img src="" class="icon" alt="" />
                    <span>BTC支付</span>
                </div>
                <img v-if="paytype == 'BTC'" src="@/assets/images/dui.png" alt="" />
                <img v-else src="@/assets/images/yuan.png" alt="" />
            </div>
            <div class="item flex ali_center flex_between" @click="change('CNY')">
                <div class="flex ali_center">
                    <img src="" class="icon" alt="" />
                    <span>CNY支付</span>
                </div>
                <img v-if="paytype == 'CNY'" src="@/assets/images/dui.png" alt="" />
                <img v-else src="@/assets/images/yuan.png" alt="" />
            </div>
        </div>
        <div class="safe_tips flex ali_center">
            <img src="@/assets/images/dui.png" alt="" />同意
            <router-link to="/content/1">服务协议及风险提示</router-link>
        </div>
        <div class="tips1">投资有风险,入市需谨慎</div>
        <div style="height:15vw"></div>
        <div class="footer flex flex_between ali_center">
            <div class="left">总价 <span>0.00</span>{{paytype}}</div>
            <div class="right" @click="openPwd">确定支付</div>
        </div>
        <pay-pwd
            :show="showPwd"
            @close="closePwd"
        ></pay-pwd>
    </div>
</template>
<script>
import {copy} from '../func/copy'
import payPwd from "./common/paypwd";
export default {
    name: "orderSubmit",
    components: {
        payPwd
    },
    data() {
        return {
            paytype: "USDT",
            showPwd: true,
        };
    },
    mounted() {
        this.clipboard = copy('.copy');
    },
    methods: {
        closePwd(e) {
            this.showPwd = false;
        },
        openPwd(e) {
            this.showPwd = true;
        },
        change(type) {
            this.paytype = type;
        },
        cancle() {
            function beforeClose(action, done) {
                if (action === 'confirm') {
                    setTimeout(done, 1000);
                } else {
                    done();
                }
            }
            Dialog.confirm({
                title: '是否取消订单？',
                message: '是否确认取消订单,订单取消后将无法付款,如对订单有疑问请及时咨询客服。',
                confirmButtonText: "确定取消",
                confirmButtonColor: "#3177f0",
                cancelButtonText: "我再看看",
                beforeClose,
            });
        },
        leave() {
            function beforeClose(action, done) {
                console.log(action);
                if (action === 'confirm') {
                    setTimeout(done, 1000);
                } else {
                    done();
                }
            }
            Dialog.confirm({
                title: '确定离开订单？',
                message: '是否离开支付订单,超时待支付订单系统将自动取消,如需重新支付请到"我的订单"查看!',
                confirmButtonText: "确定离开",
                confirmButtonColor: "#3177f0",
                cancelButtonText: "继续支付",
                beforeClose,
            });
        }
    }
};
</script>
<style lang="less" scoped>
.orderSubmit {
    padding: 0 4vw;
    background: #f7f7f7 !important;
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
    .top_1 {
        position: absolute;
        top: 12vw;
        left: 0;
        width:100%;
        height: 20vw;
        background-image: linear-gradient(180deg, #2d77f4, #fff);
    }
    .top {
        position: relative;
        margin-top: 12vw;
        margin-bottom: 4vw;
        width: 84vw;
        background: #fff;
        padding: 0 4vw;
        border-radius: 3vw;
        .order_status {
            height: 20vw;
            img {
                width: 15vw;
                height: 15vw;
                margin-right: 4vw;
            }
            > div {
                .status {
                    margin-bottom: 2vw;
                    font-size: 4.2vw;
                    font-weight: 600;
                }
                .time {
                    color: #666;
                    font-size: 3.2vw;
                    span {
                        color: #333;
                    }
                }
            }
        }
        .order_id {
            padding: 5vw 0 3vw;
            div {
                border-radius: 4vw;
                text-indent: 4vw;
                width: 65vw;
                line-height: 8vw;
                background: #f7f7f9;
                font-size: 3.2vw;
                color: #999;
                span {
                    font-size: 3.47vw;
                    color: #333;
                }
            }
            .copy {
                color: #fff;
                background: #2d77f4;
                line-height: 8vw;
                border-radius: 4vw;
                padding: 0 3vw;
                font-size: 3.47vw;
            }
        }
    }
    .orderInfo {
        width: 84vw;
        padding: 2vw 4vw;
        background: #fff;
        border-radius: 2.5vw;
        .title {
            line-height: 12vw;
            border-bottom: 0.5px solid #eee;
            font-size: 4.2vw;
        }
        .item {
            border-bottom: 0.5px solid #eee;
            height: 12vw;
            font-size: 3.47vw;
            p {
                color: #999;
            }
            span {
                color: #666;
            }
        }
        .money {
            text-align: right;
            color: #333;
            font-size: 3.2vw;
            line-height: 12vw;
            span {
                font-size: 5.5vw;
                font-weight: 600;
            }
        }
    }
    .tips {
        text-align: right;
        line-height: 12vw;
        color: #999;
        font-size: 3.2vw;
    }
    .pay_ways {
        width: 84vw;
        padding: 2vw 4vw;
        background: #fff;
        margin-bottom: 10vw;
        border-radius: 2vw;
        .title {
            line-height: 10vw;
        }
        .item {
            height: 12vw;
            >img {
                width: 5vw;
            }
            >div {
                p {
                    color: #fff;
                    font-size: 2.5vw;
                    background: #f8825a;
                    line-height: 4vw;
                    margin-left: 1vw;
                    padding: 0 1.5vw;
                    border-radius: 1vw;
                }
                img {
                    width: 4vw;
                    height: 4vw;
                    margin-right: 2vw;
                }
            }
        }
    }
    .safe_tips {
        font-size: 3.2vw;
        color: #666;
        justify-content: center;
        a {
            color:#7e8aa2;
            margin-left: 1vw;
        }
        img {
            margin-right: 2vw;
            width: 3vw;
            height: 3vw;
        }
    }
    .tips1 {
        text-align: center;
        line-height: 10vw;
        color: #999;
        font-size: 3vw;
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 92vw;
        padding: 0 4vw;
        height: 15vw;
        background: #fff;
        .left {
            font-size: 3.2vw;
            span {
                font-size: 5vw;
                font-weight: 600;
            }
        }
        .right {
            color: #fff;
            line-height: 12vw;
            width: 30vw;
            text-align: center;
            background: #338bf7;
            border-radius: 1vw;
        }
    }
}
</style>