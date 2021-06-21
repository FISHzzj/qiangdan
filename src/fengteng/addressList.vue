<template>
    <div class="addressList">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p>收货地址</p>
        </div>
        <div style="height:12vw"></div>
        <div class="item">
            <van-address-list
                v-model="chosenAddressId"
                :list="list"
                default-tag-text="默认"
                @add="onAdd"
                @edit="onEdit"
                @select="onSelect"
            />
        </div>

    </div>
</template>
<script>
import Bus from '@/assets/bus.js';   //bus.js

export default {
    name: "addressList",
    data() {
        return {
            id: "",
            page: 1,
            // list:[],
            limit: 10,
            finished: false,
            loading: false,
            chosenAddressId: '1',
            list: [
                // {
                //     id: '1',
                //     name: '张三',
                //     tel: '13000000000',
                //     address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                //     isDefault: true,
                // },
                // {
                //     id: '2',
                //     name: '李四',
                //     tel: '1310000000',
                //     address: '浙江省杭州市拱墅区莫干山路 50 号',
                // },
            ],
            gid: "",
        };
    },
    mounted() {
        this.gid = this.$route.query.id

        this.getData()
    },
    methods:{
        async getData(){
            let res = await $ajax('auctionauction1address', {page: this.page})
            if(!res) return false
            console.log(res.dataarr)
            // this.list = res.list
            // console.log(this.list)
             this.page++
            
            this.list.push(...res.dataarr)
            // // // 加载状态结束
            this.loading = false
            if (res.dataarr.length === 0) {
                this.finished = true //加载完成
            } 
        },
        onAdd() {
        
            this.gid = this.$route.query.id
            this.$router.push({
                name: 'ft_addAddress',
                query:{
                    title: '新增地址',
                    addressInfo: {},
                    gid: this.gid
                }
            })
        },
        onEdit(item, index) {
            // Toast('编辑地址:' + index);
            console.log(JSON.stringify(item))
            let addressInfo = new Object;
            this.gid = this.$route.query.id
            addressInfo = {
                id:item.id,
                name:item.name,
                tel:item.tel,
                province:item.province,
                city:item.city,
                county:item.county,
                areaCode: item.areaCode,
                addressDetail:item.address,
                // postal_code:item.postal_code,
                is_default:item.isDefault,
            }
            this.$router.push({
                name: 'ft_addAddress',
                query:{
                    title: '修改地址',
                    addressInfo: addressInfo,
                    gid: this.gid
                }
            })
            
        },
        onSelect(item,index){
            console.log(JSON.stringify(item))
            console.log('选中'+  item.id + "," +index)
   
            this.gid = this.$route.query.id
            if(!this.gid) return false
            console.log(this.gid)
            let addressInfo = new Object;
             addressInfo = {
                aid:item.id,
                realname:item.name,
                mobile:item.tel,
                province:item.province,
                city:item.city,
                area:item.county,
                areaCode: item.areaCode,
                address:item.address,
                // postal_code:item.postal_code,
                isdefault:item.isDefault,
            }
            this.$router.push({
                name: 'ft_jf_orderdetail',
                query: {
                    aid: item.id,
                    id : this.gid,
                    addressInfo: addressInfo,
                }
            })

        },
        // edithandle(){
        //     this.$router.push()
        // },
        // delhandle(){

        // },
        // addaddress(){
        //     this.$router.push({
        //         name: 'ft_addAddress',
        //         query: {
        //             titile: '新增地址'
        //         }
        //     })
        // }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.addressList {
    background-color: #f7f7f7 !important;
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vw;
        background: #fff;
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
    .item {
        // border-bottom: 1.5vw solid #eee;
        .top {
            width: 100%;
            height: 15vw;
            padding: 0 4vw;
            margin: 2vw 0;
            background: #fff;
            .right {
                margin-left: 3vw;
                font-size: 3.47vw;
                width: 80vw;
                .edit {
                    text-align: center;
                }
                .del {
                    text-align: center;
                    color: #fc4142;
                }
                .isdefault {
                    text-align: center;
                    color: green;
                }
            }
        }
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 12vw;
        height: 12vw;
        background: #fc4142;
        color: #fff;
        text-align: center;
        width: 100%;
    }
}
</style>