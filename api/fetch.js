const util = require("../utils/util.js")
const BaseUrl= util.SetBaseUrl()
function toast(title,icon,time){
	wx.showToast({
		title: title,
		icon: icon,
		duration: time,
		mask:true
	})
}
/******
url:
data:
header:
methods
******/
export const Fetch = ({
  url = '',
  data = {},
  header = { "content-type": "application/json"},
  method = 'GET'
}) => {
  return new Promise((resolve, reject) => {
		toast('加载中','loading',500)
    wx.request({
      url: BaseUrl+ url,
      header: header,
      method: method,
      data: data,
      success: function(res){
				resolve(res)
			  toast('加载中','loading',0)
			},
      fail:function(res){
				reject(res)
			}
    })
  })
}