import axios from '@/libs/api.request'
import { CODE_LIST } from '@/constant'

export const getFundIndexData = data => {
  let stockObj = CODE_LIST.find(item => item.stockCode === data.stockCodes[0])
  return axios.request({
    url: `${stockObj.market}/index/fundamental`,
    method: 'post',
    data
  })
}
