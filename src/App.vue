<template>
  <div>
    <SignIn />

  </div>
</template>

<script>
import SignIn from './components/SignIn.vue'
  export default {
    name: 'App',
    components: {
      SignIn
    }
    
  }
</script>

<style lang="scss" scoped>

</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
