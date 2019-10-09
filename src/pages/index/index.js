Page({
  data: {
    loading: true,
    text: '',
    longText: ''
  },
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        loading: false,
        text: 'hello',
        longText: '这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的句子'
      })
    }, 4000)
  }
})
