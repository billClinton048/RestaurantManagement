<template>
  <HomeHeader />

  <h1>Hello user welcome to Add Restaurant page</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Enter Name.. "
      v-model="restaurant.name"
    />
    <input
      type="text"
      name="adress"
      placeholder="Enter address.."
      v-model="restaurant.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter Contact.."
      v-model="restaurant.contact"
    />
    <button type="button" v-on:click="addRestaurant">Add Restaurant</button>
  </form>
</template>

<script setup>
import HomeHeader from './HomeHeader.vue';
import { onMounted} from 'vue';
import router from '@/routers';
import axios from 'axios';
const restaurant = {
     name : "",
     contact : "",
    address :  ""
}


onMounted(()=> {
  let user = localStorage.getItem('user-info')
  if(!user){
    router.push({name: 'SignIn'})

  }
})

const addRestaurant = async () => {
  console.warn(restaurant) 
  const result = await axios.post("http://localhost:3000/restaurant" ,{
    name: restaurant.name,
    address : restaurant.address,
    contact :restaurant.contact
  })
  if(result.status == 201){
    router.push({name: 'Home'})
  }
  console.warn("result ",  result) 
}

</script>

<style lang="scss" scoped></style>
