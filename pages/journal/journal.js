/* pages/journal/journal.js */

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* Modal */
    model: {
      content: "This isn't finished yet!",
      cancelText: 'Cancel',
      confirmText: 'OK',
    },

    /* 文件夹列表 */
    folder: [
      {"clicked":false,"name":"","list":[],"icon":""},
      {"clicked":false,"name":"","list":[],"icon":""},
      {"clicked":false,"name":"","list":[],"icon":""},
      {"clicked":false,"name":"","list":[],"icon":""},
      {"clicked":false,"name":"","list":[],"icon":""}
    ],

    /* 文件夹操作 */
    slideButtons: [{
      src: '/pages/journal/resources/silde/edit.svg'
    }, {
      src: '/pages/journal/resources/silde/del.svg'
    }],

    /* Swiper */
    background: ["/image/example/journal.svg", "/image/example/journal.svg"]
  },

  /**
   * 加载数据库
   */
  async loadJournal() {
    wx.showNavigationBarLoading()
    const that = this
    const db = wx.cloud.database({})
    db.collection('journal').doc('8f75309d62ad6cc909176a7070d77601').get({
      success: function(res) {
        that.setData({
          folder: res.data.folder,
        })
      }
    })
    wx.hideNavigationBarLoading()
  },

  /**
   * 点击事件--滑动操作
   */
  slideButton(res) {
    const folder = this.data.folder
    const index = res.detail.index
    const itemIndex = res.currentTarget.dataset.index
    if (index == 0) {
      wx.setStorageSync('folder', folder[itemIndex])
      wx.navigateTo({
        url: '/packageJournal/pages/edit/edit'
      })
    } else if (index == 1) {
      this.deletFolder(itemIndex)
    }
  },
  deletFolder(index) {
    const folder = this.data.folder
    const model = this.data.model
    wx.showModal({
      title: folder[index].name,
      content: model.content,
      cancelText: model.cancelText,
      confirmText: model.confirmText,
      success(res) {
        if (res.confirm) {
          console.log({
            'index': index,
            'msg': 'confirm'
          })
          wx.showToast({
            title: 'success',
            duration: 500
          })
        } else if (res.cancel) {
          console.log({
            'index': index,
            'msg': 'cancel'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadJournal()
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
