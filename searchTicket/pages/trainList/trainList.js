// pages/trainList/trainList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    trainList: [],
    winHeight: 600,
    currentTab: '1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var start = options.startStation;
    var end = options.endStation;
    var date = options.date;
    wx.setNavigationBarTitle({
      title: start + '→' + end,
    });
    this.setData({
      date: date
    });
    this.loadTrainList(start, end);
  },

  loadTrainList: function(start, end) {
    wx.showLoading({
      title: '正在加载中',
    });
    var page = this;
    wx.request({
      url: "https://api.jisuapi.com/train/station2s?appkey=22b3e0c55767a701&start="+ start + "&end=" + end + "&ishigh=0&date=" + this.data.date,
      method: "POST",
      data: {
        "start": start,
        "end": end,
        "date": this.data.date
      },
      success: function (res) {
        wx.hideLoading();
        var trainList = res.data.result.list;
        var size = trainList.length;
        var winHeight = size *100 + 30;
        page.setData({
          trainList: trainList,
          winHeight: winHeight
        })
      }
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
  onShareAppMessage: function () {

  }
})