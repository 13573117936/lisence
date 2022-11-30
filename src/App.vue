<template>
  <MyHeader>{{ headerTitle }}</MyHeader>
  <router-view />
</template>

<script setup>
import MyHeader from '@/components/Header'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { watch, computed } from 'vue'

const store = useStore(), router = useRouter()
console.log(router.currentRoute.value.name)
let headerTitle = computed(() => store.state.headerTitle)
// router.push('/')
watch(() => {
  return router.currentRoute.value.name
}, (value) => {
  store.commit('setTitle', value)
})

</script>

