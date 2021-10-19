<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Inicio/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Inicio from '@/components/Inicio.vue'
import Login from '@/components/Login.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Inicio,
    Login
  }
}
</script>


