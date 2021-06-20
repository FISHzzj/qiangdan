<template>
  <div class="orderdetail">
    <div class="header">
        <van-icon @click="$router.go(-1)" name="arrow-left" />
        <p>{{titletop}}</p>
    </div>
    <div style="height:12vw"></div>
    <div class="status flex flex_between ali_center">
      <!-- <div class="left">
        <div>请付款</div>
        <p>您已经拍成功，请及时付款</p>
      </div> -->
      <!-- <div class="right flex ali_center">
        <van-icon name="clock-o" />
        <div class="flex ali_center">
          <span>剩余时间</span>
          <CountDown :datatime="datatime" navclass="on_1" :currenttime="currenttime"></CountDown>
        </div>
      </div> -->
    </div>
    <div class="goodsInfo flex flex_between ali_center">
      <div class="left flex">
        <img :src="thumb" alt="" />
        <div>
          <p class="type">名称</p>
          <div class="name">{{title}}</div>
          <p class="type">期数</p>
          <div class="num">{{qishu}}</div>
        </div>
      </div>
      <div class="right">
        <div class="type">实付金额</div>
        <div class="num">￥{{moneys}}</div>
      </div>
    </div>
    <div class="changetype flex flex_between ali_center">
      <!-- <div class="left flex ali_center" v-if="type == 'card'">
        <img src="@/assets/images/card.png" alt="" />
        <p>银联</p>
      </div> -->
      <div class="left flex ali_center" v-if="pay_type == 2">
        <img src="@/assets/images/alipay.png" alt="" />
        <p>支付宝</p>
      </div>
       <div class="left flex ali_center" v-if="pay_type == 1">
        <img src="@/assets/images/weixin.png" alt="" />
        <p>微信</p>
      </div>
      <div class="right flex ali_center">
        <span>支付方式</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- <div class="list" v-if="type == 'card'">
      <div class="item flex ali_center flex_between">
        <div class="left">银行卡号：111111</div>
        <div class="copy" data-clipboard-text="11111">复制</div>
      </div>
      <div class="item flex ali_center flex_between">
        <div class="left">持卡人姓名：22222</div>
        <div class="copy" data-clipboard-text="22222">复制</div>
      </div>
      <div class="item flex ali_center flex_between">
        <div class="left">开户行：33333</div>
        <div class="copy" data-clipboard-text="33333">复制</div>
      </div>
    </div> -->
    <div class="list" v-if="zfb_img">
      <!-- <div class="item flex ali_center flex_between">
        <div class="left">支付宝账户：44444</div>
        <div class="copy" data-clipboard-text="444444">复制</div>
      </div> -->
      <!-- <div class="item flex ali_center flex_between">
        <div class="left">支付宝姓名：55555</div>
        <div class="copy" data-clipboard-text="55555">复制</div>
      </div> -->
    </div>
    <div class="wrapper flex ali_center">
      <img @click="show_image" v-if="true" :src="pay_img" alt="">
      <!-- <p>提示：付款时请不要备注任何信息，推荐只用支付宝，银行卡号转账</p> -->
      <!-- <div @click="showUploader = true">上传支付凭证</div> -->
    </div>
    <div class="footer">
      <div class="item flex flex_between ali_center">
        <div class="left flex ali_center">
          <van-icon name="share" size="14" />
          <span>卖方</span>
        </div>
        <div class="right flex ali_center">
          <span>{{name}}</span>
          <van-icon name="phone" />
        </div>
      </div>
      <div class="item flex " style="flex-direction: row;flex-wrap: wrap;">
        <div class="left flex ali_center" style="width: 100%;margin: 10px 0;">
          <van-icon name="share" size="14" />
          <span>卖方收款码</span>
        </div>
        <div class="right flex flex_between ali_center">
          <!-- <span>1111111111</span>
          <van-icon name="phone" /> -->
          <img :src="wx_img" alt="" style="width:50%;margin-right:10px;height:150px" />
          <img :src="zfb_img" alt="" style="width:50%;height:150px" />

        </div>
      </div>

    </div>
    <div @click="getmoney" v-if="titletop == '卖单详情' && statusstr == '带确认收款'"><van-button type="primary" block>确认收款</van-button></div>

    <!-- <div @click="showType = false" class="mask" v-if="showType"></div> -->
    <!-- <div class="typeList" v-if="showType">
      <div class="title flex flex_between ali_center">
        <span @click="showType = false">取消</span>
        <p>请选择支付方式</p>
        <span @click="sureType">确定</span>
      </div>
      <div class="item flex ali_center flex_between" @click="changeType(item)" v-for="item in typeList" :key="item.type">
        <div class="left flex ali_center">
          <img :src="item.img" alt="">
          <span>{{item.name}}</span>
        </div>
        <van-icon name="success" color="#fc4142" v-if="type1 == item.type" />
      </div>
    </div> -->
    <div @click="showImage = false" class="mask1" v-if="showImage"></div>
    <img v-if="showImage" class="pingzheng" :src="pay_img" alt="">
    <div class="mask2" v-if="showUploader" @click="showUploader = false"></div>
    <div class="uploader" v-if="showUploader">
      <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead" />
      <div class="btns flex ali_center">
        <span class="cancel" @click="showUploader = false">取消</span>
        <span class="sure">确认</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import {copy} from '../func/copy'
import CountDown from "./common/CountDown.vue";
export default {
  name: "ft_orderdetail",
  components: {
    CountDown
  },
  data() {
    return {
      fileList: [],
      showUploader: false,
      showImage: false,
      showType: false,
      typeList: [
        {
          img: require("@/assets/images/alipay.png"),
          name: "支付宝",
          type: "alipay"
        },
        {
          img: require("@/assets/images/card.png"),
          name: "银联",
          type: "card"
        }
      ],
      type1: "card",
      typeinfo: {},
      type: "card",
      currenttime: 1500000000,
      datatime: 15000000000,
      // id: this.$route.params.id,
      detail: "",
      qishu: "",
      title: "",
      total: "",
      moneys: "",
      statusstr: "",
      createtime: "",
      wx_img: "",
      zfb_img: "",
      name: "",
      pay_img: "",
      thumb: "",
      pay_type: "",
      titletop: "",
    }
  },
  mounted() {
    this.clipboard = copy('.copy')
    this.id = this.$route.query.id
    this.titletop = this.$route.query.title
    this.getData()
  },
  methods: {
    async getData(){
        let res = await $ajax('auctionauction1mai_order_detail', {id: this.id})
        if(!res) return false
        console.log(res)
        let resnewObj = res.newObj
        Object.keys(resnewObj).forEach((key)=>{
          this[key] = resnewObj[key]
        })
        
        
    },
    afterRead(res) {
      console.log(res);
    },
    show_image() {
      this.showImage = true;
    },
    sureType() {
      this.type = this.type1;
      this.showType = false;
    },
    changeType(item) {
      this.typeinfo = item;
      this.type1 = item.type;
    },
    async getmoney(){
      let res = await $ajax('auctionauction1sell_order_status', {id: this.id})
      if(!res) return false
      console.log(res)
      Toast(res.msg)
      this.$router.push({
        name: 'ft_store'
      })
    }
  }
}
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.orderdetail {
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
  .status {
    padding: 3vw 4vw;
    .left {
      div {
        font-size: 6vw;
        font-weight: bold;
      }
      p {
        font-size: 3.2vw;
        color: #666;
      }
    }
    .right {
      background: #6cabcb;
      height: 8vw;
      padding: 0 2vw;
      border-radius: 3vw;
      color: #fff;
      font-size: 3.47vw;
      line-height: 8vw;
      > div {
        margin-left: 2vw;
      }
    }
  }
  .goodsInfo {
    border-radius: 2vw;
    width: 92vw;
    margin: 0 4vw;
    padding: 2vw;
    background: rgb(235,229,221);
    .left {
      img {
        width: 9vw;
        height: 9vw;
        border-radius: 1vw;
        margin-right: 2vw;
      }
      p {
        color: #989898;
        font-size: 3.2vw;
        line-height: 5vw;
      }
      div {
        color: #222;
        font-weight: 600;
        font-size: 3.73vw;
      }
      .name {
        padding-bottom: 3vw;
      }
    }
    .right {
      text-align: center;
      .type {
        color: #999;
        font-size: 3.47vw;
      }
      .num {
        color: #fc4142;
        font-size: 6vw;
      }
    }
  }
  .changetype {
    height: 15vw;
    padding: 0 4vw;
    .left {
      img {
        width: 6vw;
        height: 6vw;
        margin-right: 2vw;
      }
      p {
        font-size: 3.73vw;
      }
    }
    .right {
      span {
        font-size: 3.2vw;
        margin-right: 2vw;
      }
    }
  }
  .list {
    padding: 0 4vw;
    .item {
      height: 12vw;
      .left {
        font-size: 3.47vw;
        color: #212121;
      }
      .copy {
        color: #fff;
        background: #6cabcb;
        padding: 0 2vw;
        line-height: 6vw;
        border-radius: 3vw;
        font-size: 3.47vw;
      }
    }
  }
  .wrapper {
    padding: 0 4vw;
    flex-direction: column;
    img {
      width: 50vw;
    }
    p {
      color: #999999;
      font-size: 3vw;
      margin: 2vw 0 5vw;
    }
    div {
      background: #0b565e;
      line-height: 10vw;
      font-size: 4vw;
      color: #fff;
      border-radius: 5vw;
      text-align: center;
      width: 100%;
    }
  }
  .footer {
    padding: 10vw 4vw 3vw;
    .item {
      // height: 50vw;
      .left {
        .van-icon {
          transform: rotate(180deg);
        }
        span {
          font-size: 3.2vw;
          color: #333;
          margin-left: 1.5vw;
        }
      }
      .right {
        span {
          font-size: 3.2vw;
          color: #333;
          margin-right: 1.5vw;
        }
        .van-icon {
          color: rgb(35,86,111);
        }
      }
    }
  }
  .mask,
  .mask1,
  .mask2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
  .typeList {
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    padding: 0 4vw 3vw;
    background: #fff;
    .title {
      height: 12vw;
      span {
        font-size: 3.2vw;
      }
    }
    .item {
      height: 12vw;
      .left {
        img {
          width: 8vw;
          height: 8vw;
          margin-right: 2vw;
        }
        span {
          font-size: 3.47vw;
        }
      }
    }
  }
  .pingzheng {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 80vw;
    height: auth;
  }
  .uploader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 80vw;
    height: 92vw;
    background: #fff;
    border-radius: 3vw;
    /deep/ .van-uploader__upload {
      width: 80vw;
      height: 80vw;
      .van-uploader__upload-icon {
        font-size: 40vw;
      }
    }
    /deep/ .van-uploader__preview-image {
      width: 80vw;
      height: 78vw;
    }
    .btns {
      height: 12vw;
      > span {
        width: 50%;
        text-align: center;
        line-height: 12vw;
      }
      .cancel {
        color: #666;
      }
      .sure {
        color: #fc4142;
      }
    }
  }
}
</style>