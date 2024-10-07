<template>
    <div class="nav">
       <router-link to="/">Home</router-link>
       <router-link to="/add">Add Hotel</router-link>
       <!-- <router-link to="/update">Update Hotel</router-link> -->
       <a @click.prevent="logOut" href="#">Logout</a>
    </div>
</template>

<script setup>
import router from '@/routers';

const logOut = () => {
   localStorage.clear();
   router.push({ name: 'Login' });
};
</script>

<style scoped>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a, .nav router-link {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover, .nav router-link:hover {
    background-color: #ddd;
    color: #333;
}
</style>