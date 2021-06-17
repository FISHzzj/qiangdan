<template>
    <div class="addAddress">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>新增地址</p>
        </div>
        <van-address-edit
            :area-list="areaList"
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>
<script>
import areaList from '../assets/area';
import { Toast } from 'vant';
export default {
    name: "addAddress",
    data() {
        return {
            areaList,
            searchResult: [],
        };
    },
    mounted() {
    },
    methods:{
        onSave() {
            Toast('save');
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [
                    {
                        name: '黄龙万科中心',
                        address: '杭州市西湖区',
                    },
                ];
            } else {
                this.searchResult = [];
            }
        },
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.header {
    width: 100%;
    height: 12vw;
    position: relative;
    background-color: #fff;
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
.addAddress {
    background-color: #f7f7f7 !important;
}
</style>