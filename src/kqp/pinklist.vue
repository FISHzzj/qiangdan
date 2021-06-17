<template>
    <div class="pinklist">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>查看参团成员</p>
        </div>
        <div class="list">
            <div class="item flex flex_between ali_center">
                <div class="left flex ali_center">
                    <img src="@/assets/images/vip2.png" alt="">
                    <div>
                        <p class="nickname">这是昵称</p>
                        <p class="num">参团编号:P001</p>
                    </div>
                </div>
                <div class="right">2020-20-20</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "kqp_member_list",
    data() {
        return {
        };
    },
    mounted() {
    },
    methods:{
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.header {
    width: 100%;
    height: 12vw;
    position: relative;
    background-color: #fff;
    .van-icon {
        position: absolute;
        top: 0;
        left: 3vw;
        bottom: 0;
        height: 4vw;
        margin: auto 0;
    }
    p {
        width: 100%;
        line-height: 12vw;
        font-size: 4vw;
        text-align: center;
    }
}
.pinklist {
    background-color: #f7f7f7 !important;
    .list {
        padding-top: 2vw;
        .item {
            background-color: #fff;
            padding: 0 4vw;
            height: 15vw;
            margin-bottom: 2.3vw;
            .left {
                .nickname,
                .num {
                    font-size: 3.47vw;
                    color: #666;
                }
                img {
                    width: 7vw;
                    height: 7vw;
                    border-radius: 50%;
                    margin-right: 3vw;
                }

            }
            .right {
                color: #999;
                font-size: 3.2vw;
            }
        }
    }
}
</style>