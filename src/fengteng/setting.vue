<template>
    <div class="setting">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>收款设置</p>
        </div>
        <div style="height:12vw"></div>
        <div class="nav flex al;i_center flex_between">
            <div class="item flex ali_center" :class="{on:type=='1'}" @click="changenav('1')">
                <img src="@/assets/images/weixin.png" alt="" />
                <span>微信</span>
            </div>
            <div class="item flex ali_center" :class="{on:type=='2'}" @click="changenav('2')">
                <img src="@/assets/images/card.png" alt="" />
                <span>银联</span>
            </div>
            <div class="item flex ali_center" :class="{on:type=='3'}" @click="changenav('3')">
                <img src="@/assets/images/alipay.png" alt="" />
                <span>支付宝</span>
            </div>
        </div>
        <div class="list">
            <div v-if="type != '2'" class="item uploader flex ali_center">
                <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead" />
                <p class="tips" v-if="type == '1'">微信收款二维码</p>
                <p class="tips" v-else>支付宝收款二维码</p>
            </div>
            <div class="item flex ali_center" v-show="type == '1'">
                <p class="label">微信号</p>
                <input type="text" v-model="wnum" class="phone" placeholder="请输入微信号或微信绑定手机号">
            </div>
            <div class="item flex ali_center" v-show="type == '2'">
                <p class="label">持卡人姓名</p>
                <input type="text" v-model="bname"  placeholder="请输入真实姓名">
            </div>
            <div class="item flex ali_center" v-show="type == '2'">
                <p class="label">开户银行</p>
                <input type="text" v-model="bankname" placeholder="请输入开户银行">
            </div>
            <div class="item flex ali_center" v-show="type == '2'">
                <p class="label">开户支行</p>
                <input type="text" v-model="banknames" placeholder="请输入开户支行">
            </div>
            <div class="item flex ali_center" v-show="type == '2'">
                <p class="label">银行卡号</p>
                <input type="text" v-model="bnum" placeholder="请输入银行卡号">
            </div>
            <div class="item flex ali_center" v-show="type == '3'">
                <p class="label">支付宝号</p>
                <input type="text" v-model="alipaynum" placeholder="请输入支付宝号">
            </div>
            <div class="item flex ali_center">
                <p class="label">手机号</p>
                <input type="text" v-model="mobile" placeholder="请输入手机号">
            </div>
            <div class="item code flex ali_center">
                <p class="label">验证码</p>
                <div class="flex flex_between ali_center">
                    <input type="text" v-model="code" placeholder="请输入短信验证码" />
                    <input @click="sendCode" :class="{on:!disabled}" type="button" v-model="text" :disabled="disabled" />
                </div>
            </div>
        </div>
        <div class="submit" @click="save">确认并保存</div>
        <div class="tip">风险提示:转售属于C2C交易，资金不经过平台，平台不会自动扣款，需要您手动转账给对方，对方才能收到款限。</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: "ft_setting",
    data() {
        return {
            second: 60,
            disabled: false,
            type: "1",
            text: "获取验证码",
            code: "",
            timer: null,
            fileList: [{url: ''}],
            wnum: "",
            bname: "",
            bankname: "",
            banknames: "",
            bnum: "",
            alipaynum: "",
            mobile: "",
            id: "",



        }
    },
    mounted(){
        if(this.type == 1){
            this.getData()
        }
       
    },
    methods: {
        async getData(){
            let res = await $ajax('auctionauction1sk_list', {})
            if(!res) return false
            console.log(res)
            let {wx, zfb, yhk} = res
            // console.log(wx.conten)
            // console.log(wx.conten.cont1)
            if(wx.conten && this.type == 1){
                console.log(3333333)
                this.fileList[0].url = wx.conten.cont1
                console.log(this.fileList)
                this.wnum = wx.conten.cont2
                this.mobile = wx.conten.cont3
                // console.log(this.mobile)
                this.id = wx.id
                // this.type = wx.type
            }else if(zfb.conten && this.type == 3){
                console.log(2222)
                this.fileList[0].url = zfb.conten.cont1
                console.log(this.fileList)
                this.alipaynum = zfb.conten.cont2
                this.mobile = zfb.conten.cont3
                this.id = zfb.id
                // this.type = zfb.type
            }else if(yhk.conten && this.type == 2){
                // this.fileList[0].url = yhk.conten.cont1
                this.bname = yhk.conten.cont2
                this.bankname = yhk.conten.cont3
                this.banknames = yhk.conten.cont4
                this.bnum = yhk.conten.cont5
                this.mobile = yhk.conten.cont6
                this.id = yhk.id
                // this.type = yhk.type
            }
        },
        changenav(type) {
             this.fileList[0].url = ""
            this.type = type;
            console.log(this.type)
            if(type == 1){
                this.getData()
            }else if(type == 2){
                this.getData()
            }else if(type == 3){
                this.getData()
            }
            
        },
        async afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
             let res = await $ajax('auctionauction1createimg', {img: file.content })
            if(!res) return false
            this.fileList[0].url = res.imgurl
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
        },
        async save(){
            if(!this.code) return Toast('请输入短信验证码')
            let obj = {
                id: this.id,
                type: this.type,
                verifycode: this.code,
            }
            if(this.type == 1){
                if(!this.fileList[0].url) return Toast('请上传二维码')
                if(!this.wnum) return Toast('请输入微信号')
                if(!this.mobile) return Toast('请输入手机号')

                obj['cont1'] = this.fileList[0].url
                obj['cont2'] = this.wnum
                obj['cont3'] = this.mobile

            }else if(this.type == 2){
                if(!this.bname) return Toast('请输入持卡人姓名')
                if(!this.bankname) return Toast('请输入开户银行')
                if(!this.banknames) return Toast('请输入开户支行')
                if(!this.bnum) return Toast('请输入银行卡号')
                if(!this.mobile) return Toast('请输入手机号')
                
                obj['cont1'] = ''
                obj['cont2'] = this.bname
                obj['cont3'] = this.bankname
                obj['cont4'] = this.banknames
                obj['cont5'] = this.bnum
                obj['cont6'] = this.mobile


            }else if(this.type == 3){
                if(!this.fileList[0].url) return Toast('请上传二维码')
                if(!this.alipaynum) return Toast('请输入支付宝号')
                if(!this.mobile) return Toast('请输入手机号')
                obj['cont1'] = this.fileList[0].url
                obj['cont2'] = this.alipaynum
                obj['cont3'] = this.mobile

                
            }
            let res = await $ajax('auctionauction1sk_set', obj)
            if(!res) return false
            Toast(res.msg)
        },
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