Page({

  data: {
    prizeTotal: 6, // 奖品个数
    perPrize: {}
  },

  onLoad: function (options) {
    
    const prizeTotal = this.data.prizeTotal;
    const angle = (360 / prizeTotal) / 2; // 对角角度
    const ratio = Number(Math.sin(angle * (Math.PI * 2 / 360)).toFixed(2)); // 与半径的比率

    // 每块奖品区域的角度，宽高信息（单位rpx)
    const perPrize = {
      degree: 360 / prizeTotal,
      width: Math.floor((680 * ratio)),
      height: 680 * 0.5
    }

    this.setData({
      perPrize
    })
  },

  
})