<template>
    <div class="exchange">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>转入</p>
            <span @click="showService = true">联系客服</span>
        </div>
        <div style="height:8vw"></div>
        <div class="content flex ali_center">
            <img class="icon" :src="img" alt="" />
            <div class="name">转入{{type}}</div>
            <div class="change flex ali_center" @click="show = true">
                <span>转入</span>
                <van-icon name="arrow"></van-icon>
            </div>
            <div v-if="type == 'USDT'" class="types flex ali_center">
                <span>链类型：</span>
                <div class="on" @click="changenav('ERC')">ERC20</div>
                <div @click="changenav('TRC')">TRC20</div>
            </div>
            <img class="code" src="@/assets/images/icon/jyjl.png" alt="" />
            <div class="address">ashdjaksdhajsdasdbasjhdasdasjdhasjmashdjaksdhajsdasdbasjhdasdasjdhasjm</div>
            <div class="btns flex ali_center flex_between">
                <div class="copy">复制地址</div>
                <div class="save">保存图片</div>
            </div>
        </div>
        <div class="pays">
            <div class="num flex flex_between ali_center">
                <div class="title">转入数量</div>
                <input v-model="num" type="text" placeholder="输入转入数量" />
            </div>
            <div v-if="type == 'USDT'" class="img flex flex_between ali_center">
                <div class="title">完成转账截图</div>
                <van-uploader :after-read="afterRead" />
            </div>
        </div>
        <div class="tips">
            <p>温馨提示：</p>
            <div>转账钱请无比确认地址接比重信息无误，已经转出则不可撤销，USDT充值链名称为ERC20，请仔细核对。</div>
        </div>
        <div class="submit">确认转入</div>
        <van-action-sheet
            v-model="show"
            :actions="actions"
            @select="onSelect"
            cancel-text="取消"
        />
        <service
            :showService="showService"
            @close="closeservice"
        ></service>
    </div>
</template>
<script>
import service from "./common/service";
export default {
    name: "exchange",
    components: {
        service
    },
    data() {
        return {
            showService: false,
            img: require('@/assets/images/icon/jyjl.png'),
            show: false,
            type: "USDT",
            num: "",
            actions: [
                {name: "USDT", img: require('@/assets/images/icon/jyjl.png')},
                {name: "BTC", img: ""},
                {name: "ETH", img: ""},
                {name: "FIL", img: ""}
            ]
        }
    },
    created() {
        if (this.$route.params.type) {
            this.type = this.$route.params.type;
        } 
    },
    methods: {
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        changenav(type) {
            if (type == 'TRC') return Toast("即将开放");
        },
        onSelect(e) {
            console.log(e);
            this.type = e.name;
            this.img = e.img;
            this.show = false;
        },
        closeservice(e) {
            this.showService = false;
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.exchange {
    background: #f7f7f7 !important;
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
        span {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 4vw;
            font-size: 3.47vw;
            margin: auto 0;
            color: #999;
            line-height: 12vw;
        }
        p {
            width: 100%;
            line-height: 12vw;
            font-size: 4vw;
            text-align: center;
        }
    }
    .content {
        width: 92vw;
        background: #fff;
        border-radius: 3vw;
        height: 100vw;
        margin: 0 4vw;
        flex-direction: column;
        padding: 0 4vw;
        .icon {
            width: 12vw;
            height: 12vw;
            border-radius: 50%;
            margin: -6vw 40vw 0;
        }
        .name {
            line-height: 8vw;
            font-weight: 600;
        }
        .change {
            color: #999;
            font-size: 3.2vw;
            height: 12vw;
        }
        .types {
            width: 100%;
            div {
                width: 20vw;
                height: 8vw;
                line-height: 8vw;
                text-align: center;
                color: #999;
                font-weight: 600;
                background: #f7f7f7;
                margin-left: 3vw;
                border-radius: 1vw;
                &.on {
                    color: blue;
                    border: 1px solid blue;
                }
            }
        }
        .code {
            width: 30vw;
            height: 30vw;
            margin: 6vw 0;
        }
        .address {
            word-break: break-all;
            text-align: center;
            font-weight: 600;
        }
        .btns {
            width: 100%;
            padding: 0 10vw;
            text-align: center;
            color: blue;
            height: 12vw;
            div {
                width: 50%;
            }
        }
    }
    .pays {
        background: #fff;
        width: 92vw;
        margin: 4vw;
        padding: 0 4vw;
        .num {
            .title {
                font-size: 4.8vw;
                font-weight: 600;
                height: 12vw;
                line-height: 12vw;
            }
            input {
                text-align: right;
            }
        }
    }
    .tips {
        color: #999;
        font-size: 3.1vw;
        padding: 0 4vw;
    }
    .submit {
        width: 92vw;
        height: 12vw;
        line-height: 12vw;
        text-align: center;
        color: #fff;
        background: #bbb;
        border-radius: 1vw;
        margin: 4vw;
        &.on{
            background: blue;
        }
    }
}
</style>