import axios from '@/libs/api.request'

export const getFundIndexData = data => {
  return axios.request({
    url: 'a/index/fundamental',
    method: 'post',
    data
  })
}
