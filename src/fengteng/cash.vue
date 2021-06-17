<template>
    <div class="cash">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>提现</p>
        </div>
        <div style="height:12vw"></div>
        <div class="list">
            <div class="title">到账账户</div>
            <div class="item flex ali_center flex_between" @click="changeway('card')">
                <div class="left flex ali_center">
                    <img src="@/assets/images/card.png" alt="" />
                    <span>银行卡</span>
                </div>
                <img src="@/assets/images/dui.png" v-if="type == 'card'" alt="" />
            </div>
        </div>
        <div class="list list1">
            <div class="title">提现金额</div>
            <div class="money flex ali_center">
                <span>￥</span>
                <input type="number" />
            </div>
        </div>
        <div class="submit">提现</div>
    </div>
</template>
<script>
export default {
    name: "ft_cash",
    data() {
        return {
            type: "card",
            fileList: []
        }
    },
    methods: {
        changeway(type) {
            this.type = type;
        },
        afterRead(file) {
            console.log(file);
            console.log(this.fileList)
        },
    }
}
</script>
<style lang="less" scoped>
.cash {
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
    .list {
        padding: 0 4vw;
        &.list1 {
            padding-top: 10vw;
        }
        .title {
            font-size: 3.73vw;
            line-height: 10vw;
        }
        .item {
            height: 12vw;
            background: #eee;
            border: 1px solid #999;
            border-radius: 2vw;
            margin-bottom: 2.4vw;
            padding: 0 2vw;
            .left {
                img {
                    width: 6vw;
                    height: 6vw;
                    margin-right: 2.4vw;
                }
                span {
                    font-size: 3.47vw;
                }
            }
            > img {
                width: 5vw;
                height: 5vw;
            }
        }
        .money {
            height: 12vw;
            border-bottom: 1px solid #ccc;
            span {
                font-size: 6vw;
                font-weight: bold;
            }
            input {
                font-size: 6vw;
                font-weight: bold;
            }
        }
        .uploader {
            padding: 4vw 0;
            .label {
                width: 20vw;
                font-size: 3.47vw;
            }
            /deep/ .van-uploader__upload {
                width: 30vw;
                height: 30vw;
                border: 1px solid #f5f5f5;
                .van-uploader__upload-icon {
                    font-size: 10vw;
                }
            }
        }
    }
    .submit {
        margin: 5vw 4vw 0;
        width: 92vw;
        line-height: 12vw;
        text-align: center;
        border-radius: 2vw;
        color: #fff;
        background-color: rgb(211,49,47);
    }
}
</style>