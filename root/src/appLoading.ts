// 可以在这里做 页面loading效果
export const lifeCycles = {
  beforeLoad(app: any) {
    console.log('before load', app)
    return Promise.resolve()
  },
  afterMount(app: any) {
    console.log('afterMount load', app)
    return Promise.resolve()
  },
}