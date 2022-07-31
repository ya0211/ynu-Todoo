//app.js

App({
	globalData: {
		userInfoList: {
			openid: null,
			appid: null,
			unionid: null,
		}
	},

	onLaunch() {
		wx.cloud.init({
			env: 'ya0211-1gcmrx9005ca7006',
			traceUser: true
		})

		this.getUserOpenId()
	},

	async getUserOpenId() {
		const userInfoList = this.globalData.userInfoList
		const res = await wx.cloud.callFunction({
			name: 'getUserOpenId',
			data: {}
		})
		userInfoList.openid = res.result.openid
		userInfoList.appid = res.result.appid
		userInfoList.unionid = res.result.unionid
	}
})