<template>
    <div class="login">
        <div class="title">欢迎登录风腾优品</div>
        <div class="list">
            <div class="item">
                <p class="label">手机号</p>
                <input type="text" v-model="phone" placeholder="请输入手机号" />
            </div>
            <div class="item">
                <p class="label">验证码</p>
                <div class="flex flex_between ali_center">
                    <input type="text" v-model="code" placeholder="请输入短信验证码" />
                    <input @click="sendCode" :class="{on:!disabled}" type="button" v-model="text" :disabled="disabled" />
                </div>
            </div>
            <div class="tips" @click="$router.push('/ft_register')">暂无账号？去注册</div>
            <div class="submit">
                完成并登录
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ft_login",
    data() {
        return {
            disabled: false,
            code: "",
            cardId: "",
            phone: "",
            second: 60,
            text: "获取验证码",
            spread: "",
            name: "",
            timer: null
        };
    },
    methods: {
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
.login {
    padding: 0 4vw;
    > .title {
        padding-top: 6vw;
        font-size: 5vw;
        font-weight: bold;
        line-height: 8vw;
    }
    .list {
        .item {
            color: #999;
            border-bottom: 1px solid #f5f5f5;
            margin-bottom: 5vw;
            p {
                font-size: 3.47vw;
            }
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
        .tips {
            color: #666;
            font-size: 3.47vw;
            text-align: center;
            line-height: 6vw;
        }
        .submit {
            margin-top: 15vw;
            width: 92vw;
            line-height: 12vw;
            text-align: center;
            border-radius: 2vw;
            color: #fff;
            background-color: rgb(211,49,47);
        }
    }
}
</style>