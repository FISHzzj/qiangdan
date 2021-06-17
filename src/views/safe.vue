<template>
    <div class="safe">
        <div class="header">
            <van-icon @click="$router.go(-1)" color="#fff" name="arrow-left" size="20" />
            <p>账户设置</p>
        </div>
        <div class="top">
            <div class="num"><span>2</span>个可优化项</div>
            <div class="type">时刻保护您的张欢全</div>
        </div>
        <div class="content">
            <div @click="$router.push('/base')" class="item flex flex_between ali_center">
                <div class="left">身份认证</div>
                <div class="right flex ali_center">
                    <span class="success">认证成功</span>
                </div>
            </div>
            <div @click="showmask = true" class="item flex flex_between ali_center">
                <div class="left">重置登录密码</div>
                <div class="right flex ali_center">
                    <span>重置</span>
                    <van-icon color="#999" name="arrow"></van-icon>
                </div>
            </div>
            <div @click="showmask = true" class="item flex flex_between ali_center">
                <div class="left">重置交易密码</div>
                <div class="right flex ali_center">
                    <span>重置</span>
                    <van-icon color="#999" name="arrow"></van-icon>
                </div>
            </div>
            <div class="item flex flex_between ali_center">
                <div class="left">合格投资者认证</div>
                <div class="right flex ali_center">
                    <span>去设置</span>
                    <van-icon color="#999" name="arrow"></van-icon>
                </div>
            </div>
        </div>
        <div class="mask" v-show="showmask" @click="showmask = false"></div>
        <div class="mask_1" v-show="showmask">
            <div class="top1 flex ali_center">
                <van-icon @click="showmask = false" name="arrow-down" />
            </div>
            <div class="title">交易密码</div>
            <div class="flex input ali_center flex_between">
                <input v-model="code" type="text" placeholder="输入短信验证码" />
                <span>获取验证码</span>
                <div class="btn" @click="submit">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "safe",
    data() {
        return {
            showmask: false,
            code: ""
        }
    },
    methods: {
        submit() {
            
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.safe {
    .header {
        width: 100%;
        height: 12vw;
        position: relative;
        background: blue;
        .van-icon {
            position: absolute;
            top: 0;
            left: 3vw;
            bottom: 0;
            height: 4vw;
            margin: auto 0;
        }
        p {
            color: #fff;
            width: 100%;
            line-height: 12vw;
            font-size: 4vw;
            text-align: center;
        }
    }
    .top {
        background: blue;
        color: #fff;
        width: 100%;
        font-size: 3.47vw;
        padding: 5vw 6vw 5vw;
        span {
            font-weight: 600;
            font-size: 8vw;
        }
        .type {
            margin-top: 2vw;
        }
    }
    .content {
        background: #fff;
        border-radius: 2vw 2vw 0 0;
        padding: 0 4vw;
        margin-top: -2vw;
        .item {
            height: 20vw;
            .right {
                color: #999;
                .success {
                    color: blue;
                }
            }
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1002;
        background: rgba(0,0,0,0.3);
    }
    .mask_1 {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        padding: 2vw 4vw;
        z-index: 1002;
        background: #fff;
        border-radius: 3vw 3vw 0 0;
        .top1 {
            height: 8vw;
        }
        .title {
            color: #333;
            font-size: 4vw;
            font-weight: 600;
        }
        .input {
            height: 15vw;
            input {
                width: 40vw;
                height: 10vw;
                line-height: 10vw;
                border-bottom: 1px solid #eee;
                ::-webkit-input-placeholder{
                    color: #999;
                }
            }
            span {
                color: blue;
                font-size: 3.47vw;
            }
            .btn {
                width: 20vw;
                height: 8vw;
                line-height: 8vw;
                color: #fff;
                border-radius: 4vw;
                text-align: center;
                background: #3178ee;
            }
        }
    }
}
</style>