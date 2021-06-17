<template>
    <div class="record">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>收益明细</p>
        </div>
        <div class="top flex ali_center">
            <div class="left">
                <div class="type">3月份总收益(元)</div>
                <div class="num">≈0.00</div>
            </div>
            <div class="right">
                <div class="type">订单总收益(元)</div>
                <div class="num">≈0.000</div>
            </div>
        </div>
        <van-tabs v-model="active">
            <van-tab :title="item.title" v-for="(item, index) in nav" :key="index">
                <div class="list">
                    <div class="item">
                        <div class="top flex ali_center flex_between">
                            <div class="left">预计净收益</div>
                            <div class="right">≈0.00000ETH</div>
                        </div>
                        <div class="bottom top flex ali_center flex_between">
                            <div class="left">2020-202-20</div>
                            <div class="right">≈0.0000</div>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
        
    </div>
</template>
<script>
export default {
    name: "syDetail",
    data() {
        return {
            active: 0,
            nav: [
                {title: "一月份"},
                {title: "二月份"},
                {title: "三月份"},
                {title: "四月份"},
                {title: "五月份"},
                {title: "六月份"},
                {title: "七月份"},
                {title: "八月份"},
            ]
        };
    },
    mounted() {
    },
    methods: {
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.record {
    .header {
        width: 100%;
        height: 12vw;
        background: #fff;
        position: relative;
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
    > .top {
        width: 92vw;
        margin: 0 4vw;
        background: rgba(0,0,255,0.05);
        padding: 3vw 0;
        border-radius: 3vw;
        .left,
        .right {
            width: 50%;
            padding: 0 0 0 4vw;
            .type {
                color: #999;
                font-size: 3.2vw;
                margin-bottom: 2vw;
            }
            .num {
                font-weight: 600;
                font-size: 5vw;
            }
        }
    }
    .list {
        padding: 4vw;
        .item {
            border-bottom: 1px solid #f7f7f7;
            .top {
                height: 8vw;
                .left {
                    font-weight: 600;
                }
                .right {
                    color: blue;
                }
            }
            .bottom {
                height: 8vw;
                font-size: 3.2vw;
                .left,
                .right {
                    color: #999;
                }
            }
        }
    }
}
</style>