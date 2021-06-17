<template>
    <div class="list flex flex_between" v-if="list.length">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="$router.push('/kqp_detail/' + item.id)"
        >
            <img src="@/assets/images/vip2.png" alt="">
            <div class="store_name line2">这里是名字</div>
            <div class="price flex">
                <div class="price_1"><span>￥</span>500.00</div>
                <div class="price_2">￥500.00</div>
            </div>
        </div>
        <div
          v-if="list.length == 0"
          class="nolist"
          style="width: 100%;line-height: 12vw;text-align: center;color: #999999;font-size: 4vw;"
        >
          暂无商品~
        </div>
    </div>
</template>
<script>
export default {
    name: "goodsList",
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    mounted() {},
    methods: {

    }
}
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.list {
    padding: 0 3vw;
    flex-wrap: wrap;
    .item {
        width: 45vw;
        margin-bottom: 2.4vw;
        img {
            width: 45vw;
            height: 45vw;
        }
        .store_name {
            font-size: 4vw;
            line-height: 5.6vw;
            padding: 2vw 0;
        }
        .price {
            .price_1 {
                color: #fc4142;
                font-size: 5vw;
                font-weight: 600;
                span {
                    font-size: 3.47vw;
                    font-weight: 400;
                }
            }
            .price_2 {
                font-size: 3.2vw;
                color: #999;
                text-decoration: line-through;
            }
        }
    }
}
</style>