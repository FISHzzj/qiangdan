<template>
    <div class="orderList">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>我的买单</p>
        </div>
        <div style="height:12vw"></div>
        <div class="nav flex ali_center flex_around">
            <div class="item" :class="{on:status == 0}" @click="changenav(0)">全部</div>
            <div class="item" :class="{on:status == 1}" @click="changenav(1)">待付款</div>
            <div class="item" :class="{on:status == 2}" @click="changenav(2)">已付款</div>
            <div class="item" :class="{on:status == 3}" @click="changenav(3)">已完成/待转拍</div>
        </div>
        <div class="list">
            <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="'我是有底线的'"
                @load="getData"
            >
                <div class="item" v-for="(item, index) in list" :key="index">
                    <div class="top flex flex_between ali_center" @click="godetail(item.show_status, item.id, item.qishu)" >
                        <div class="left flex ali_center" @click.stop="$router.push('/ft_store/1')">
                            <img :src="dianpu.names_img" alt="" />
                            <span>{{dianpu.names}}</span>
                            <van-icon name="arrow" />
                        </div>
                        <div class="right" >{{item.statusstr}}</div>
                        <!-- <div class="right" v-if="item.statusstr == 2">已付款</div> -->
                        <!-- <div class="right" v-if="item.statusstr == 3">已完成</div> -->
                        
                    </div>
                    <div class="infos flex flex_between ali_center" @click="godetail(item.show_status, item.id, item.qishu)" >
                        <div class="left flex ali_center">
                            <img src="@/assets/images/dui.png" alt="" />
                            <div>
                                <p class="name">{{item.title}}</p>
                                <!-- <p class="storeId">商家:000112232411</p> -->
                            </div>
                        </div>
                        <div class="right">
                            <p class="num">X{{item.total}}</p>
                            <p class="price">￥{{item.moneys}}</p>
                        </div>
                    </div>
                    <div class="infos flex flex_between ali_center">
                        <div class="left flex ali_center">
                            <div>  
                                <div class="time">创建时间：{{item.createtime}}</div>
                                <div class="time">订单号：{{item.qishu}}</div>

                            </div>
                            
                        </div>
                        <div class="right">
                            <van-button v-if="item.show_status == 3" type="primary" size="mini" @click="sale(item.id)">转售</van-button>
                            <van-button v-if="item.show_status == 3" type="primary" size="mini" @click="zhuandingdan(item.id)">提货</van-button>
                            <van-button v-if="item.show_status == 3" type="primary" size="mini" @click="zhuanpaibi(item.id)">转竞拍币</van-button>
                            <van-button v-if="item.show_status == 3" type="primary" size="mini" @click="songdan(item.id)">送单</van-button>

                        </div>
                    </div>
                   
                </div>
            </van-list>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant'
export default {
    name: "ft_buyorder",
    data() {
        return {
            status: 0,
            // title: this.$route.query.title,
            // type: this.$route.params.type,
            detail: "",
            qishu: "", 
            gid: "",
            id: "",
            title:"",
            money: "",
            money1: "",
            wx_img: "",
            zfb_img: "",
            thumb: "",
            page: 1,
            list:[],
            limit: 10,
            finished: false,
            loading: false,
            dianpu: null
        }
    },
    created(){
        let {qishu, gid, id} = this.$route.query
        // this.getData()
    },
    methods: {
        async getData(){
            let res = await $ajax('auctionauction1mai_order_list', {show_status: this.status, page: this.page})
            if(!res) return false
            console.log(res)
            // this.list = res.list
            // console.log(this.list)
            this.dianpu = res.dianpu
             this.page++
            
            this.list.push(...res.list)
            // // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        changenav(status) {
            this.status = status;
            this.page = 1
            this.list = []
            this.getData()
        },
        godetail(status, id, qishu){
            if(status == 1){
                this.$router.push({name: 'ft_ordersubmit', query: {
                    qishu,
                    id

                }})
            }else if(status == 2 || status == 3){
                this.$router.push({name: 'ft_orderdetail', query: {
                    // qishu,
                    id,
                    title: '买单详情'

                }})
            }
        },
        async sale(id){
            let res = await $ajax('auctionauction1mai_order_status', {id: id})
            if(!res) return false
            Toast(res.msg)
            this.getData()


        },
        async zhuandingdan(id){
            let res = await $ajax('auctionauction1zhuan_order', {id: id})
            if(!res) return false
            Toast(res.msg)
            this.getData()
        },
        async zhuanpaibi(id){
            let res = await $ajax('auctionauction1zhuan_sxf', {id: id})
            if(!res) return false
            Toast(res.msg)
            this.getData()
        },
        songdan(id){
            this.$router.push({
                name: 'ft_songdan',
                query: {
                    id
                }
            })
            // let res = await $ajax('auctionauction1zhuan_auction', {id: id})
            // if(!res) return false
            // Toast(res.msg)
            // this.getData()
        },
    }
}
</script>
<style lang="less" scoped>
.orderList {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        background: #fff;
        z-index: 99;
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
        font-size: 3.47vw;
        color: #333;
        height: 12vw;
        .on {
            color: #fc4142;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -2vw;
                border-bottom: 3px solid #fc4142;
                width: 6vw;
                margin: 0 auto;
            }
        }
    }
    .list {
        padding: 0 3vw;
        .item {
            padding: 4vw 0;
            border-bottom: 1px solid #ccc;
            .top {
                .left {
                    height: 13vw;
                    img {
                        width: 5vw;
                        height: 5vw;
                        border-radius: 1vw;
                    }
                    span {
                        margin: 0 2vw;
                        font-size: 3.73vw;
                    }
                }
                .right {
                    color: #fc4142;
                    font-size: 3.47vw;
                }
            }
            .infos {
                height: 20vw;
                .left {
                    img {
                        width: 20vw;
                        height: 20vw;
                        margin-right: 2.4vw;
                    }
                    .name {
                        font-size: 3.73vw;
                        margin-bottom: 3vw;
                    }
                    .storeId {
                        color: #666;
                        font-size: 3.2vw;
                    }
                }
                .right {
                    text-align: right;
                    .num {
                        font-size: 3.2vw;
                        color: #333;
                    }
                    .price {
                        margin-top: 2vw;
                        font-size: 4.5vw;
                        color: #fc4142;
                    }
                }
            }
            .time {
                color: #999;
                font-size: 3.2vw;
                // line-height: 6vw;
                margin-top: 2.4vw;
            }
        }
    }
}
</style>