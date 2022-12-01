import { getData } from "./request";

export default async (store) => {
  const { subjectId, modelType } = store.state
  const data = await getData({
    subjectId: subjectId,
    modelType: modelType
  })
  if (data.error_code !== 0) {
    store.commit('setErrorCode', data.error_code)
    return
  }

  const questionsData = data.result.slice(0, 5)
  store.commit('setData', questionsData)
  // console.log(data)
  console.log(store.state.data)
}