<template>
  <HomeHeader />
  <h1>
    Hello {{ name }}! Welcome to the home page
  </h1>

  <table class="tb" border="1">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Address</td> 
      <td>Update</td>
      <td>Delete</td>
    </tr>
    <tr v-for="item in restaurant_data" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td> <!-- Correctly display address field -->
      <td><router-link :to="'/update/'+item.id">Update</router-link></td>
      <td><button @click="deleteRestaurant(item.id)">Delete</button></td>
    </tr>
  </table>
</template>

<script setup>
import HomeHeader from './HomeHeader.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Use useRouter instead of direct router import
import axios from 'axios';

// Declaring reactive variables
const name = ref('');
const restaurant_data = ref([]); // Make this reactive
const router = useRouter(); // Get router instance

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

// Delete restaurant function
const deleteRestaurant = async (id) => {
  try {
    let response = await axios.delete(`http://localhost:3000/restaurant/${id}`);
    if (response.status === 200) {
      // Remove the deleted item from the restaurant_data array
      restaurant_data.value = restaurant_data.value.filter(item => item.id !== id);
      alert('Restaurant deleted successfully');
    }
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    alert('Failed to delete restaurant');
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}

td {
  padding: 2px;
  width: 200px;
  height: 30px;
}
</style>