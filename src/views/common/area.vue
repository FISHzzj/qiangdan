<template>
    <div class="area1" v-if="showArea">
        <div class="header">
            <van-icon @click="showArea = false" name="arrow-left" size="20" />
            <p>选择地区</p>
        </div>
        <div class="list">
            <div @click="change(item)" v-for="(item, index) in list" :key="index" class="flex item flex_between ali_center">
                <span class="name">{{item.name}}</span>
                <span class="num">{{item.num}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        showArea: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            list: [
                {name: '中国', num: '+86'},
                {name: '中国1', num: '+861'},
                {name: '中国2', num: '+862'},
                {name: '中国3', num: '+863'},
                {name: '中国4', num: '+864'},
                {name: '中国5', num: '+865'}
            ]
        };
    },
    methods: {
        change(e) {
            this.$emit('change', e);
        }
    }
}
</script>
<style lang="less" scoped>
.area1 {
    background: #fff;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    .header {
        width: 100%;
        height: 12vw;
        position: relative;
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
    .list {
        .item {
            height: 10vw;
            padding: 0 4vw;
        }
    }
}
</style>