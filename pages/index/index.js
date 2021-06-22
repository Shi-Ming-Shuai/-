// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null, // 用户信息
  },
  // 登录接口
  login() {
    console.log('登录');
    // 官方获取用户信息接口
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // 得到用户信息
        this.setData({
          userInfo: res.userInfo
        })
        // 设置本地存储(下次登录如果本次存储存在则无需再次登录)
        wx.setStorageSync('userInfo', res.userInfo);
      }
    })
  },
  // 退出登录
  loginOut() {
    this.setData({
      userInfo: null
    })
    // 清除本地缓存
    wx.setStorageSync('userInfo', null);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取本地缓存 是否存在用户数据 如果存在则无需显示登录按钮
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      // 存在用户信息
      this.setData({
        userInfo
      })
    }
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