<template>
    <div class="safe">
        <div class="header">
            <van-icon @click="$router.go(-1)" color="#000" name="arrow-left" size="20" />
            <p>基础认证</p>
            <span>完成</span>
        </div>
        <div class="top flex ali_center">
            <img class="avatar" src="@/assets/images/icon/jyjl.png" alt="" />
            <div class="nickname">羊羊</div>
            <div class="card_id">1215612.123</div>
            <div class="status">恭喜您，已通过实名认证</div>
        </div>
        <div class="list">
            <div class="item flex ali_center flex_between">
                <div class="left">真实姓名</div>
                <div class="right">样</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">证件类型</div>
                <div class="right">身份证</div>
            </div>
            <div class="item flex ali_center flex_between">
                <div class="left">证件号码</div>
                <div class="right">1324355431</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "safe",
    data() {
        return {
            showmask: false,
            code: ""
        }
    },
    methods: {
        submit() {
            
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.safe {
    .header {
        width: 100%;
        height: 12vw;
        position: relative;
        background: fff;
        .van-icon {
            position: absolute;
            top: 0;
            left: 3vw;
            bottom: 0;
            height: 4vw;
            margin: auto 0;
        }
        p {
            color: #000;
            width: 100%;
            line-height: 12vw;
            font-size: 4vw;
            text-align: center;
        }
        span {
            line-height: 12vw;
            position: absolute;
            top: 0;
            right: 4vw;
            bottom: 0;
            margin: auto 0;
            color: blue;
            font-size: 3.47vw;
        }
    }
    .top {
        background: blue;
        color: #fff;
        width:92vw;
        margin: 2vw 4vw;
        border-radius: 3vw;
        flex-direction: column;
        font-size: 3.47vw;
        padding: 5vw 6vw 5vw;
        .avatar {
            width:12vw;
            height: 12vw;
            border-radius: 50%;
        }
        .nickname {
            font-size: 4.5vw;
            font-weight: 600;
            line-height: 8vw;
        }
        .card_id {
            font-size: 3.2vw;
        }
        .status {
            line-height: 8vw;
            color: turquoise;
        }
    }
    .list {
        padding: 6vw 4vw 0;
        .item {
            height: 15vw;
            border-bottom: 1px solid #efefef;
            .left{
                color: #333;
                font-size: 3.47vw;
                font-weight: 600;
            }
            .right {
                color: #ccc;
            }
        }
    }
}
</style>