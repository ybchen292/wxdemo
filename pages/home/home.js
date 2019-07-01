Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerIcon1: ['../images/icon-0_02.png', '../images/icon-0_04.png', '../images/icon-0_06.png','../images/icon-0_08.png'],
    headerIcon2: ['../images/icon-0_14.png', '../images/icon-0_15.png', '../images/icon-0_16.png','../images/icon-0_17.png'],
    headerText1:['天猫网店','京东网店','淘宝网店','天猫入驻'],
    headerText2: ['网店估价', '求购网店', '出售网店', '在线回答'],
    banners: ['../images/banner_2.png', '../images/banner_3.png', '../images/banner_4.png'],
    shopItems: [
      // { title: '江浙沪地区女装天猫旗舰店，一千万营业额动态全红...', genre: '专营店', brand: 'B标',category:'3C数码',region:'华中地区',          price:'123.4'},
      // { title: '江浙沪地区女装天猫旗舰店，一千万营业额动态全红...', genre: '专营店', brand: 'B标', category: '3C数码', region: '华中地区        ', price: '123.4' },
      // { title: '江浙沪地区女装天猫旗舰店，一千万营业额动态全红...', genre: '专营店', brand: 'B标', category: '3C数码', region: '华中地区        ', price: '123.4' },
      // { title: '江浙沪地区女装天猫旗舰店，一千万营业额动态全红...', genre: '专营店', brand: 'B标', category: '3C数码', region: '华中地区        ', price: '123.4' },
      // { title: '江浙沪地区女装天猫旗舰店，一千万营业额动态全红...', genre: '专营店', brand: 'B标', category: '3C数码', region: '华中地区        ', price: '123.4' }
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'http://192.168.1.158:8080/miniIndex', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          shopItems: JSON.parse(res.data)
        })
      }
    })
   setTimeout(()=>{
     console.log(this.data.shopItems);
   },1000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
    // const query = wx.createSelectorQuery();
    // query.selectAll(".banner-img").boundingClientRect(function (rect) {
    //   console.log(rect);
    //   console.log(rect[0]);
    //   console.log(rect[0].height)
    //   console.log(rect[0].width)
    // });

    // query.selectAll(".banner-img").fields({
    //   size:true,
    //   computedStyle:['height']
    // },function(res){
    //   console.log(res);
    //   console.log(res.height);
    //    // 节点的高度
    // });
    // query.exec();
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
    
  },

  
})