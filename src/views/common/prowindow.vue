<template>
    <div class="prowindow" v-if="showWindow">
        <div class="mask" @click="close"></div>
        <div class="window">
            <div class="w_title flex ali_center flex_between">
                <span>商品名字</span>
                <van-icon name="cross" @click="close" />
            </div>
            <div class="type flex ali_center">
                <div class="flex ali_center">有效算力<p>105 <span>TH/台</span></p></div>
                <div class="flex ali_center">租赁期限<p>永久</p></div>
            </div>
            <div class="pro_num flex ali_center flex_between">
                <div class="left">购买台数</div>
                <div class="num flex ali_center">
                    <div class="jian" @click="jian">-</div>
                    <input type="number" @input="input" v-model="num" />
                    <div @click="add" class="add">+</div>
                </div>
            </div>
            <div class="freeing flex">
                <a href="javascript:;" @click="changenav(index)" v-for="(item, index) in 3" :key="index">
                    <div class="item" :class="{on: index == status}">
                        <p class="days">预缴30天</p>
                        <p class="money">300.00 CNY/台</p>
                        <div class="discount">8折</div>
                    </div>
                </a>
            </div>
            <div class="sub_btn flex ali_center flex_between">
                <div class="left">总价<span>0.000</span>CNY</div>
                <div class="right" :class="{on: status}" @click="submit">提交订单</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "prowindow",
    props: {
        productInfo: {
            type: Object,
            default: () => {}
        },
        showWindow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            status: 0,
            num: 100
        };
    },
    methods: {
        changenav(index) {
            this.status = index;
        },
        input() {
            if (this.num < 1 || !this.num) {
                this.num = 1
                return Toast('购买数量不能低于1台');
            }
            if (this.num > 1000) {
                this.num = 1000;
                return Toast('购买数量不能超过剩余库存1000台');
            }
        },
        jian() {
            if (this.num == 1) {
                return Toast('购买数量不能低于1台');
            } else {
                this.num--
            }
        },
        add() {
            if (this.num == 1000) {
                return Toast('购买数量不能超过剩余库存1000台');
            } else {
                this.num++
            }
        },
        submit() {
            this.$router.push({
                path: "/order/submit/1"
            })
        },
        close() {
            this.$emit("close", true);
        }
    }
};
</script>
<style lang="less" scoped>
.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: rgba(0,0,0,.3);
    z-index: 1000;
    height: 100vh;
}
.window {
    position: fixed;
    bottom: 0;
    width: 92vw;
    background: #fff;
    border-radius: 3vw 3vw 0 0;
    left: 0;
    z-index: 1001;
    padding: 0 4vw;
    .w_title {
        height: 12vw;
    }
    .type {
        >div {
            font-size: 3.2vw;
            margin-right: 6vw;
            p {
                padding: 0 2vw;
                font-size: 4vw;
                color: #3b6bcd;
                font-weight: 600;
                span {
                    font-weight: 400;
                    font-size: 3.2vw;
                }
            }
        }
    }
    .pro_num {
        height: 20vw;
        .num {
            .jian,
            .add {
                background: #f3f3f3;
                width: 6vw;
                height: 6vw;
                text-align: center;
                line-height: 6vw;
                font-size: 5vw;
            }
            input {
                border-left: 1px solid #fff;
                border-right: 1px solid #fff;
                width: 8vw;
                height: 6vw;
                line-height: 6vw;
                text-align: center;
                background: #f3f3f3;
            }
        }
    }
    .freeing {
        overflow: auto;
        .item {
            width: 35vw;
            text-align: center;
            height: 11vw;
            background: #f7f7f7;
            margin-right: 4vw;
            padding: 2vw 0;
            border-radius: 2vw;
            position: relative;
            .days {
                color: #666;
                font-size: 3.73vw;
                margin-bottom: 1.5vw;
            }
            .money {
                font-size: 3.2vw;
                color: #999;
            }
            .discount {
                position: absolute;
                right: 0;
                top: 0;
                color: #fff;
                background: #fe7f56;
                border-radius: 1vw;
                font-size: 2vw;
                line-height: 3.5vw;
                padding: 0 1.5vw;
            }
            &.on {
                background: #3b6bcd;
                .money,
                .days {
                    color: #fff;
                }
            }
        }
    }
    .sub_btn {
        margin-top: 10vw;
        height: 15vw;
        .left {
            color: #333;
            font-size: 3.2vw;
            span {
                font-size: 5vw;
                font-weight: 600;
                margin: 0 1vw;
            }
        }
        .right {
            width: 30vw;
            line-height: 12vw;
            height: 12vw;
            color: #fff;
            background: #7ccff7;
            border-radius: 6vw;
            text-align: center;
            &.on {
                background: #565efe;
            }
        }
    }
}
</style>