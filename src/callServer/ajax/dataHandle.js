// status 0 等于 0 時, 統一進行處理
function mistake (data) {
    // 如果返回的数据, 不是 json
    if ( typeof data !== 'object') {
        Dialog.alert({
            title: '服務器錯誤',
            message: 'server data type not is JSON'
        })
        return true //發生錯誤
    }
    if (parseInt(data.status) !== 1) {
        Dialog.alert({
            message: data.result.message
        })
        return true //發生錯誤
    }
    return false //未發生錯誤
}

export default {
    uploader (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return data.result.url
    },
    login (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            openid: data.result.openid,
            ip: data.newclientip
        }
    },
    sendVerifycode (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    register (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    forget (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    center (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { id, status, regioncode, avatar, level, mobile,jihuo } = data.result
        return {
            id,
            verified: parseInt(status), //-1未实名0审核中1已实名2爲已駁回
            inviteCode: regioncode,
            avatar: avatar,
            mobile,
            jihuo,
            // verified: realname ? true : false,
            level
        }
    },
    recharge (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {ztpayaddress, content, url} = data.result
        return {
            address: ztpayaddress, //充幣地址
            QRImg: url, // 二維碼地址
            notice: content //注意事項
        }
    },
    rechargeList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let arr = []
        data.result.ztpaynotice.forEach( item => {
            let {id, referenceaddress, create_time, money, type,status } = item
            arr.push({
                id,
                money: money > 0 ? `+${money}` : money,
                address: referenceaddress,
                time: create_time,
                needJump: parseInt(type) === 1 ? true : false , // 1 为正常充值, 6为后台充值
                status:status
            })
        })
        return arr
    },
    rechargeDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {create_time, money, referenceaddress, txid } = data.result.ztpaynotice
        return {
            time: create_time,
            amount: money,
            realAmount: money,
            txid,
            address: referenceaddress,
            status: 1
        }
    },
    withdrawals (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold, addressid, address, service, min,content} = data.result
        return {
            money: gold,
            address,
            min: parseInt(min),
            formalities: service,
            id: addressid,
            content:content
        }
    },
    cashAddress (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { address } = data.result
        let arr = []
        address.forEach( item => {
            let {id, address, label} = item
            arr.push({
                id,
                address,
                label,
            })
        })
        return arr
    },
    getAddressAtChange (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {address, label, remarks} = data.result
        return {
            address,
            label,
            remarks,
        }
    },
    changeAddress (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    toWithdrawals (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    withdrawalsList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { withdrawals } = data.result
        let arr = []
        withdrawals.forEach( item => {
            let {address, addtime, gold, id} = item
            arr.push({
                address,
                id,
                time: addtime,
                money: gold
            })
        })
        return arr
    },
    delAddress (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    withdrawalsDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {address, ordersn, gold, actual_gold, addtime, status } = data.result.withdrawals
        return {
            address,
            ordersn,
            amount: gold,
            realAmount: actual_gold,
            time: addtime,
            status: parseInt(status), // 0:未審核, 1:已通過
        }
    },
    transferPage (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {min, service, content} = data.result.transfer_set
        // console.log(service)
        return {
            // tips: content
            min,
            service: `${parseFloat(service).toFixed(2)}`
        }
    },
    toTransfer (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    transferOut (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {transfer} = data.result
        let arr = []
        transfer.forEach( item => {
            let {addtime, ruid, gold, transferno} = item
            // 將後端時間, 切割成兩塊, 並拼接爲 html 模板
            let timeCut = addtime.split(' ')
            let timeEle = ''
            timeCut.forEach( item => {
                timeEle += `<p style="margin:0;">${item}</p>`
            })
            // 將 id 和 訂單號 拼接爲 新的 html模板
            let userEle = `<p style="margin:5px 0;">${ruid}</p><p style="margin:0;overflow-x:scroll;word-wrap:unset;word-break:keep-all;">訂單號:${transferno}</p>`
            // console.log(timeEle)
            arr.push([
                timeEle,
                userEle,
                gold
            ])
        })
        return arr
    },
    transferIn (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {transfer} = data.result
        let arr = []
        transfer.forEach( item => {
            let {addtime, gold, transferno, uid} = item
            // 將後端時間, 切割成兩塊, 並拼接爲 html 模板
            let timeCut = addtime.split(' ')
            let timeEle = ''
            timeCut.forEach( item => {
                timeEle += `<p style="margin:0;">${item}</p>`
            })
            // 將 id 和 訂單號 拼接爲 新的 html模板
            let userEle = `<p style="margin:5px 0;">${uid}</p><p style="margin:0;overflow-x:scroll;word-wrap:unset;word-break:keep-all;">訂單號:${transferno}</p>`
            // console.log(timeEle)
            arr.push([
                timeEle,
                userEle,
                gold
            ])
        })
        return arr
    },
    getOrders (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold, usd, ordersn} = data.result
        // let orders = []
        // receipt_fine.forEach( item => {
        //     let {original_gold, commission, still_gold, addtime} = item
        //     orders.push({
        //         time: addtime,
        //         startMoney: original_gold,
        //         commission,
        //         rebackMoneyCurrent: still_gold
        //     })
        // })
        return {
            // list: orders,
            money: gold,
            usdMoney: usd,
            orderSn: ordersn
        }
    },
    getPointsList (data) {
        if ( mistake(data) ) return false
        let {receipt_fine} = data.result
        let orders = []
        receipt_fine.forEach( item => {
            let {original_gold, commission, still_gold, addtime} = item
            orders.push({
                time: addtime,
                startMoney: original_gold,
                commission,
                rebackMoneyCurrent: still_gold
            })
        })
        return {
            list: orders,
        }
    },
    sdrclog (data) {
        if ( mistake(data) ) return false
        let {list} = data.result
        let orders = []
        list.forEach( item => {
            let {price, nickname, mobile, createtime} = item
            orders.push({
                nickname,
                mobile,
                price,
                createtime
            })
        })
        return {
            rcloglist: orders,
        }
    },
    exchangeNow (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold, min, max,content} = data.result
        return {
            money: gold,
            min,
            max,
            content,
        }
    },
    exchangeSubmit (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    startGetOrders (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    getOrdersList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {receipt} = data.result
        let list = []
        receipt.forEach( item => {
            let {id, original_gold, commission, still_gold, water_gold, ordersn} = item
            list.push({
                id,
                orderSn: ordersn,
                incomeTotal: (Number(water_gold) + Number(commission)).toFixed(2),
                streamTotal: `${water_gold} + ${commission}`,
                originMoney: original_gold,
                rebackMoney: still_gold,
            })
        })
        return list
    },
    getOrdersDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {receipt, receipt_fine} = data.result
        let {addtime, still_gold} = receipt
        let list = []
        receipt_fine.forEach( item => {
            let {addtime, commission, original_gold, still_gold} = item
            list.push({
                time: addtime,
                commission,
                originMoney: original_gold,
                rebackMoney: still_gold
            })
        })
        return {
            head: {
                time: addtime,
                rebackMoney: still_gold
            },
            list
        }
    },
    exchangeList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold_total, exchange_list} = data.result
        let list = []
        exchange_list.forEach( item => {
            let {ordersn, addtime, gold} = item
            list.push({
                orderSn: ordersn,
                time: addtime,
                money: gold,
            })
        })
        return {
            total: gold_total,
            list
        }
    },
    capital (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold, frozen, receipt_gold, CNY, round, total_gold} = data.result
        let images = []
        round.forEach( item => {
            let {thumb, url} = item
            images.push({
                img: thumb,
                url
            })
        })
        return {
            money: gold,
            frozen,
            toDay: receipt_gold,
            CNY,
            total: total_gold,
            images,
        }
    },
    pyList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let list = []
        data.result.goldrecord.forEach( item => {
            let {gold, addtime, paytype} = item
            list.push({
                money: Number(gold),
                time: addtime,
                typeName: paytype,
            })
        })
        return list
    },
    incomeList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {receipt_gold, receipt} = data.result
        let list = []
        receipt.forEach( item => {
            let {commission, addtime, ordersn} = item
            list.push({
                orderSn: ordersn,
                time: addtime,
                money: commission,
            })
        })
        return {
            total: receipt_gold,
            list
        }
    },
    incomeListTeam (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {receipt_gold, receipt} = data.result
        let list = []
        receipt.forEach( item => {
            let {sumgold, addtime, ordersn, ruid} = item
            list.push({
                orderSn: ordersn,
                time: addtime,
                money: sumgold,
                id: ruid
            })
        })
        return {
            total: receipt_gold,
            list
        }
    },
    streamDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold_total, exchange_list} = data.result
        let list = []
        exchange_list.forEach( item => {
            let {water_gold, addtime, ordersn} = item
            list.push({
                orderSn: ordersn,
                time: addtime,
                money: water_gold,
            })
        })
        return {
            total: gold_total,
            list
        }
    },
    toCertificate (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    certification (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {realname, card} = data.result
        let ID = `${card[0]}****************${card[card.length-1]}`
        return {
            name: realname,
            ID,
        }
    },
    certificationDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { realname, card, just_url, back_url } = data.result.authentication
        return {
            name: realname,
            ID: card,
            frontImg: just_url,
            backImg: back_url
        }
    },
    invite (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return data.result.img
    },
    team (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {level, teamtotal, straight, downi, teami, receipt_gold, team_gold} = data.result
        // let list = []
        // arrdown && arrdown.forEach( item => {
        //     let {realname, mobile, level, meet} = item
        //     list.push({
        //         name: realname || '未實名',
        //         mobile: `${mobile[0]}${mobile[1]}${mobile[2]}************${mobile[mobile.length-1]}`,
        //         level: `V${level}`,
        //         status: parseInt(meet) ? '已接單' : '休息中'
        //     })
        // })
        return {
            level: `v${level}`,
            personalIncome: receipt_gold,
            teamIncome: team_gold,
            direct: straight,
            efficaciousDirect: downi,
            teamPersons: teamtotal,
            efficaciousTeam: teami,
            // list,
        }
    },
    teamDirect (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { arrdown } = data.result
        let list = []
        arrdown.forEach( item => {
            let {realname, mobile, level, meet} = item
            list.push({
                name: realname || '未實名',
                mobile: `${mobile[0]}${mobile[1]}${mobile[2]}****${mobile[mobile.length-4]}${mobile[mobile.length-3]}${mobile[mobile.length-2]}${mobile[mobile.length-1]}`,
                level: `V${level}`,
                status: parseInt(meet) ? '已接單' : '休息中'
            })
        })
        return list
    },
    changePwdOfLogin (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    changePwdOfPay (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    announcement (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return data.result.notice_list
    },
    announcementDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            content: data.result.notice.detail
        }
    },
    feedback (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {feedback} = data.result
        let actions = []
        feedback.forEach( item => {
            let {id, title} = item
            actions.push({
                name: title,
                id
            })
        })
        return actions
    },
    sendFeedback (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    get_qq (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.qq
        }
    },
    applyFeedback (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    feedbackList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {feedback_list} = data.result
        let list = []
        feedback_list.forEach( item => {
            let {addtime, content, thumb, title} = item
            let images = thumb ? thumb.split(',') : []
            list.push({
                type: title,
                time: addtime,
                content,
                images
            })
        })
        return list
    },
    sdcustomerService (data) {
        if (mistake(data)) return false
        let list = data.result.list

        return list

    },



    auctionauction1login(data){
        if ( mistake(data) ) return false
        return {
            openid: data.result.openid,
            // ip: data.newclientip
        }

    },
    auctionauction1(data){
        if ( mistake(data) ) return false
        let {remai, lunbo, guanggao, yq_img} = data.result
        return{
            remai,
            lunbo,
            guanggao,
            yq_img
        }

    },
    auctionauction1getCategory(data){
        if ( mistake(data) ) return false
        let {category, lunbo, dianpu} = data.result
        return{
            category,
            lunbo,
            dianpu
        }
    },
    auctionauction1get_goods(data){
        if ( mistake(data) ) return false
        let {goods} = data.result
        return{
            goods
        }
    },
    auctionauction1auction_yy(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1goodsdetail(data){
        if ( mistake(data) ) return false
        let {goods, dianpu, xx} = data.result
        return {
            goods,
            dianpu,
            xx,
        }
    },
    auctionauction1get_auction(data){
        if ( mistake(data) ) return false
        let {qishu, gid, id} = data.result
        return{
            qishu,
            gid,
            id
        }
    },
    auctionauction1get_auction_order(data){
        if ( mistake(data) ) return false
        let {title, money, money1, wx_img, zfb_img, thumb} = data.result
        return{
            title, 
            money, 
            money1, 
            wx_img, 
            zfb_img, 
            thumb
        }
    },
    auctionauction1pay_order(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }


    },
    auctionauction1createimg(data){
        if ( mistake(data) ) return false
        let {imgurl} = data.result
        return {
            imgurl
        }
    },
    auctionauction1sk_set(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1sk_list(data){
        if ( mistake(data) ) return false
        let {zfb, wx, yhk} = data.result 
        return{
            zfb: zfb || "",
            wx: wx || "",
            yhk: yhk || ""
        }
    },
    auctionauction1address(data){
        if ( mistake(data) ) return false
        let {list} = data.result 
        let dataarr = []
        list.forEach((item, index)=>{
            dataarr.push({
                id: item.id,
                name: item.realname,
                tel: item.mobile,
                province: item.province,
                city:item.city,
                county:item.area,
                address: item.address,
                isDefault: item.isdefault == 1 ? true : false,
                areaCode: item.areaCode
            })
        })
        return {
            dataarr
        }

    },
    auctionauction1address_edit(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1address_del(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1address_add(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1mai_order_list(data){
        if ( mistake(data) ) return false
        let {list, dianpu} = data.result
        return {
            list,
            dianpu
        }
    },
    auctionauction1mai_order_detail(data){
        if ( mistake(data) ) return false
        let {list, sell_list} = data.result
        let newObj = {}
        Object.assign(newObj,list,sell_list);

        return {
            newObj
        }
    },
    auctionauction1sell_order_list(data){
        if ( mistake(data) ) return false
        let {list, dianpu} = data.result
        return {
            list,
            dianpu
        }
    },
    auctionauction1mai_order_status(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1sell_order_status(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1get_team(data){
        if ( mistake(data) ) return false
        let {list, ding} = data.result
        return {
            list,
            ding
        }

    },
    auctionauction1money_log(data){
        if ( mistake(data) ) return false
        let list = data.result.list
        return{
            list
        }

    },
    auctionauction1invite(data){
        if ( mistake(data) ) return false
        let {id, avatar, nickname, code, qrcode} = data.result
        return{
            id, 
            avatar, 
            nickname, 
            code, 
            qrcode
        }

    },
    auctionauction1cs_goods(data){
        if ( mistake(data) ) return false
        let {goods} = data.result
        return{
            list: goods
        }

    },
    auctionauction1cs_goods_detail(data){
        if ( mistake(data) ) return false
        let {id, marketprice, thumb, thumb_url, total, title, content} = data.result.goods
        return {
            detailId:id,
            marketprice,
            thumb,
            thumb_url,
            total,
            title,
            content
        }
    },
    auctionauction1cs_pay_list(data){
        if ( mistake(data) ) return false
        let {goods, address} = data.result
        let newObj = {
            gid: goods.id,
            marketprice: goods.marketprice,
            thumb: goods.thumb,
            thumb_url: goods.thumb_url,
            total: goods.total,
            title: goods.title,
            content: goods.content,
            aid: address.id,
            isdefault: address.isdefault,
            province: address.province,
            city: address.city,
            area: address.area,
            address: address.address,
            mobile: address.mobile,
            realname: address.realname

        }
        // Object.assign(newObj,goods,address);
        return {
            newObj

        }
    },
    auctionauction1cs_buy(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1sysset_text(data){
        if ( mistake(data) ) return false
        return {
            text: data.result.text
        }
    },
    auctionauction1get_cz(data){
        if ( mistake(data) ) return false
        let {wx_img, zfb_img} = data.result
        return {
            wx_img,
            zfb_img
        }
    },
    auctionauction1pay_cz(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1withdraw_submit(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },  
    auctionauction1get_member(data){
        if ( mistake(data) ) return false
        let {member} = data.result
        return {
            member
        }
    },
    auctionauction1invite(data){
        if ( mistake(data) ) return false
        let {id, avatar, nickname, code, qrcode} = data.result
        return {
            id, 
            avatar, 
            nickname, 
            code, 
            qrcode
        }
    },
    auctionauction1order_list(data){
        if ( mistake(data) ) return false
        let {list} = data.result
        return {
            list
        }
    },
    auctionauction1register(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1zhuan_auction(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1zhuan_jpb(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1member_edit(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },  
    auctionauction1get_kf(data){
        if ( mistake(data) ) return false
        let {kefu_qq, kefu_wx} = data.result
        return{
            kefu_qq,
            kefu_wx
        }
    },
    auctionauction1get_er(data){
        if ( mistake(data) ) return false
        let {list} = data.result
        return{
            list
        }
    },
    auctionauction1zhuan_order(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    auctionauction1zhuan_sxf(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    }




}