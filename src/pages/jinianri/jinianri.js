Page({

  /**
   * 页面的初始数据
   */
  data: {
    days:0,
    settingDate:"点我设置",
  },

  //设置picker的函数
  bindDateChange: function(e){
    this.setData({
      settingDate: e.detail.value
    });
    var todayParse = Date.parse(new Date()) / 1000 / 24 / 3600;
    var settingDateParse = Date.parse(new Date(this.data.settingDate)) / 1000 / 24 / 3600;
    var day = Math.ceil((todayParse - settingDateParse));
    this.setData({
      days: day
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
 

  /**
   * 用户点击右上角分享
   */
  //分享
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    var path = '/pages/jinianri/jinianri?id=1';
    return {
      title: '算算今天是你穿上军装的第几天？',
      path: path,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})