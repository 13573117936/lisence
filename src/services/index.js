import { getData } from "./request";

export default async (store) => {
  const { subjectId, modelType } = store
  const data = await getData({
    subjectId: 1,
    modelType: 'c1'
  })
  if (data.error_code) {
    store.commit('setErrorCode', data.error_code)
    return
  }

  const questionsData = data.result.slice(0, 5)
  store.commit('setData', questionsData)
  console.log(data)
  console.log(store.state.data)
}