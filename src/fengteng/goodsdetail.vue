<template>
    <div class="goodsdetail">
        <div class="header">
            <van-icon @click="$router.go(-1)" color="#fff" name="arrow-left" />
        </div>
        <div class="top">
            <img :src="thumbimg" alt="" />
            <div class="bottom flex flex_between">
                <div class="left flex">
                    <p>当前价</p>
                    <div>￥{{marketprice}}</div>
                </div>
                <div class="right flex">
                    <p v-if="1 == 1">本轮拍卖已结束</p>
                    <p v-if="1 == 2">本轮拍卖正在进行中</p>
                    <CountDown navclass="on" :datatime="datatime" :currenttime="currenttime"></CountDown>
                </div>
            </div>
        </div>
        <div class="store_name">{{title}}</div>
        <!-- <div class="userInfo flex flex_between ali_center">
            <div class="infos flex ali_center">
                <img :src="thumbimg" alt="" />
                <div>
                    <div class="nickname">昵称</div>
                    <div class="time">2020-12-12 00:00</div>
                </div>
            </div>
            <div class="price">￥300.00</div>
            <div class="status">领先</div>
        </div> -->
        <!-- <div class="storeInfo flex ali_center flex_between">
            <div class="left flex ali_center">
                <img src="@/assets/images/dui.png" alt="" />
                <div class="name">昵称</div>
            </div>
            <div class="right" @click="$router.push('/ft_store/1')">进入店铺</div>
        </div> -->
        <div class="content">
            <div class="title">拍品详情</div>
            <div class="detail" v-html="content"></div>
        </div>
        <div class="submit " :class="{on:sureupload == true}" @click="submitorder">立即下单</div>
        <!-- <van-dialog id="van-dialog" /> -->
    </div>
</template>
<script>
import { Toast } from 'vant';
import CountDown from "./common/CountDown.vue";

export default {
    name: "ft_goodsdetail",
    components: {
        CountDown
    },
    data() {
        return {
            currenttime: 0,
            datatime: 0,
            // id: this.$route.params.id,
            detail: "",
            sureupload: false,
            goodid: "",
            auction: [],
            id: "",
            gid: "",
            marketprice: "",
            stime:"",
            ntime: "",
            etime: "",
            thumb: "",
            content: "",
            types: "",
            auction_yy: "",
            auction_sxf: "",
            auction_bfb: "",
            qishu: "",
            thumbimg: '',
            title: "",
        }
    },
    created(){
        this.goodid = this.$route.query.id
        console.log(this.gid)

        this.getgooddetail()
        Dialog.confirm({
            message: '请先预约',
        }).then(() => {
            // on close
            this.sureupload = true  
            this.yuyue( )
        }) .catch(() => {
            // on cancel
            this.sureupload = true
        });
    },
    mounted() {
        console.log(1111);
        this.currenttime = Date.parse(new Date())/1000;
        console.log( this.currenttime)
    },
    methods:{
        async yuyue(){
            let res = await $ajax('auctionauction1auction_yy', {gid: this.goodid, qishu: this.qishu})
            if(!res) return false
            Toast(res.msg)
        },
        async getgooddetail(){
            let res = await $ajax('auctionauction1goodsdetail', {id:this.goodid})
            if(!res) return false
            // this.auction = res.auction
            console.log(res)
            let goods = res.goods

            Object.keys(goods).forEach((key) =>{
                
                this[key] = goods[key]

            })
            this.datatime = Number(this.etime)
            console.log(this.datatime)
            this.thumbimg = this.thumb[0]
            console.log(this.thumbimg)
        },
        async submitorder(){
            let res = await $ajax('auctionauction1get_auction', {gid: this.goodid, qishu: this.qishu})
            if(!res) return false
            if(!this.qishu) return false
            if(!this.gid) return false
            if(!this.id) return false
            this.$router.push({
                path: '/ft_order/submit',
                query: {
                    qishu : this.qishu,
                    gid: this.gid,
                    id: this.id

                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.goodsdetail {
    background: #f5f5f5;
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        z-index: 1000;
        .van-icon {
            position: fixed;
            left: 4vw;
            top: 4vw;
        }
    }
    .top {
        position: relative;
        width: 100%;
        height: 68vw;
        img {
            width: 100%;
            height: 100%;
        }
        .bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 12.5vw;
            color: #fff;
            .left {
                padding-left: 4vw;
                background: rgb(214,52,52);
                width: 60%;
                border-radius: 2vw 0 0 0;
                flex-direction: column;
                justify-content: center;
                p {
                    font-size: 3vw;
                }
            }
            .right {
                flex-direction: column;
                justify-content: center;
                font-size: 3.2vw;
                width: 40%;
                background: #fff;
                text-align: center;
                border-radius: 0 2vw 0 0;
                color: #333;
                line-height: 5.5vw;
            }
        }
    }
    .store_name {
        line-height: 8vw;
        padding: 0 4vw;
        background: #fff;
        font-size: 3.73vw;
    }
    .userInfo {
        height: 15vw;
        background: #fff;
        padding: 0 4vw;
        .infos {
            img {
                width: 10vw;
                height: 10vw;
                border-radius: 50%;
                margin-right: 2.4vw;
            }
            .nickname {
                font-size: 3.73vw;
            }
            .time {
                font-size: 3vw;
                color: #666;
                margin-top: 1.5vw;
            }
        }
        .price {
            color: #fc4142;
            font-size: 4vw;
        }
        .status {
            color: #fc4142;
            border: 1px solid #fc4142;
            line-height: 6vw;
            padding: 0 2vw;
            border-radius: 3vw;
            font-size: 3.73vw;
        }
    }
    .storeInfo {
        padding: 0 4vw;
        height: 12vw;
        margin: 2.4vw 0;
        background: #fff;
        img {
            width: 8.5vw;
            height: 8.5vw;
            border-radius: 50%;
            margin-right: 2.4vw;
        }
        .name {
            font-size: 3.73vw;
        }
        .right {
            color: #666;
            font-size: 3.2vw;
        }
    }
    .content {
        padding: 0 4vw 14vw;
        background: #fff;
        .title {
            line-height: 8vw;
            font-size: 3.47vw;
        }
    }
    .submit {
        width: 92vw;
        height: 10vw;
        line-height: 10vw;
        background: #fc4142;
        color: #fff;
        text-align: center;
        border-radius: 2vw;
        position: fixed;
        left: 4vw;
        bottom: 2vw;
        background: #ccc;
        &.on {
            background: #d63434;
        }
    }
}
</style>