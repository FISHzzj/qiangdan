<template>
    <div class="poster">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>代理中心</p>
        </div>
        <div style="height:12vw"></div>
        <div class="code">
            <img src="" alt="" />
        </div>
        <div class="list">
            <div class="title">已累计邀请<span>5</span>人，今日新增<span>3</span>人</div>
            <div class="title1 flex ali_center">
                <span class="time">注册时间</span>
                <span class="mobile">好有手机号</span>
            </div>
            <div class="item flex ali_center">
                <span>2020-2020-20</span>
                <span>1313232101</span>
            </div>
        </div>
        <div class="save">保存并分享</div>
    </div>
</template>
<script>
export default {
    name: "poster",
}
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.poster {
    background: #f7f7f7 !important;
    .header {
        width: 100%;
        height: 12vw;
        position: fixed;
        top: 0;
        left: 0;
        background: #fff;
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
    .code {
        text-align: center;
        img {
            width: 70vw;
            height: auto;
        }
    }
    .list {
        width: 92vw;
        margin: 4vw;
        padding: 1vw 0.5vw 3vw;
        background: #fff;
        border-radius: 2vw;
        .title {
            height: 12vw;
            line-height: 12vw;
            border-radius: 1vw;
            text-align: center;
            span {
                color: blue;
                margin: 0 1vw;
            }
            background: rgba(0,0,255,0.3);
        }
        .title1 {
            height: 12vw;
            line-height: 12vw;
            border-bottom: 1px dashed #ccc;
            color: #999;
            font-size: 3.47vw;
            text-align: center;
            span {
                width: 50%;
            }
        }
        .item {
            text-align: center;
            height: 10vw;
            line-height: 10vw;
            color: #333;
            font-size: 3.47vw;
            span {
                width: 50%;
            }
        }
    }
    .save {
        background: blue;
        width: 92vw;
        position: fixed;
        bottom: 2vw;
        left: 4vw;
        height: 12vw;
        line-height: 12vw;
        text-align: center;
        color: #fff;
        border-radius: 1vw;
    }
}
</style>