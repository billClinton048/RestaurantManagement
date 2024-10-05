<template>
  <HomeHeader />
  <h1>
    Hello {{ name }}! Welcome to the home page
  </h1>
</template>

<script setup>
import HomeHeader from './HomeHeader.vue';
import { ref, onMounted } from 'vue';
import router from '@/routers';

const name = ref('');

onMounted(() => {
  const user = localStorage.getItem('user-info');
  
  if (!user) {
    router.push({ name: 'SignIn' });
  } else {
    
    const userInfo = JSON.parse(user);
    name.value = userInfo.name; 
  }
});
</script>

<style  scoped>
/* Add your styles here */
</style>