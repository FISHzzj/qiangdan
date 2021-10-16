<template>
    <div class="orderSubmit">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>确认订单</p>
        </div>
        <!-- <div class="addressInfo flex ali_center" @click="$router.push('/addressList/1')">
            <van-icon name="location-o" />
            <div class="right" v-if="!address.id">
                <p class="name_phone">姓名： 145  14500000000</p>
                <p class="adddetail">北京市</p>
            </div>
            <div class="right" v-else>添加收货地址</div>
        </div> -->
        <div class="goodsInfo">
            <div class="list">
                <div class="item flex ali_center">
                    <img :src="thumb" class="proimg" alt="">
                    <div class="right flex flex_between">
                        <p class="name">{{title}}</p>
                        <p class="price_num">￥{{money1}}</p>
                    </div>
                </div>
                <div class="flex flex_between item1 ali_center">
                    <div class="left_1">实付金额</div>
                    <div class="right_1">￥{{money}}</div>
                </div>
                <!-- <div class="flex flex_between item1 ali_center">
                    <div class="left_1">运费</div>
                    <div class="right_1 on">5</div>
                </div> -->
            </div>
        </div>
        <!-- 积分商品显示 -->
        <div class="payways">
            <div class="title">支付方式</div>
            <div class="item flex ali_center flex_between" @click="change('1')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>微信支付</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == '1'" name="checked" />
                    <div v-else></div>
                </div>
            </div>
            <div class="item flex ali_center flex_between" @click="change('2')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>支付宝</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == '2'" name="checked" />
                    <div v-else></div>
                </div>
            </div>
        </div>
        <div class="erweima flex ali_center ">
            <van-image
                width="200"
                height="200"
                lazy-load
                :src="img"
            />
        </div>
        <van-divider />
        <!-- 上传凭证 -->
        <div class="uploader">
            <div class="title">上传凭证</div>
            <div class="vantuploader flex ali_center ">
                <van-uploader  v-model="fileList" :after-read="afterRead" :max-count="1" preview-size='200px' />
            </div>
            
        </div>
      
        <!-- 拍卖商品显示 -->
        <div v-if="show">
            <!-- 密码输入框 -->
            <van-password-input
                :value="value"
                :focused="showKeyboard"
                @focus="showKeyboard = true"
            />
            <!-- 数字键盘 -->
            <van-number-keyboard
                v-model="value"
                :show="showKeyboard"
                @blur="showKeyboard = false"
            />
        </div>
        <div style="height:12vw;"></div>
        <div class="footer" @click="pay">提交结算</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: "orderSubmit",
    data() {
        return {
            value: '',
            show: false,
            showKeyboard: true,
            payType: '1',
            address: {},
            img:'https://img.yzcdn.cn/vant/cat.jpeg',
            fileList: [{url: ""}],
            qishu: "", 
            gid: "",
            id: "",
            title:"",
            money: "",
            money1: "",
            wx_img: "",
            zfb_img: "",
            thumb: "",
        };
    },
    mounted() {
        let {qishu, gid, id} = this.$route.query
        this.qishu = qishu
        this.gid = gid
        this.id = id
        this.getData()
    },
    methods:{
        async getData(){
            let res = await $ajax('auctionauction1get_auction_order', {id: this.id, qishu: this.qishu})
            if(!res) return false
            
            Object.keys(res).forEach((key) => {
                this[key] = res[key]
            })
            this.img = this.wx_img
        },
        change(type) {
            this.payType = type;
            if(type == 'zhifubao'){
                this.img = this.zfb_img
            }else {
                this.img = this.wx_img
            }
            
        },
        async afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
             let res = await $ajax('auctionauction1createimg', {img: file.content })
            if(!res) return false
            this.fileList[0].url = res.imgurl
        },
        async pay(){
            if(!this.fileList[0].url) return Toast('请上传凭证')
             let res = await $ajax('auctionauction1pay_order', {id: this.id, qishu: this.qishu, img: this.fileList[0].url, pay_type: this.payType})
            if(!res) return false
            Toast(res.msg)
            this.$router.push({
                name: 'ft_buyorder'
            })
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.orderSubmit {
    background: #f7f7f7 !important;
}
.header {
    width: 100%;
    height: 12vw;
    position: relative;
    background-color: #fff;
    .van-icon {
        position: absolute;
        top: 0;
        left: 3vw;
        bottom: 0;
        height: 4vw;
        margin: auto 0;
    }
    p {
        width: 100%;
        line-height: 12vw;
        font-size: 4vw;
        text-align: center;
    }
}
.addressInfo {
    width: 100%;
    height: 18vw;
    padding: 0 4vw;
    margin: 2vw 0;
    background: #fff;
    .right {
        margin-left: 3vw;
        font-size: 3.47vw;
    }
}
.goodsInfo {
    padding: 0 4vw;
    background: #fff;
    .list {
        padding: 2vw 0;
        border-top: 1px solid #f7f7f7;
        border-bottom: 1px solid #f7f7f7;
        .item {
            width: 100%;
            height: 23vw;
            border-radius: 2vw;
            img {
                width: 20vw;
                height: 20vw;
                border-radius: 1vw;
                margin: 0 2vw;
            }
            .right {
                width: 70vw;
                height: 100%;
                padding: 2vw 0;
                flex-direction: column;
                .name {
                    font-size: 3.73vw;
                }
                .price_num {
                    text-align: right;
                    color: #666;
                    font-size: 3.47vw;
                }
            }
        }
        .item1 {
            .left_1 {
                line-height: 10vw;
                font-size: 3.73vw;
            }
            .right_1 {
                color: #fc4142;
                &.on {
                    color: #666;
                    font-size: 3.2vw;
                }
            }
        }
    }
    .bottom {
        font-size: 3.47vw;
        color: #666;
        text-align: right;
        line-height: 10vw;
        background: #fff;
        span {
            color: #fc4142;
        }
    }
}
.footer {
    height: 12vw;
    color: #fff;
    position: fixed;
    bottom: 2vw;
    left: 4vw;
    width: 92vw;
    text-align: center;
    border-radius: 6vw;
    line-height: 12vw;
    background: rgb(11,86,94);
}
.payways {
    background: #fff;
    .title {
        padding: 0 4vw;
        line-height: 8vw;
        border-bottom: 1px solid #f7f7f7;
        font-size: 3.2vw;
        color: #666;
    }
    .item {
        padding: 0 4vw;
        height: 10vw;
        .left {
            span {
                margin-left: 2.4vw;
                font-size: 3.47vw;
            }
        }
        .right {
            div {
                width: 4vw;
                height: 4vw;
                border-radius: 50%;
                border: 1px solid #f7f7f7;
            }
        }
    }
}
.erweima{
    flex-direction: row;
    justify-content: center;
    margin-top: 5vw;
}
.uploader{
    background: #fff;
    margin: 5vw 0;
    .title {
        padding: 0 4vw;
        line-height: 8vw;
        border-bottom: 1px solid #f7f7f7;
        font-size: 3.2vw;
        color: #666;
    }
    .vantuploader{
        margin: 5vw 0;
         flex-direction: row;
        justify-content: center;
    }
}
</style>