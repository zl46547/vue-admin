import {
  getFundIndexData
} from '@/api/fund'

export default {
  state: {
    userName: ''
  },
  mutations: {
    setAvatar (state, avatarPath) {
      state.avatarImgPath = avatarPath
    }
  },
  actions: {
    getIndexFund ({ commit }, data) {
      return new Promise((resolve, reject) => {
        getFundIndexData(data).then(res => {
          if (res.data.message === 'success') {
            resolve(res.data.data)
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
