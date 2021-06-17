<template>
    <div class="orderDetail">
        <div class="header flex flex_between ali_center">
            <van-icon @click="$router.go(-1)" name="arrow-left" color="#fff" size="20" />
            <p>订单详情</p>
            <van-icon @click="showService = true" name="service-o" size="20" />
        </div>
        <div class="top_1"></div>
        <div class="top">
            <div class="name">这里是商品</div>
            <div class="order_status flex ali_center">
                <img src="" alt="" />
                <div class="">
                    <div class="status">订单生效中</div>
                    <div class="time">创建时间: <span>2021-02-02 14:00:00</span></div>
                    <div class="time">到期时间: <span>2021-02-02 14:00:00</span></div>
                </div>
            </div>
            <div class="order_id flex ali_center flex_between">
                <div class="">订单号：<span>00000000</span></div>
                <span class="copy" data-clipboard-text="00000000">复制</span>
            </div>
        </div>
        <!-- 电费到期时间 -->
        <div class="fee_time">
            <div class="fee_top flex ali_center">
                <div class="left">
                    <div class="num">44</div>
                    <div class="type">剩余天数</div>
                </div>
                <div class="right">
                    <div class="time">剩余电费到期日：2020-20-20</div>
                    <div class="desc">电费周期到期后若5天内未及时续缴，平台有权终止该订单</div>
                </div>
            </div>
            <div class="fee_bottom">为确保收益,请在电费到期日前续缴电费.</div>
        </div>
        <!-- 回本进度 -->
        <div class="diliver_pro">
            <div class="title flex ali_center flex_between">
                <div class="left flex ali_center">
                    <span>回本进度</span>
                    <van-icon name="warning-o"></van-icon>
                </div>
                <div class="right flex ali_center" @click="$router.push('/syDetail')">
                    <span>收益明细</span>
                    <van-icon name="arrow"></van-icon>
                </div>
            </div>
            <div class="progress">
                <div class="top2 flex ali_center flex_between">
                    <div class="left">收益</div>
                    <div class="middle">
                        <div style="width:50%" class="cont">
                            <span>50%</span>
                        </div>
                    </div>
                    <div class="right">回本</div>
                </div>
                <div class="bottom flex">
                    已获得净收益<p><span>0.00</span>CNY</p>
                </div>
            </div>
            <div class="title flex ali_center flex_between">
                <div class="left flex ali_center">
                    <span>续缴记录</span>
                </div>
            </div>
            <div class="record_ex flex ali_center flex_between">
                <div class="left">已缴纳<span>90</span>天</div>
                <div class="right flex ali_center" @click="$router.push('/feeRecord')">
                    <span>查看更多</span>
                    <van-icon name="arrow"></van-icon>
                </div>
            </div>
        </div>
        <div class="goods_info flex ali_center">
            <img src="" alt="" />
            <div class="infos">
                <div class="name">总扩容空间</div>
                <div class="name1"></div>
                <div class="des">订单算力</div>
            </div>
        </div>
        <div class="add_info">
            <div class="title flex ali_center flex_between">
                <div class="left">
                    已扩容<span>0</span>T
                </div>
                <div @click="$router.push('/addrecord/1')" class="right flex ali_center">
                    <span>查看记录</span>
                    <van-icon name="arrow"></van-icon>
                </div>
            </div>
            <div class="canshu flex ali_center flex_between">
                <div class="item">
                    <div class="num">000</div>
                    <div class="type">有效在存(TiB)</div>
                </div>
                <div class="item">
                    <div class="num">000</div>
                    <div class="type">锁仓收益(FIL)</div>
                </div>
                <div class="item">
                    <div class="num">000</div>
                    <div class="type">抵押币(FIL)</div>
                </div>
            </div>
        </div>
        <div class="order_info">
            <div class="item flex ali_center flex_between">
                <div class="left">购买台数</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">矿机总价</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">电费单位</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">预缴天数</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">待缴电费天数</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">矿机总价</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">产品周期</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">订单号</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">支付时间</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">支付方式</div>
                <div class="right">X1</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">CNY支付汇率</div>
                <div class="right">X1</div>
            </div>
            <div class="item money flex ali_center flex_between">
                <div class="left"></div>
                <div class="right">实付<span>0.00</span>CNY</div>
            </div>
        </div>
        <div style="height:15vw"></div>
        <div class="footer flex flex_between ali_center">
            <!-- <div class="item">产品扩容</div> -->
            <div class="subfee">预缴电费</div>
            <div class="item item1">续期产品</div>
        </div>
        <service
            :showService="showService"
            @close="closeservice"
        ></service>
    </div>
</template>
<script>
import service from "./common/service";
import {copy} from '../func/copy'
export default {
    name: "orderDetail",
    components: {
        service,
    },
    data() {
        return {
            showService: false,
        };
    },
    mounted() {
        this.clipboard = copy('.copy');
    },
    methods: {
        closeservice(e) {
            this.showService = false;
        }
    }
};
</script>
<style lang="less" scoped>
.orderDetail {
    padding: 0 4vw;
    background: #f7f7f7 !important;
    overflow: auto;
    .header {
        width: 92vw;
        padding: 0 4vw;
        height: 12vw;
        top: 0;
        left: 0;
        position: fixed;
        background: #2d77f4;
        z-index: 100;
        color: #fff;
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
        width: 92vw;
        background: #fff;
        border-radius: 3vw;
        .name {
            padding: 0 4vw;
            line-height: 12vw;
            font-size: 3.47vw;
            color: #333;
            background:rgba(0,0,255,.2);
        }
        .order_status {
            padding: 0 4vw;
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
            padding: 5vw 4vw 3vw;
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
    // 电费到期时间
    .fee_time {
        width: 92vw;
        background: #fff;
        border-radius: 3vw;
        .fee_bottom {
            color: #999;
            background: #fff8f3;
            line-height: 8vw; 
            font-size: 3.2vw;
            border-radius: 0 0 3vw 3vw;
        }
        .fee_top {
            height: 25vw;
            .left {
                width: 25vw;
                text-align: center;
                .num {
                    color: blue;
                    font-weight: 600;
                    font-size: 10vw;
                }
                .type {
                    color: #666;
                    font-size: 3.2vw;
                }
            }
            .right {
                width: 65vw;
                .time {
                    font-weight: 600;
                    color: #333;
                    font-size: 4.2vw;
                    height: 8vw;
                }
                .desc {
                    color: #666;
                    font-size: 3.2vw;
                }
            }
        }
    }
    // 回本进度
    .diliver_pro {
        background: #fff;
        border-radius: 3vw;
        margin: 3vw 0;
        .title {
            padding: 0 3vw;
            height: 12vw;
            .left {
                span {
                    text-indent: 3vw;
                    font-size: 4.2vw;
                    font-weight: 600;
                    position: relative;
                    margin-right: 2vw;
                    &::after {
                        content: "";
                        top: 0;
                        bottom: 0;
                        width: 1vw;
                        height: 4.5vw;
                        left: 0;
                        background: blue;
                        margin: auto 0;
                        position: absolute;
                    }
                }
            }
            .right {
                font-size: 3.2vw;
                color: #666;
                span {
                    margin-right: 1vw;
                }
            }
        }
        .progress {
            width: 86vw;
            margin: 0 3vw;
            background: rgba(0,0,255,0.1);
            border-radius: 3vw;
            padding-top: 10vw;
            padding-bottom: 4vw;
            .top2 {
                .right,
                .left {
                    width: 20%;
                    text-align: center;
                    font-size: 3.2vw;
                    color: #fc4142;
                }
                .right {
                    color: blue;
                }
                .middle {
                    width: 60%;
                    background:blue;
                    border-radius: 1vw;
                    height: 5vw;
                    .cont {
                        background: rgba(255,255,255,0.3);
                        position: relative;
                        height: 100%;
                        span {
                            position: absolute;
                            color: #fff;
                            background: blue;
                            padding: 0 2vw;
                            border-radius: 1vw;
                            right: -4vw;
                            top: -6vw;
                            font-size: 3.2vw;
                        }
                    }
                }
            }
            .bottom {
                justify-content: flex-end;
                align-items: flex-end;
                height: 10vw;
                font-size: 3.2vw;
                color: #666;
                text-align: right;
                padding-right: 3vw;
                p {
                    color: blue;
                    span {
                        font-size: 6vw;
                        font-weight: 600;
                    }
                }
            }
        }
        .record_ex {
            height: 12vw;
            padding: 0 3vw;
            background: #fff8f3;
            border-radius: 0 0 3vw 3vw;
            font-size: 3.2vw;
            color: #666;
            .left {
                color: #333;
                span {
                    color: blue;
                    font-weight: 600;
                }
            }
        }
    }
    .goods_info {
        width: 84vw;
        padding: 0 4vw;
        background: #fff;
        img {
            width: 15vw;
            height: 15vw;
            margin-right: 3vw;
        }
        .infos {
            .name {
                font-weight: 600;
                line-height: 10vw;
            }
            .name1 {
                width: 60vw;
                height: 4vw;
                background: #338bf7;
            }
            .des {
                color: #666;
                font-size: 3.2vw;
                line-height: 8vw;
            }
        }
    }
    .add_info {
        width: 92vw;
        margin: 2vw 0;
        background: #fff;
        border-radius: 3vw;
        .title {
            height: 12vw;
            background: #fff8f3;
            color: #333;
            font-size: 3.2vw;
            padding: 0 4vw;
            .left {
                span {
                    margin: 0 1vw;
                    font-weight: 600;
                    font-size: 3.47vw;
                    color: blue;
                }
            }
        }
        .canshu {
            padding: 3vw 0;
            text-align: center;
            color: #333;
            font-size: 3.2vw;
            .item {
                width: 33%;
            }
            .num {
                margin-bottom: 1vw;
            }
        }
    }
    .order_info {
        .item {
            height: 12vw;
            font-size: 3.47vw;
            .left {
                color: #999;
            }
            .right {
                color: #777;
            }
        }
        .money {
            color: #333;
            span {
                font-weight: 600;
                font-size: 6vw;
            }
        }
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 92vw;
        padding: 0 4vw;
        height: 15vw;
        background: #fff;
        text-align: center;
        color: #ccc;
        .item {
            width: 43vw;
            height: 10vw;
            line-height: 10vw;
            border-radius: 2vw;
            background: #f7f4ff;
        }
        .item1 {
            background: #f5f5f5;

        }
        .subfee {
            color: #fff;
            width: 30vw;
            height: 12vw;
            text-align: center;
            line-height: 12vw;
            border-radius: 2vw;
            background: blue;
        }
    }
}
</style>