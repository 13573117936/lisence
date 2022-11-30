<template>
  <div class="container">
    <SubjectSelector />
    <ModelSelector />
    <div class="button-wrapper">
      <button @click="routerPush" class="btn">开始做题</button>
    </div>

  </div>
</template>
<script setup>
import SubjectSelector from '@/components/SubjectSelector/index.vue'
import ModelSelector from '@/components/ModelSelector/index.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
function routerPush(){
  router.push('/test')
}
</script>

<style>
.button-wrapper {
  height: 30px;
  padding: 0 30px;
}

.btn {
  width: 100%;
  height: 35px;
  color: #fff;
  background-color: #42b883;
  border: 1px solid #42b883;
  border-radius: 5px;
  transition: all 0.2s;
}

.btn:active {
  background-color: #33a06f;
  border: 1px solid #33a06f;
}
</style>