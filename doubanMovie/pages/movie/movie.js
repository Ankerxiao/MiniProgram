// pages/movie/movie.js

var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      "/images/haibao/1.jpg",
      "/images/haibao/2.jpg",
      "/images/haibao/3.jpg",
      "/images/haibao/4.jpg"
    ]
  },

  switchNav: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      currentTab: id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        page.setData({
          winHeight: res.windowWidth
        });
        page.setData({
          winHeight: res.windowHeight
        });
      },
    });
    this.loadMovies();
  },

  loadMovies: function () {
    var page = this;
    // var key = util.getDataKey();
    wx.request({
      url: 'https://api.douban.com/v2/movie/im_theaters?apikey=' + 'key',
      method: 'GET',
      header: {
        'Content-Type': "json"
      },
      success: function (res) {
        console.log(res);
        var subjects = res.data.subjects;
        var size = subjects.length;
        var len = parseInt(size/3);
        console.log(len);
        console.log(subjects);
        page.setData({ movies: subjects });
        page.setData({ winHeight: (len + 1) *230 });
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