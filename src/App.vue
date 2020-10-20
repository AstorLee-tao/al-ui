<template>
  <div id="app">
    <!-- <Hello name="Astor Lee" /> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <!-- <al-input v-model="user.a"></al-input> -->
      {{user}}
    </p>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return {
      user:{
        a:'',
        b:'bbbbb'
      }
    }
  }
}
</script>

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
