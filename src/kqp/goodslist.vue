<template>
    <div class="list">
        <goodsList v-if="$route.params.type == 1" :list="list"></goodsList>
        <recommend v-if="$route.params.type == 2" :list="list"></recommend>
    </div>
</template>
<script>
import goodsList from "@/components/goodsList";
import recommend from "@/components/recommend";
export default {
    name: "kqp_goods_list",
    components: {
        goodsList,
        recommend,
    },
    data() {
        return {
            list: [
                {id: 1, list:[]},
                {id: 1, list:[]},
                {id: 1, list:[]},
                {id: 1, list:[]},
                {id: 1, list:[]}
            ]
        };
    }
}
</script>