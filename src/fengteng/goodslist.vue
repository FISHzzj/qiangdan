<template>
    <div class="goodslist">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>商品列表</p>
        </div>
        <div style="height:12vw"></div>
        
         <van-list
            v-model="loading"
            :finished="finished"
            :finished-text="'我是有底线的'"
            @load="getData"
            >
            <div class="list flex flex_between">
                <router-link  :to="{name: 'ft_goodsdetail', query:{id:`${item.id}`}}"  tag="div"  v-for="(item, index ) in goods" :key="index" class="item  ">
                    <img :src="item.thumb" alt="">
                    <div class="name">{{item.title}}</div>
                    <div class="bottom flex flex_between">
                        <span class="price">￥{{item.marketprice}}</span>
                        <span class="status">{{item.status_s == 1 ? '售卖中' : '售窑'}}</span>
                    </div>
                </router-link>
            </div>
        </van-list>
    </div>
</template>
<script>
export default {
    name: "ft_goodslist",
    data() {
        return {
            // title: this.$route.query.title,
            // type: this.$route.params.type,
            detail: "",
            id: "",
            goods:[],
            page: 1,
            limit: 10,
            finished: false,
            loading: false,
        }
    },
    created(){
        this.id = this.$route.query.id
        // this.getData()
    },
    methods:{
        async getData(){
            let res = await $ajax('auctionauction1get_goods', {id: this.id, page: this.page})
            if(!res) return false
            this.page++
            
            this.goods.push(...res.goods)
            // // // 加载状态结束
            this.loading = false
            if (res.goods.length === 0) {
                this.finished = true //加载完成
            } 
            // this.lunbo = lunbo

        },
    }
}
</script>
<style lang="less" scoped>
.goodslist {
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
    .list {
        flex-wrap: wrap;
        padding: 0 4vw;
        .item {
            width: 45vw;
            margin-bottom: 2vw;
            img {
                width: 45vw;
                height: 25vw;
                border-radius: 2vw 2vw 0 0;
            }
            .name {
                font-size: 3.2vw;
                color: #666;
                line-height: 4.5vw;
                padding: 0 2vw;
            }
            .bottom {
                padding: 0 2vw 4vw;
                font-size: 3.2vw;
                .price {
                    color: #fc4142;
                }
                .status {
                    border-radius: 1vw;
                    padding: 0.5vw 1.5vw;
                    color: #fff;
                    background: #fc4142;
                }
            }
        }
    }
}
</style>