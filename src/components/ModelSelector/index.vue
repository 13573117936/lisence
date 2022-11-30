<template>
  <div class="model-selector">
    <ModelItem v-for="(item, index) of modelData" :key="index" :item="item" />
  </div>
</template>
<script setup>
import ModelItem from './item.vue'
import modelData from '@/configs/model'
</script>
<style>
.model-selector {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0px 20px;
}
</style>