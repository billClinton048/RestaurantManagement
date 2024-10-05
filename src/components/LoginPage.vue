<template>
  <img src="../assets/logos.png" alt="Logo" />
  <h1>Login</h1>
  <form class="login" @submit.prevent="login"> 
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button> 
    <p>
      <router-link to="/signin">Sign-Up</router-link>
    </p>
  </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    const result = await axios.get(`http://localhost:3000/users`, {
      params: {
        email: email.value,
        password: password.value,
      },
    });
    console.warn(result.data);
    
    if (result.status === 200 && result.data.length > 0) {
      localStorage.setItem("user-info", JSON.stringify(result.data[0])); // Store only the first user
      router.push({ name: 'Home' });
    } else {
      // Handle incorrect login
      alert('Invalid credentials. Please try again.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred. Please try again later.');
  }
};

onMounted(() => {
  const user = localStorage.getItem('user-info');
  if (user) {
    router.push({ name: 'Home' });
  }
});
</script>

<style scoped>

</style>