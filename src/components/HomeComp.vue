<template>
  <HomeHeader />
  <h1>
    Hello {{ name }}! Welcome to the home page
  </h1>

  <table class="tb" border="1">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Adress</td>
    </tr>
    <tr v-for="item in restaurant_data" :key="item.id">
      <td>{{ item.id}}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
    </tr>
  </table>
</template>

<script setup>
import HomeHeader from './HomeHeader.vue';
import { ref, onMounted } from 'vue';
import router from '@/routers';
import axios from 'axios';

// Declaring reactive variables
const name = ref('');
const restaurant_data = ref([]); // Make this reactive

onMounted(async () => {
  const user = localStorage.getItem('user-info');
  
  if (!user) {
    router.push({ name: 'SignIn' });
  } else {
    // Parse user info and assign it to name
    const userInfo = JSON.parse(user);
    name.value = userInfo.name;
  }

  // Fetch restaurant data from the API
  try {
    let restaurant = await axios.get("http://localhost:3000/restaurant");
    restaurant_data.value = restaurant.data; 
    console.warn(restaurant_data.value);
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
  }
});
</script>

<style scoped>
table{
  margin-left: auto;
  margin-right: auto;
}
td{
  padding: 2px;
  width: 200px;
  height: 30px;
}
</style>