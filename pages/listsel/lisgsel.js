// pages/listsel/lisgsel.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classifytext1:'black',
        classifytext2: 'black',
        classifytext3: 'black',
        classifyicon1: '../images/listsel_07.png',
        classifyicon2: '../images/listsel_07.png',
        classifyicon3: '../images/listsel_07.png',
    },
    classifytap:function(e){
        let num = e.currentTarget.dataset.item;
        if(num==1){
            this.setData({
                classifyicon1: this.data.classifyicon1 == '../images/listsel_07.png' ? '../images/listsel_10.png' : '../images/listsel_07.png',
                classifytext1: this.data.classifytext1=='black' ? 'red' : 'black'
            })
        }else if(num==2){
            this.setData({
                classifyicon2: this.data.classifyicon2 == '../images/listsel_07.png' ? '../images/listsel_10.png' : '../images/listsel_07.png',
                classifytext2: this.data.classifytext2 == 'black' ? 'red' : 'black'
            })
        }else{
            this.setData({
                classifyicon3: this.data.classifyicon3 == '../images/listsel_07.png' ? '../images/listsel_10.png' : '../images/listsel_07.png',
                classifytext3: this.data.classifytext3 == 'black' ? 'red' : 'black'
            })
        }
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