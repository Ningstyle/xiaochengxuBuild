const app = getApp()
const util = require("../../utils/util.js") /**公用方法文件**/
const API = require("../../api/api.js")/**api文件**/
const $data = require('../../scripts/configData.js').data/**公用本地数据**/
const $weMethod = require('../../scripts/weMethod.js')
Page({
  data: {
		$data:{},
    noticeText:'公告通知，公告通知，公告通知，公告通知，公告通知，公告通知，公告通知，公告通知，公告通知，公告通知，',
		cardCur: 0,
		swiperList:[],
		current_scroll: 'tab1',
  },
	handleChangeScroll ({ detail }) {
		this.setData({
			current_scroll: detail.key
		});
	},
  onLoad: function () {
		this.setData({
			$data:$data
		})
    this.getGetNoticelist()
    this.getBanner()
		/**新版本更新提示**/
		$weMethod.getupdateManager()
  },
	onReady: function () {
		var _this = this
	},
	/**获取公告信息(请求示例)**/
	getGetNoticelist(){
		API.getNoticelist({}).then(res=>{
			var data = res.data.results
			this.setData({
				noticeText:res.data.results[0].noticeText+'。现在是：'+util.formatDate(new Date().getTime())+'',
			})
		}).catch(res=>{})
	},
	/**获取banner(请求示例)**/
	getBanner(){
		API.getBanner({}).then(res=>{
			for (let i = 0; i < res.data.results.length;i++){
				res.data.results[i].imgUrl = util.BannerImg() + res.data.results[i].imgUrl
				res.data.results[i].type = 'image'
			}
			/**设置数据**/
			this.setData({
				swiperList: res.data.results,
			})
		}).catch(err=>{
			console.log(err)
		})
	},
	/**检查是否授权**/
	isGetSetting (){
		$weMethod.getSetting()
	},
	/**cardSwiper**/
	cardSwiper(e) {
	  this.setData({
	    cardCur: e.detail.current
	  })
	},
	
})
