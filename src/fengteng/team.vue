<template>
    <div class="team">
        <div class="header">团队</div>
        <div style="height:12vw"></div>
        <div class="top flex flex_between ali_center">
            <div class="item">
                <div class="type">代理人数</div>
                <div class="num">{{dl || 0}}</div>
            </div>
            <div class="item">
                <div class="type">今日订单数</div>
                <div class="num">{{dd || 0}}</div>
            </div>
            <div class="item">
                <div class="type">今日佣金</div>
                <div class="num">{{yj || 0}}</div>
            </div>
        </div>
        <div class="list">
            <!-- <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="'我是有底线的'"
                @load="getData"
            > -->
                <div class="item flex ali_center" v-for="(item, index) in list" :key="index"  @click="nextgo(item.id)">
                    <img :src="item.avatar" alt="" />
                    <div class="info flex">
                        <p class="name">用户名：<span> {{item.nickname}}</span></p>
                        <p class="type">id：<span>{{item.id}}</span>代理：<span>{{item.dl}}</span>佣金：<span>{{item.yj || 0}}</span></p>
                    </div>
                </div>
            <!-- </van-list> -->
        </div>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomNav from "./common/footernav";
export default {
    name: "team",
    components: {
        bottomNav
    },
    data(){
        return{
            dd: '',
            dl: '',
            yj: '',
            page: 1,
            list:[],
            limit: 10,
            finished: false,
            loading: false,
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        nextgo(id){
            this.$router.push({
                name: 'teamxia',
                query:{
                    id: id
                }
            })
        },
        async getData(){
            let res = await $ajax('auctionauction1get_team', {})
            if(!res) return false
            console.log(res)
            let {dd, dl, yj} = res.ding
            this.dd = dd || 0
            this.dl = dl || 0
            this.yj = yj || 0
            this.list = res.list 
            // this.page++
            
            // this.list.push(...res.list)
            // // // // 加载状态结束
            // this.loading = false
            // if (res.list.length === 0) {
            //     this.finished = true //加载完成
            // } 
        },
        
    }
}
</script>
<style lang="less" scoped>
.team {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        line-height: 12vw;
        text-align: center;
        background: #fff;
    }
    .top {
        padding: 3vw 0;
        border-bottom: 1px solid #ccc;
        text-align: center;
        .item {
            width: 33%;
            font-size: 3.4vw;
            .num {
                font-size: 4.2vw;
                margin-top: 2vw;
                color: rgb(155,99,99);
            }
        }
    }
    .list {
        padding: 0 4vw;
        .item {
            height: 15vw;
            img {
                width: 10vw;
                height: 10vw;
                border-radius: 50%;
                margin-right: 2.4vw;
            }
            .info {
                width: 80vw;
                height: 15vw;
                flex-direction: column;
                justify-content: center;
                border-bottom: 1px solid #ccc;
                .name {
                    font-size: 3.73vw;
                    font-weight: bold;
                    span {
                        font-weight: 500;
                        color: #666;
                    }
                }
                .type {
                    font-size: 3.2vw;
                    padding-top: 1.5vw;
                    span {
                        color: rgb(155,99,99);
                        margin: 0 2vw 0 1vw;
                    }
                }
            }
        }
    }
}
</style>