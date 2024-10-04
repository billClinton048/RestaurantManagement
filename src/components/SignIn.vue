<template>
  <div>
    <img class="logo" src="../assets/logos.png" alt="" />
    <h1>SignUp</h1>
    <div class="signUp">
        <input type="text" placeholder="Enter Name">
        <input type="text" placeholder="Enter Email">
        <input type="text" placeholder="Enter Password">
        <button>Sign UP</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style>
.logo {
  width: 100px;
}
.signUp input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    }
.signUp button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;

}
</style>
