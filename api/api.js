import { Fetch } from './fetch.js';
// 获取公告信息接口（封装示例）
export const getNoticelist = data => {
  return Fetch({
    url: 'getNotice/getNoticelist',
    data: data
  })
}
// 获取banner接口
export const getBanner = data => {
  return Fetch({
    url: 'getBanner/Bannerlist',
		// method:'post',
    data: data
  })
}