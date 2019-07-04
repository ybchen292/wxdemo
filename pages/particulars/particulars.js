// pages/particulars/particulars.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isshade:false,
      shadeimg:''
  },
  bannertap:function(e){
      let src=e.target.dataset.src;
      this.setData({
          shadeimg:src,
          isshade:true
      })
  },  
  shadetap:function(){
      this.setData({
          shadeimg: "",
          isshade: false
      })
  },
  shadeimgtap:function(){
  },
  skiptap:function(e){
      let item=e.target.dataset.id;
      const query = wx.createSelectorQuery()
      query.select('.'+item).boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
          let scrollTop = res[0].top + res[1].scrollTop;
          wx.pageScrollTo({
              scrollTop: scrollTop,
              duration: 200
          })
        //   res[0].top       // #the-id节点的上边界坐标
        //   res[1].scrollTop // 显示区域的竖直滚动位置
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