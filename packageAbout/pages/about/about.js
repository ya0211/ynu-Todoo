// packageAbout/pages/about/about.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		/* 弹窗 */
		showDialog: false,

		/* 项目清单 */
		list: [{
			id: 'designer',
			name: 'Designer',
			open: false,
			pages: [{
				icon: '/packageAbout/resources/figma.svg',
				zh: 'Figma ID: @malfabone',
				url: 'https://www.figma.com/@malfabone'
			}, {
				icon: '/packageAbout/resources/behance.svg',
				zh: 'Behance ID: @malfabone',
				url: 'https://www.behance.net/malfabone/info'
			}]
		}, {
			id: 'todooApp',
			name: 'Todoo - Wellness App',
			open: false,
			pages: [{
				icon: '',
				zh: 'Material Repository',
				url: 'https://www.figma.com/community/file/1075323392991041551'
			}, {
				icon: '',
				zh: 'License: CC BY 4.0',
				url: 'https://creativecommons.org/licenses/by/4.0/'
			}]
		}, {
			id: 'developer',
			name: 'Developer',
			open: false,
			pages: [{
				icon: '/packageAbout/resources/github.svg',
				zh: 'Github ID: ya0121',
				url: 'https://github.com/ya0211'
			}, {
				icon: '/packageAbout/resources/mail.svg',
				zh: 'Email: sanmer@sanmer.club',
				url: ''
			}]
		}, {
			id: 'repository',
			name: 'Todoo - Github',
			open: false,
			pages: [{
				icon: '',
				zh: 'GitHub Repository',
				url: 'https://github.com/ya0211/miniprogram-Todoo.git'
			}, {
				icon: '',
				zh: 'License: GPL-3.0',
				url: 'https://www.gnu.org/licenses/gpl-3.0.html'
			}]
		}]
	},
	
	/**
	 * 点击事件--显示内容
	 */
	bindKindClick(e) {
		const id = e.currentTarget.id
		const list = this.data.list

		for (let i = 0, len = list.length; i < len; ++i) {
			if (list[i].id === id) {
				list[i].open = !list[i].open
			} else {
				list[i].open = false
			}
		}
		this.setData({
			list
		})
	},

	/**
	 * 点击事件--复制弹窗
	 */
	bindOpenDialog(e) {
		let zh = e.currentTarget.dataset.zh
		let url = e.currentTarget.dataset.url

		if (url == '') {
			var strArray = zh.split(": ");
			zh = strArray[0];
			url = strArray[1];
		}
		this.setData({
			showDialog: true,
			titleDialog: zh,
			descDialog: url
		})
	},
	closeDialog() {
		this.setData({
			showDialog: false,
		})
	},

	/**
	 * 点击事件--复制到剪切板
	 */
	bindCopy(e) {
		const url = e.currentTarget.dataset.url
		
		wx.setClipboardData({
			data: url,
			success() {
				wx.showToast({
					title: '复制成功',
					icon: 'success',
					duration: 1000
				})
			}
		})
		this.closeDialog()
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