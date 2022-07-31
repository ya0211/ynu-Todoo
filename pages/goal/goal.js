// pages/goal/goal.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		/* Swiper */
		background: ['goals.svg', 'goals.svg'],

		/* Tabs */
		tabsList: {
			index: 0,
			list: [{
					title: 'Short Term',
					selected: true
				},
				{
					title: 'Medium Term',
					selected: false
				},
				{
					title: 'Long Term',
					selected: false
				}
			]
		},

		/* 测试用数据 */
		goalsList: [
			[{
					title: ' Drink 10 cups of water',
					text: '8 out of 10 complete',
					count: '80%'
				},
				{
					title: 'No fast food',
					text: '16 Day Sreak 🔥',
					count: '100%'
				},
				{
					title: 'Walk 10,000 Steps',
					text: '800 out of 10k complete',
					count: '9%'
				},
				{
					title: 'A drawing a day',
					text: '6 Day Sreak 🔥',
					count: '0%'
				},
				{
					title: 'Cook',
					text: '1 out of 3 complete',
					count: '88%'
				},
			],
			[{
				title: '😋😋😋',
				text: '😋',
				count: '30%'
			}, ],
			[{
					title: '',
					text: '',
					count: '0%'
				},
				{
					title: '',
					text: '',
					count: '0%'
				},
				{
					title: '',
					text: '',
					count: '0%'
				},
				{
					title: '',
					text: '',
					count: '0%'
				},
				{
					title: '',
					text: '',
					count: '0%'
				},
			]
		]

	},

	/**
	 * 点击事件--改变标签
	 */
	bindChangeTab(e) {
		const tabsList = this.data.tabsList
		const indexSelected = tabsList.index
		const indexNow = e.currentTarget.dataset.index
		
		if (!tabsList.list[indexNow].selected) {
			tabsList.list[indexNow].selected = true
			tabsList.list[indexSelected].selected = false
			tabsList.index = indexNow
			this.setData({
				tabsList
			})
		}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {

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