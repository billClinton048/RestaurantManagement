<template>
    <HomeHeader />
     
         <h1>
             Hello user welcome to Update Restaurant page
         </h1>
       
 
 </template>
 
 <script setup>
 import HomeHeader from './HomeHeader.vue';
 import { onMounted } from 'vue';
 import router from '@/routers';
 
 
 onMounted(()=> {
   let user = localStorage.getItem('user-info')
   if(!user){
     router.push({name: 'SignIn'})
 
   }
 })
     
 
 
 </script>
 
 <style lang="scss" scoped>
 
 </style>