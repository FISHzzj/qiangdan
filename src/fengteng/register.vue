<template>
    <div class="register">
        <div class="title on">欢迎注册祥瑞昌拍</div>
        <div class="list">
            <div class="item">
                <p class="label">姓名</p>
                <input type="text" v-model="name" placeholder="请输入您的真实姓名" />
            </div>
            <div class="item">
                <p class="label">身份证号</p>
                <input type="text" v-model="cardId" placeholder="请输入身份证号" />
            </div>
            <div class="item">
                <p class="label">手机号</p>
                <input type="text" v-model="phone" placeholder="请输入手机号" />
            </div>
            <div class="item">
                <p class="label">密码</p>
                <input type="text" v-model="pwd" placeholder="请输入密码" />
            </div>
            <div class="item">
                <p class="label">验证码</p>
                <div class="flex flex_between ali_center">
                    <input type="text" v-model="code" placeholder="请输入短信验证码" />
                    <input @click="sendCode" :class="{on:!disabled}" type="button" v-model="text" :disabled="disabled" />
                </div>
            </div>
            <div class="item">
                <p class="label">邀请码</p>
                <input type="text" v-model="spread" placeholder="" />
            </div>
            <div class="submit" @click="register">
                完成并登录
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: "ft_register",
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
            pwd:"",
            timer: null
        };
    },
    created(){
        this.spread = this.$route.query.code || ""
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
        },
        async register(){
            if(!this.phone) return Toast('请输入手机号')
            if(!this.code) return Toast('请输入验证码')
            if(!this.name) return Toast('请输入姓名')
            if(!this.cardId) return Toast('请输入身份证号')
            if(!this.pwd) return Toast('请输入密码')
            
            let res = await $ajax('auctionauction1register', { mobile: this.phone, verifycode: this.code, nickname:this.name, sfz:this.cardId, code: this.spread,pwd:this.pwd})
            if(!res) return false
            console.log(res)
            Toast('注册成功')
            this.$router.push({
                name: 'ft_index'
            })
        },

    },
    destroyed() {
        window.clearInterval(this.timer);
    }
}
</script>
<style lang="less" scoped>
.register {
    padding: 0 4vw;
    > .title {
        font-size: 5vw;
        font-weight: bold;
        line-height: 8vw;
        padding-bottom: 6vw;
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