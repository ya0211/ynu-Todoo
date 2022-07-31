// pages/main/main.js

const app = getApp()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {		
		/* 滑动组件 */
		background: [],
		swiperText: [],

		/* 添加菜单 */
		menuList: [{
				title: "Information",
				options: [{
						index: 'user-profile',
						icon: 'user-profile.svg',
						text: 'Profile'
					},
					{
						index: 'about',
						icon: 'about.svg',
						text: 'About'
					},
				]
			},
			{
				title: "Business",
				options: [{
						index: 'calendar-schedule',
						icon: 'calendar-schedule-31.svg',
						text: 'Schedule'
					},
					{
						index: 'smileys',
						icon: 'smileys.svg',
						text: 'Mood'
					},
					{
						index: 'target-goal',
						icon: 'target-goal.svg',
						text: 'Goal'
					},
				]
			},
			{
				title: "Collection",
				options: [{
					index: 'letter-spacing',
					icon: 'letter-spacing-1.svg',
					text: 'Journal'
				}, ]
			},
		]
	},

	/**
	 * 加载数据库
	 */
	async loadMain() {
		const that = this
		const db = wx.cloud.database({})

		db.collection('Main').doc('quote-of-the-day').get({
			success(res) {
				that.setData({
					swiperText: res.data.text,
					background: res.data.color
				})
			}
		})
	},

	/**
	 * 点击事件--菜单
	 */
	bindMenuTap(e) {
		const index = e.currentTarget.dataset.index
		
		switch (index) {
			case "user-profile":
				this.menuProfile()
				break
			case "about":
				this.menuAbout()
				break
			case "calendar-schedule":
				this.menuSchedule()
				break
			case "smileys":
				this.menuMood()
				break
			case "target-goal":
				this.menuGoal()
				break
			case "letter-spacing":
				this.menuJournal()
				break
		}
	},
	menuProfile() {
		wx.navigateTo({
			url: '/packageMain/pages/profile/profile',
		})
	},
	menuAbout() {
		wx.navigateTo({
			url: '/packageAbout/pages/about/about',
		})
	},
	menuSchedule() {
		wx.navigateTo({
			url: '/packageMain/pages/schedule/schedule',
		})
	},
	menuMood() {
		wx.navigateTo({
			url: '/packageMain/pages/mood/mood',
		})
	},
	menuGoal() {
		wx.showModal({
			title: 'goal',
			content: "This isn't finished yet!",
			showCancel: false,
			confirmText: 'OK'
		})
	},
	menuJournal() {
		wx.showModal({
			title: 'journal',
			content: "This isn't finished yet!",
			showCancel: false,
			confirmText: 'OK'
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.loadMain()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {
	
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})