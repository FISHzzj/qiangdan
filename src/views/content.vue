<template>
    <div class="content">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>关于我们</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "content",
    data() {
        return {
            id: 0,
        };
    },
    mounted() {
        this.id = this.$route.params.id;
        console.log(this.id);
    }
};
</script>
<style lang="less" scoped>
.content {
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
}
</style>