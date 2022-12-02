<template>
  <div>
    <div class="container">
      <div class="img-inner">
        <img v-if="testres.result[0].url" :src="testres.result[0].url" />
      </div>
      <div class="question">
        题目：{{ testres.result[0].question }}
      </div>
      <div>{{ data }}</div>
      <div>
        <Option>
          A：{{ testres.result[0].item1 }}
        </Option>
        <Option>
          B：{{ testres.result[0].item2 }}
        </Option>
        <Option v-if="testres.result[0].item3">
          C：{{ testres.result[0].item3 }}
        </Option>
        <Option v-if="testres.result[0].item4">
          D：{{ testres.result[0].item4 }}
        </Option>
      </div>
      <div class="button-test">
        <button class="btn-test">下一题</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed, watch } from 'vue';
import getData from '@/services/index'
import { useStore } from 'vuex'
import Option from '@/components/Option'
const store = useStore()
onMounted(() => {
  getData(store)
})

let testres = {
  error_code: 0,
  reason: "ok",
  result: [
    {
      answer: 2,
      explains: "施工路段：用以告示前方道路施工，车辆应减速慢行或绕道行驶。",
      id: 25,
      item1: "塌方路段",
      item2: "施工路段",
      item3: "前方工厂",
      item4: "道路堵塞",
      question: "这个标志是何含义？这个标志是何含义？这个标志是何含义？这个标志是何含义？这个标志是何含义？这个标志是何含义？",
      url: "https://images.juheapi.com/jztk/c1c2subject1/25.jpg"
    }
  ]
}

const data = computed(() => { return store.state.data })
// console.log(question[num])
console.log(data)
// testres = computed(() => {
//   return store.state.data
// })
// testres = computed(() => store.state.data)
</script>

<style>
.img-inner {
  text-align: center;
  height: 200px;
}

.question {
  padding: 10px 25px;
  min-height: 100px;
}

.button-test {
  padding: 0 25px;
}

.btn-test {
  width: 84%;
  height: 35px;
  color: #fff;
  background-color: #42b883;
  border: 1px solid #42b883;
  border-radius: 5px;
  position: absolute;
  top: 87%;
  transition: all 0.2s;
}

.btn-test:active {
  background-color: #33a06f;
  border: 1px solid #33a06f;
}
</style>