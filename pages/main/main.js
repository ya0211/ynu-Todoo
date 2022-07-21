/* pages/main/main.js */

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 滑动组件 */
    background: ['#B57BFF'],
    swiperText: [''],

    /* 添加菜单 */
    menuList: [
      {
        title: "Information",
        options: [
          {
            index: 'user-profile',
            icon: 'user-profile.svg',
            text: 'Profile'
          },
          {
            index: 'id',
            icon: 'about.svg',
            text: 'ID'
          },
        ]
      },
      {
        title: "Business",
        options: [
          {
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
        options: [
          {
            index: 'letter-spacing',
            icon: 'letter-spacing-1.svg',
            text: 'Journal'
          },
          {
            index: 'todoo-app',
            icon: 'todoo-app.svg',
            text: 'About'
          },
        ]
      },
    ]
  },

  /**
   * 加载数据库
   */
  async loadMain() {
    wx.showNavigationBarLoading()
    const that = this
    const db = wx.cloud.database({})
    db.collection('main').doc('quote-of-the-day').get({
      success: function(res) {
        that.setData({
          swiperText: res.data.text,
          background: res.data.color,
          loading: false
        })
      }
    }
    )
    wx.hideNavigationBarLoading()
  },

  /**
   * 点击事件--菜单
   */
  menuTap(res) {
    const index = res.currentTarget.dataset.index
    switch(index) {
      case "user-profile":
        this.menuProfile()
        break
      case "id":
        this.menuID()
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
      case "todoo-app":
        this.menuAbout()
        break
    }
  },
  menuProfile(res) {
    wx.navigateTo({
      url: '/packageMain/pages/profile/profile',
    })
  },
  menuID(res) {
    if (app.globalData.openid == null) {
      app.getUserOpenId()
    }
    wx.setStorageSync('info', 
    {
      'openid':  app.globalData.openid ,
      'appid': app.globalData.appid ,
      'unionid': app.globalData.unionid
    })
    wx.navigateTo({
      url: '/packageMain/pages/id/id',
    })
  },
  menuSchedule(res) {
    console.log('schedule')
  },
  menuMood(rea) {
    console.log('mood')
  },
  menuGoal(res) {
    console.log('goal')
  },
  menuJournal(res) {
    console.log('journal')
  },
  menuAbout(res) {
    wx.navigateTo({
      url: '/packageAbout/pages/about/about',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMain()
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