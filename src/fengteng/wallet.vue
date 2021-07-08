<template>
    <div class="content">
        <div class="header">
            <van-icon color="#fff" @click="$router.go(-1)" name="arrow-left" />
            <p></p>
        </div>
        <div style="height:12vw"></div>
        <div class="top">
            <div class="type">钱包余额</div>
            <div class="num">{{credit2}}</div>
        </div>
        <select class="select" name="" id="" v-model="date" @change="selecthandle(date)">
            <option value="2">本月</option>
            <option value="1">本周</option>
            <option value="3">本年</option>
        </select>
        <div class="list">
            <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="'我是有底线的'"
                @load="getData"
            >
                <div class="item flex flex_between ali_center" :class="{first: index == 0}" v-for="(item, index) in list" :key="index">
                    <div class="left">
                        <div class="time">{{item.time}}</div>
                        <div class="title">{{item.content}}</div>
                    </div>
                    <div class="right">{{item.money}}</div>
                </div>
            </van-list>
        </div>
        <div style="height:12vw"></div>
        <div class="footer flex">
            <div class="item on" @click="$router.push('/ft_recharge')">充值</div>
            <div class="item on1" @click="$router.push('/ft_cash')">提现</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ft_content",
    data() {
        return {
            date: "1",
            // status: '1'
            // list: [],
            page: 1,
            list:[],
            limit: 10,
            finished: false,
            loading: false,
            credit2:"",
        }
    },
    mounted(){
        // this.getData()
        this.getyue()
    },
    methods:{
        selecthandle(e){
            console.log(e)
            this.date = e
            this.list = []
            this.page = 1
            this.getData()

        },  
        async getData(){
            let res = await $ajax('auctionauction1money_log', {status: this.date, page: this.page})
            if(!res) return false
            console.log(res)
            // this.list = res.list
            this.page++
            
            this.list.push(...res.list)
            // // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
            

        },
        async getyue(){
            let res = await $ajax('auctionauction1get_member', {})
            if(!res) return false
            let member = res.member
            Object.keys(member).forEach((key)=>{
                this[key] = member[key]
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
        background: #fc4142;
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
    .top {
        height: 25vw;
        padding: 0 0 0 8vw;
        background: #fc4142;
        .type {
            padding: 2vw 0;
            font-size: 3.2vw;
            color: #f5f5f5;
        }
        .num {
            color: #fff;
            font-weight: bold;
            font-size: 8vw;
        }
    }
    .select {
        width: 100%;
        height: 10vw;
        margin: 3vw 0;
    }
    .list {
        padding: 0 4vw;
        .item {
            height: 15vw;
            border-bottom: 1px solid #ccc;
            &.first {
                border-top: 1px solid #ccc;
            }
            .left {
                .time {
                    color: #666;
                    font-size: 3.2vw;
                }
                .title {
                    font-size: 3.73vw;
                }
            }
            .right {
                font-size: 3.47vw;
            }
        }
    }
    .footer {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        .item {
            width: 50%;
            height: 12vw;
            line-height: 12vw;
            text-align: center;
        }
        .on {
            color: #fc4142;
            background: #fff;
        }
        .on1 {
            color: #fff;
            background: #fc4142;
        }
    }
}
</style>