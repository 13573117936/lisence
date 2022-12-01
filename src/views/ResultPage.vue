<template>
  <div>
    result page
  </div>
</template>
<script>
import { onMounted } from 'vue';
import getData from '@/services/index'
onMounted(() => {
  const data = getData()
  console.log(data)
})
</script>

<style>

</style>