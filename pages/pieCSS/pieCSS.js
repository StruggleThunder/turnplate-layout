Page({

  data: {
    array: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    index: 2,
    
    num: 6, // 转盘个数
  },

  onLoad: function (options) {
    
  },

  bindPickerChange(e) {
    const idx =  Number(e.detail.value);
    const arr = this.data.array;

    this.setData({
      num: arr[idx]
    })
  }
  
})