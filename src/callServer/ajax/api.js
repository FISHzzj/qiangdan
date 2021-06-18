/**
 * 后端 请求, api 的 封装
 */

let common = '/app/index.php?i=96&c=entry&m=wx_shop&' //公共字段

export default {
    uploader: `${common}do=mobile&r=util.uploader`, //上傳圖片
    sendVerifycode: `${common}do=mobile&r=account.verifycode`, // 發送驗證碼
    login: `${common}do=mobile&r=account.login`, //登录
    register: `${common}do=mobile&r=account.register`, //註冊
    forget: `${common}do=mobile&r=account.forget`, // 忘記密碼
    center: `${common}do=mobile&r=points.center`, // 我的
    recharge: `${common}do=mobile&r=points.recharge`, //充幣
    rechargeList: `${common}do=mobile&r=points.rechargeList`, //充幣記錄
    rechargeDetail: `${common}do=mobile&r=points.rechargedetail`, //充幣詳情
    withdrawals: `${common}do=mobile&r=points.withdrawals`, // 提幣
    cashAddress: `${common}do=mobile&r=points.cashAddress`, // 提幣地址
    getAddressAtChange: `${common}do=mobile&r=points.pushAddress`, // 進入 修改提幣地址 頁面, 獲取初始數據
    changeAddress: `${common}do=mobile&r=points.pushAddress`, // 提交修改/添加 地址
    delAddress: `${common}do=mobile&r=points.pushAddress.delete`, // 提交修改/添加 地址
    toWithdrawals: `${common}do=mobile&r=points.withdrawals`, // 提幣提交
    withdrawalsList: `${common}do=mobile&r=points.withdrawalsList`, // 提幣記錄
    withdrawalsDetail: `${common}do=mobile&r=points.withdrawalsList.detail`, // 提幣記錄詳情
    transferPage: `${common}&do=mobile&r=points.transfer.into`, // 進入轉賬頁面, 獲取數據
    toTransfer: `${common}do=mobile&r=points.transfer`, // 進行轉賬
    transferOut: `${common}do=mobile&r=points.transferList`, // 轉出記錄
    transferIn: `${common}do=mobile&r=points.transferList.enter`, // 轉入記錄
    getOrders: `${common}do=mobile&r=points.getOrders`, // 接單頁面
    getPointsList: `${common}do=mobile&r=points.getOrders.getPointsList`, // 接單頁面 点击更多
    sdrclog: `${common}do=mobile&r=points.sd_rclog`, // 会员动态
    exchangeNow: `${common}do=mobile&r=points.exchange`, // 立即兌換頁面
    exchangeSubmit: `${common}do=mobile&r=points.exchange.submission`, // 提交兌換
    startGetOrders: `${common}do=mobile&r=points.receipt.start`, // 開始接單
    getOrdersList: `${common}do=mobile&r=points.getOrders.Record`, // 接單記錄
    getOrdersDetail: `${common}do=mobile&r=points.getOrders.details`, // 接單詳情
    exchangeList: `${common}do=mobile&r=points.exchangeList`, // 兌換記錄
    capital: `${common}do=mobile&r=points.capital`, // 資產頁面
    pyList: `${common}do=mobile&r=points.pyList`, // 交易記錄
    incomeList: `${common}do=mobile&r=points.incomeList`, // 收益記錄
    incomeListTeam: `${common}&do=mobile&r=points.incomeList.team`, // 團隊收益記錄
    streamDetail: `${common}do=mobile&r=points.streamDetail`, // 流水明細
    toCertificate: `${common}do=mobile&r=points.toCertificate.submission`, // 實名認證
    certification: `${common}do=mobile&r=points.toCertificate`, // 實名資料
    certificationDetail: `${common}do=mobile&r=points.toCertificate.details`, // 已填寫未通過的實名資料
    invite: `${common}do=mobile&r=points.invite`, // 邀請好友(二維碼)
    team: `${common}do=mobile&r=points.team`, // 我的團隊
    teamDirect: `${common}&do=mobile&r=points.team.straight`, // 我的團隊
    changePwdOfLogin: `${common}do=mobile&r=points.changepwd`, // 修改登錄密碼
    changePwdOfPay: `${common}do=mobile&r=points.changepaypwd`, // 修改資金密碼
    announcement: `${common}do=mobile&r=points.announcement`, // 動態分享(公告)
    announcementDetail: `${common}do=mobile&r=points.announcement.detail`, // 動態分享(公告)詳情
    feedback: `${common}do=mobile&r=points.feedback`, // 反饋類型的獲取
    sendFeedback: `${common}do=mobile&r=points.feedback.post`, // 提交反饋
    applyFeedback: `${common}do=mobile&r=points.recharge.apply`, // 提交凭证
    feedbackList: `${common}do=mobile&r=points.feedback.details`, // 反饋列表
    get_qq: `${common}do=mobile&r=points.feedback.get_qq`, // 获取QQ
    sdcustomerService: `${common}do=mobile&r=points.sd_customer_service`, //联系我们

    auctionauction1login: `${common}do=mobile&r=auction.auction1.login`, // 登录
    auctionauction1: `${common}do=mobile&r=auction.auction1`, // 首页
    auctionauction1getCategory: `${common}do=mobile&r=auction.auction1.getCategory`, // 传家
    auctionauction1get_goods: `${common}do=mobile&r=auction.auction1.get_goods`, // 商品列表
    auctionauction1auction_yy: `${common}do=mobile&r=auction.auction1.auction_yy`, // 商品预约
    auctionauction1goodsdetail: `${common}do=mobile&r=auction.auction1.goodsdetail`, // 商品详情
    auctionauction1get_auction: `${common}do=mobile&r=auction.auction1.get_auction`, // 竞拍下单扣除手续费
    auctionauction1get_auction_order: `${common}do=mobile&r=auction.auction1.get_auction_order`, // 获取竞拍页面数据
    auctionauction1pay_order: `${common}do=mobile&r=auction.auction1.pay_order`, // 支付竞拍订单
    auctionauction1createimg: `${common}do=mobile&r=auction.auction1.createimg`, // 上传图片
    auctionauction1sk_set: `${common}do=mobile&r=auction.auction1.createimg`, // 上传图片




}