<template>
    <div class="setting">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>收款设置</p>
        </div>
        <div style="height:12vw"></div>
        <div class="nav flex al;i_center flex_between">
            <div class="item flex ali_center" :class="{on:type=='weixin'}" @click="changenav('weixin')">
                <img src="@/assets/images/weixin.png" alt="" />
                <span>微信</span>
            </div>
            <div class="item flex ali_center" :class="{on:type=='card'}" @click="changenav('card')">
                <img src="@/assets/images/card.png" alt="" />
                <span>银联</span>
            </div>
            <div class="item flex ali_center" :class="{on:type=='alipay'}" @click="changenav('alipay')">
                <img src="@/assets/images/alipay.png" alt="" />
                <span>支付宝</span>
            </div>
        </div>
        <div class="list">
            <div v-if="type != 'card'" class="item uploader flex ali_center">
                <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead" />
                <p class="tips" v-if="type == 'weixin'">微信收款二维码</p>
                <p class="tips" v-else>支付宝收款二维码</p>
            </div>
            <div class="item flex ali_center" v-show="type == 'weixin'">
                <p class="label">微信号</p>
                <input type="text" class="phone" placeholder="请输入微信号或微信绑定手机号">
            </div>
            <div class="item flex ali_center" v-show="type == 'card'">
                <p class="label">持卡人姓名</p>
                <input type="text" placeholder="请输入真实姓名">
            </div>
            <div class="item flex ali_center" v-show="type == 'card'">
                <p class="label">开户银行</p>
                <input type="text" placeholder="请输入开户银行">
            </div>
            <div class="item flex ali_center" v-show="type == 'card'">
                <p class="label">开户支行</p>
                <input type="text" placeholder="请输入开户支行">
            </div>
            <div class="item flex ali_center" v-show="type == 'card'">
                <p class="label">银行卡号</p>
                <input type="text" placeholder="请输入银行卡号">
            </div>
            <div class="item flex ali_center" v-show="type == 'alipay'">
                <p class="label">支付宝号</p>
                <input type="text" placeholder="请输入支付宝号">
            </div>
            <div class="item flex ali_center">
                <p class="label">手机号</p>
                <input type="text" placeholder="请输入手机号">
            </div>
            <div class="item code flex ali_center">
                <p class="label">验证码</p>
                <div class="flex flex_between ali_center">
                    <input type="text" v-model="code" placeholder="请输入短信验证码" />
                    <input @click="sendCode" :class="{on:!disabled}" type="button" v-model="text" :disabled="disabled" />
                </div>
            </div>
        </div>
        <div class="submit">确认并保存</div>
        <div class="tip">风险提示:转售属于C2C交易，资金不经过平台，平台不会自动扣款，需要您手动转账给对方，对方才能收到款限。</div>
    </div>
</template>
<script>
export default {
    name: "ft_setting",
    data() {
        return {
            second: 60,
            disabled: false,
            type: "weixin",
            text: "获取验证码",
            code: "",
            timer: null,
            fileList: []
        }
    },
    methods: {
        changenav(type) {
            this.fileList = [];
            this.type = type;
        },
        afterRead(file) {
            console.log(file);
            console.log(this.fileList)
        },
        sendCode() {
            console.log(1)
            this.djs();
        },
        djs() {
            this.timer=setInterval(()=>{
                this.second--;
                this.disabled=true;
                this.text = this.second;
                if (this.second < 0) {
                    window.clearInterval(this.timer);
                    this.text = "重新发送";
                    this.disabled=false;
                    this.second = 60;
                }
            }, 1000)
        }
    },
    destroyed() {
        window.clearInterval(this.timer);
    }
}
</script>
<style lang="less" scoped>
.setting {
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
    .nav {
        .item {
            height: 12vw;
            width: 33%;
            justify-content: center;
            background: #fff;
            &.on {
                background: #f5f5f5;
            }
            img {
                width: 5vw;
                height: 5vw;
                margin-right: 2vw;
            }
            span {
                font-size: 3.47vw;
            }
        }
    }
    .list {
        padding: 0 4vw;
        .item {
            min-height: 12vw;
            border-bottom: 1px solid #ccc;
            &.uploader {
                flex-direction: column;
                /deep/ .van-uploader__upload {
                    width: 40vw;
                    height: 40vw;
                    border: 1px solid #f5f5f5;
                    .van-uploader__upload-icon {
                        font-size: 100px;
                    }
                }
                .tips {
                    font-size: 3.2vw;
                    color: #666;
                    line-height: 6vw;
                }
            }
            .label {
                font-size: 3.47vw;
                width: 20vw;
            }
            input {
                font-size: 3.47vw;
                &.phone {
                    width: 60vw;
                }
            }
            &.code {
                input {
                    font-size: 3.47vw;
                    line-height: 7vw;
                    &.on {
                        color: rgb(234,148,158);
                    }
                }
                input[type=button] {
                    width: 20vw;
                    text-align: center;
                }
            }
        }
    }
    .submit {
        margin: 15vw 10vw 5vw;
        width: 80vw;
        line-height: 12vw;
        text-align: center;
        border-radius: 2vw;
        color: #fff;
        background-color: rgb(211,49,47);
    }
    .tip {
        width: 80vw;
        margin: 0 10vw;
        font-size: 3.2vw;
    }
}
</style>