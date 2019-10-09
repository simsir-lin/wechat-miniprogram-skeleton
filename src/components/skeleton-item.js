Component({
  externalClasses: ['placeholder-class', 'content-class'],
  relations: {
    './skeleton': {
      type: 'parent',
      linked: function (target) {
        this.setData({
          loading: target.data.loading
        })
      }
    }
  },
  properties: {
    backgroundColor: {
      type: String,
      value: '#f4f4f4'
    }
  },
  data: {
    loading: false
  }
})
