// pages/listsel/lisgsel.js
Page({

    /**
     * 页面的初始数据
     */
    
    data: {
        classifyblk1: true,
        classifyblk2: true,
        classifyblk3: true,
        listval:[
            {
                title:'商城类型',wrap:[
                    [
                        { color: '#ff0000', item:'不限'},
                        { color: '#666666', item: '旗舰店' },
                        { color: '#666666', item: '专营店' },
                        { color: '#666666', item: '专卖店' }
                    ]
                ]
            },
            {
                title: '商城类型', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: 'R标' },
                        { color: '#666666', item: 'TM标' }
                    ] 
                ]
            },    
            {
                title: '所属行业', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '家装家饰' },
                        { color: '#666666', item: '服饰鞋包' },
                        { color: '#666666', item: '美容护理' },
                    ],
                    [
                        { color: '#666666', item: '母婴用品' },
                        { color: '#666666', item: '3C数码' },
                        { color: '#666666', item: '户外运动' },
                        { color: '#666666', item: '食品保健' }
                    ],
                    [
                        { color: '#666666', item: '玩乐收藏' },
                        { color: '#666666', item: '游戏话费' },
                        { color: '#666666', item: '汽车配件' },
                        { color: '#666666', item: '书籍音像' }
                    ],
                    [
                        { color: '#666666', item: '珠宝首饰' },
                        { color: '#666666', item: '生活服务' },
                        { color: '#666666', item: '其他行业' },
                    ]
                    
                ]
            },   
            {
                title: '商城类型', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '01类' },
                        { color: '#666666', item: '02类' },
                        { color: '#666666', item: '03类' }
                    ],
                    [
                        { color: '#666666', item: '04类' },
                        { color: '#666666', item: '05类' },
                        { color: '#666666', item: '06类' },
                        { color: '#666666', item: '07类' }
                    ],
                    [
                        { color: '#666666', item: '08类' },
                        { color: '#666666', item: '09类' },
                        { color: '#666666', item: '10类' },
                        { color: '#666666', item: '11类' }
                    ],
                    [
                        { color: '#666666', item: '12类' },
                        { color: '#666666', item: '13类' },
                        { color: '#666666', item: '14类' },
                        { color: '#666666', item: '15类' }
                    ],
                    [
                        { color: '#666666', item: '16类' },
                        { color: '#666666', item: '17类' },
                        { color: '#666666', item: '18类' },
                        { color: '#666666', item: '19类' }
                    ],
                    [
                        { color: '#666666', item: '20类' },
                        { color: '#666666', item: '21类' },
                        { color: '#666666', item: '22类' },
                        { color: '#666666', item: '23类' }
                    ],
                    [
                        { color: '#666666', item: '24类' },
                        { color: '#666666', item: '25类' },
                        { color: '#666666', item: '26类' },
                        { color: '#666666', item: '27类' }
                    ],
                    [
                        { color: '#666666', item: '28类' },
                        { color: '#666666', item: '29类' },
                        { color: '#666666', item: '30类' },
                        { color: '#666666', item: '31类' }
                    ],
                    [
                        { color: '#666666', item: '32类' },
                        { color: '#666666', item: '33类' },
                        { color: '#666666', item: '34类' },
                        { color: '#666666', item: '35类' }
                    ],
                    [
                        { color: '#666666', item: '36类' },
                        { color: '#666666', item: '37类' },
                        { color: '#666666', item: '38类' },
                        { color: '#666666', item: '39类' }
                    ],
                    [
                        { color: '#666666', item: '40类' },
                        { color: '#666666', item: '41类' },
                        { color: '#666666', item: '42类' },
                        { color: '#666666', item: '43类' }
                    ],
                    [
                        { color: '#666666', item: '44类' },
                        { color: '#666666', item: '45类' },
                    ]
                ]
            },  
            {
                title: '动态评分', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '5.0以上' },
                        { color: '#666666', item: '4.9分以上' },
                        { color: '#666666', item: '4.8分以上' }
                    ],
                    [
                        { color: '#666666', item: '4.7分以上' },
                        { color: '#666666', item: '4.6分以上' },
                        { color: '#666666', item: '4.5分以上' }
                    ]
                ],
            },  
            {
                title: '扣分情况', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '全无扣分' },
                        { color: '#666666', item: '一般扣分' },
                        { color: '#666666', item: '严重扣分' }
                    ],
                    [
                        { color: '#666666', item: '售假扣分' }
                    ]
                ],
            }, 
            {
                title: '纳税资质', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '一般纳税人' },
                        { color: '#666666', item: '小规模纳税人' }
                        
                    ]
                ],
            }, 
            {
                title: '是否带货', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '是否带货' },
                        { color: '#666666', item: '是否带货' }

                    ]
                ]
            }, 
            {
                title: '提供货源', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '提供货源' },
                        { color: '#666666', item: '提供货源' }

                    ]
                    
                ]
            }, 
            {
                title: '商标过户', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '商标过户' },
                        { color: '#666666', item: '商标过户' }
                    ]
                ]
            },
            {
                title: '能否贴牌', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '可贴牌' },
                        { color: '#666666', item: '不能贴牌' }

                    ]
                    
                ]
            },  
            {
                title: '所在地区', wrap: [
                    [
                        { color: '#ff0000', item: '不限' },
                        { color: '#666666', item: '华东地区' },
                        { color: '#666666', item: '华南地区' },
                        { color: '#666666', item: '华中地区' }
                    ],
                    [
                        { color: '#666666', item: '华北地区' },
                        { color: '#666666', item: '西北地区' },
                        { color: '#666666', item: '西南地区' },
                        { color: '#666666', item: '东北地区' }
                    ],
                    [
                        { color: '#666666', item: '港澳台地区' },
                        { color: '#666666', item: '海外地区' }
                    ]
                ]
            }
            ]
    },
    more: function (e) {
        let id = e.target.dataset.id;
        let list = this.data.listval;
        let item1;
        let item2;
        let item3 = id.substr(-1);
        if (id.length < 5) {
            item1 = id.substr(0, 1);
            item2 = id.substring(1, id.length - 1);
        } else {
            item1 = id.substr(0, 2);
            item2 = id.substring(2, id.length - 1);
        }
        let length = list[item1].wrap.length;
        let len;
        for(let i=0;i<length;i++){
             len= list[item1].wrap[i].length;
            for (let j = 0; j < len; j++) {
                if (i == item2&&j == item3) {
                    list[item1].wrap[i][j].color = "#ff0000";
                } else {
                    list[item1].wrap[i][j].color = "#666666";
                }
            };
        };
        this.setData({
            listval: list
        })
    },
    classifytap:function(e){
        let num = e.currentTarget.dataset.item;
        if(num==1){
            this.setData({
                classifyblk1:!this.data.classifyblk1,
                classifyblk2:true,
                classifyblk3: true,
            })
        }else if(num==2){
            this.setData({
                classifyblk1: true,
                classifyblk2: !this.data.classifyblk2,
                classifyblk3: true,
            })
        }else{
            this.setData({
                classifyblk1: true,
                classifyblk2: true,
                classifyblk3: !this.data.classifyblk3,
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