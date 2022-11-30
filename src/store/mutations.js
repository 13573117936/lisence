export default {
  setSubjectId(state, id) {
    state.subjectId = id
  },
  setModelType(state, type) {
    state.modelType = type
  },
  setErrorCode(state, errCode) {
    state.errCode = errCode
  },
  setData(state, data) {
    state.data = data
  },
  setTitle(state, routerName) {
    switch (routerName) {
      case 'IndexPage':
        state.headerTitle = '驾照题库'
        break
      case 'ResultPage':
        state.headerTitle = '答题结果'
        break
      case 'TestPage':
        state.headerTitle = '开始做题'
        break
      default:
        state.headerTitle = '驾照题库'
    }
  }
}