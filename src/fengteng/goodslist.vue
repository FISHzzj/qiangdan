<template>
    <div class="goodslist">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>{{title}}</p>
        </div>
        <div style="height:12vw"></div>
        <div class="list flex flex_between">
            <div v-for="item in 20" :key="item" class="item" @click="$router.push('/ft_goodsdetail/1')">
                <img src="@/assets/images/getOrdersHeader.png" alt="">
                <div class="name">DF-2222</div>
                <div class="bottom flex flex_between">
                    <span class="price">￥300.00</span>
                    <span class="status">已锁定</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ft_goodslist",
    data() {
        return {
            title: this.$route.query.title,
            type: this.$route.params.type,
            detail: ""
        }
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
                line-height: 8.5vw;
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