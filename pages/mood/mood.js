/* pages/mood/mood.js */

Page({
  /**
   * 页面的初始数据
   */
  data: {
    /* Feeling选项 */
    feelingList: [
      {
        text: 'great',
        icon: 'resources/feeling/great.svg',
      },
      {
        text: 'loving',
        icon: 'resources/feeling/loving.svg',
      },
      {
        text: 'good',
        icon: 'resources/feeling/good.svg',
      },
      {
        text: 'meh',
        icon: 'resources/feeling/meh.svg',
      },
      {
        text: 'not good',
        icon: 'resources/feeling/notgood.svg',
      },
      {
        text: 'very bad',
        icon: 'resources/feeling/verybad.svg',
      },
    ],
    /* Recent测试用数据 */
    recentList: [
      {
        date: '2022-06-17 14:30:20',
        feeling: 0
      },
      {
        date: '2022-06-18 15:33:10',
        feeling: 2
      },
      {
        date: '2022-06-19 09:00:13',
        feeling: 3
      },
      {
        date: '2022-06-20 22:13:00',
        feeling: 5
      },
    ],

    /* Swiper */
    background: ["/image/example/mood.svg", "/image/example/mood.svg"]
  },

  /**
   * 点击事件--Feeling
   */
  todayFeeling(res) {
    const index = res.currentTarget.dataset.index
    const feeling = res.currentTarget.dataset.feeling
    wx.showModal({
      title: feeling,
      content: "This isn't finished yet!",
      showCancel: false,
      confirmText: 'OK'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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