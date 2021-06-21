<template>
    <div class="recharge">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>充值</p>
        </div>
        <div style="height:12vw"></div>
        <div class="list">
            <div class="title">充值方式</div>
            <div class="item flex ali_center flex_between" @click="changeway('2')">
                <div class="left flex ali_center">
                    <img src="@/assets/images/alipay.png" alt="" />
                    <span>支付宝</span>
                </div>
                <img src="@/assets/images/dui.png" v-if="type == '2'" alt="" />
            </div>
            <div class="item flex ali_center flex_between" @click="changeway('1')">
                <div class="left flex ali_center">
                    <img src="@/assets/images/weixin.png" alt="" />
                    <span>微信</span>
                </div>
                <img src="@/assets/images/dui.png" v-if="type == '1'" alt="" />
            </div>
        </div>
        <div class="erweima flex ali_center">
            <van-image
            width="200"
            height="200"
            :src="erweima"
            />
        </div>
        <div class="list list1">
            <div class="title">充值金额</div>
            <div class="money flex ali_center">
                <span>￥</span>
                <input type="number" v-model="money" />
            </div>
            <div class="uploader flex">
                <div class="label">上传凭证</div>
                <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead"  preview-size='200px' />
            </div>
        </div>
        <div class="submit" @click="chongzhi">充值</div>
    </div>
</template>
<script>
import { Toast } from 'vant'
export default {
    name: "ft_recharge",
    data() {
        return {
            type: "1",
            fileList: [],
            erweima: "",
            wx_img: "",
            zfb_img: "",
            money: "",
            
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
         async getData(){
            let res = await $ajax('auctionauction1get_cz', {})
            if(!res) return false
            console.log(res)
            if(this.type == 1){
                this.erweima = res.wx_img
            }else{
                this.erweima = res.zfb_img
            }
            
        },
        changeway(type) {
            this.type = type;
             this.getData()
        },
        async afterRead(file) {
            console.log(file);
            // console.log(this.fileList)
            // console.log(file);
             let res = await $ajax('auctionauction1createimg', {img: file.content })
            if(!res) return false
            this.fileList[0].url = res.imgurl
        },
        async chongzhi(){
            if(!this.money) return Toast('请输入充值金额')
            if(this.fileList.length == 0) return Toast('请上传凭证')
            let res = await $ajax('auctionauction1pay_cz', {img: this.fileList[0].url, money: this.money,rechargetype: this.type   })
            if(!res) return false
            console.log(res)
            Toast(res.msg)
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
.recharge {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        background: #fff;
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
    .erweima{
        justify-content: center;
        // img{
        //     width: 200px;
        //     height: 200px;
        // }
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