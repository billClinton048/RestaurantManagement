<template>
  <img src="../assets/logos.png" alt="">
  <h1>Sign Up</h1>
  <form class="signUp" @submit.prevent="signUp">
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '@/routers';

const name = ref('');
const email = ref('');
const password = ref('');

const signUp = async () => {
  try {
    const result = await axios.post("http://localhost:3000/users", {
      name: name.value,
      password: password.value,
      email: email.value,
    });
    console.warn(result);
    if(result.status == 201){
      
      localStorage.setItem("user-info",JSON.stringify(result.data))
      router.push({name: 'Home'})
    }
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
</script>

<style>
.logo {
  width: 100px;
}
.signUp input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.signUp button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>
