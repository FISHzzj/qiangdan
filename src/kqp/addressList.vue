<template>
    <div class="addressList">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>收货地址管理</p>
        </div>
        <div class="item">
            <div class="top flex ali_center">
                <van-icon name="location-o" />
                <div class="right">
                    <p class="name_phone">姓名： 145  14500000000</p>
                    <p class="adddetail">北京市</p>
                </div>
            </div>
            <div class="bottom flex ali_center flex_between">
                <div class="left flex ali_center">
                    <van-icon color="#fc4142" v-if="true" name="checked" />
                    <div v-else></div>
                    <span>设为默认地址</span>
                </div>
                <div class="right flex">
                    <span>编辑</span>
                    <span>删除</span>
                </div>
            </div>
        </div>
        <div class="footer" @click="$router.push('/addAddress/1')">新增地址</div>
    </div>
</template>
<script>
export default {
    name: "addressList",
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
.addressList {
    background-color: #f7f7f7 !important;
    .item {
        border-bottom: 1.5vw solid #eee;
        .top {
            width: 100%;
            height: 15vw;
            padding: 0 4vw;
            margin: 2vw 0;
            background: #fff;
            .right {
                margin-left: 3vw;
                font-size: 3.47vw;
            }
        }
        .bottom {
            padding: 0 4vw;
            height: 10vw;
            background: #fff;
            .left {
                span {
                    margin-left: 2.4vw;
                    font-size: 3.73vw;
                }
                div {
                    width: 4vw;
                    height: 4vw;
                    border-radius: 50%;
                    border: 1px solid #f7f7f7;
                }
            }
            .right {
                span {
                    height: 8vw;
                    line-height: 8vw;
                    border: 1px solid #f7f7f7;
                    text-align: center;
                    font-size: 3.47vw;
                    width: 12vw;
                    margin-left: 2.4vw;
                }
            }
        }
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 12vw;
        height: 12vw;
        background: #fc4142;
        color: #fff;
        text-align: center;
        width: 100%;
    }
}
</style>