export default class ComponetnA{
  constructor(id){
    let page = getCurrentPages()[0]

    // 将实例数据注入到页面
    let { __componentA = {} } = page.data
    __componentA[id] = {
      name: id,
      fn: `__componentA$_{id}`
    }
    page.setData({
      __componentA
    })

    // 将实例方法注入到页面
    page[`__componentA$_{id}`] = this.fn.bind(this)

    this.id = id
    console.log(this.id)
  }
  fn(){
    wx.showToast({
      title: `you call fn in ${this.id}`,
    })
  }
}