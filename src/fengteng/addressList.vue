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
            />
        </div>
 
        <!-- <div v-if="list.length>0">
            <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="'我是有底线的'"
                @load="getData"
            >
                <div class="item" v-for="(item, index ) in list" :key="index">
                    <div class="top flex ali_center">
                        <van-icon name="location-o" color="rgb(155,99,99)" size="30" />
                        <div class="right flex flex_between ali_center">
                            <div>
                                <p class="name_phone">姓名：{{item.realname}}  {{item.mobile}}</p>
                                <p class="adddetail">{{item.province}}{{item.city}}{{item.area}}{{item.address}}</p>
                            </div>
                            <div>
                                <router-link :to="{name: 'ft_addAddress', query:{
                                id:`${item.id}`, 
                                name: `${item.realname}`, 
                                tel: `${item.mobile}`, 
                                province: `${item.province}`,
                                city: `${item.city}`,
                                county: `${item.area}`,
                                address_detail: `${item.address}`,
                          
                                }}"  class="edit" >编辑</router-link>
                                <p class="del" @click="delhandle">删除</p>
                                <p class="isdefault" v-if="isdefault == 1">设成默认</p>
                            </div>
                        </div>
                    </div>
                </div>
            </van-list>
        </div>
 
        <div class="item" v-else>
            <div class="top flex ali_center">
                <van-icon name="location-o" color="rgb(155,99,99)" size="30" />
                <div class="right">暂无地址</div>
            </div>
        </div>
        <div class="footer" @click="addaddress">新增收货地址</div> -->
    </div>
</template>
<script>
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
        };
    },
    mounted() {
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
            // Toast('新增地址');
            // let addressInfo = new Object;
      
            // addressInfo = {
            //     id:item.id,
            //     name:item.name,
            //     tel:item.tel,
            //     province:item.province,
            //     city:item.city,
            //     county:item.county,
            //     areaCode: item.areaCode,
            //     addressDetail:item.address,
            //     // postal_code:item.postal_code,
            //     is_default:item.is_default,
            // }
            // this.$router.push({
            //     name: 'ft_addAddress',
            //     query:{
            //         title: '修改地址',
            //         addressInfo: addressInfo
            //     }
            // })
            this.$router.push({
                name: 'ft_addAddress',
                query:{
                    title: '新增地址',
                    addressInfo: {}
                }
                

            })
        },
        onEdit(item, index) {
            // Toast('编辑地址:' + index);
            let addressInfo = new Object;
      
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
                is_default:item.is_default,
            }
            this.$router.push({
                name: 'ft_addAddress',
                query:{
                    title: '修改地址',
                    addressInfo: addressInfo
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