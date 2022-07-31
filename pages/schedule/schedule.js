// pages/schedule/schedule.js

import {
	getDateArray
} from '../../utils/utils.js'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		/* 日历 */
		day: null,
		date: null,

		/* 任务清单 */
		todoList: [{
				"name": "",
				"time": ""
			},
			{
				"name": "",
				"time": ""
			},
			{
				"name": "",
				"time": ""
			},
			{
				"name": "",
				"time": ""
			},
			{
				"name": "",
				"time": ""
			}
		]
	},

	/**
	 * 加载数据库
	 */
	async loadSchedule() {
		const that = this
		const date = this.data.date
		const db = wx.cloud.database({})
		
		db.collection('Schedule').doc('b69f67c062ac1ff90783b41d2bf32d7f').get({
			success(res) {
				const list = res.data.todoList
				console.log({
					id: date,
					data: list['2022-06-17']
				})
				that.setData({
					/* 数据不足，写死为2022-06-17 */
					todoList: list['2022-06-17'],
				})
			}
		})
	},

	/*
	 * 点击事件--日期选择
	 */
	bindDateChange(e) {
		const day = e.currentTarget.dataset.day;
		const date = e.currentTarget.dataset.date;
		this.setData({
			day: day,
			date: date
		})
		this.loadSchedule()
	},

	/*
	 * 点击事件--勾选
	 */
	bindCheckboxChange(e) {
		const items = this.data.todoList
		const values = e.detail.value
		for (let i = 0; i < items.length; ++i) {
			items[i].checked = false
			for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
				if (items[i].time == values[j]) {
					items[i].checked = true
					console.log(items[i])
				}
			}
		}
		this.setData({
			items
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		const dateArray = getDateArray()
		this.setData({
			dateArray: dateArray,
			day: dateArray[0].day,
			date: dateArray[0].date
		})
		this.loadSchedule()
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