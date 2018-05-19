Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  zilizhang: function (event) {
    wx.switchTab({
      url: '../pages/zilizhang/zlz',
    });
  },
  bmi: function (event) {
    wx.switchTab({
      url: '../pages/bmi/bmi',
    });
  },
  jinianri: function (event) {
    wx.switchTab({
      url: '../pages/jinianri/jinianri',
    });
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
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    var path = 'index/index?id=2';
    return {
      title: '这里有一个超级好用的军人工具箱！快来用！',
      path: path,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },


})