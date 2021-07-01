<template>
    <div class="orderSubmit">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>订单详情</p>
        </div>
        <div class="addressInfo flex ali_center" @click="goaddress">
            <van-icon name="location-o" />
            <div class="right" v-if="aid">
                <p class="name_phone">姓名： {{realname}}  {{mobile}}</p>
                <p class="adddetail">{{address}}</p>
            </div>
            <div  v-else class="right">请先选择地址</div>
        </div>
        <div class="goodsInfo">
            <div class="list">
                <div class="item flex ali_center">
                    <img src="@/assets/images/vip2.png" class="proimg" alt="">
                    <div class="right flex flex_between">
                        <p class="name_status flex flex_between">
                          <span class="name">{{title}}</span>
                          <span class="status">待付款</span>
                        </p>
                        <p class="price_num">{{marketprice}}</p>
                    </div>
                </div>
                <div class="flex flex_between item1 ali_center">
                    <div class="left_1">实付金额</div>
                    <div class="right_1">{{marketprice}}</div>
                </div>
                <!-- <div class="flex flex_between item1 ali_center">
                    <div class="left_1">运费</div>
                    <div class="right_1 on">5</div>
                </div> -->
            </div>
        </div>
        <div class="payways">
            <div class="title">支付方式</div>
            <div class="item flex ali_center flex_between" @click="change('2')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>竞拍币</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == '2'" name="checked" />
                    <div v-else></div>
                </div>
            </div>
            <div class="item flex ali_center flex_between" @click="change('1')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>积分</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == '1'" name="checked" />
                    <div v-else></div>
                </div>
            </div>
            <div class="item flex ali_center flex_between" @click="change('3')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>余额</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == '3'" name="checked" />
                    <div v-else></div>
                </div>
            </div>
            <div class="item flex ali_center flex_between" @click="change('4')">
                <div class="left flex ali_center">
                    <van-icon name="gold-coin-o" />
                    <span>混合支付</span>
                </div>
                <div class="right">
                    <van-icon color="#fc4142" v-if="payType == '4'" name="checked" />
                    <div v-else></div>
                </div>
            </div>
            <van-form v-if="payType == '4'">
                <van-field
                    v-model="jifen"
                    name="积分"
                    label="积分"
                    placeholder="积分"
                    :rules="[{ required: true, message: '请填写积分' }]"
                />
                <van-field
                    v-model="paibi"
                    type="paibi"
                    name="竞拍币"
                    label="竞拍币"
                    placeholder="竞拍币"
                    :rules="[{ required: true, message: '请填写竞拍币' }]"
                />  
            </van-form>
            
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
import Bus from '@/assets/bus.js';   //bus.js
export default {
    name: "ft_jf_orderdetail",
    data() {
        return {
            value: '',
            show: false,
            showKeyboard: true,
            payType: '1',
            // address: {},
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
            areaCode: "",
            jifen: "",
            paibi: "",



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
            let newObj = res.newObj

            Object.keys(newObj).forEach((key)=>{
              this[key] = newObj[key]
            })

            if(this.$route.query.addressInfo){
                let addressInfo = this.$route.query.addressInfo
                Object.keys(addressInfo).forEach((key)=>{
                this[key] = addressInfo[key]
                })
            }

        },
        change(type) {
            // console.log(type)
            this.payType = type;
            // console.log(this.payType)
        },
        async jiesuan(){
            if(!this.aid) return Toast('请选择地址')
            if(!this.payType) return Toast('请支付方式')
            if(this.payType == 4){
                if(this.jifen == "") return Toast('请输入积分')
                if(this.paibi == "") return Toast('请竞拍币')
            }
            let res = await $ajax('auctionauction1cs_buy', { goods_id: this.id, address_id: this.aid, paytype: this.payType, credit1: this.jifen, credit50: this.paibi})
            if(!res) return false
            console.log(res)
            
            Toast('支付完成')
            this.$router.push({
                name: 'ft_market'
            })

        },
        goaddress(){
            localStorage.setItem('gid', this.id)
            this.$router.push({name: 'ft_addressList', query:{
                id: this.id
            }})
        },
        getPath(){
            console.log(this.$route.path);
        }
    },
  
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