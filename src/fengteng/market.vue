<template>
    <div class="content">
        <div class="header">
            <p>商城</p>
        </div>
        <img class="top_bg" src="@/assets/images/top_bg.png" alt="" />
        <div class="nav">
            <div class="title">商城订单</div>
            <div class="list flex flex_around" @click="gojifenlist">
                <div class="item flex ali_center">
                    <img src="@/assets/images/order_1.png" alt="" />
                    <span>全部订单</span>
                </div>
                <div class="item flex ali_center">
                    <img src="@/assets/images/order_2.png" alt="" />
                    <span>待发货</span>
                </div>
                <div class="item flex ali_center">
                    <img src="@/assets/images/order_3.png" alt="" />
                    <span>待收货</span>
                </div>
                <div class="item flex ali_center">
                    <img src="@/assets/images/order_4.png" alt="" />
                    <span>已收货</span>
                </div>
            </div>
        </div>
        <div class="goods">
            <div class="title">
                <div class="flex ali_center">
                    <span>热门商品</span>
                    <img src="@/assets/images/fire.png" alt="">
                </div>
                <p>Selling good</p>
            </div>
            <div class="list flex flex_between">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    :finished-text="'我是有底线的'"
                    @load="getData"
                >
                    <div class="item" v-for="(item, index) in list" :key="index" @click="gonext(item.id)">
                        <img class="" :src="item.thumb" alt="" />
                        <div class="name">{{item.title}}</div>
                        <div class="price flex flex_between ali_center">
                            <p>积分：<span>{{item.marketprice}}</span></p>
                            <!-- <span>详情</span> -->
                        </div>
                    </div>
                </van-list>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ft_content",
    data() {
        return {
            page: 1,
            list:[],
            limit: 10,
            finished: false,
            loading: false,
        }
    },
    mounted(){

    },
    methods:{
        async getData(){
            let res = await $ajax('auctionauction1cs_goods', {page: this.page})
            if(!res) return false
            console.log(res)
            // this.list = res.list
            // console.log(this.list)
             this.page++
            
            this.list.push(...res.list)
            // // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        gonext(id){
            this.$router.push({
                name: 'ft_jfgoodsDetail',
                query: {
                    id
                }
            })
        },
        gojifenlist(){
            this.$router.push({
                name: 'ft_orderList'
            })
        },
    }
}
</script>
<style lang="less" scoped>
.content {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        p {
            text-align: center;
            line-height: 12vw;
            color: #fff;
        }
    }
    .top_bg {
        width: 100%;
    }
    .nav {
        position: relative;
        top: -4vw;
        border-radius: 4vw;
        background: #fff;
        .title {
            padding: 0 4VW;
            line-height: 10VW;
            font-size: 4vw;
        }
        .list {
            .item {
                padding: 2vw 0;
                flex-direction: column;
                img{
                    width: 10VW;
                    height: 10VW;
                }
                span {
                    font-size: 3.47vw;
                }
            }
        }
    }
    .goods {
        padding: 0 4vw;
        .title {
            >div {
                span {
                    font-size: 4.2vw;
                    margin-right: 2vw;
                }
                img {
                    width: 5vw;
                    height: 5vw;
                }
            }
            p {
                color: #666;
                font-size: 3.2vw;
            }
        }
        .list {
            flex-wrap: wrap;
            .item {
                width: 44vw;
                margin: 2vw 0;
                img {
                    width: 30vw;
                    height: 30vw;
                    // margin: 0 7vw;
                }
                .price {
                    height: 8vw;
                    p {
                        color: #333;
                        font-size: 3.2vw;
                        span {
                            font-size: 3.73vw;
                            color: #fc4142;
                        }
                    }
                    > span {
                        font-size: 3.47vw;
                        color: #666;
                    }
                }
            }
        }
    }
}
</style>