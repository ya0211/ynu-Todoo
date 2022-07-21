// packageMain/pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl : 'resources/developer.svg',
  },
  /** 
   * 点击事件--选择头像
   */
  onChooseAvatar(res) {
    console.log(res)
    const _avatarUrl = res.detail.avatarUrl
    this.setData({
      avatarUrl: _avatarUrl
    })
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