<template>
    <div class="team">
        <div class="header">团队</div>
        <div style="height:12vw"></div>
        <div class="top flex flex_between ali_center">
            <div class="item">
                <div class="type">代理人数</div>
                <div class="num">0</div>
            </div>
            <div class="item">
                <div class="type">今日订单数</div>
                <div class="num">0</div>
            </div>
            <div class="item">
                <div class="type">今日佣金</div>
                <div class="num">￥0</div>
            </div>
        </div>
        <div class="list">
            <div class="item flex ali_center" v-for="item in 10" :key="item">
                <img src="@/assets/images/dui.png" alt="" />
                <div class="info flex">
                    <p class="name">用户名：<span> 昵称</span></p>
                    <p class="type">订单<span>0</span>代理<span>0</span>佣金<span>0</span></p>
                </div>
            </div>
        </div>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomNav from "./common/footernav";
export default {
    name: "team",
    components: {
        bottomNav
    },
}
</script>
<style lang="less" scoped>
.team {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        line-height: 12vw;
        text-align: center;
    }
    .top {
        padding: 3vw 0;
        border-bottom: 1px solid #ccc;
        text-align: center;
        .item {
            width: 33%;
            font-size: 3.4vw;
            .num {
                font-size: 4.2vw;
                margin-top: 2vw;
                color: rgb(155,99,99);
            }
        }
    }
    .list {
        padding: 0 4vw;
        .item {
            height: 15vw;
            img {
                width: 10vw;
                height: 10vw;
                border-radius: 50%;
                margin-right: 2.4vw;
            }
            .info {
                width: 80vw;
                height: 15vw;
                flex-direction: column;
                justify-content: center;
                border-bottom: 1px solid #ccc;
                .name {
                    font-size: 3.73vw;
                    font-weight: bold;
                    span {
                        font-weight: 500;
                        color: #666;
                    }
                }
                .type {
                    font-size: 3.2vw;
                    padding-top: 1.5vw;
                    span {
                        color: rgb(155,99,99);
                        margin: 0 2vw 0 1vw;
                    }
                }
            }
        }
    }
}
</style>