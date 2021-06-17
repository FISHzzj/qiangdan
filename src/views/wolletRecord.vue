<template>
    <div class="record">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>钱包记录</p>
        </div>
        <div class="nav flex ali_center">
            <div class="item" @click="changenav(index)" :class="{on:index == status}" v-for="(item, index) in navlist" :key="index">
                {{item}}
            </div>
        </div>
        <div class="list">
            <div class="item" @click="$router.push('/recordDetail/1')">
                <div class="top flex ali_center flex_between">
                    <div class="time">2212-21-21</div>
                    <div class="status">已取消</div>
                </div>
                <div class="bottom flex ali_center">
                    <div class="left">
                        <div class="type">CNY充值</div>
                        <div class="num">￥1000.00</div>
                    </div>
                    <div class="right">
                        <div class="flex item1 flex_between ali_center">
                            <span>单价</span>
                            <p>1.00CNY</p>
                        </div>
                        <div class="flex flex_between ali_center">
                            <span>数量</span>
                            <p>10.00CNY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "wolletRecord",
    data() {
        return {
            title: '',
            status: 0,
            navlist: ['转入','转出','兑换']
        };
    },
    mounted() {
        
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
.record {
    background: #f7f7f7 !important;
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
    .nav {
        flex-wrap: nowrap;
        height: 12vw;
        background: #fff;
        .item {
            width: 50%;
            text-align: center;
            color: #666;
            font-size: 4vw;
            &.on {
                position: relative;
                color: #000;
                font-size: 4.2vw;
                &::after {
                    position: absolute;
                    content: "";
                    left: 0;
                    right: 0;
                    bottom: -2vw;
                    margin: 0 auto;
                    width: 8vw;
                    height: 0.75vw;
                    background: blue;
                }
            }
        }
    }
    .list {
        padding: 4vw;
        .item {
            background: #fff;
            border-radius: 2vw;
            padding: 0 2vw;
            margin-bottom: 2.4vw;
            .top {
                height: 12vw;
                border-bottom: 1px solid #f7f7f7;
                .time {
                    color: #999;
                    font-size: 3.2vw;
                }
                .status {
                    color: #fc4142;
                    font-size: 3.47vw;
                }
            }
            .bottom {
                padding: 6vw 0;
                .left {
                    width: 60%;
                    .type {
                        font-size: 3.2vw;
                    }
                    .num {
                        font-size: 6vw;
                        font-weight: 600;
                    }
                }
                .right {
                    width: 40%;
                    font-size: 3.2vw;
                    .item1 {
                        margin-bottom: 2vw;
                    }
                    span {
                        color: #666;
                    }
                    p {
                        color: #333;
                    }
                }
            }
        }
    }
}
</style>