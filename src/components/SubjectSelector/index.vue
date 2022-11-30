<template>
  <div class="subject-selector">
    <SelectorItem v-for="(item, index) of subjectData" :key="index" :item="item" />
  </div>
</template>
<script setup>
import SelectorItem from './item.vue'
import subjectData from '@/configs/subject'
</script>
<style>
.subject-selector{
  display: flex;
  justify-content: space-around;
  padding: 30px 20px;
  box-sizing: border-box;
}
</style>