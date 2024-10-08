<template>
  <HomeHeader />

  <h1>Hello user welcome to Update Restaurant page</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Enter Name.. "
      v-model="restaurant.name"
    />
    <input
      type="text"
      name="address"
      placeholder="Enter adress.."
      v-model="restaurant.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter Contact.."
      v-model="restaurant.contact"
    />
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script setup>
import HomeHeader from "./HomeHeader.vue";
import { onMounted , ref} from "vue";
import { useRouter, useRoute} from "vue-router";
import axios from "axios";
const router = useRouter();
const route = useRoute()


let restaurant = ref({
  name: "",
  contact: "",
  address: "",
});

onMounted( async () => {
  let user = localStorage.getItem("user-info");
  if (!user) {
    router.push({ name: "SignIn" });
  }
  
  const result = await axios.get('http://localhost:3000/restaurant/'+ route.params.id);
  console.warn(result)
  restaurant.value = result.data
});
const updateRestaurant = async () => {
  console.warn(restaurant) 
  const result = await axios.put("http://localhost:3000/restaurant/"+ route.params.id ,{
    name: restaurant.value.name,
    address : restaurant.value.address,
    contact :restaurant.value.contact
  })
  if(result.status == 200){
    router.push({name: 'Home'})
  }
  console.warn("result ",  result) 
}

</script>

<style lang="scss" scoped></style>
