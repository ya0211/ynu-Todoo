//app.js
App({
  globalData: {
    openid: null,
    appid: null,
    unionid: null,
  },
  onLaunch: function () {
    wx.cloud.init({
      env: 'ya0211-1gcmrx9005ca7006',
      traceUser: true
    })
    this.getUserOpenId()
  },
  async getUserOpenId() {
    const res = await wx.cloud.callFunction({
      name: 'getID',
      data: {}
    })
    this.globalData.openid = res.result.openid
    this.globalData.appid = res.result.appid
    this.globalData.unionid = res.result.unionid
    return res.result.openid
  }
})