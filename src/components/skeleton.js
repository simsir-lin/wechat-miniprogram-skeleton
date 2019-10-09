Component({
  relations: {
    './skeleton-item': {
      type: 'child'
    }
  },
  properties: {
    width: {
      type: String,
      value: '100%'
    },
    height: {
      type: String,
      value: '100rpx'
    },
    backgroundColor: {
      type: String,
      value: 'rgba(255, 255, 255, 1)'
    },
    zIndex: {
      type: Number,
      value: 10
    },
    loading: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    'loading': function(loading) {
      let childs = this.getRelationNodes('./skeleton-item')
      childs.forEach((child) => {
        child.setData({
          loading: loading
        })
      })
    }
  }
})
