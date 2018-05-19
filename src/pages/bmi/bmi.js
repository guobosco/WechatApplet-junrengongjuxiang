// pages/bmi/bmi.js
Page({
  STANDARD: 22,
  rules: [
    [18.5, 24, 28],
    [18.5, 25, 30, 35, 40],
    [18.5, 23, 25, 30]
  ],
  ruleConfig: ['偏瘦', '正常', '偏胖', '肥胖', '重度肥胖', '极重度肥胖'],
  dangerConfig: ['低（但其它疾病危险性增加）', '平均水平', '增加', '中度增加', '严重增加', '非常严重增加'],

  /**
   * 页面的初始数据
   */
  data: {
    array: ['中国标准', '国际标准', '亚洲标准'],
    index: 0,
    score: 0,
    height: 0,
    weight: 0,
    physicalCondition: '未知',
    weightStandard: 0,
    danger: '未知',
    charLt: '<'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  bindKeyHightInput: function (e) {
    this.setData({
      height: e.detail.value
    })
  },

  bindKeyWeightInput: function (e) {
    this.setData({
      weight: e.detail.value
    })
  },
  
  calculateBtn: function (e) {
    if (!this.data.height) {
      wx.showToast({
        title: '请输入身高'
      })
      return false;
    }

    if (!this.data.weight) {
      wx.showToast({
        title: '请输入体重'
      })
      return false;
    }
    this.calculate();
    this.weightStandardCalculate();
    this.physicalConditionCalculate();
  },
  //计算IBM值
  calculate: function () {
    let score = 0;
    let height = this.data.height / 100;
    score = (this.data.weight / (height * height)).toFixed(1);
    this.setData({
      score: score
    })
  },
  //计算标准体重
  weightStandardCalculate: function () {
    let weight = 0;
    let height = this.data.height / 100;
    weight = (this.STANDARD * (height * height)).toFixed(1);
    this.setData({
      weightStandard: weight
    })
  },
  //身体状况计算
  physicalConditionCalculate: function () {
    let rule = this.rules[this.data.index];
    let value = 0;
    let score = + this.data.score;
    let length = rule.length;
    if (score >= rule[length - 1]) {
      value = length;
    } else {
      for (let length = rule.length, i = length; i >= 1; --i) {
        if (score < rule[i] && score >= rule[i - 1])
          value = i;
      }
    }
    this.setData({
      physicalCondition: this.ruleConfig[value]
    })

    this.setData({
      danger: this.dangerConfig[value]
    })
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    var path = '/pages/bmi/bmi?id=2';
    return {
      title: '点我！算一算你超重了吗？',
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