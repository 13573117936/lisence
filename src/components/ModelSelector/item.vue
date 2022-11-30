<template>
  <div class="model-item">
    <div :class="[
      'inner2',
      { 'selected2': props.item.type === modelType }
    ]" @click="setModelType(props.item.type)">
      {{ props.item.text }}
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore(), state = store.state
const props = defineProps(['item'])
let modelType = computed(() => state.modelType)

function setModelType(type) {
  store.commit('setModelType', type)
}
</script>
<style>
.model-item {
  width: 45%;
  box-sizing: border-box;
  height: 100px;
}

.inner2 {
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid #1677ff;
  color: #1677ff;
  transition: all 0.3s;
}

.selected2 {
  background-color: #1677ff;
  color: #fff;
}
</style>