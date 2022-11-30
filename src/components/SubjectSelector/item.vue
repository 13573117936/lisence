<template >
  <div class="selector-item">
    <div :class="[
      'inner',
      { 'selected': props.item.id === subjectId },
      { 'subject1': props.item.id === 1 },
      { 'subject2': props.item.id === 4 }
    ]" @click="setSubjectId(props.item.id)">
      {{ item.subject }}
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const props = defineProps(['item'])
console.log(props.item)
const store = useStore(), state = store.state
let subjectId = computed(() => {
  return state.subjectId
})
function setSubjectId(id) {
  store.commit('setSubjectId', id)
}
</script>
<style>
.selector-item {
  width: 45%;
  color: #fff;
  box-sizing: border-box;
  height: 200px;
}

.inner {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  height: 130px;
}

.subject1 {
  background-color: #f0ad4e;
}

.subject2 {
  background-color: #5cb85c;
}

.selected {
  box-shadow: 4px 8px 10px #666;
}
</style>