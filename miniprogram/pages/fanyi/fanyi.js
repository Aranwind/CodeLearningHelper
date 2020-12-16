// miniprogram/pages/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

input(e) {
    this.setData({
      searchVal: e.detail.value
    })
    console.log(e.detail.value)
 },
 clear: function () {
  this.setData({
    searchVal: ""
  })
},
search: function(){
 let key = this.data.searchVal;
 console.log("查询的内容", key)
 wx: wx.showLoading({
  title: '加载中',
  mask: true,
  success: function (res) { },
  fail: function (res) { },
  complete: function (res) { },
})
 const db = wx.cloud.database({env:"origin-2gq9z9b2ba4958de"});
 const _ = db.command
 db.collection('test').where(_.or([{
     contain: db.RegExp({
       regexp: '.*' + key,
       options: 'i',
     })
   },
   {
     mean: db.RegExp({
       regexp: '.*' + key,
       options: 'i',
     })
   }
 ])).get({
   success: res => {
     console.log(res.data)
     wx.hideLoading();
     for (var i = 0; i < res.data.length; i++) {
      var mean = "goodList[" + i + "].mean"
      var id = "goodList[" + i + "].id"
      var contain = "goodList[" + i + "].contain"
      this.setData({
        [mean]: res.data[i].mean,
        [id]: res.data[i]._id,
        [contain]: res.data[i].contain,
      })
     }
   },
   
   fail: err => {
     console.log(err)
     wx.hideLoading();
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