<template>
    <div class="content">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>{{title}}</p>
        </div>
        <div style="height:12vw"></div>
        <div class="detail" v-html="detail"></div>
    </div>
</template>
<script>
export default {
    name: "ft_content",
    data() {
        return {
            title: this.$route.query.title,
            id: this.$route.params.id,
            detail: ""
        }
    }
}
</script>
<style lang="less" scoped>
.content {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        p {
            text-align: center;
            line-height: 12vw;
        }
        .van-icon {
            position: fixed;
            left: 4vw;
            top: 4vw;
        }
    }
}
</style>