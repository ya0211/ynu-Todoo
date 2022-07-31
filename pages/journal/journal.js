// pages/journal/journal.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		/* 文件夹列表 */
		folderList: [{
				"clicked": false,
				"name": "",
				"list": [],
				"icon": ""
			},
			{
				"clicked": false,
				"name": "",
				"list": [],
				"icon": ""
			},
			{
				"clicked": false,
				"name": "",
				"list": [],
				"icon": ""
			},
			{
				"clicked": false,
				"name": "",
				"list": [],
				"icon": ""
			},
			{
				"clicked": false,
				"name": "",
				"list": [],
				"icon": ""
			}
		],

		/* 文件夹操作 */
		slideButtons: [{
			src: '/pages/journal/resources/silde/edit.svg'
		}, {
			src: '/pages/journal/resources/silde/del.svg'
		}],

		/* Swiper */
		background: ['journal.svg', 'journal.svg']
	},

	/**
	 * 加载数据库
	 */
	async loadJournal() {
		const that = this
		const db = wx.cloud.database({})

		db.collection('Journal').doc('8f75309d62ad6cc909176a7070d77601').get({
			success(res) {
				that.setData({
					folderList: res.data.folder,
				})
			}
		})
	},

	/**
	 * 点击事件--滑动操作
	 */
	bindButtonTap(e) {
		const folderList = this.data.folderList
		const indexButton = e.detail.index
		const indexFolder = e.currentTarget.dataset.index
		const folder = folderList[indexFolder]

		if (indexButton == 0) {
			wx.setStorageSync('folder', folder)
			wx.navigateTo({
				url: '/packageJournal/pages/edit/edit'
			})
		} else if (indexButton == 1) {
			this.deleteFolder(folder)
		}
	},
	deleteFolder(folder) {
		wx.showModal({
			title: folder.name,
			content: "This isn't finished yet!",
			cancelText: 'Cancel',
			confirmText: 'OK',
			success(res) {
				if (res.confirm) {
					wx.showToast({
						title: 'success',
						icon: 'success',
						duration: 500
					})
				} else if (res.cancel) {
					wx.showToast({
						title: 'cancel',
						icon: 'error',
						duration: 500
					})
				}
			}
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.loadJournal()
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