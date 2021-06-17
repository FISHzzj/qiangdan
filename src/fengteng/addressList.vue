<template>
    <div class="addressList">
        <div class="item">
            <div class="top flex ali_center">
                <van-icon name="location-o" color="rgb(155,99,99)" size="30" />
                <div class="right flex flex_between ali_center">
                    <div>
                        <p class="name_phone">姓名： 145  14500000000</p>
                        <p class="adddetail">北京市</p>
                    </div>
                    <div>
                        <p class="edit">编辑</p>
                        <p class="del">删除</p>
                        <p class="isdefault">设成默认</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="top flex ali_center">
                <van-icon name="location-o" color="rgb(155,99,99)" size="30" />
                <div class="right">暂无地址</div>
            </div>
        </div>
        <div class="footer" @click="$router.push('/addAddress/1')">新增收货地址</div>
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
                width: 80vw;
                .edit {
                    text-align: center;
                }
                .del {
                    text-align: center;
                    color: #fc4142;
                }
                .isdefault {
                    text-align: center;
                    color: green;
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