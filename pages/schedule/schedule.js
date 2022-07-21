/* pages/schedule/schedule.js */

import { getDateArray } from '../../utils/utils.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 日历 */
    thisDate: '', 
    nowDate: '',

    /* 任务清单 */
    todoList: [
      {"name":"","time":""},
      {"name":"","time":""},
      {"name":"","time":""},
      {"name":"","time":""},
      {"name":"","time":""}
    ]
  },

  /**
   * 加载数据库
   */
  async loadSchedule() {
    wx.showNavigationBarLoading()
    const that = this
    const date = this.data.nowDate
    const db = wx.cloud.database({})
    db.collection('schedule').doc('b69f67c062ac1ff90783b41d2bf32d7f').get({
      success: function(res) {
        const list = res.data.todoList
        console.log({
          id: date, 
          data: list['2022-06-17']})
        that.setData({
          /* 数据不足，写死为2022-06-17 */
          todoList: list['2022-06-17'],
        })
      }
    })
    wx.hideNavigationBarLoading()
  },
  
  /*
   * 点击事件--日期选择
   */
  changeDate(res) {
    const dateId = res.currentTarget.dataset.id;
    const time = res.currentTarget.dataset.time;
    this.setData({
      thisDate: dateId,
      nowDate: time
    })
    this.loadSchedule()
  },

  /*
   * 点击事件--勾选
   */
  checkboxChange(res) {
    const items = this.data.todoList
    const values = res.detail.value
    for (let i = 0 ; i < items.length; ++i) {
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
  onLoad: function (options) {
    const dateArray = getDateArray()
    this.setData({
      dateArray: dateArray,
      thisDate: dateArray[0].day,
      nowDate: dateArray[0].date
    })
    this.loadSchedule()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})