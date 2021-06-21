<template>
    <div class="addAddress">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>{{title}}</p>
        </div>
        <van-address-edit
            :area-list="areaList"
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            :address-info="AddressInfo"
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
            // id:"", 
            // realname: "", 
            // mobile: "", 
            // province: "",
            // city: "",
            // area: "",
            // address: "",
            title: "",
            AddressInfo:{},
            gid: "",
        };
    },
    mounted() {
        let {title, addressInfo, gid} = this.$route.query
        console.log(title)
        console.log(addressInfo)
        // console.log(obj)
        this.title = title
        this.AddressInfo = addressInfo
        this.gid = gid  

        // let AddressInfo = {}
        // Object.keys(obj).forEach((key)=>{
        //     this[key]= obj[key]
        //     AddressInfo[key] = obj[key]
        // })
        // this.AddressInfo = AddressInfo
        // console.log(this.AddressInfo)
    },
    methods:{

        async onSave(content) {
            // Toast('save');
            let addr = new Object;
            // console.log('content');
            // console.log(content);
            // console.log(this.title)
     
            
            console.log(addr)
            if(this.title == '修改地址'){
                addr = {
                    id:content.id,
                    realname:content.name,
                    mobile:content.tel,
                    city:content.city,
                    area:content.county,
                    is_default:content.isDefault == true ? 1 : 0,
                    // postal_code:content.postal_code,
                    province:content.province,
                    areaCode:content.areaCode,
                    address:content.province+content.city+content.county+content.addressDetail
                };
                 let res = await $ajax('auctionauction1address_edit', addr)
                if(!res) return false

                Toast(res.msg)
            }else{
                addr = {
                    // id:content.id,
                    realname:content.name,
                    mobile:content.tel,
                    city:content.city,
                    area:content.county,
                    is_default:content.isDefault == true ? 1 : 0,
                    // postal_code:content.postal_code,
                    province:content.province,
                    areaCode:content.areaCode,
                    address:content.province+content.city+content.county+content.addressDetail
                };
                 let res = await $ajax('auctionauction1address_add', addr)
                if(!res) return false

                Toast(res.msg)
            }
           
            this.$router.go(-1)
            // let is_add = this.list.push(addr);
            // 判断是否选中默认
            // if (content.is_default) {
            //     this.chosenAddressId = len;
            // }
            // if (is_add) {
            //     this.show1 = false;
            // }
            // console.log(this.list);
        },
        async onDelete(content) {
            // Toast('delete');
            // if(this.title == '修改地址'){
            //     // addr['id']
            //     addr['id'] = content.id 
            // }
            if(!content.id) return false
            // console.log(content.id)
            let res = await $ajax('auctionauction1address_del', {id: content.id})
            if(!res) return false

            Toast(res.msg)
            this.$router.go(-1)

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