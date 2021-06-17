<template>
    <div class="agent">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>代理中心</p>
        </div>
        <!-- 不是代理 -->
        <div v-if="false">
            <div class="img">
                <!-- 后台上传设计好的图片 -->
            </div>
            <div class="submit" @click="submit">申请代理</div>
        </div>
        <!-- 是代理 -->
        <div class="" v-else>
            <div class="top">
                <div class="infos flex ali_center flex_between">
                    <div class="left flex ali_center flex_between">
                        <img class="avatar" src="@/assets/images/icon/jyjl.png" alt="">
                        <div class="">
                            <div class="nickname">矿友2123</div>
                            <div class="num">直推人数：4人</div>
                        </div>
                    </div>
                    <div class="right">
                        <span>高级代理</span>
                        <!-- <img src="" alt=""> -->
                    </div>
                </div>
                <div class="nav flex ali_center flex_between">
                    <div class="item">
                        <div class="num">0.00</div>
                        <div class="type">FIL佣金</div>
                    </div>
                    <div class="item">
                        <div class="num">0.00</div>
                        <div class="type">USDT佣金</div>
                    </div>
                    <div class="item">
                        <div class="num">0.00</div>
                        <div class="type">BTC佣金</div>
                    </div>
                </div>
            </div>
            <div class="teaminfo">
                <div class="infos">
                    <div class="title">团队总人数</div>
                    <div class="num"><span>12</span>人</div>
                    <div class="title">团队总投资</div>
                </div>
                <div class="nav flex ali_center flex_between">
                    <div class="item">
                        <div class="type">CNY总投资</div>
                        <div class="num">0.00</div>
                    </div>
                    <div class="item">
                        <div class="type">USDT总投资</div>
                        <div class="num">0.00</div>
                    </div>
                    <div class="item">
                        <div class="type">BTC总投资</div>
                        <div class="num">0.00</div>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="title">佣金记录</div>
                <div class="title1 flex flex_between ali_center">
                    <div class="time">时间</div>
                    <div class="uid">用户ID</div>
                    <div class="money">佣金</div>
                </div>
                <div class="item flex flex_between ali_center" v-for="item in 10" :key="item">
                    <div class="time">2020-2020-20-20</div>
                    <div class="uid">17312333</div>
                    <div class="money">+123BTC</div>
                </div>
                <van-pagination
                    v-model="currentPage"
                    :total-items="125"
                    :show-page-size="3"
                    force-ellipses
                />
            </div>
            <div class="touchservice">联系客服</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "agenr",
    data() {
        return {
            currentPage: 1
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.agent {
    background: #f7f7f7 !important;
    overflow: auto;
    .header {
        width: 100%;
        height: 12vw;
        position: relative;
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
    .submit {
        position: fixed;
        width: 92vw;
        bottom: 4vw;
        left: 4vw;
        background: blue;
        height: 12vw;
        text-align: center;
        color: #fff;
        line-height: 12vw;
        border-radius: 6vw;
    }
    .top {
        background: rgba(0,0,0,0.8);
        background-size: 100% 100%;
        padding: 0 4vw 8vw;
        .infos {
            padding: 5vw 0 6vw;
            .left {
                .avatar {
                    width: 12vw;
                    height:12vw;
                    border-radius: 50%;
                    margin-right: 2vw;
                }
                .nickname {
                    color: #fff;
                }
                .num {
                    font-size: 3.2vw;
                    color: #999;
                    margin-top: 1vw;
                }
            }
            .right {
                background: #f8c89a;
                color: #333;
                font-size: 3.47vw;
                font-weight: 600;
                padding: 0 1vw;
                border-radius: 1vw;
            }
        }
        .nav {
            padding: 2vw 0;
            text-align: center;
            color: #f8c89a;
            .num {
                font-weight: 600;
                font-size: 5vw;
            }
            .type {
                font-size: 3.2vw;
            }
        }
    }
    .teaminfo {
        width: 92vw;
        margin: -6vw 4vw 4vw;
        background: #fff;
        border-radius: 2vw;
        text-align: center;
        .infos {
            .title {
                line-height: 12vw;
                color: #777;
                font-size: 3.73vw;
            }
            .num {
                color: #999;
                font-size: 3.2vw;
                span {
                    color: #333;
                    font-size: 6vw;
                    font-weight: 600;
                }
            }
        }
        .nav {
            padding: 0 4vw 6vw;
            .type {
                color: #999;
                font-size: 3.2vw;
                margin-bottom: 1.5vw;
            }
            .num {
                color: #333;
                font-size: 4.5vw;
            }
        }
    }
    .list {
        padding: 0 4vw 4vw;
        width: 92vw;
        margin: 0 4vw;
        background: #fff;
        border-radius: 2vw;
        .title {
            line-height: 12vw;
            font-size: 4.2vw;
        }
        .title1 {
            height: 12vw;
            color: #999;
            font-size: 3.2vw;
            > div {
                width: 33%;
            }
            .uid {
                text-align: center;
            }
            .money {
                text-align: right;
            }
        }
        .item {
            height: 10vw;
            color: #333;
            font-size: 3.2vw;
            > div {
                width: 33%;
            }
            .uid {
                text-align: center;
            }
            .money {
                text-align: right;
            }
        }
    }
    .touchservice {
        text-align: center;
        line-height: 20vw;
        color: #999;
        font-size: 3.2vw;
    }
}
</style>