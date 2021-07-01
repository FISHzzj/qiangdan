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
                    <p v-if="status_s == 2">本轮拍卖已结束</p>
                    <p v-else>本轮拍卖正在进行中</p>
                    <!-- <CountDown navclass="on" :datatime="datatime" :currenttime="currenttime" ></CountDown> -->
                     <div class="time" :class="navclass">
                        {{ tipText }}<span class="styleAll" v-if="isDay === true">{{ day }}</span
                        ><span class="timeTxt">{{ dayText }}</span
                        ><span class="styleAll">{{ hour }}</span
                        ><span class="timeTxt">{{ hourText }}</span
                        ><span class="styleAll">{{ minute }}</span
                        ><span class="timeTxt">{{ minuteText }}</span
                        ><span class="styleAll">{{ second }}</span
                        ><span class="timeTxt">{{ secondText }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="store_name">{{title}}</div>
        <div class="userInfo flex flex_between ali_center" v-if="xx">
            <div class="infos flex ali_center">
                <img :src="xx.avatar" alt="" />
                <div>
                    <div class="nickname">{{xx.nickname}}</div>
                    <div class="time">{{xx.createtime}}</div>
                </div>
            </div>
            <div class="price">￥{{xx.moneys}}</div>
            <div class="status">领先</div>
        </div>
        <div class="storeInfo flex ali_center flex_between"  v-if="dianpu">
            <div class="left flex ali_center">
                <img :src="dianpu.names_img" alt="" />
                <div class="name">{{dianpu.names}}</div>
            </div>
            <div class="right" @click="$router.push('/ft_store/1')">进入店铺</div>
        </div>
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
            currentTime: 0,
            datatime: 0,
            // id: this.$route.params.id,
            detail: "",
            sureupload: true,
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
            tipText: "",
            isDay: false,
            day: "00",
            hour: "00",
            minute: "00",
            second: "00",
            hourText: ":",
            minuteText: ":",
            secondText: "",
            navclass: "on",
            dayText:"",
            date3: 0,
            dianpu:"",
            xx:"",
        }
    },
    created(){
        this.goodid = this.$route.query.id
        this.status_s = this.$route.query.status_s
        // console.log(this.gid)
        console.log(3333333)
        this.getgooddetail()
        // Dialog.confirm({
        //     message: '请先预约',
        // }).then(() => {
        //     // on close
        //     this.sureupload = true  
        //     this.yuyue( )
        // }) .catch(() => {
        //     // on cancel
        //     this.sureupload = true
        // });
    },
    mounted() {
        // console.log(1111);
        // console.log( this.currenttime)
        // console.log(this.date3)
        // if(this.date3 == 0) return false 
        
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
            this.dianpu = res.dianpu
            this.xx = res.xx

            Object.keys(goods).forEach((key) =>{
                
                this[key] = goods[key]

            })
     
            this.thumbimg = this.thumb[0]
            console.log(this.thumbimg)
            let startTime = Number(this.stime)
            let endTime = Number(this.etime)
            let timestamp = Date.parse(new Date())/1000;
            var date1 = ""; //开始时间
            if(timestamp<startTime){
                date1=startTime;
            }else{
                date1 = timestamp; //开始时间
            }
            var date2 = endTime; //结束时间

            console.log(date1)
            console.log(date2)
        
            if(date1 >= date2){
                this.currentTime = 0
                this.datatime = 0
            }else{
                this.currentTime = date1
                this.datatime = date2
            }
            // this.date3 =  (date2- date1)*1000; //时间差的毫秒数
            // console.log(this.date3)
            console.log(this.currentTime)
            this.show_time();

            

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
        },
        show_time() {
            let _this = this;
            // let intDiff = (that.datatime - that.currentTime) * 1000 //获取数据中的时间戳的时间差；
            // console.log(that.datatime)
            // console.log(that.currentTime)
            // console.log(intDiff)
            // console.log(222222)
            this.interval = setInterval(function () {
                // console.log(222)
                _this.runTime();
                // clearInterval(_this.interval);
            }, 1000);
  
            // runTime();
            // setInterval(runTime, 1000);
        },
        runTime() {
            let that = this;
            // console.log(that.datatime)
            // console.log(that.currentTime)
            //时间函数
            let intDiff = (that.datatime - that.currentTime) * 1000 //获取数据中的时间戳的时间差；
            //  console.log(that.datatime)
            // console.log(that.currentTime)
            // console.log(intDiff)
            // console.log(intDiff)
            that.currentTime++;
            let day = 0,
            hour = 0,
            minute = 0,
            second = 0;
            if (intDiff > 0) {
            //转换时间
            //计算出相差天数

            if (that.isDay === true) {
                day = Math.floor(intDiff / (24 * 3600 * 1000));
            } else {
                day = 0;
            }
            //计算出小时数
            let leave1 = intDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
            hour = Math.floor(leave1 / (3600 * 1000));

            //计算相差分钟数
            let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
            minute = Math.floor(leave2 / (60 * 1000));

            //计算相差秒数
            let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
            second = Math.round(leave3 / 1000);
            
            if (hour <= 9) hour = "0" + hour;
            if (minute <= 9) minute = "0" + minute;
            if (second <= 9) second = "0" + second;
                that.day = day;
                that.hour = hour;
                that.minute = minute;
                that.second = second;
            } else {
                that.day = "00";
                that.hour = "00";
                that.minute = "00";
                that.second = "00";
            }
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
                .on {
                    .styleAll {
                        color: #ffffff;
                        background: #fd563a;
                        height: 5.33vw;
                        line-height: 5.33vw;
                        margin: 0 1vw;
                        min-width: 5.33vw;
                        display: inline-block;
                        text-align: center;
                        font-size: 3.2vw;
                        border-radius: 4px;
                    }
                    .timeTxt {
                        color: #fd563a;
                    }
                }
                .on_1 {
                    color: #fff;
                    font-size: 3.47vw;
                    line-height: 8vw;
                }
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