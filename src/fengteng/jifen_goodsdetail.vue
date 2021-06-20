<!--
 * @Author: your name
 * @Date: 2021-06-16 23:49:50
 * @LastEditTime: 2021-06-17 00:19:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fengteng\src\fengteng\jifen_goodsdetail.vue
-->
<template>
  <div class="detail">
    <div class="header">
      <van-icon @click="$router.go(-1)" name="arrow-left" />
      <p>商品详情</p>
    </div>
    <div style="height:12vw"></div>
    <swiper ref="mySwiper" class="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in thumb_url" :key="index">
        <img :src="item" alt="">
      </swiper-slide>
    </swiper>
    <div class="store_name">{{title}}</div>
    <div class="price">积分：<span>{{marketprice}}</span></div>
    <div class="stock_fee flex flex_between ali_center">
      <span class="stock">库存：{{total}}</span>
      <!-- <span class="fee">邮费：10</span> -->
    </div>
    <div class="detail">
      <div class="title">商品详情</div>
      <div class="content" v-html="content"></div>
    </div>
    <div class="submit " @click="pay">立即购买</div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "ft_jfgoodsDetail",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      id: "",
      swiperOptions: {
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      },
      detailId:"",
      marketprice:"",
      thumb:"",
      thumb_url:"",
      total:"",
      title:"",
      content:""
    }
  },
  mounted(){
    this.id = this.$route.query.id
    this.getData()
  },
  methods:{
    async getData(){
            let res = await $ajax('auctionauction1cs_goods_detail', { goods_id: this.id})
            if(!res) return false
            console.log(res)
            Object.keys(res).forEach((key)=>{
              this[key] = res[key]
            })
    },
    pay(){

      this.$router.push({
        name: 'ft_jf_orderdetail',
        query:{
          id: this.id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.detail {
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
  .mySwiper {
    width: 100vw;
    height: 120vw;
    img {
      width: 100vw;
      height: 120vw;
    }
  }
  .store_name {
    font-size: 3.73vw;
    line-height: 5vw;
    padding: 3vw 4vw;
  }
  .price {
    color: #666;
    font-size: 3.47vw;
    padding: 0 4vw;
    span {
      color: #fc4142;
      font-size: 4.2vw;
      font-weight: 600;
    }
  }
  .stock_fee {
    height: 10vw;
    font-size: 3.47vw;
    padding: 0 4vw;
  }
  .detail {
    padding: 0 4vw 20vw;
    .title {
      line-height: 10vw;
      font-size: 3.73vw;
    }
  }
  .submit {
    width: 92vw;
    height: 10vw;
    line-height: 10vw;
    background: #fc4142;
    color: #fff;
    text-align: center;
    border-radius: 5vw;
    position: fixed;
    left: 4vw;
    bottom: 2vw;
    &.on {
      background: #ccc;
    }
  }
}
</style>
