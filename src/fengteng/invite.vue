<template>
    <div class="invite">
        <div class="header">
            <van-icon @click="$router.go(-1)"  name="arrow-left" size="20" />
            <p>邀请好友</p>
        </div>
        <div class="content">
            <div class="first">您的邀请码为：</div>
            <div class="second">{{code}}</div>
            <div class="third">好友也可在注册时直接填写邀请码</div>
            <img :src="qrcode" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    name: "ft_invite",
    data() {
        return {
            id: "", 
            avatar: "", 
            nickname: "", 
            code: "", 
            qrcode: "",
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        async getData(){
            let res = await $ajax('auctionauction1invite', {})
            if(!res) return false
            Object.keys(res).forEach((key)=>{
                this[key] = res[key]
            })

        },
    }
}
</script>
<style lang="less" scoped>
.invite {
    .header {
        width: 100%;
        height: 12vw;
        position: relative;
        background: #fff;
        .van-icon {
            position: absolute;
            top: 0;
            left: 3vw;
            bottom: 0;
            height: 4vw;
            margin: auto 0;
        }
        p {
            color: #333;
            width: 100%;
            line-height: 12vw;
            font-size: 4vw;
            text-align: center;
        }
    }
    .content{
        width: 100vw;
        height: 71vh;
        background-image: url('../assets/images/invite_bg.jpg');
        background-size: 100% 100%;
        padding-top: 40vw;
        text-align: center;
   
 
        .first {
            font-size: 4.2vw;
        }
        .second {
            padding: 3vw 0 2vw;
            font-size: 8vw;
            font-weight: bold;
            color: rgb(194,178,146);
        }
        .third {
            color: #ccc;
            font-size: 3.2vw;
            padding-bottom: 2vw;
        }
        img {
            width: 30vw;
            height: 30vw;
        }
    }
}
</style>