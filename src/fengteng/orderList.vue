<template>
    <div class="content">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>我的订单</p>
        </div>
        <div style="height:25vw"></div>
        <div class="nav flex">
          <a href="javascript:;">
            <div class="item" @click="changenav(0)" :class="{on:status==0}">全部订单</div>
          </a>
          <a href="javascript:;">
            <div class="item" @click="changenav(1)" :class="{on:status==1}">待付款</div>
          </a>
          <a href="javascript:;">
            <div class="item" @click="changenav(2)" :class="{on:status==2}">待发货</div>
          </a>
          <a href="javascript:;">
            <div class="item" @click="changenav(3)" :class="{on:status==3}">待收货</div>
          </a>
          <a href="javascript:;">
            <div class="item" @click="changenav(4)" :class="{on:status==4}">已完成</div>
          </a>
        </div>
        <div class="list">
          <div class="item" v-for="item in 20" :key="item">
            <div class="top flex flex_between">
              <div class="left flex">
                <img src="@/assets/images/alipay.png" alt="" />
                <span>这里是名字</span>
              </div>
              <div class="right">待付款</div>
            </div>
            <div class="bottom flex flex_between ali_center">
              <div class="left">积分： <span>196</span></div>
              <div class="right">立即付款</div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ft_content",
    data() {
        return {
            status: 0
        }
    },
    methods: {
      changenav(status) {
        this.status = status;
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