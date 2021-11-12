Page({

  data: {
    perimeter: 320, // 直径
  },

  onLoad: function (options) {
    const system = wx.getSystemInfoSync();

    this.setData({
      perimeter: system.screenWidth * 0.92
    })

    this.drawPie();
  },

  drawPie() {
    const {
      PI
    } = Math;

    const ctx = wx.createCanvasContext("canvasImg");
    
    const perimeter = this.data.perimeter; // 周长
    const radius = perimeter * 0.5; // 半径
    const prizeTotal = 8; // 奖品个数
    const degree = 360 / prizeTotal;

    ctx.translate(radius, radius);

    for (let i = 0; i <prizeTotal; i++) {
      const color = i % 2 === 0 ? "#1df" : "#11f"; // 奇偶的颜色不同
      ctx.beginPath(); // 开始一条新路径
      ctx.moveTo(0, 0); // 移动到圆心d
      ctx.setFillStyle(color);
      ctx.arc(0, 0, radius, (270 - degree / 2 + (degree * i)) * PI / 180 , (270 - degree / 2 + degree + (degree * i)) * PI / 180); // 绘制圆弧
      ctx.closePath(); // 闭合路径
      ctx.fill();
    }
   
    ctx.draw();

  }
  
})