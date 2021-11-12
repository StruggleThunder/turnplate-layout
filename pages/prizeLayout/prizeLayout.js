
Page({

  data: {
    array: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    index: 2,

    prizeTotal: 8, // 奖品个数
    prizeList: [], // 奖品列表
    perPrize: {} // 每份奖品布局信息
  },

  onLoad: function (options) {
    this.initData();
  },

  // 数据初始化
  initData() {
    const screenWidth = wx.getSystemInfoSync().screenWidth;
    const perimeter = screenWidth * .9066;

    const prizeTotal = this.data.prizeTotal;
    const angle = (360 / prizeTotal) / 2; // 对角角度
    const ratio = Number(Math.sin(angle * (Math.PI * 2 / 360)).toFixed(2)); // 与半径的比率

    // 每块奖品区域的角度，宽高信息（单位rpx)
    const perPrize = {
      degree: 360 / prizeTotal,
      width: Math.floor((680 * ratio)),
      height: 680 * 0.5
    }

    const prizeList = [];
    for (let i = 0; i < prizeTotal; i++) {
      prizeList.push({
        name: `墨墨鸡块免费券${i}`,
        desc: '实付满80可用',
        img: '/images/coupon.png'
      })
    }

    this.setData({
      perimeter,
      perPrize,
      prizeList
    })

  },


  bindPickerChange(e) {
    const idx =  Number(e.detail.value);
    const arr = this.data.array;

    this.setData({
      prizeTotal: arr[idx]
    })
    this.initData();    
  }

})