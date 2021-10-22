import request from '@/utils/request'

export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/core/userInfo/list/${page}/${limit}`,
      method: 'get',
      // data: serachObj  在请求体中传递json post请求使用，需要后端代码也要对应
      params: searchObj
    })
  },

  lock(id, status) {
  	return request({
  		url: `/admin/core/userInfo/lock/${id}/${status}`,
  		method: 'put'
  	})
  },

  getuserLoginRecordTop50(userId) {
    return request({
      url: `/admin/core/userLoginRecord/listTop50/${userId}`,
      method: 'get'
    })
  }

}