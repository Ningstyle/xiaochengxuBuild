const API = require("../api/api.js")
/**判断是否授权**/
const getSetting = data =>{
	wx.getSetting({
	  success(res) {
	    if (res.authSetting['scope.userInfo']) {
				console.log('授权成功')
			}else{
				wx.showModal({
				  title: '提示信息',
				  content: '您还未授权，建议打开授权设置',
				  success (res) {
				    if (res.confirm) {
				      wx.openSetting({})
				    }else if (res.cancel) {}
				  }
				})
				
			}
		}
	})
}
// 判断是否有新版本可用
const getupdateManager =data =>{
	const updateManager = wx.getUpdateManager()
	updateManager.onCheckForUpdate(function (res) {
	  // 请求完新版本信息的回调
	  console.log(res.hasUpdate)
	})
	updateManager.onUpdateReady(function () {
	  wx.showModal({
	    title: '更新提示',
	    content: '新版本已经准备好，是否重启应用？',
	    success: function (res) {
	      if (res.confirm) {
	        updateManager.applyUpdate()
	      }
	    }
	  })
	})
	updateManager.onUpdateFailed(function () {
	  // 新版本下载失败
	})
}
// 是否打开调试模式
const setEnableDebug =data =>{
	wx.setEnableDebug({
	  enableDebug: data
	})
}
module.exports = {
  getSetting,
	getupdateManager,
	setEnableDebug
}
