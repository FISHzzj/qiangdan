<template>
    <div class="login">
        <div class="title">欢迎登录风腾优品</div>
        <van-tabs v-model="active">
            <van-tab title="密码"></van-tab>
            <van-tab title="验证码"></van-tab>
        </van-tabs>
        <div class="list">
            <div class="item">
                <p class="label">手机号</p>
                <input type="text" v-model="phone" placeholder="请输入手机号" />
            </div>
             <div class="item" v-if="active == 0">
                <p class="label">密码</p>
                <input type="text" v-model="pwd" placeholder="请输入密码" />
            </div>
            <div class="item" v-if="active == 1">
                <p class="label">验证码</p>
                <div class="flex flex_between ali_center">
                    <input type="text" v-model="code" placeholder="请输入短信验证码" />
                    <input @click="sendCode" :class="{on:!disabled}" type="button" v-model="text" :disabled="disabled" />
                </div>
            </div>
            <div class="tips" @click="$router.push('/ft_register')">暂无账号？去注册</div>
            <div class="submit" @click="login">
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
            pwd:"",
            cardId: "",
            phone: "",
            second: 60,
            text: "获取验证码",
            spread: "",
            name: "",
            timer: null,
            active: 0,
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
        },
        async login(){
            let {phone, code, pwd, active} = this
            if(active == 0){
                 if (!phone || !pwd) {
                    return Toast({
                        message: '请填写账号和密码',
                        duration: 1000,
                    })
			    }
            }else{
                if (!phone || !code) {
                    return Toast({
                        message: '请填写账号和验证码',
                        duration: 1000,
                    })
			    }
            }
           
			if (phone.length < 11) {
				return Toast({
					message: '请填写正确的手机号',
					duration: 1000,
				})
			}
            // 進行登錄 提示
            const toast = Toast.loading({
                message: '登入中...',
                forbidClick: true, // 禁用背景点击
                loadingType: 'spinner',
                position: 'bottom',
                duration: 0
            })
            if(active == 0){
                 // 發送 ajax
                let res = await $ajax('auctionauction1login',{
                    mobile:phone,
                    pwd: pwd
                }, () => {
                    toast.clear()
                })
                // 如果返回爲 false ,則中斷函數
                if (!res) return false
                console.log(res)
                // 保存 openid 以及 ip 到本地
                localStorage.setItem('openid', res.openid)
                // localStorage.setItem('ip', res.ip)
                localStorage.setItem('mobile', phone)
                this.$router.push({
                    name: 'ft_index'
                })
            }else {
                 // 發送 ajax
                let res = await $ajax('auctionauction1login',{
                    mobile:phone,
                    verifycode: code
                }, () => {
                    toast.clear()
                })
                // 如果返回爲 false ,則中斷函數
                if (!res) return false
                console.log(res)
                // 保存 openid 以及 ip 到本地
                localStorage.setItem('openid', res.openid)
                // localStorage.setItem('ip', res.ip)
                localStorage.setItem('mobile', phone)
                this.$router.push({
                    name: 'ft_index'
                })
            }
           
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