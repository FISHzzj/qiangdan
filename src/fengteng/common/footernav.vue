<template>
    <div class="footer">
        <div style="height:12vw;"></div>
        <div class="nav_1 flex ali_center">
            <div @click="goitem(item)" class="item flex ali_center" v-for="(item, index) in list" :key="index">
                <img :src="$route.path == item.url ? item.img_sel : item.img" alt="">
                <p :class="{on: $route.path == item.url}">{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "footernav",
    data() {
        return {
            list: [
                {
                    name: "首页",
                    img:  require('@/assets/images/home/home.png'),
                    img_sel:  require('@/assets/images/home/home_sel.png'),
                    url: "/ft_index"
                },
                {
                    name: "传家",
                    img:  require('@/assets/images/home/home.png'),
                    img_sel:  require('@/assets/images/home/home_sel.png'),
                    url: "/ft_store"
                },
                // {
                //     name: "商城",
                //     img:  require('@/assets/images/home/home.png'),
                //     img_sel:  require('@/assets/images/home/home_sel.png'),
                //     url: "/ft_market"
                // },
                {
                    name: "团队",
                    img:  require('@/assets/images/home/home.png'),
                    img_sel:  require('@/assets/images/home/home_sel.png'),
                    url: "/ft_team"
                },
                {
                    name: "个人中心",
                    img:  require('@/assets/images/home/home.png'),
                    img_sel:  require('@/assets/images/home/home_sel.png'),
                    url: "/ft_mine"
                }
            ]
        };
    },
    mounted() {
        console.log(this.$route.path);
    },
    methods: {
        goitem(e) {
            this.$router.push({
                path: e.url
            });
        }
    }
}
</script>
<style lang="less" scoped>
.footer {
    .nav_1 {
        position: fixed;
        background: #fff;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        z-index: 10000;
        flex-wrap: nowrap;
        .item {
            width: 33vw;
            flex-direction: column;
            justify-content: center;
            img {
                width: 5.33vw;
                height: 5.33vw;
            }
            p {
                font-size: 3.2vw;
                color: #999;
                &.on {
                    color: #333;
                }
            }
        }
    }
}
</style>