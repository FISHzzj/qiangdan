<template>
    <div class="content">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>我的订单</p>
        </div>
        <div style="height:25vw"></div>
        <div class="nav flex">
          <a href="javascript:;">
            <div class="item" @click="changenav(4)" :class="{on:status==4}">全部订单</div>
          </a>
          <a href="javascript:;">
            <div class="item" @click="changenav(0)" :class="{on:status==0}">待付款</div>
          </a>
          <a href="javascript:;">
            <div class="item" @click="changenav(1)" :class="{on:status==1}">待发货</div>
          </a>
          <a href="javascript:;">
            <div class="item" @click="changenav(2)" :class="{on:status==2}">待收货</div>
          </a>
          <a href="javascript:;">
            <div class="item" @click="changenav(3)" :class="{on:status==3}">已完成</div>
          </a>
        </div>
        <div class="list">
          <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="'我是有底线的'"
                @load="getData"
            >
            <div class="item" v-for="(item,index) in list" :key="index">
              <div class="bottom flex flex_between ali_center">
                <div class="left">订单号: <span>{{item.ordersn}}</span></div>
                <!-- <div class="right" v-if="status==0" @click="gopay(item.id)">立即付款</div> -->
              </div>
              <div class="top flex flex_between">
                <div class="left flex">
                  <img :src="item.thumbw4" alt="" />
                  <span>{{item.title}}</span> 
                  <span>X{{item.goods_num}}</span>
                </div>
                <div class="right">{{item.statusstr}}</div>
              </div>
              <div class="bottom flex flex_between ali_center">
                <div class="left">价格: <span>{{item.price}}</span></div>
                <div class="right" v-if="status==0" @click="gopay(item.id)">立即付款</div>
              </div>
               <div class="bottom flex flex_between ali_center" v-if="status != 0 || status != 1"> 
                <div class="left">快递: <span>{{item.express}}</span></div>
                <div class="right">快递单号: {{item.expresssn}}</div>
              </div>
            </div>
          </van-list>
        </div>
    </div>
</template>
<script>
export default {
    name: "ft_content",
    data() {
        return {
            status: 4,
            page: 1,
            list:[],
            limit: 10,
            finished: false,
            loading: false,
        }
    },
    mounted(){
      // this.getData()
    },
    methods: {
      async getData(){
          let res = await $ajax('auctionauction1order_list', {page: this.page, status: this.status })
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
      changenav(status) {
        this.status = status;
        
        this.page = 1
        this.list = []
       
        this.getData()
      },
      gopay(id){
        this.$router.push({
          name:'ft_orderdetail',
          id
        })
      }
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
    .nav {
      position: fixed;
      top: 12vw;
      left: 0;
      overflow: auto;
      background: #fff;
      width: 100%;
      a {
        .item {
          color: #666;
          width: 22vw;
          text-align: center;
          line-height: 11vw;
          &.on {
            color: #fff;
            background: #6cabcb;
          }
        }
      }
    }
    .list {
      padding: 0 4vw;
      .item {
        padding: 2vw 0;
        .top {
          padding-bottom: 2vw;
          .left {
            img {
              width: 20vw;
              height: 20vw;
              margin-right: 2vw;
            }
          }
          .right {
            font-size: 4vw;
          }
        }
        .bottom {
          height: 10vw;
          .left {
            font-size: 3.2vw;
            span {
              font-size: 3.73vw;
              color: #fc4142;
            }
          }
          .right {
            line-height: 8vw;
            padding: 0 2vw;
            border-radius: 4vw;
            font-size: 3.47vw;
            color: #fff;
            background: #6cabcb;
          }
        }
      }
    }
}
</style>