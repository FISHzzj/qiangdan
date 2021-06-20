<template>
    <div class="orderSubmit">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>订单详情</p>
        </div>
        <div class="addressInfo flex ali_center" @click="$router.push('/addressList/1')">
            <van-icon name="location-o" />
            <div class="right">
                <p class="name_phone">姓名： 145  14500000000</p>
                <p class="adddetail">北京市</p>
            </div>
        </div>
        <div class="goodsInfo">
            <div class="list">
                <div class="item flex ali_center">
                    <img src="@/assets/images/vip2.png" class="proimg" alt="">
                    <div class="right flex flex_between">
                        <p class="name_status flex flex_between">
                          <span class="name">这里是名字这里是名字这里是名字</span>
                          <span class="status">待付款</span>
                        </p>
                        <p class="price_num">￥300.00</p>
                    </div>
                </div>
                <div class="flex flex_between item1 ali_center">
                    <div class="left_1">实付金额</div>
                    <div class="right_1">￥200</div>
                </div>
                <div class="flex flex_between item1 ali_center">
                    <div class="left_1">运费</div>
                    <div class="right_1 on">5</div>
                </div>
            </div>
        </div>
        <div class="payways">
            <div class="title">支付方式</div>
            <div class="item flex ali_center flex_between" @click="change('weixin')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>拍卖币</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == 'weixin'" name="checked" />
                    <div v-else></div>
                </div>
            </div>
            <div class="item flex ali_center flex_between" @click="change('zhifubao')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>积分</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == 'zhifubao'" name="checked" />
                    <div v-else></div>
                </div>
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
        <div class="footer" @click="jiesuan">提交结算</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: "ft_jf_orderdetail",
    data() {
        return {
            value: '',
            show: false,
            showKeyboard: true,
            payType: 'PPVB',
            address: {},
            id: "",
            gid: "",
            marketprice: "",
            thumb: "",
            thumb_url: "",
            total: "",
            title: "",
            content: "",
            aid: "",
            isdefault: "",
            province: "",
            city: "",
            area: "",
            address: "",
            mobile: "",
            realname: "",


        };
    },
    mounted() {
        this.id = this.$route.query.id
        this.getData()
    },
    methods:{
        async getData(){
            let res = await $ajax('auctionauction1cs_pay_list', { goods_id: this.id})
            if(!res) return false
            console.log(res)
            let newObje = res.newObje

            Object.keys(newObje).forEach((key)=>{
              this[key] = newObje[key]
            })

        },
        change(type) {
            this.payType = type;
        },
        jiesuan(){
            // this.$router.push('')
            Toast('支付完成')
        },
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
                .name_status {
                    font-size: 3.73vw;
                    .name {
                        max-width: 50vw;
                    }
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
</style>