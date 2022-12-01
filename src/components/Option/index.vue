<template>
  <div class="option">
    <div class="option-inner">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['item', 'option'])
// console.log(props)
</script>
<style>
.option {
  box-sizing: border-box;
  padding: 0px 25px;
  margin-bottom: 12px;
  height: 50px;
}

.option-inner {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #07bcff;
  color: #07bcff;
  transition: all 0.3s;
}

.option-selected {
  background-color: #07bcff;
  color: #fff;
}
</style>